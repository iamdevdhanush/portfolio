import React from 'react';
import { Terminal, Github, Twitter, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-700 transition-colors">
             <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">Dhanush<span className="text-zinc-500">.dev</span></span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#achievements" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Achievements</a>
          <a href="#projects" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Skills</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/iamdevdhanush" target="_blank" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/dhanushdprabhu/" target="_blank" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;