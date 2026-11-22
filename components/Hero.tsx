import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, GraduationCap, MapPin, ArrowRight, Compass } from 'lucide-react';
import SocialButton from './SocialButton';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [imgSrc, setImgSrc] = useState('/profile.jpg');

  const handleImgError = () => {
    if (imgSrc === '/profile.jpg') setImgSrc('https://avatars.githubusercontent.com/u/169132950?v=4');
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Dhanush_D_Prabhu_Resume.pdf';
    link.download = 'Dhanush_D_Prabhu_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="relative pt-24 md:pt-32 mb-20 md:mb-28 scroll-mt-32">
      {/* Topographic Elevation Coordinate Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111214] border border-[#292929] text-[11px] font-mono text-[#929292] mb-8 hero-enter-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28] animate-pulse" />
        <span className="text-[#F5F2ED] font-medium">INDEX 14°00′N 75°34′E</span>
        <span className="text-[#292929]">|</span>
        <span>ELEV 640m</span>
        <span className="text-[#292929]">|</span>
        <span className="text-[#F28C28]">AI & SYSTEMS ENGINEER</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Editorial Typography & CTAs */}
        <div className="lg:col-span-8 flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F2ED] tracking-tight leading-[1.08] mb-4 hero-enter-2">
            Dhanush D Prabhu
          </h1>

          <div className="flex items-center gap-2 mb-6 hero-enter-3">
            <span className="h-px w-6 bg-[#F28C28]" />
            <h2 className="text-xl md:text-2xl font-semibold text-[#F28C28] tracking-tight">
              AI Engineer & Software Developer
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#929292] leading-relaxed max-w-2xl mb-8 font-normal hero-enter-4">
            Building intelligent systems using <span className="text-[#F5F2ED] font-medium">Python</span>,{' '}
            <span className="text-[#F5F2ED] font-medium">FastAPI</span>,{' '}
            <span className="text-[#F5F2ED] font-medium">PostgreSQL</span>,{' '}
            <span className="text-[#F5F2ED] font-medium">Docker</span>, and modern web technologies. Focused on high-throughput data pipelines, multi-agent AI platforms, and production-grade software architecture.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto hero-enter-5">
            <button
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto px-6 py-3 bg-[#F28C28] text-[#0B0C0E] text-sm font-semibold rounded-xl hover:bg-[#FA9E42] transition-all duration-300 shadow-lg shadow-[#F28C28]/20 flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="/Dhanush_D_Prabhu_Resume.pdf"
              onClick={handleResumeClick}
              className="w-full sm:w-auto px-6 py-3 bg-[#171719] border border-[#292929] text-[#F5F2ED] text-sm font-medium rounded-xl hover:bg-[#111214] hover:border-[#F28C28]/40 hover:text-[#F28C28] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <FileText className="w-4 h-4 text-[#F28C28]" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Contextual Badges & Social Links */}
          <div className="pt-6 border-t border-[#292929] w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 hero-enter-6">
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#929292]">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#F28C28]" />
                <span className="text-[#F5F2ED]">BCA (2024–2027)</span>
              </div>
              <span className="text-[#292929]">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#F28C28]" />
                <span>Shimoga, Karnataka, India</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <SocialButton icon={<Github className="w-4 h-4" />} href="https://github.com/iamdevdhanush" label="GitHub" />
              <SocialButton icon={<Linkedin className="w-4 h-4" />} href="https://www.linkedin.com/in/dhanushdprabhu/" label="LinkedIn" />
              <SocialButton icon={<Mail className="w-4 h-4" />} href="mailto:dhanushdprabhu18@gmail.com" label="Email" />
            </div>
          </div>
        </div>

        {/* Right Column: Framed Editorial Portrait with Topographic Aesthetics */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end hero-portrait">
          <div className="relative group">
            {/* Topographic Contour Accents around Portrait */}
            <div className="absolute -inset-2 rounded-2xl border border-[#292929] pointer-events-none opacity-60 group-hover:border-[#F28C28]/30 transition-colors" />
            <div className="absolute -inset-4 rounded-3xl border border-[#292929]/40 pointer-events-none opacity-40" />

            {/* Corner Coordinates */}
            <span className="absolute -top-3 -left-3 font-mono text-[9px] text-[#F28C28] bg-[#0B0C0E] px-1 border border-[#292929] z-10">
              SEC // 01
            </span>
            <span className="absolute -bottom-3 -right-3 font-mono text-[9px] text-[#929292] bg-[#0B0C0E] px-1 border border-[#292929] z-10">
              640M
            </span>

            {/* Image Container */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-xl overflow-hidden bg-[#171719] border border-[#292929] relative shadow-2xl">
              <img
                src={imgSrc}
                onError={handleImgError}
                alt="Dhanush D Prabhu"
                width="256"
                height="256"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              {/* Subtle Warm Orange Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#F5F2ED] bg-[#111214]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#292929]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28]" />
                  <span>Dhanush Prabhu</span>
                </span>
                <span className="text-[#929292] text-[10px]">VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
