import React from 'react';
import { Sparkles, Github, Twitter } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-purple-600/20 p-2 rounded-lg">
             <Sparkles className="w-5 h-5 text-purple-400" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">Bethina<span className="text-purple-500">.dev</span></span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Capabilities</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Experiment</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
