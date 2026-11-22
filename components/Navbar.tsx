import React, { useState } from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Work' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'about', label: 'About' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const link = document.createElement('a');
    link.href = '/Dhanush_D_Prabhu_Resume.pdf';
    link.download = 'Dhanush_D_Prabhu_Resume.pdf';
    link.click();
  };

  return (
    <>
      {/* Simple, Unobtrusive Editorial Navigation Flush at Top */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F1EBDD]/90 backdrop-blur-sm border-b border-[#E2DAC8]/70 px-6 sm:px-10 py-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Small DP. Brand Mark on the Left */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-baseline gap-1.5 py-1 cursor-pointer select-none group"
            aria-label="Dhanush D Prabhu Home"
          >
            <span className="font-serif font-black text-2xl tracking-tighter text-[#151515]">
              DP<span className="text-[#F04B16]">.</span>
            </span>
          </a>

          {/* Navigation Aligned to Upper Right */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative text-xs font-mono uppercase tracking-wider py-1 cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? 'text-[#151515] font-bold'
                      : 'text-[#8A877F] hover:text-[#151515]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-[#F04B16] transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                  />
                </a>
              );
            })}

            {/* Outlined Resume Button */}
            <a
              href="/Dhanush_D_Prabhu_Resume.pdf"
              onClick={handleResumeClick}
              className="ml-2 px-4 py-1.5 rounded border border-[#151515] hover:bg-[#151515] hover:text-[#FAF7F0] text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-[#151515] hover:text-[#F04B16] transition-colors"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span
                  className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? 'rotate-45 text-[#F04B16]' : '-translate-y-1.5 text-[#151515]'
                  }`}
                />
                <span
                  className={`absolute w-5 h-0.5 bg-current transition-opacity duration-200 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100 text-[#151515]'
                  }`}
                />
                <span
                  className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? '-rotate-45 text-[#F04B16]' : 'translate-y-1.5 text-[#151515]'
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Editorial Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F1EBDD]/98 backdrop-blur-2xl pt-24 px-8 md:hidden animate-modal-backdrop flex flex-col justify-between pb-12">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A877F] pb-2 border-b border-[#E2DAC8]">
              Table of Contents
            </span>

            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{ animationDelay: `${idx * 40}ms` }}
                  className={`flex items-center justify-between text-3xl font-serif py-2 transition-all duration-200 border-b border-[#E2DAC8]/60 cursor-pointer ${
                    isActive
                      ? 'text-[#F04B16] font-bold'
                      : 'text-[#151515] hover:text-[#F04B16]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F04B16]" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[#8A877F]" />
                  )}
                </a>
              );
            })}

            <a
              href="/Dhanush_D_Prabhu_Resume.pdf"
              onClick={handleResumeClick}
              className="mt-6 px-5 py-3 rounded-lg border border-[#151515] bg-[#151515] text-[#FAF7F0] font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>

          <div className="pt-6 border-t border-[#E2DAC8] text-xs font-mono text-[#8A877F] flex justify-between items-center">
            <span>DHANUSH D PRABHU</span>
            <span>SHIMOGA, INDIA</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
