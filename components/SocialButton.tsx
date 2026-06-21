import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  href?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, href = '#' }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-zinc-300 hover:bg-[#222] hover:text-white transition-all duration-200 transform hover:scale-110"
    aria-label={href.replace('https://', '').split('/')[0] || 'social link'}
  >
    {icon}
  </a>
);

export default SocialButton;
