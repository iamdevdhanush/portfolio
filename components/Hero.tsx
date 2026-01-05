import React from 'react';
import { ArrowRight, Code, Cpu, MessageSquare } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-purple-300 text-xs font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Powered by Gemini 2.5 Live API
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Bethina</span>.
          <br />
          Your Intelligent Companion.
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Experience the future of human-AI interaction. Real-time voice conversation, visual perception, and advanced reasoning capabilities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onStart}
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-lg font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
          >
            Start Conversation
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-colors border border-slate-700">
            View Source Code
          </button>
        </div>

        {/* Feature Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-colors">
            <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Natural Voice</h3>
            <p className="text-sm text-slate-400">Fluid, low-latency conversation powered by the Gemini Live API with native audio processing.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-colors">
            <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Visual Understanding</h3>
            <p className="text-sm text-slate-400">Share your camera feed for real-time visual analysis and multimodal interaction.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-green-500/30 transition-colors">
            <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Code Capable</h3>
            <p className="text-sm text-slate-400">Bethina can discuss code, architecture, and technical concepts with deep understanding.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
