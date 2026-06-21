import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, GraduationCap, MapPin, ArrowDown } from 'lucide-react';
import SocialButton from './SocialButton';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [imgSrc, setImgSrc] = useState('/profile.jpg');

  const handleImgError = () => {
    if (imgSrc === '/profile.jpg') setImgSrc('/profile.png');
    else if (imgSrc === '/profile.png') setImgSrc('/profile.jpeg');
    else if (imgSrc === '/profile.jpeg') setImgSrc('https://avatars.githubusercontent.com/u/169132950?v=4');
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Dhanush D Prabhu.pdf';
    link.download = 'Dhanush_D_Prabhu_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="flex flex-col md:flex-row-reverse md:justify-between md:items-start gap-8 md:gap-12 mb-24 scroll-mt-32 pt-8">
      <div className="shrink-0">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/5 bg-zinc-900 relative">
          <img
            src={imgSrc}
            onError={handleImgError}
            alt="Dhanush D Prabhu"
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>

      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
          Dhanush D Prabhu
        </h1>
        <h2 className="text-lg md:text-xl text-zinc-300 font-medium mb-4">
          Backend Developer · AI Systems Builder
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-xl">
          Building intelligent systems using Python, FastAPI, PostgreSQL, Docker, and modern web technologies.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            onClick={() => onNavigate('projects')}
            className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors"
          >
            View Projects
          </button>
          <a
            href="/Dhanush D Prabhu.pdf"
            onClick={handleResumeClick}
            className="px-5 py-2.5 border border-zinc-700 text-zinc-300 text-sm font-medium rounded-lg hover:bg-zinc-900 hover:text-white transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex items-start gap-3 text-zinc-400 text-xs">
            <GraduationCap className="w-3.5 h-3.5 mt-0.5" />
            <span>Bachelor of Computer Applications (2027)</span>
          </div>
          <div className="flex items-start gap-3 text-zinc-400 text-xs">
            <MapPin className="w-3.5 h-3.5 mt-0.5" />
            <span>Shimoga, Karnataka, India</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <SocialButton icon={<Github className="w-4 h-4" />} href="https://github.com/iamdevdhanush" />
          <SocialButton icon={<Linkedin className="w-4 h-4" />} href="https://www.linkedin.com/in/dhanushdprabhu/" />
          <SocialButton icon={<Mail className="w-4 h-4" />} href="mailto:dhanushdprabhu18@gmail.com" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
