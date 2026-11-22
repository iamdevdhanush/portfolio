import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Check, Copy, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

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
    <section id="contact" className="mb-24 scroll-mt-28">
      {/* Full-Width Open Editorial Layout (Zero Boxed Containers) */}
      <ScrollReveal direction="up" distance={20} duration={600}>
        <div className="pt-12 pb-8 border-t border-[#292929]">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-[2px] bg-[#F28C28]" />
            <span className="text-xs uppercase tracking-widest text-[#F28C28] font-semibold">
              Get in Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F2ED] tracking-tight leading-tight max-w-2xl mb-4">
            Let's build something dependable.
          </h2>

          <p className="text-sm sm:text-base text-[#929292] max-w-xl leading-relaxed mb-8">
            Always open to conversations regarding backend engineering, AI pipelines, system architecture, and new opportunities.
          </p>

          {/* Email Interaction Block */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#F28C28] text-[#0B0C0E] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#FA9E42] transition-colors active:scale-95 shadow-md shadow-[#F28C28]/15"
            >
              <Mail className="w-4 h-4" />
              <span>{email}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 rounded-xl border border-[#292929] hover:border-[#F28C28]/50 text-xs font-medium text-[#F5F2ED] hover:text-[#F28C28] transition-colors flex items-center gap-2 cursor-pointer active:scale-95 min-h-[44px]"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#929292]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Inline Links */}
          <div className="pt-6 border-t border-[#292929]/70 flex flex-wrap items-center gap-6 text-xs text-[#929292]">
            <a
              href="https://github.com/iamdevdhanush"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F28C28] transition-colors flex items-center gap-1.5 font-medium"
            >
              <Github className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/dhanushdprabhu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F28C28] transition-colors flex items-center gap-1.5 font-medium"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="/Dhanush_D_Prabhu_Resume.pdf"
              onClick={handleResumeClick}
              className="hover:text-[#F28C28] transition-colors flex items-center gap-1.5 font-medium"
            >
              <FileText className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default ContactSection;
