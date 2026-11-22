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
    { icon: <Home className="w-4 h-4 text-[#F04B16]" />, label: 'Home', action: () => onNavigate('home'), shortcut: 'h' },
    { icon: <Briefcase className="w-4 h-4 text-[#F04B16]" />, label: 'Work', action: () => onNavigate('projects'), shortcut: 'p' },
    { icon: <Trophy className="w-4 h-4 text-[#F04B16]" />, label: 'Achievements', action: () => onNavigate('achievements'), shortcut: 'a' },
    { icon: <User className="w-4 h-4 text-[#F04B16]" />, label: 'About', action: () => onNavigate('about'), shortcut: 'b' },
    { icon: <Zap className="w-4 h-4 text-[#F04B16]" />, label: 'Hackathons', action: () => onNavigate('hackathons'), shortcut: 'k' },
    { icon: <Code className="w-4 h-4 text-[#F04B16]" />, label: 'Skills', action: () => onNavigate('skills'), shortcut: 's' },
    { icon: <Terminal className="w-4 h-4 text-[#F04B16]" />, label: 'Contact', action: () => onNavigate('contact'), shortcut: 'c' },
    { type: 'header', label: 'Preferences' },
    { icon: showBlobs ? <EyeOff className="w-4 h-4 text-[#F04B16]" /> : <Eye className="w-4 h-4 text-[#F04B16]" />, label: 'Toggle Paper Ambience', action: () => { onToggleBlobs(); onClose(); }, shortcut: 't' },
    { type: 'header', label: 'External Channels' },
    { icon: <Linkedin className="w-4 h-4 text-[#F04B16]" />, label: 'LinkedIn', action: () => window.open('https://www.linkedin.com/in/dhanushdprabhu/', '_blank') },
    { icon: <Github className="w-4 h-4 text-[#F04B16]" />, label: 'GitHub', action: () => window.open('https://github.com/iamdevdhanush', '_blank') },
    { icon: <Mail className="w-4 h-4 text-[#F04B16]" />, label: 'Email', action: () => window.open('mailto:dhanushdprabhu18@gmail.com', '_blank') },
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
      <div className="absolute inset-0 bg-[#090909]/80 backdrop-blur-md animate-modal-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-xl bg-[#FAF7F0] border border-[#E2DAC8] rounded-2xl shadow-2xl overflow-hidden animate-modal-enter text-[#151515] paper-grain">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E2DAC8] bg-[#F1EBDD]/60">
          <Search className="w-4 h-4 text-[#F04B16] mr-3 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or jump to section..."
            className="flex-1 bg-transparent border-none outline-none text-[#151515] placeholder-[#8A877F] text-sm font-mono h-6"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="hidden sm:flex items-center gap-2 text-[10px] text-[#8A877F] font-mono">
            <span className="bg-[#FAF7F0] px-1.5 py-0.5 rounded border border-[#E2DAC8]">↑</span>
            <span className="bg-[#FAF7F0] px-1.5 py-0.5 rounded border border-[#E2DAC8]">↓</span>
            <span>navigate</span>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.map((item, idx) => {
            if (item.type === 'header') {
              return (
                <div key={idx} className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-[#8A877F]">
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
                    ? 'bg-[#151515] text-[#FAF7F0]'
                    : 'text-[#151515] hover:bg-[#F1EBDD]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${isSelected ? 'text-[#F04B16]' : 'text-[#8A877F]'}`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>

                <div className="flex items-center gap-2">
                  {item.shortcut && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded border ${
                      isSelected ? 'bg-[#2A2A2A] text-[#FAF7F0] border-transparent' : 'bg-[#FAF7F0] text-[#8A877F] border-[#E2DAC8]'
                    }`}>
                      {item.shortcut}
                    </span>
                  )}
                  {isSelected && <ArrowRight className="w-3.5 h-3.5 text-[#F04B16]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Palette Footer */}
        <div className="px-4 py-2.5 bg-[#F1EBDD]/60 border-t border-[#E2DAC8] flex items-center justify-between text-[10px] font-mono text-[#8A877F]">
          <span>Dhanush D Prabhu // Studio Journal</span>
          <span className="text-[#F04B16]">ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
