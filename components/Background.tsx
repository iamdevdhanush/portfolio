import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Warm Paper Foundation Canvas */}
      <div className="absolute inset-0 bg-[#F1EBDD]" />

      {/* Authentic Subtle Paper Grain Texture */}
      <div className="absolute inset-0 paper-grain opacity-70" />

      {/* Gentle Natural Light Ambient Diffusion */}
      <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(240,75,22,0.04)_0%,_transparent_70%)] blur-3xl opacity-60" />
      <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(240,75,22,0.03)_0%,_transparent_70%)] blur-3xl opacity-50" />
    </div>
  );
};

export default Background;
