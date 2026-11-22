import React from 'react';
import { skillCategories } from '../data/skills';
import ScrollReveal from './ScrollReveal';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="mb-24 md:mb-32 scroll-mt-28">
      {/* Clean Editorial Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-5 h-[2px] bg-[#F28C28]" />
              <span className="text-xs uppercase tracking-widest text-[#F28C28] font-semibold">
                Technical Repertoire
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] tracking-tight">
              Technologies & Infrastructure
            </h2>
          </div>
          <span className="text-xs text-[#929292]">
            Core languages, frameworks, databases, and tooling
          </span>
        </div>
      </ScrollReveal>

      {/* Typography-Led Editorial Skill Matrix (Zero Cards, Zero Icons, Zero Fake Percentages) */}
      <div className="border-t border-[#292929]">
        {skillCategories.map((cat, idx) => (
          <ScrollReveal key={cat.category} delay={idx * 60} direction="up" distance={14} duration={500}>
            <div className="py-5 border-b border-[#292929] flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-[#111214]/40 px-2 sm:px-4 rounded-lg transition-colors">
              {/* Category Name */}
              <div className="sm:w-1/3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28] opacity-60 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F5F2ED] group-hover:text-[#F28C28] transition-colors">
                  {cat.category}
                </h3>
              </div>

              {/* Technologies List with Subtle Typographic Separators */}
              <div className="sm:w-2/3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-[#929292]">
                {cat.items.map((item, itemIdx) => (
                  <React.Fragment key={item}>
                    <span className="text-[#F5F2ED]/90 hover:text-[#F28C28] transition-colors">
                      {item}
                    </span>
                    {itemIdx < cat.items.length - 1 && (
                      <span className="text-[#292929] select-none">•</span>
                    )}
                  </React.Fragment>
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
