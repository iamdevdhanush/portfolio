import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  href?: string;
  label?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, href = '#', label }) => {
  const fallbackLabel = href
    .replace(/^https?:\/\//, '')
    .replace(/^mailto:/, '')
    .split(/[/?#]/)[0]
    .trim() || 'social link';

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-zinc-300 hover:bg-[#222] hover:text-white transition-all duration-200 transform hover:scale-110"
      aria-label={label || fallbackLabel}
    >
      {icon}
    </a>
  );
};

export default SocialButton;
