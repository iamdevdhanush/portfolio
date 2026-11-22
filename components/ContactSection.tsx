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
    <section id="contact" className="mb-20 scroll-mt-28">
      {/* Clean Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] tracking-tight">
              Contact
            </h2>
            <p className="text-sm text-[#929292] mt-1">
              Open to conversations about backend engineering, AI systems, and opportunities.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Main Contact Card */}
      <ScrollReveal direction="up" distance={22} duration={650} delay={80}>
        <div className="bg-[#111214] border border-[#292929] rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] tracking-tight max-w-xl mb-4 leading-tight">
            Interested in collaborating or discussing opportunities?
          </h3>

          <p className="text-sm sm:text-base text-[#929292] max-w-lg mb-8 leading-relaxed font-normal">
            I am always open to conversations with engineers, teams, and founders working on high-impact systems.
          </p>

          {/* Email Block */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-8 w-full max-w-md">
            <a
              href={`mailto:${email}`}
              className="flex-1 w-full sm:w-auto px-5 py-3 rounded-xl bg-[#171719] border border-[#292929] hover:border-[#F28C28]/60 text-xs sm:text-sm text-[#F5F2ED] hover:text-[#F28C28] transition-colors flex items-center justify-center gap-2 group active:scale-95"
            >
              <Mail className="w-4 h-4 text-[#F28C28]" />
              <span>{email}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#929292] group-hover:text-[#F28C28] transition-colors" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-[#171719] border border-[#292929] hover:border-[#F28C28]/60 text-xs text-[#929292] hover:text-[#F5F2ED] transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px] active:scale-95"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Social and Resume Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-[#292929] w-full max-w-lg">
            <a
              href="https://github.com/iamdevdhanush"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#171719] border border-[#292929] hover:border-[#F28C28]/40 text-xs text-[#F5F2ED] hover:text-[#F28C28] transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4 text-[#F28C28]" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/dhanushdprabhu/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#171719] border border-[#292929] hover:border-[#F28C28]/40 text-xs text-[#F5F2ED] hover:text-[#F28C28] transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4 text-[#F28C28]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="/Dhanush_D_Prabhu_Resume.pdf"
              onClick={handleResumeClick}
              className="px-4 py-2.5 rounded-xl bg-[#F28C28] text-[#0B0C0E] hover:bg-[#FA9E42] text-xs font-semibold transition-colors flex items-center gap-2 shadow-md shadow-[#F28C28]/10"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ContactSection;
