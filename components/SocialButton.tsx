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
      className="w-11 h-11 rounded-xl bg-[#171719] border border-[#292929] flex items-center justify-center text-[#929292] hover:bg-[#111214] hover:text-[#F28C28] hover:border-[#F28C28]/50 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 ease-out cursor-pointer"
      aria-label={label || fallbackLabel}
    >
      {icon}
    </a>
  );
};

export default SocialButton;
