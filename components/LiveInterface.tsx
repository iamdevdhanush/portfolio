import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { Mic, MicOff, Video, VideoOff, Power, RefreshCw, Volume2, Camera, AlertCircle } from 'lucide-react';
import { ConnectionState, LogMessage } from '../types';
import { createBlob, decodeAudioData, base64ToBytes, blobToBase64 } from '../services/audioUtils';
import AudioVisualizer from './AudioVisualizer';

const LiveInterface: React.FC = () => {
  const [connectionState, setConnectionState] = useState<ConnectionState>(ConnectionState.DISCONNECTED);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [logs, setLogs] = useState<LogMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Audio Context Refs
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const audioSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  
  // Analyser Refs (for visualizer)
  const inputAnalyserRef = useRef<AnalyserNode | null>(null);
  const outputAnalyserRef = useRef<AnalyserNode | null>(null);
  const [inputAnalyserState, setInputAnalyserState] = useState<AnalyserNode | null>(null);
  const [outputAnalyserState, setOutputAnalyserState] = useState<AnalyserNode | null>(null);

  // Video Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoIntervalRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Session Ref
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sessionPromiseRef = useRef<Promise<any> | null>(null);
  const aiRef = useRef<GoogleGenAI | null>(null);

  const addLog = useCallback((text: string, sender: LogMessage['sender'], type: LogMessage['type'] = 'text') => {
    setLogs(prev => [...prev.slice(-4), { // Keep last 5 logs to avoid clutter
      id: Math.random().toString(36),
      timestamp: new Date(),
      sender,
      text,
      type
    }]);
  }, []);

  const cleanupAudio = useCallback(() => {
    if (inputAudioContextRef.current) {
      inputAudioContextRef.current.close();
      inputAudioContextRef.current = null;
    }
    if (outputAudioContextRef.current) {
      outputAudioContextRef.current.close();
      outputAudioContextRef.current = null;
    }
    audioSourcesRef.current.forEach(source => source.stop());
    audioSourcesRef.current.clear();
    nextStartTimeRef.current = 0;
    
    // Stop video stream
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoIntervalRef.current) {
      window.clearInterval(videoIntervalRef.current);
      videoIntervalRef.current = null;
    }
  }, []);

  const connect = async () => {
    try {
      setError(null);

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
         throw new Error("Your browser does not support media devices.");
      }

      setConnectionState(ConnectionState.CONNECTING);
      addLog('Initializing connection...', 'system', 'info');

      // 1. Initialize Audio Contexts
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      inputAudioContextRef.current = inputCtx;
      outputAudioContextRef.current = outputCtx;

      // 2. Setup Analysers
      const inputAnalyser = inputCtx.createAnalyser();
      inputAnalyser.fftSize = 256;
      inputAnalyserRef.current = inputAnalyser;
      setInputAnalyserState(inputAnalyser);

      const outputAnalyser = outputCtx.createAnalyser();
      outputAnalyser.fftSize = 256;
      outputAnalyserRef.current = outputAnalyser;
      setOutputAnalyserState(outputAnalyser);

      // 3. Get Microphone Stream
      let stream: MediaStream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (err) {
        if (err instanceof DOMException) {
            if (err.name === 'NotAllowedError') throw new Error("Microphone permission denied. Please check your browser settings.");
            if (err.name === 'NotFoundError') throw new Error("No microphone found.");
            if (err.name === 'NotReadableError') throw new Error("Microphone is currently in use by another application.");
        }
        throw err;
      }

      const source = inputCtx.createMediaStreamSource(stream);
      
      // Connect source -> analyser -> scriptProcessor -> destination (muted)
      // We don't want to hear our own voice locally
      const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
      
      source.connect(inputAnalyser);
      inputAnalyser.connect(scriptProcessor);
      scriptProcessor.connect(inputCtx.destination);

      // 4. Initialize Gemini API
      if (!process.env.API_KEY) throw new Error("API Key is missing in environment variables.");
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      aiRef.current = ai;

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
          systemInstruction: "You are Bethina, a highly intelligent, witty, and slightly futuristic personal AI assistant. Your interface is a cool, dark-mode dashboard. Keep your responses concise, helpful, and friendly. You have vision capabilities when the user enables their camera.",
        },
        callbacks: {
          onopen: () => {
            setConnectionState(ConnectionState.CONNECTED);
            addLog('Connected to Bethina.', 'system', 'info');

            // Setup Audio Processing Loop
            scriptProcessor.onaudioprocess = (audioProcessingEvent) => {
              if (!isMicOn) return; // Mute logic

              const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);
              
              sessionPromise.then((session) => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };
          },
          onmessage: async (message: LiveServerMessage) => {
            // Handle Audio Output
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio && outputAudioContextRef.current) {
               const ctx = outputAudioContextRef.current;
               const audioBuffer = await decodeAudioData(
                 base64ToBytes(base64Audio),
                 ctx,
                 24000,
                 1
               );
               
               // Schedule playback
               nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
               
               const source = ctx.createBufferSource();
               source.buffer = audioBuffer;
               
               // Connect to analyser for visualization, then to destination
               if (outputAnalyserRef.current) {
                 source.connect(outputAnalyserRef.current);
                 outputAnalyserRef.current.connect(ctx.destination);
               } else {
                 source.connect(ctx.destination);
               }

               source.start(nextStartTimeRef.current);
               nextStartTimeRef.current += audioBuffer.duration;
               
               audioSourcesRef.current.add(source);
               source.onended = () => audioSourcesRef.current.delete(source);
            }

            // Handle Interruptions
            if (message.serverContent?.interrupted) {
              addLog('Interrupted.', 'system', 'info');
              audioSourcesRef.current.forEach(s => s.stop());
              audioSourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }

            // Handle Transcriptions (Optional - if enabled in config)
            const modelText = message.serverContent?.modelTurn?.parts[0]?.text;
            if (modelText) {
               addLog(modelText, 'bethina');
            }
          },
          onclose: () => {
            setConnectionState(ConnectionState.DISCONNECTED);
            addLog('Connection closed.', 'system', 'info');
            cleanupAudio();
          },
          onerror: (err) => {
            console.error("Session Error:", err);
            setConnectionState(ConnectionState.ERROR);
            let errorMessage = "Connection error occurred.";
            if (err instanceof ErrorEvent) {
                errorMessage = err.message;
            } else if (err instanceof Error) {
                errorMessage = err.message;
            }
            setError(errorMessage);
            addLog(`Error: ${errorMessage}`, 'system', 'error');
            cleanupAudio();
          }
        }
      });

      sessionPromiseRef.current = sessionPromise;

    } catch (e) {
      console.error(e);
      setConnectionState(ConnectionState.ERROR);
      
      let msg = e instanceof Error ? e.message : "Failed to connect";
      if (msg.includes("403") || msg.includes("401")) {
          msg = "Authentication failed. Please check your API key.";
      }
      
      setError(msg);
      addLog(`Error: ${msg}`, 'system', 'error');
      cleanupAudio();
    }
  };

  const disconnect = async () => {
    if (sessionPromiseRef.current) {
      const session = await sessionPromiseRef.current;
      try {
          session.close();
      } catch (e) {
          console.warn("Error closing session", e);
      }
    }
    setConnectionState(ConnectionState.DISCONNECTED);
    cleanupAudio();
  };

  // Video Streaming Logic
  useEffect(() => {
    if (isCameraOn && connectionState === ConnectionState.CONNECTED) {
       const startVideo = async () => {
         try {
           const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 } });
           if (videoRef.current) {
             videoRef.current.srcObject = stream;
             await videoRef.current.play();
           }
           streamRef.current = stream;

           const canvas = document.createElement('canvas');
           canvas.width = 640;
           canvas.height = 480;
           const ctx = canvas.getContext('2d');

           videoIntervalRef.current = window.setInterval(() => {
             if (!ctx || !videoRef.current || !sessionPromiseRef.current) return;
             
             ctx.drawImage(videoRef.current, 0, 0, 640, 480);
             canvas.toBlob(async (blob) => {
                if (blob) {
                  const base64Data = await blobToBase64(blob);
                  sessionPromiseRef.current?.then(session => {
                     session.sendRealtimeInput({
                       media: { data: base64Data, mimeType: 'image/jpeg' }
                     });
                  });
                }
             }, 'image/jpeg', 0.6);
           }, 1000); // 1 FPS for efficiency in this demo

         } catch (e) {
           console.error("Camera access failed", e);
           setIsCameraOn(false);
           
           let msg = "Failed to access camera";
           if (e instanceof DOMException) {
              if (e.name === 'NotAllowedError') msg = "Camera permission denied";
              if (e.name === 'NotFoundError') msg = "No camera found";
              if (e.name === 'NotReadableError') msg = "Camera is busy";
           }
           addLog(msg, 'system', 'error');
           // Show temporary error in UI if critical, otherwise log is sufficient for non-fatal feature failure
         }
       };
       startVideo();
    } else {
      // Cleanup video if toggled off
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
        streamRef.current = null;
      }
      if (videoIntervalRef.current) {
        window.clearInterval(videoIntervalRef.current);
        videoIntervalRef.current = null;
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
  }, [isCameraOn, connectionState, addLog]); // added addLog to deps

  // Clean up on unmount
  useEffect(() => {
    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      {/* Main Control Card */}
      <div className="relative bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl">
        
        {/* Connection Status Header */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
           <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${
                connectionState === ConnectionState.CONNECTED ? 'bg-green-400 animate-pulse' :
                connectionState === ConnectionState.CONNECTING ? 'bg-yellow-400 animate-bounce' :
                'bg-red-400'
              }`} />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                {connectionState}
              </span>
           </div>
           {error && (
             <div className="flex items-center space-x-2 bg-red-500/10 px-3 py-1.5 rounded-full border border-red-500/20">
               <AlertCircle className="w-4 h-4 text-red-400" />
               <span className="text-xs text-red-400 font-medium">{error}</span>
             </div>
           )}
        </div>

        {/* Central Visualization Area */}
        <div className="h-[400px] md:h-[500px] flex flex-col items-center justify-center relative">
           
           {/* Video Background (if active) */}
           <video 
             ref={videoRef} 
             className={`absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-500 ${isCameraOn ? 'block' : 'hidden'}`}
             muted 
             playsInline 
           />

           {/* Central Orb / Status */}
           <div className={`relative z-20 transition-all duration-700 transform ${connectionState === ConnectionState.CONNECTED ? 'scale-100' : 'scale-90 opacity-50'}`}>
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 opacity-20 blur-3xl absolute inset-0 animate-pulse" />
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border border-slate-700/50 bg-slate-950/80 flex items-center justify-center backdrop-blur-md shadow-inner">
                {connectionState === ConnectionState.CONNECTED ? (
                    <AudioVisualizer 
                      isActive={true} 
                      audioContext={outputAudioContextRef.current} 
                      analyser={outputAnalyserState} 
                    />
                ) : (
                    <Power className="w-12 h-12 text-slate-600" />
                )}
              </div>
           </div>

           {/* User Audio Visualizer (Bottom) */}
           {connectionState === ConnectionState.CONNECTED && (
             <div className="absolute bottom-24 w-64 h-16 opacity-70">
                <AudioVisualizer 
                  isActive={isMicOn} 
                  audioContext={inputAudioContextRef.current} 
                  analyser={inputAnalyserState}
                  color="#38bdf8" // sky-400
                />
             </div>
           )}

        </div>

        {/* Controls Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 to-transparent">
          <div className="flex items-center justify-center gap-4">
             {connectionState === ConnectionState.DISCONNECTED || connectionState === ConnectionState.ERROR ? (
               <button 
                onClick={connect}
                className="group relative flex items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
               >
                 <span className="relative z-10">Initialize Bethina</span>
                 <div className="absolute inset-0 bg-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity" />
               </button>
             ) : (
               <>
                 <button 
                  onClick={() => setIsMicOn(!isMicOn)}
                  className={`p-4 rounded-full transition-all ${isMicOn ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-red-500/20 text-red-400 hover:bg-red-500/30'}`}
                 >
                   {isMicOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
                 </button>

                 <button 
                   onClick={disconnect}
                   className="px-8 py-4 bg-red-500/10 text-red-400 rounded-full font-bold hover:bg-red-500/20 transition-all border border-red-500/20"
                 >
                   End Session
                 </button>

                 <button 
                  onClick={() => setIsCameraOn(!isCameraOn)}
                  className={`p-4 rounded-full transition-all ${isCameraOn ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/20' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                 >
                   {isCameraOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
                 </button>
               </>
             )}
          </div>
        </div>
      </div>
      
      {/* Transcript / Logs (Subtle) */}
      <div className="mt-8 space-y-2">
         {logs.map(log => (
           <div key={log.id} className={`text-sm ${
             log.sender === 'system' ? 'text-slate-500 italic text-center' :
             log.sender === 'bethina' ? 'text-purple-300' :
             'text-slate-400 text-right'
           }`}>
             {log.text}
           </div>
         ))}
      </div>
    </div>
  );
};

export default LiveInterface;