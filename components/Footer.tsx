import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 sm:px-8 py-6 sm:py-8 bg-[#090909] text-[#8A877F] border-t border-[#2A2A2A] font-mono text-[10px] sm:text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-center sm:text-left">
        <p>© {new Date().getFullYear().toString()} DHANUSH D PRABHU. ALL RIGHTS RESERVED.</p>
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4">
          <span className="text-[#F04B16]">✦ SHIMOGA, KARNATAKA, INDIA</span>
          <span className="hidden sm:inline">•</span>
          <span>CREATIVE STUDIO JOURNAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;