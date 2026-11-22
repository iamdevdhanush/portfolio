import React from 'react';
import { skillCategories } from '../data/skills';
import { Server, Layout, Database, Terminal, Wrench } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Backend':
        return <Server className="w-4 h-4 text-[#F28C28]" />;
      case 'Frontend':
        return <Layout className="w-4 h-4 text-[#F28C28]" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-[#F28C28]" />;
      case 'DevOps':
        return <Terminal className="w-4 h-4 text-[#F28C28]" />;
      case 'Tools':
        return <Wrench className="w-4 h-4 text-[#F28C28]" />;
      default:
        return <Server className="w-4 h-4 text-[#F28C28]" />;
    }
  };

  return (
    <section id="skills" className="mb-24 md:mb-32 scroll-mt-28">
      {/* Clean Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] tracking-tight">
              Skills
            </h2>
            <p className="text-sm text-[#929292] mt-1">
              Core technologies, frameworks, and developer tooling.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid of 5 Skill Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {skillCategories.map((cat, idx) => (
          <ScrollReveal key={cat.category} delay={idx * 65} direction="up" distance={18} duration={550}>
            <div
              className="bg-[#111214] border border-[#292929] hover:border-[#F28C28]/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F28C28]/5 group h-full"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#292929]">
                  <div className="w-7 h-7 rounded-lg bg-[#171719] border border-[#292929] flex items-center justify-center">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F5F2ED] group-hover:text-[#F28C28] transition-colors">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#171719] border border-[#292929] text-xs text-[#F5F2ED] hover:border-[#F28C28]/50 hover:text-[#F28C28] transition-colors"
                    >
                      <span>{item}</span>
                    </div>
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
