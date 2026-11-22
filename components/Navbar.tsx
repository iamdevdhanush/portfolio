import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
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

  return (
    <>
      {/* Desktop Floating Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:py-6 max-w-6xl mx-auto w-full transition-all duration-300">
        {/* Brand Monogram / Home trigger */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="group flex items-center gap-2.5 py-1.5 px-3 rounded-full bg-[#111214]/80 backdrop-blur-md border border-[#292929] hover:border-[#F28C28]/40 transition-colors cursor-pointer"
          aria-label="Dhanush D Prabhu Home"
        >
          <div className="w-6 h-6 rounded-full bg-[#171719] border border-[#292929] flex items-center justify-center text-[10px] font-mono font-bold text-[#F28C28] group-hover:scale-105 transition-transform">
            DP
          </div>
          <span className="text-xs font-medium tracking-wider text-[#F5F2ED] uppercase">
            Dhanush D Prabhu
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28] animate-pulse ml-0.5" />
        </a>

        {/* Desktop Nav Items */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-[#111214]/85 backdrop-blur-md border border-[#292929] rounded-full p-1.5 shadow-2xl"
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
                    ? 'text-[#0B0C0E] bg-[#F28C28] font-semibold shadow-sm'
                    : 'text-[#929292] hover:text-[#F5F2ED] hover:bg-[#171719]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center text-[#F5F2ED] bg-[#111214]/90 backdrop-blur-md rounded-full border border-[#292929] hover:border-[#F28C28]/50 transition-all duration-300 active:scale-95"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <span
                className={`absolute w-4 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'rotate-45 text-[#F28C28]' : '-translate-y-1.5 text-[#F5F2ED]'
                }`}
              />
              <span
                className={`absolute w-4 h-0.5 bg-current transition-opacity duration-200 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100 text-[#F5F2ED]'
                }`}
              />
              <span
                className={`absolute w-4 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? '-rotate-45 text-[#F28C28]' : 'translate-y-1.5 text-[#F5F2ED]'
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0C0E]/95 backdrop-blur-2xl pt-24 px-6 md:hidden animate-modal-backdrop flex flex-col justify-between pb-10">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#929292] mb-2 px-3">
              Index Coordinates // 14°00′N 75°34′E
            </span>
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{ animationDelay: `${idx * 40}ms` }}
                  className={`flex items-center justify-between text-lg font-medium px-4 py-3 rounded-xl transition-all duration-300 border cursor-pointer min-h-[44px] animate-fade-in ${
                    isActive
                      ? 'bg-[#171719] text-[#F28C28] border-[#F28C28]/30 font-semibold shadow-sm'
                      : 'text-[#F5F2ED] border-transparent hover:border-[#292929] hover:bg-[#111214]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#F28C28] shadow-sm shadow-[#F28C28]" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[#929292] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#292929] text-xs font-mono text-[#929292] flex justify-between items-center">
            <span>Dhanush D Prabhu · AI Systems</span>
            <span className="text-[#F28C28]">BCA 2027</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
