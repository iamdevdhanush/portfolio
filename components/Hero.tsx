import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, GraduationCap, MapPin, ArrowRight } from 'lucide-react';
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-8 flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F5F2ED] tracking-tight leading-[1.08] mb-4 hero-enter-1">
            Dhanush D Prabhu
          </h1>

          <h2 className="text-xl sm:text-2xl font-medium text-[#F28C28] mb-6 hero-enter-2">
            AI Engineer & Software Developer
          </h2>

          <p className="text-base sm:text-lg text-[#929292] leading-relaxed max-w-2xl mb-8 font-normal hero-enter-3">
            Building intelligent systems using <span className="text-[#F5F2ED] font-medium">Python</span>,{' '}
            <span className="text-[#F5F2ED] font-medium">FastAPI</span>,{' '}
            <span className="text-[#F5F2ED] font-medium">PostgreSQL</span>,{' '}
            <span className="text-[#F5F2ED] font-medium">Docker</span>, and modern web technologies. Focused on high-throughput backend services, multi-agent AI pipelines, and reliable production software.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto hero-enter-4">
            <button
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto px-6 py-3 bg-[#F28C28] text-[#0B0C0E] text-sm font-semibold rounded-xl hover:bg-[#FA9E42] transition-colors duration-200 flex items-center justify-center gap-2 group cursor-pointer active:scale-95 shadow-md shadow-[#F28C28]/10"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="/Dhanush_D_Prabhu_Resume.pdf"
              onClick={handleResumeClick}
              className="w-full sm:w-auto px-6 py-3 bg-[#171719] border border-[#292929] text-[#F5F2ED] text-sm font-medium rounded-xl hover:bg-[#111214] hover:border-[#F28C28]/40 hover:text-[#F28C28] transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <FileText className="w-4 h-4 text-[#F28C28]" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Education, Location, Social Connectors */}
          <div className="pt-6 border-t border-[#292929] w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 hero-enter-5">
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#929292]">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#F28C28]" />
                <span className="text-[#F5F2ED]">Bachelor of Computer Applications (2024–2027)</span>
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

        {/* Right Column: Clean Personal Photograph */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end hero-portrait">
          <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-[#171719] border border-[#292929] relative shadow-xl">
            <img
              src={imgSrc}
              onError={handleImgError}
              alt="Dhanush D Prabhu"
              width="256"
              height="256"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
