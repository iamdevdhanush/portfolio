import React from 'react';
import { Compass } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-8 pb-12 border-t border-[#292929] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#929292]">
      <div className="flex items-center gap-2">
        <Compass className="w-3.5 h-3.5 text-[#F28C28]" />
        <span>© {new Date().getFullYear().toString()} Dhanush D Prabhu. All rights reserved.</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[#F5F2ED]">Matte Black × Warm Orange × Topographic Contours</span>
        <span className="text-[#292929]">|</span>
        <span className="text-[#F28C28]">14°00′N 75°34′E</span>
      </div>
    </footer>
  );
};

export default Footer;
