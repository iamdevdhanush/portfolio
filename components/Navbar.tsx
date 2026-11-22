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
      {/* Desktop Editorial Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:py-6 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="group flex items-baseline gap-2 py-1 cursor-pointer select-none"
            aria-label="Dhanush D Prabhu Home"
          >
            <span className="font-serif font-black text-xl tracking-tight text-[#151515] group-hover:text-[#F04B16] transition-colors">
              DP.
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#8A877F] hidden sm:inline">
              Dhanush D Prabhu
            </span>
          </a>

          {/* Desktop Nav Items — Floating Editorial Bar */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-[#FAF7F0]/85 backdrop-blur-md border border-[#E2DAC8] rounded-full px-3 py-1.5 shadow-sm"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#FAF7F0] bg-[#151515] font-semibold'
                      : 'text-[#151515] hover:text-[#F04B16] hover:bg-[#F1EBDD]/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#F04B16]" />
                  )}
                </a>
              );
            })}

            {/* Resume Button in Navigation */}
            <a
              href="/Dhanush_D_Prabhu_Resume.pdf"
              onClick={handleResumeClick}
              className="ml-1 text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#F04B16] text-[#FAF7F0] hover:bg-[#D93E0D] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center text-[#151515] bg-[#FAF7F0]/90 backdrop-blur-md rounded-xl border border-[#E2DAC8] hover:border-[#F04B16] transition-all duration-200 active:scale-95"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span
                  className={`absolute w-4 h-0.5 bg-current transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? 'rotate-45 text-[#F04B16]' : '-translate-y-1.5 text-[#151515]'
                  }`}
                />
                <span
                  className={`absolute w-4 h-0.5 bg-current transition-opacity duration-200 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100 text-[#151515]'
                  }`}
                />
                <span
                  className={`absolute w-4 h-0.5 bg-current transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? '-rotate-45 text-[#F04B16]' : 'translate-y-1.5 text-[#151515]'
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer with Editorial Styling */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F1EBDD]/98 backdrop-blur-2xl pt-24 px-8 md:hidden animate-modal-backdrop flex flex-col justify-between pb-12">
          <div className="flex flex-col gap-3">
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
                  className={`flex items-center justify-between text-2xl font-serif py-2.5 transition-all duration-200 border-b border-[#E2DAC8]/50 cursor-pointer ${
                    isActive
                      ? 'text-[#F04B16] font-bold'
                      : 'text-[#151515] hover:text-[#F04B16]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[#8A877F]" />
                  )}
                </a>
              );
            })}

            <a
              href="/Dhanush_D_Prabhu_Resume.pdf"
              onClick={handleResumeClick}
              className="mt-4 px-5 py-3 rounded-xl bg-[#F04B16] text-[#FAF7F0] font-sans text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
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
