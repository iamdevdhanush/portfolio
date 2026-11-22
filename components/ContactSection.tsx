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
    <section id="contact" className="w-full px-5 sm:px-8 py-24 md:py-32 bg-[#090909] text-[#FAF7F0] ink-grain scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" distance={20} duration={600}>
          <div className="pt-6">
            
            <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-[#F04B16]">
              <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
              <span>Colophon // Direct Communication</span>
            </div>

            {/* Massive Display Statement */}
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#FAF7F0] tracking-tight leading-[0.92] uppercase mb-6">
              Let's Build Something<br />
              <span className="text-[#FAF7F0] hover:text-[#F04B16] transition-colors duration-300">
                That Matters.
              </span>
            </h2>

            <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-serif italic text-lg sm:text-xl text-[#8A877F] max-w-xl font-normal leading-relaxed">
                Open to discussions regarding backend engineering roles, AI system architecture, and new engineering initiatives.
              </p>
              <span className="font-hand text-2xl text-[#F04B16] -rotate-2 select-none">
                ✦ available for production engineering
              </span>
            </div>

            {/* Direct Email Interaction */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#F04B16] text-[#FAF7F0] hover:bg-[#D93E0D] font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-colors active:scale-95 shadow-lg shadow-[#F04B16]/20"
              >
                <Mail className="w-4 h-4" />
                <span>{email}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-4 rounded-xl border border-[#2A2A2A] hover:border-[#F04B16] font-mono text-xs text-[#FAF7F0] hover:text-[#F04B16] transition-colors flex items-center gap-2 cursor-pointer active:scale-95 min-h-[48px]"
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

            {/* Inline Connectors */}
            <div className="pt-8 border-t border-[#2A2A2A] flex flex-wrap items-center gap-8 font-mono text-xs text-[#8A877F]">
              <a
                href="https://github.com/iamdevdhanush"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F04B16] transition-colors flex items-center gap-2 font-bold"
              >
                <Github className="w-4 h-4 text-[#F04B16]" />
                <span>GITHUB</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dhanushdprabhu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F04B16] transition-colors flex items-center gap-2 font-bold"
              >
                <Linkedin className="w-4 h-4 text-[#F04B16]" />
                <span>LINKEDIN</span>
              </a>

              <a
                href="/Dhanush_D_Prabhu_Resume.pdf"
                onClick={handleResumeClick}
                className="hover:text-[#F04B16] transition-colors flex items-center gap-2 font-bold"
              >
                <FileText className="w-4 h-4 text-[#F04B16]" />
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
