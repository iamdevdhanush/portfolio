import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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

  const navLinkClasses = (section: string) => {
    const baseClasses = "text-sm font-medium transition-colors px-4 py-1.5 rounded-full cursor-pointer";
    const isActive = activeSection === section;
    return `${baseClasses} ${isActive ? 'bg-white/10 text-white' : 'text-zinc-300 hover:text-white'}`;
  };

  const mobileNavLinkClasses = (section: string) => {
    const baseClasses = "text-left hover:text-white transition-colors border-b border-white/5 pb-4 cursor-pointer";
    return `${baseClasses} ${activeSection === section ? 'text-white' : 'text-zinc-300'}`;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 py-6 md:px-12 max-w-5xl mx-auto w-full">
        <button
          className="md:hidden text-zinc-300 hover:text-white transition-colors p-2 bg-zinc-900/50 backdrop-blur-md rounded-lg border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className="hidden md:flex items-center gap-1 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-full p-1">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={navLinkClasses(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-6 text-xl font-medium">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={mobileNavLinkClasses(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
