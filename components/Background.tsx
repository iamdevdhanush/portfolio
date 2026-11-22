import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Warm Paper Foundation */}
      <div className="absolute inset-0 bg-[#F1EBDD]" />

      {/* Subtle Paper Grain / Halftone Texture */}
      <div className="absolute inset-0 paper-grain opacity-60" />

      {/* Warm Ambient Sunlight Glow */}
      <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(240,75,22,0.06)_0%,_transparent_70%)] blur-3xl opacity-70" />
      <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(240,75,22,0.04)_0%,_transparent_70%)] blur-3xl opacity-60" />

      {/* Minimalist Editorial Print Registration Marks (Corners & Edges) */}
      <div className="hidden lg:block absolute top-6 left-6 text-[#8A877F]/30 font-mono text-[10px] select-none">
        + DP // ED. 2026
      </div>
      <div className="hidden lg:block absolute top-6 right-6 text-[#8A877F]/30 font-mono text-[10px] select-none">
        13.9299° N, 75.5681° E +
      </div>
      <div className="hidden lg:block absolute bottom-6 left-6 text-[#8A877F]/30 font-mono text-[10px] select-none">
        + STUDIO JOURNAL
      </div>
      <div className="hidden lg:block absolute bottom-6 right-6 text-[#8A877F]/30 font-mono text-[10px] select-none">
        VERMILION × INK +
      </div>
    </div>
  );
};

export default Background;
