import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-5 sm:px-8 py-8 md:py-10 bg-[#090909] text-[#8A877F] border-t border-[#2A2A2A] font-mono text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear().toString()} DHANUSH D PRABHU. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-4">
          <span className="text-[#F04B16]">✦ SHIMOGA, KARNATAKA, INDIA</span>
          <span>•</span>
          <span>CREATIVE STUDIO JOURNAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
