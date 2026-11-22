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
      className="w-11 h-11 rounded-xl bg-[#FAF7F0] border border-[#E2DAC8] flex items-center justify-center text-[#151515] hover:text-[#F04B16] hover:border-[#F04B16] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 ease-out cursor-pointer shadow-sm"
      aria-label={label || fallbackLabel}
    >
      {icon}
    </a>
  );
};

export default SocialButton;
