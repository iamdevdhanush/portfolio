import React from 'react';
import { skillCategories } from '../data/skills';
import ScrollReveal from './ScrollReveal';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-14 md:py-18 scroll-mt-24">
      {/* Section Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#E2DAC8]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#F04B16]">
              <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
              <span>Technical Repertoire // 06 Disciplines</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-[#151515] tracking-tight uppercase">
              Technical Repertoire
            </h2>
          </div>
          <span className="font-mono text-xs text-[#8A877F]">
            [ 06 VERIFIED PRODUCTION DISCIPLINES ]
          </span>
        </div>
      </ScrollReveal>

      {/* Compact Editorial Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {skillCategories.map((cat, idx) => (
          <ScrollReveal key={cat.category} delay={idx * 50} direction="up" distance={16} duration={500}>
            <div className="bg-[#FAF7F0] border border-[#E2DAC8] hover:border-[#F04B16] rounded-xl p-5 sm:p-6 h-full flex flex-col justify-between transition-all duration-300 shadow-sm paper-grain group hover:-translate-y-0.5">
              <div>
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#E2DAC8]">
                  <span className="font-mono text-xs font-bold text-[#F04B16]">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-[10px] text-[#8A877F] uppercase tracking-wider">
                    DISCIPLINE
                  </span>
                </div>

                <h3 className="font-serif italic text-lg sm:text-xl font-bold text-[#151515] group-hover:text-[#F04B16] transition-colors mb-3">
                  {cat.category}
                </h3>

                {/* Compact Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs text-[#151515] bg-[#F1EBDD] border border-[#E2DAC8] px-2.5 py-1 rounded hover:border-[#F04B16] hover:text-[#F04B16] transition-colors select-none"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;