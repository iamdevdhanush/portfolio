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
    <section id="contact" className="w-full px-4 sm:px-8 pt-10 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 bg-[#090909] text-[#FAF7F0] ink-grain scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" distance={20} duration={600}>
          <div>
            
            <div className="flex items-center gap-2 mb-3 sm:mb-4 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#F04B16]">
              <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
              <span>Colophon // Direct Communication</span>
            </div>

            {/* Controlled Responsive Headline Wrapping */}
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-[#FAF7F0] tracking-tight leading-[0.95] uppercase mb-3 sm:mb-4">
              Let's Build Something<br />
              <span className="text-[#FAF7F0] hover:text-[#F04B16] transition-colors duration-300">
                That Matters.
              </span>
            </h2>

            {/* Concise Supporting Sentence */}
            <p className="font-serif italic text-sm sm:text-lg md:text-xl text-[#8A877F] max-w-xl font-normal leading-relaxed mb-6 sm:mb-8">
              Open to backend engineering roles, AI systems architecture, and technical collaborations.
            </p>

            {/* Email Contact Action: Full-width on mobile without awkward overflow */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-8 sm:mb-10 w-full sm:w-auto">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 bg-[#F04B16] text-[#FAF7F0] hover:bg-[#D93E0D] font-mono text-xs font-bold uppercase tracking-wider rounded transition-colors active:scale-95 shadow-md shadow-[#F04B16]/20 min-h-[44px]"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="truncate">{email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 sm:py-3.5 rounded border border-[#2A2A2A] hover:border-[#F04B16] font-mono text-xs text-[#FAF7F0] hover:text-[#F04B16] transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95 min-h-[44px]"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#8A877F]" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Channel Connectors: Tappable and organized on mobile */}
            <div className="pt-5 sm:pt-6 border-t border-[#2A2A2A] flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-8 font-mono text-xs text-[#8A877F]">
              <a
                href="https://github.com/iamdevdhanush"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F04B16] transition-colors flex items-center gap-2 font-bold min-h-[44px]"
              >
                <Github className="w-4 h-4 text-[#F04B16] shrink-0" />
                <span>GITHUB</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dhanushdprabhu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F04B16] transition-colors flex items-center gap-2 font-bold min-h-[44px]"
              >
                <Linkedin className="w-4 h-4 text-[#F04B16] shrink-0" />
                <span>LINKEDIN</span>
              </a>

              <a
                href="/Dhanush_D_Prabhu_Resume.pdf"
                onClick={handleResumeClick}
                className="hover:text-[#F04B16] transition-colors flex items-center gap-2 font-bold min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-[#F04B16] shrink-0" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;