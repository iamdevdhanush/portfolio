import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Check, Copy, ArrowUpRight } from 'lucide-react';
import SocialButton from './SocialButton';

const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'dhanushdprabhu18@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Dhanush_D_Prabhu_Resume.pdf';
    link.download = 'Dhanush_D_Prabhu_Resume.pdf';
    link.click();
  };

  return (
    <section id="contact" className="mb-20 scroll-mt-28">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#F28C28] uppercase tracking-widest">
            <span>06 // INITIATE DIALOGUE</span>
            <span className="w-2 h-px bg-[#F28C28]" />
            <span>COMMUNICATION CHANNEL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F2ED] tracking-tight">
            Connect & Collaborate
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#929292] font-mono max-w-md">
          Open to backend engineering opportunities, AI systems development, and ambitious project collaborations.
        </p>
      </div>

      {/* Main Editorial Contact Card */}
      <div className="relative bg-[#111214] border border-[#292929] rounded-2xl p-8 sm:p-12 overflow-hidden text-center flex flex-col items-center">
        {/* Topographic Contour Background Curves */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full border border-[#292929]/50 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full border border-[#F28C28]/10 pointer-events-none" />

        {/* Status Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171719] border border-[#292929] text-[11px] font-mono text-[#F5F2ED] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28] animate-pulse" />
          <span>CURRENTLY AVAILABLE FOR HIGH-IMPACT ROLES</span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F2ED] tracking-tight max-w-xl mb-4 leading-tight">
          Let's Build Resilient Systems Together
        </h3>

        <p className="text-sm sm:text-base text-[#929292] max-w-lg mb-8 leading-relaxed font-normal">
          Whether discussing distributed architecture, multi-agent AI pipelines, or technical hackathon collaborations, my inbox is always open.
        </p>

        {/* Interactive Copyable Email Block */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-10 w-full max-w-md">
          <a
            href={`mailto:${email}`}
            className="flex-1 w-full sm:w-auto px-5 py-3 rounded-xl bg-[#171719] border border-[#292929] hover:border-[#F28C28]/60 text-xs sm:text-sm font-mono text-[#F5F2ED] hover:text-[#F28C28] transition-colors flex items-center justify-center gap-2 group"
          >
            <Mail className="w-4 h-4 text-[#F28C28]" />
            <span>{email}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#929292] group-hover:text-[#F28C28] transition-colors" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto px-4 py-3 rounded-xl bg-[#171719] border border-[#292929] hover:border-[#F28C28]/60 text-xs font-mono text-[#929292] hover:text-[#F5F2ED] transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Social and Resume Action Connectors */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-[#292929] w-full max-w-lg">
          <a
            href="https://github.com/iamdevdhanush"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#171719] border border-[#292929] hover:border-[#F28C28]/40 text-xs font-mono text-[#F5F2ED] hover:text-[#F28C28] transition-colors flex items-center gap-2"
          >
            <Github className="w-4 h-4 text-[#F28C28]" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/dhanushdprabhu/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#171719] border border-[#292929] hover:border-[#F28C28]/40 text-xs font-mono text-[#F5F2ED] hover:text-[#F28C28] transition-colors flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4 text-[#F28C28]" />
            <span>LinkedIn</span>
          </a>

          <a
            href="/Dhanush_D_Prabhu_Resume.pdf"
            onClick={handleResumeClick}
            className="px-4 py-2.5 rounded-xl bg-[#F28C28] text-[#0B0C0E] hover:bg-[#FA9E42] text-xs font-semibold transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
