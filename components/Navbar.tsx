import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

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
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:py-6 max-w-5xl mx-auto w-full transition-all duration-300">
        {/* Simple Confident Brand Link */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-sm font-semibold tracking-tight text-[#F5F2ED] hover:text-[#F28C28] transition-colors py-1 cursor-pointer"
          aria-label="Dhanush D Prabhu Home"
        >
          Dhanush D Prabhu
        </a>

        {/* Desktop Nav Items */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-[#111214]/90 backdrop-blur-md border border-[#292929] rounded-full p-1.5 shadow-xl"
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
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center text-[#F5F2ED] bg-[#111214]/90 backdrop-blur-md rounded-xl border border-[#292929] hover:border-[#F28C28]/50 transition-all duration-200 active:scale-95"
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
        <div className="fixed inset-0 z-40 bg-[#0B0C0E]/98 backdrop-blur-2xl pt-24 px-6 md:hidden animate-modal-backdrop flex flex-col justify-between pb-10">
          <div className="flex flex-col gap-2">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{ animationDelay: `${idx * 40}ms` }}
                  className={`flex items-center justify-between text-lg font-medium px-4 py-3 rounded-xl transition-all duration-200 border cursor-pointer min-h-[44px] ${
                    isActive
                      ? 'bg-[#171719] text-[#F28C28] border-[#F28C28]/30 font-semibold'
                      : 'text-[#F5F2ED] border-transparent hover:border-[#292929] hover:bg-[#111214]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#F28C28]" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[#929292]" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#292929] text-xs text-[#929292]">
            Dhanush D Prabhu · AI Engineer & Software Developer
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
