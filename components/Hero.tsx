import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, GraduationCap } from 'lucide-react';
import SocialButton from './SocialButton';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [imgSrc, setImgSrc] = useState('/profile.jpg');

  const handleImgError = () => {
    if (imgSrc === '/profile.jpg') setImgSrc('https://avatars.githubusercontent.com/u/169132950?v=4');
  };

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* Left / Primary Editorial Content */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          
          {/* Eyebrow Label */}
          <div className="hero-enter-1 mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#8A877F]">
            <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
            <span>AI Engineer / Builder / Problem Solver</span>
          </div>

          {/* Massive Expressive Name Typography */}
          <h1 className="hero-enter-1 font-display text-6xl sm:text-8xl md:text-9xl text-[#151515] tracking-tight leading-[0.9] mb-6 uppercase select-none">
            Dhanush D<br />
            <span className="text-[#151515] hover:text-[#F04B16] transition-colors duration-300">
              Prabhu
            </span>
          </h1>

          {/* Editorial Headline Statement */}
          <div className="hero-enter-2 mb-5">
            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#151515] leading-snug font-normal">
              Building intelligent systems that solve real-world problems.
            </p>
          </div>

          {/* Short Professional Description */}
          <p className="hero-enter-3 text-sm sm:text-base text-[#151515]/80 font-sans leading-relaxed max-w-xl mb-6">
            Architecting high-throughput backend services, spatial data pipelines, and multi-agent AI systems with <strong className="text-[#151515] font-semibold">Python</strong>, <strong className="text-[#151515] font-semibold">FastAPI</strong>, <strong className="text-[#151515] font-semibold">PostgreSQL</strong>, and <strong className="text-[#151515] font-semibold">Docker</strong>. Grounded in clear schema discipline and verifiable production software.
          </p>

          {/* Handwritten Location Note */}
          <div className="hero-enter-3 mb-8 flex items-center gap-3">
            <span className="font-hand text-xl sm:text-2xl text-[#F04B16] -rotate-2 select-none">
              ✦ based in Shimoga, India · crafting production systems
            </span>
          </div>

          {/* Action CTAs */}
          <div className="hero-enter-4 flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#151515] text-[#FAF7F0] hover:bg-[#F04B16] text-xs font-mono uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer active:scale-95 shadow-md shadow-[#151515]/10"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-[#151515] hover:border-[#F04B16] hover:text-[#F04B16] text-[#151515] text-xs font-mono uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Metadata & Social Connectors */}
          <div className="hero-enter-5 pt-6 border-t border-[#E2DAC8] w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-[#8A877F]">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#F04B16]" />
                <span className="text-[#151515]">PESIAMS (BCA 2024–2027)</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F04B16]" />
                <span>Shimoga, Karnataka</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <SocialButton icon={<Github className="w-4 h-4" />} href="https://github.com/iamdevdhanush" label="GitHub" />
              <SocialButton icon={<Linkedin className="w-4 h-4" />} href="https://www.linkedin.com/in/dhanushdprabhu/" label="LinkedIn" />
              <SocialButton icon={<Mail className="w-4 h-4" />} href="mailto:dhanushdprabhu18@gmail.com" label="Email" />
            </div>
          </div>

        </div>

        {/* Right / Editorial Photographic Collage */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end hero-portrait">
          <div className="relative w-72 sm:w-80 group">
            
            {/* Background Layer 1: Underlaid Vermilion Paper Plate */}
            <div className="absolute -inset-2 bg-[#F04B16] rounded-2xl rotate-3 opacity-90 transition-transform duration-500 group-hover:rotate-4" />

            {/* Background Layer 2: Deep Ink Accent Frame */}
            <div className="absolute -inset-1 bg-[#151515] rounded-2xl -rotate-2 transition-transform duration-500 group-hover:-rotate-3" />

            {/* Main Photograph Card */}
            <div className="relative bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-3 shadow-2xl overflow-hidden">
              
              {/* Top Stamp Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E2DAC8] font-mono text-[10px] text-[#8A877F]">
                <span>PORTRAIT // ARCHIVE</span>
                <span className="text-[#F04B16] font-bold">FIG. 01</span>
              </div>

              {/* Personal Photo Frame */}
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#E2DAC8] relative">
                <img
                  src={imgSrc}
                  onError={handleImgError}
                  alt="Dhanush D Prabhu"
                  width="320"
                  height="400"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover contrast-[105%] group-hover:scale-102 transition-transform duration-700"
                />
                
                {/* Print Registration Stamp */}
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#FAF7F0]/90 backdrop-blur-sm text-[9px] font-mono text-[#151515] border border-[#E2DAC8]">
                  VERIFIED IDENT
                </div>

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Caption & Handwritten Tag */}
              <div className="pt-3 flex items-center justify-between">
                <div>
                  <span className="font-serif font-bold text-sm text-[#151515] block">
                    Dhanush D Prabhu
                  </span>
                  <span className="font-mono text-[10px] text-[#8A877F]">
                    AI Engineer & Backend Architect
                  </span>
                </div>
                <span className="font-hand text-xl text-[#F04B16] rotate-[-4deg] select-none">
                  Prabhu ✦
                </span>
              </div>

            </div>

            {/* Floating Vermilion Accent Pin */}
            <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-[#F04B16] text-[#FAF7F0] flex items-center justify-center font-mono text-xs font-bold shadow-md">
              DP
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
