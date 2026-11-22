import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, ArrowRight, GraduationCap, MapPin } from 'lucide-react';
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
    <section id="home" className="relative pt-20 md:pt-28 pb-16 md:pb-24 scroll-mt-28">
      {/* Editorial Composition: Asymmetric Typographic Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Main Editorial Text Column */}
        <div className="lg:col-span-8 flex flex-col items-start">
          
          {/* Subtle Category Pre-title */}
          <div className="hero-enter-1 mb-4 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#F28C28]" />
            <span className="text-xs uppercase tracking-widest text-[#F28C28] font-semibold">
              Software Engineer & AI Architect
            </span>
          </div>

          {/* Large Dominant Editorial Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F5F2ED] tracking-tight leading-[1.04] mb-6 hero-enter-1">
            Dhanush D Prabhu
          </h1>

          {/* Editorial Philosophy Statement */}
          <p className="text-lg sm:text-xl text-[#F5F2ED]/90 leading-snug font-medium mb-4 max-w-2xl hero-enter-2">
            Building reliable backend architectures, spatial data systems, and multi-agent AI pipelines.
          </p>

          <p className="text-sm sm:text-base text-[#929292] leading-relaxed max-w-2xl mb-8 hero-enter-3">
            Specialized in <span className="text-[#F5F2ED] font-medium">Python</span>,{' '}
            <span className="text-[#F5F2ED] font-medium">FastAPI</span>,{' '}
            <span className="text-[#F5F2ED] font-medium">PostgreSQL</span>, and{' '}
            <span className="text-[#F5F2ED] font-medium">Docker</span>. I approach software engineering with an emphasis on normalized data models, clear service boundaries, and verifiable production deployments.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto hero-enter-4">
            <button
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#F28C28] text-[#0B0C0E] text-xs font-bold tracking-wide uppercase rounded-xl hover:bg-[#FA9E42] transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer active:scale-95 shadow-lg shadow-[#F28C28]/15"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="/Dhanush_D_Prabhu_Resume.pdf"
              onClick={handleResumeClick}
              className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-[#292929] hover:border-[#F28C28]/50 text-[#F5F2ED] hover:text-[#F28C28] text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <FileText className="w-4 h-4 text-[#F28C28]" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Verified Education & Location Metadata */}
          <div className="w-full pt-6 border-t border-[#292929]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hero-enter-5">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#929292]">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#F28C28]" />
                <span className="text-[#F5F2ED] font-medium">PES Institute of Advanced Management Studies</span>
                <span className="text-[#929292] hidden sm:inline">(BCA 2024–2027)</span>
              </div>
              <span className="text-[#292929] hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F28C28]" />
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

        {/* Right Column: Editorial Photograph Placement */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end hero-portrait">
          <div className="relative group">
            {/* Subtle orange accent frame behind image */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-b from-[#F28C28]/20 to-transparent opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden bg-[#111214] border border-[#292929] shadow-2xl">
              <img
                src={imgSrc}
                onError={handleImgError}
                alt="Dhanush D Prabhu"
                width="256"
                height="288"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover grayscale-[15%] contrast-[105%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="text-[11px] text-[#F5F2ED]/90 font-medium tracking-wide">
                  Dhanush D Prabhu
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
