import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Home, Trophy, User, Briefcase, Code, Terminal, Linkedin, Github, Mail,
  EyeOff, Eye, Search, Zap
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
    { type: 'header', label: 'Pages' },
    { icon: <Home className="w-4 h-4" />, label: 'Home', action: () => onNavigate('home'), shortcut: 'h' },
    { icon: <Trophy className="w-4 h-4" />, label: 'Achievements', action: () => onNavigate('achievements'), shortcut: 'a' },
    { icon: <User className="w-4 h-4" />, label: 'About', action: () => onNavigate('about'), shortcut: 'b' },
    { icon: <Briefcase className="w-4 h-4" />, label: 'Projects', action: () => onNavigate('projects'), shortcut: 'p' },
    { icon: <Zap className="w-4 h-4" />, label: 'Hackathons', action: () => onNavigate('hackathons'), shortcut: 'k' },
    { icon: <Code className="w-4 h-4" />, label: 'Skills', action: () => onNavigate('skills'), shortcut: 's' },
    { icon: <Terminal className="w-4 h-4" />, label: 'Contact', action: () => onNavigate('contact'), shortcut: 'c' },
    { type: 'header', label: 'Actions' },
    { icon: showBlobs ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />, label: 'Toggle Background', action: () => { onToggleBlobs(); onClose(); }, shortcut: 'b' },
    { type: 'header', label: 'Socials' },
    { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', action: () => window.open('https://www.linkedin.com/in/dhanushdprabhu/', '_blank') },
    { icon: <Github className="w-4 h-4" />, label: 'GitHub', action: () => window.open('https://github.com/iamdevdhanush', '_blank') },
    { icon: <Mail className="w-4 h-4" />, label: 'Email', action: () => window.open('mailto:dhanushdprabhu18@gmail.com', '_blank') },
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl bg-[#0a0a0a] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center px-4 py-3 border-b border-zinc-800">
          <Search className="w-4 h-4 text-zinc-400 mr-3" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent border-none outline-none text-zinc-200 placeholder-zinc-500 text-sm h-6"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="hidden sm:flex items-center gap-2">
            <div className="text-[10px] text-zinc-400 font-mono">
              <span className="bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800 mr-1">↑</span>
              <span className="bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">↓</span> to navigate
            </div>
            <div className="text-[10px] text-zinc-500 font-mono bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">ESC</div>
          </div>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide">
          {filteredItems.map((item, index) => {
            if (item.type === 'header') {
              const nextItemIndex = filteredItems.findIndex((i, idx) => idx > index && i.type !== 'header');
              if (nextItemIndex === -1 && index !== filteredItems.length - 1) return null;
              return (
                <div key={`header-${index}`} className="px-3 py-2 text-[10px] uppercase tracking-wider font-medium text-zinc-400 mt-2 first:mt-0 ml-1">
                  {item.label}
                </div>
              );
            }
            const isSelected = navigableItems[selectedIndex] === item;
            return (
              <button
                key={`item-${index}`}
                onClick={item.action}
                onMouseEnter={() => {
                  const navIndex = navigableItems.indexOf(item);
                  if (navIndex !== -1) setSelectedIndex(navIndex);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors group cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`${isSelected ? 'text-zinc-300' : 'text-zinc-400'}`}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.shortcut && (
                  <div className="flex gap-1">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded border font-mono uppercase ${
                      isSelected
                        ? 'bg-zinc-700 text-zinc-300 border-zinc-600'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                    }`}>
                      {item.shortcut}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
          {filteredItems.length === 0 && (
            <div className="px-4 py-8 text-center text-sm text-zinc-400">No results found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
