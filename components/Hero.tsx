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
    <div className="relative pt-16 md:pt-24 pb-0">
      {/* Hero Content Container */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ========================================================= */}
          {/* LEFT: EDITORIAL TYPOGRAPHY & RESTRAINED CTAS              */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start z-10 w-full min-w-0">
            
            {/* Professional Eyebrow */}
            <div className="hero-enter-1 flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-[#8A877F]">
              <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
              <span>AI Engineer & Software Architect</span>
            </div>

            {/* Massive Two-Line Name: Staggered Word Reveal with Condensed Display */}
            <h1 className="font-['Anton',sans-serif] italic text-4xl sm:text-6xl md:text-8xl lg:text-[88px] xl:text-[100px] text-[#151515] tracking-tight leading-[0.9] uppercase mb-4 select-none w-full overflow-visible">
              <span className="block w-full overflow-visible">
                <span className="hero-word-1 inline-block whitespace-nowrap pr-4 sm:pr-6">
                  DHANUSH D
                </span>
              </span>
              <span className="block w-full overflow-visible">
                <span className="hero-word-2 inline-block whitespace-nowrap pr-4 sm:pr-6 text-[#151515] hover:text-[#F04B16] transition-colors duration-300">
                  PRABHU
                </span>
              </span>
            </h1>

            {/* Editorial Serif Statement */}
            <div className="hero-enter-2 mb-3">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#151515] leading-snug font-normal max-w-xl">
                Building intelligent systems that solve real-world problems.
              </p>
            </div>

            {/* Supporting Text */}
            <p className="hero-enter-3 font-sans text-sm sm:text-base text-[#151515]/80 leading-relaxed max-w-lg mb-6">
              Backend engineering, AI systems, and geospatial intelligence.
            </p>

            {/* Two Restrained CTA Buttons (Mobile-first Touch Friendly) */}
            <div className="hero-enter-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mb-6 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3 bg-[#151515] text-[#FAF7F0] hover:bg-[#F04B16] font-mono text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-sm min-h-[44px]"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-transparent border border-[#151515] hover:border-[#F04B16] hover:text-[#F04B16] text-[#151515] font-mono text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer active:scale-95 min-h-[44px] flex items-center justify-center"
              >
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Location & Academic Metadata */}
            <div className="hero-enter-5 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[#8A877F] pt-3.5 border-t border-[#E2DAC8] w-full max-w-lg">
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
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end hero-portrait">
            <div className="flex flex-col items-center sm:items-end">
              
              {/* Layered Composition Box */}
              <div className="relative w-[270px] sm:w-[310px] md:w-[340px] h-[340px] sm:h-[390px] md:h-[420px]">
                
                {/* 1. Vermilion-Orange Geometric Shape Backing */}
                <div className="absolute right-1 sm:right-3 top-2 w-[240px] sm:w-[280px] md:w-[300px] h-[310px] sm:h-[360px] md:h-[390px] bg-[#F04B16] rounded-sm -rotate-2 shadow-md z-0 transition-transform duration-500 hover:-rotate-1" />

                {/* 2. Black Circular Graphic Behind the Subject */}
                <div className="absolute -left-3 sm:-left-5 top-8 w-44 sm:w-52 h-44 sm:h-52 rounded-full bg-[#151515] z-0 opacity-95 pointer-events-none" />

                {/* 3. Subtle Warm Paper Layer Behind */}
                <div className="absolute -left-1 bottom-4 w-40 sm:w-48 h-40 sm:h-48 bg-[#FAF7F0] border border-[#E2DAC8] rounded-sm rotate-2 z-0 shadow-sm opacity-80" />

                {/* 4. Main Portrait: Clean, Natural Contrast & Clear Visibility with Mask Reveal */}
                <div className="hero-portrait-reveal absolute left-3 sm:left-5 top-5 w-[240px] sm:w-[280px] md:w-[300px] h-[310px] sm:h-[360px] md:h-[390px] z-10 overflow-hidden rounded-sm border border-[#151515] shadow-xl bg-[#E2DAC8] group">
                  <img
                    src={imgSrc}
                    onError={handleImgError}
                    alt="Dhanush D Prabhu"
                    width="300"
                    height="390"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover grayscale contrast-105 brightness-100 group-hover:contrast-110 transition-all duration-500"
                  />

                  {/* Clean Bottom Gradient for Visual Cohesion */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle Identification Meta */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none text-white/90">
                    <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">
                      Dhanush D Prabhu
                    </span>
                    <span className="font-mono text-[9px] text-[#F04B16] font-bold">
                      ARCHIVE // 2026
                    </span>
                  </div>
                </div>

              </div>

              {/* 5. Intentionally Attached Signature Plaque (Below Image, Not Randomly Floating Over) */}
              <div className="w-[270px] sm:w-[310px] md:w-[340px] mt-2.5 pt-2 border-t border-[#E2DAC8]/80 flex items-center justify-between text-xs">
                <span className="font-hand text-xl sm:text-2xl text-[#151515] select-none">
                  ✦ Dhanush D Prabhu
                </span>
                <span className="font-mono text-[10px] text-[#8A877F] uppercase tracking-wider">
                  STUDIO ARCHIVE
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ============================================================= */}
      {/* SUBTLE, ORGANIC TORN-PAPER SECTION TRANSITION                 */}
      {/* Delicate, non-repeating deckle edge cutting into #151515      */}
      {/* ============================================================= */}
      <div className="w-full overflow-hidden leading-none z-20 -mb-1 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-6 sm:h-8 md:h-9 text-[#151515]"
        >
          <path
            d="M0,16 C75,20 130,12 210,21 C270,15 330,23 410,17 C480,24 550,14 630,21 C710,16 780,25 860,18 C930,22 1000,15 1080,22 C1150,17 1220,24 1300,16 C1370,22 1410,18 1440,20 L1440,40 L0,40 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
