import React, { useState, useEffect, useMemo } from 'react';
import {
  Home, Trophy, User, Briefcase, Code, Terminal, Linkedin, Github, Mail,
  EyeOff, Eye, Search, Zap, ArrowRight
} from 'lucide-react';

interface MenuItem {
  type?: 'header' | 'action';
  icon?: React.ReactNode;
  label: string;
  action: () => void;
  shortcut?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
  showBlobs: boolean;
  onToggleBlobs: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onNavigate, showBlobs, onToggleBlobs }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery, isOpen]);

  const menuItems: MenuItem[] = useMemo(() => [
    { type: 'header', label: 'Navigation' },
    { icon: <Home className="w-4 h-4 text-[#F28C28]" />, label: 'Home', action: () => onNavigate('home'), shortcut: 'h' },
    { icon: <Trophy className="w-4 h-4 text-[#F28C28]" />, label: 'Achievements', action: () => onNavigate('achievements'), shortcut: 'a' },
    { icon: <User className="w-4 h-4 text-[#F28C28]" />, label: 'About', action: () => onNavigate('about'), shortcut: 'b' },
    { icon: <Briefcase className="w-4 h-4 text-[#F28C28]" />, label: 'Projects', action: () => onNavigate('projects'), shortcut: 'p' },
    { icon: <Zap className="w-4 h-4 text-[#F28C28]" />, label: 'Hackathons', action: () => onNavigate('hackathons'), shortcut: 'k' },
    { icon: <Code className="w-4 h-4 text-[#F28C28]" />, label: 'Skills', action: () => onNavigate('skills'), shortcut: 's' },
    { icon: <Terminal className="w-4 h-4 text-[#F28C28]" />, label: 'Contact', action: () => onNavigate('contact'), shortcut: 'c' },
    { type: 'header', label: 'Settings' },
    { icon: showBlobs ? <EyeOff className="w-4 h-4 text-[#F28C28]" /> : <Eye className="w-4 h-4 text-[#F28C28]" />, label: 'Toggle Background Pattern', action: () => { onToggleBlobs(); onClose(); }, shortcut: 't' },
    { type: 'header', label: 'Social' },
    { icon: <Linkedin className="w-4 h-4 text-[#F28C28]" />, label: 'LinkedIn', action: () => window.open('https://www.linkedin.com/in/dhanushdprabhu/', '_blank') },
    { icon: <Github className="w-4 h-4 text-[#F28C28]" />, label: 'GitHub', action: () => window.open('https://github.com/iamdevdhanush', '_blank') },
    { icon: <Mail className="w-4 h-4 text-[#F28C28]" />, label: 'Email', action: () => window.open('mailto:dhanushdprabhu18@gmail.com', '_blank') },
  ], [showBlobs, onNavigate, onClose, onToggleBlobs]);

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      if (searchQuery) {
        return item.type !== 'header' && item.label.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    });
  }, [menuItems, searchQuery]);

  const navigableItems = useMemo(() => {
    return filteredItems.filter(item => item.type !== 'header');
  }, [filteredItems]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % navigableItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + navigableItems.length) % navigableItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const item = navigableItems[selectedIndex];
        if (item?.action) item.action();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, navigableItems, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4">
      <div className="absolute inset-0 bg-[#0B0C0E]/85 backdrop-blur-md animate-modal-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-xl bg-[#111214] border border-[#292929] rounded-2xl shadow-2xl overflow-hidden animate-modal-enter text-[#F5F2ED]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#292929] bg-[#171719]/50">
          <Search className="w-4 h-4 text-[#F28C28] mr-3 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or jump to section..."
            className="flex-1 bg-transparent border-none outline-none text-[#F5F2ED] placeholder-[#929292] text-sm font-mono h-6"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="hidden sm:flex items-center gap-2 text-[10px] text-[#929292] font-mono">
            <span className="bg-[#111214] px-1.5 py-0.5 rounded border border-[#292929]">↑</span>
            <span className="bg-[#111214] px-1.5 py-0.5 rounded border border-[#292929]">↓</span>
            <span>navigate</span>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.map((item, idx) => {
            if (item.type === 'header') {
              return (
                <div key={idx} className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-[#929292]">
                  {item.label}
                </div>
              );
            }

            const navIndex = navigableItems.indexOf(item);
            const isSelected = navIndex === selectedIndex;

            return (
              <div
                key={idx}
                onClick={() => {
                  item.action();
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer text-xs font-mono transition-colors ${
                  isSelected
                    ? 'bg-[#171719] text-[#F28C28] border border-[#F28C28]/40'
                    : 'text-[#F5F2ED] hover:bg-[#171719] border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${isSelected ? 'bg-[#F28C28]/10' : 'bg-[#171719]'}`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>

                <div className="flex items-center gap-2">
                  {item.shortcut && (
                    <span className="text-[10px] bg-[#111214] text-[#929292] px-1.5 py-0.5 rounded border border-[#292929]">
                      {item.shortcut}
                    </span>
                  )}
                  {isSelected && <ArrowRight className="w-3.5 h-3.5 text-[#F28C28]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Palette Footer */}
        <div className="px-4 py-2.5 bg-[#171719]/60 border-t border-[#292929] flex items-center justify-between text-[10px] font-mono text-[#929292]">
          <span>Dhanush D Prabhu Portfolio</span>
          <span className="text-[#F28C28]">ESC to cancel</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
