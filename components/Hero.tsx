import React, { useState } from 'react';
import { ArrowDown, GraduationCap, MapPin } from 'lucide-react';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [imgSrc, setImgSrc] = useState('/profile.jpg');

  const handleImgError = () => {
    if (imgSrc === '/profile.jpg') setImgSrc('https://avatars.githubusercontent.com/u/169132950?v=4');
  };

  return (
    <div className="relative pt-20 md:pt-28 pb-0 overflow-hidden">
      {/* Hero Content Container */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT: EDITORIAL TYPOGRAPHY & RESTRAINED CTAS              */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Professional Eyebrow */}
            <div className="hero-enter-1 flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-[#8A877F]">
              <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
              <span>AI Engineer & Software Architect</span>
            </div>

            {/* Massive Two-Line Name: Heavy, Condensed, Italic Display */}
            <h1 className="hero-enter-1 font-['Anton',sans-serif] italic text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[108px] text-[#151515] tracking-tight leading-[0.88] uppercase mb-5 select-none">
              DHANUSH D<br />
              <span className="text-[#151515] hover:text-[#F04B16] transition-colors duration-300">
                PRABHU
              </span>
            </h1>

            {/* Editorial Serif Statement */}
            <div className="hero-enter-2 mb-4">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#151515] leading-snug font-normal max-w-xl">
                Building intelligent systems that solve real-world problems.
              </p>
            </div>

            {/* Professional Description */}
            <p className="hero-enter-3 font-sans text-sm sm:text-base text-[#151515]/80 leading-relaxed max-w-lg mb-7">
              Specialized in Python, FastAPI, PostgreSQL, and Docker. Focused on multi-agent AI pipelines, high-throughput backend services, and spatial intelligence platforms.
            </p>

            {/* Two Restrained CTA Buttons */}
            <div className="hero-enter-4 flex flex-wrap items-center gap-3.5 mb-7">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3 bg-[#151515] text-[#FAF7F0] hover:bg-[#F04B16] font-mono text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95 shadow-sm"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-transparent border border-[#151515] hover:border-[#F04B16] hover:text-[#F04B16] text-[#151515] font-mono text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Location & Academic Metadata */}
            <div className="hero-enter-5 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[#8A877F] pt-4 border-t border-[#E2DAC8] w-full max-w-lg">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#F04B16]" />
                <span className="text-[#151515]">PESIAMS (BCA 2024–2027)</span>
              </div>
              <span className="text-[#E2DAC8]">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F04B16]" />
                <span>Shimoga, Karnataka, India</span>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT: INTEGRATED PHOTOGRAPHIC COLLAGE & GEOMETRIC BACKING */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end hero-portrait">
            <div className="relative w-[280px] sm:w-[320px] md:w-[360px] h-[390px] sm:h-[440px] md:h-[470px]">
              
              {/* 1. Vermilion-Orange Geometric Shape Backing */}
              <div className="absolute right-2 sm:right-6 top-3 w-52 sm:w-64 md:w-72 h-[340px] sm:h-[390px] md:h-[420px] bg-[#F04B16] rounded-sm -rotate-2 shadow-lg z-0 transition-transform duration-500 hover:-rotate-1" />

              {/* 2. Black Circular Graphic Behind the Subject */}
              <div className="absolute left-1 sm:left-4 top-10 w-48 sm:w-60 h-48 sm:h-60 rounded-full bg-[#151515] z-0 opacity-95 pointer-events-none" />

              {/* 3. Subtle Paper-Backing Layer for Depth */}
              <div className="absolute -left-1 sm:-left-2 bottom-6 w-44 sm:w-56 h-48 sm:h-56 bg-[#FAF7F0] border border-[#E2DAC8] rounded-sm rotate-3 z-0 shadow-sm opacity-90" />

              {/* 4. Main Portrait: Clean Cutout / Overlapping Photographic Composition */}
              <div className="absolute left-4 sm:left-8 top-6 sm:top-8 w-52 sm:w-64 md:w-72 h-[340px] sm:h-[390px] md:h-[420px] z-10 overflow-hidden rounded-sm border border-[#151515] shadow-2xl bg-[#E2DAC8] group">
                <img
                  src={imgSrc}
                  onError={handleImgError}
                  alt="Dhanush D Prabhu"
                  width="320"
                  height="420"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-102 transition-transform duration-700"
                />

                {/* Subtle bottom gradient for integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/75 via-transparent to-transparent pointer-events-none" />
                
                {/* Clean Editorial Identification Caption */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="font-mono text-[10px] text-[#FAF7F0] tracking-wider uppercase font-semibold">
                    Dhanush D Prabhu
                  </span>
                  <span className="font-mono text-[9px] text-[#F04B16] font-bold">
                    ED. 2026
                  </span>
                </div>
              </div>

              {/* 5. Handwritten Personal Signature Annotation */}
              <div className="absolute -bottom-3 -left-1 sm:-left-3 z-20 pointer-events-none">
                <span className="font-hand text-2xl sm:text-3xl text-[#151515] -rotate-4 select-none block bg-[#F1EBDD] px-2.5 py-0.5 border border-[#151515] shadow-sm">
                  ✦ Dhanush D Prabhu
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ============================================================= */}
      {/* ORGANIC ASYMMETRIC TORN-PAPER SECTION TRANSITION              */}
      {/* Natural, non-repeating deckle edge cutting into #151515 below  */}
      {/* ============================================================= */}
      <div className="w-full overflow-hidden leading-none z-20 -mb-1 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-9 sm:h-12 md:h-14 text-[#151515]"
        >
          <path
            d="M0,28 C80,34 140,22 220,31 C310,41 380,24 470,33 C560,42 620,26 710,34 C790,40 860,25 940,32 C1030,40 1100,23 1190,33 C1270,41 1350,26 1440,32 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
