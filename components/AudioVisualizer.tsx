import React, { useEffect, useRef } from 'react';

interface AudioVisualizerProps {
  isActive: boolean;
  audioContext: AudioContext | null;
  analyser: AnalyserNode | null;
  color?: string;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ 
  isActive, 
  analyser, 
  color = '#a78bfa' // purple-400
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !analyser || !isActive) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      if (!isActive) return;
      
      animationRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      // Center the visualizer
      const centerX = canvas.width / 2;
      
      // Draw mirrored visualization
      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2; // Scale down
        
        // Dynamic opacity based on height
        const alpha = Math.max(0.2, barHeight / 100);
        ctx.fillStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;

        // Draw right side
        ctx.fillRect(centerX + x, (canvas.height - barHeight) / 2, barWidth, barHeight);
        
        // Draw left side (mirrored)
        if (x !== 0) {
            ctx.fillRect(centerX - x, (canvas.height - barHeight) / 2, barWidth, barHeight);
        }

        x += barWidth + 1;
        if (x > canvas.width / 2) break; // Optimization
      }
    };

    draw();

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [isActive, analyser, color]);

  return (
    <canvas 
      ref={canvasRef} 
      width={600} 
      height={100} 
      className="w-full h-24 rounded-lg"
    />
  );
};

export default AudioVisualizer;