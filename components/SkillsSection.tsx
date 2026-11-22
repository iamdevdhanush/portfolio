import React from 'react';
import { skillCategories } from '../data/skills';
import ScrollReveal from './ScrollReveal';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 scroll-mt-28">
      {/* Section Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#E2DAC8]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#F04B16]">
              <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
              <span>Tooling // Technical Repertoire</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-[#151515] tracking-tight uppercase">
              Technical Repertoire
            </h2>
          </div>
          <span className="font-mono text-xs text-[#8A877F]">
            [ 06 VERIFIED DISCIPLINES ]
          </span>
        </div>
      </ScrollReveal>

      {/* Typography-Led Editorial Matrix */}
      <div className="border-t border-[#E2DAC8]">
        {skillCategories.map((cat, idx) => (
          <ScrollReveal key={cat.category} delay={idx * 55} direction="up" distance={14} duration={500}>
            <div className="py-6 border-b border-[#E2DAC8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[#FAF7F0]/60 px-4 rounded-xl transition-colors">
              
              {/* Category Name */}
              <div className="sm:w-1/3 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#F04B16] opacity-60 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-serif font-bold text-base text-[#151515] group-hover:text-[#F04B16] transition-colors">
                  {cat.category}
                </h3>
              </div>

              {/* Technologies List with Monospace Print Badges */}
              <div className="sm:w-2/3 flex flex-wrap items-center gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-[#151515] bg-[#FAF7F0] border border-[#E2DAC8] px-3 py-1 rounded-md hover:border-[#F04B16] hover:text-[#F04B16] transition-colors select-none"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
