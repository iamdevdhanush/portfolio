import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-8 pb-12 border-t border-[#292929] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#929292]">
      <p>© {new Date().getFullYear().toString()} Dhanush D Prabhu. All rights reserved.</p>
      <div className="flex gap-4">
        <span>AI Engineer & Software Developer</span>
      </div>
    </footer>
  );
};

export default Footer;
