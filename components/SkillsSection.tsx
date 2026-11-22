import React from 'react';
import { skillCategories } from '../data/skills';
import { Server, Layout, Database, Terminal, Wrench } from 'lucide-react';

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
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#F28C28] uppercase tracking-widest">
            <span>05 // TECHNICAL CAPABILITIES</span>
            <span className="w-2 h-px bg-[#F28C28]" />
            <span>CORE STACK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F2ED] tracking-tight">
            Engineering Skills & Tools
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#929292] font-mono max-w-md">
          Strictly grounded in projects and code: zero arbitrary percentage bars, focused on production technologies.
        </p>
      </div>

      {/* Grid of 5 Skill Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="bg-[#111214] border border-[#292929] hover:border-[#F28C28]/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 group"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#292929]">
                <div className="w-7 h-7 rounded-lg bg-[#171719] border border-[#292929] flex items-center justify-center">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F5F2ED] group-hover:text-[#F28C28] transition-colors">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#171719] border border-[#292929] text-xs font-mono text-[#F5F2ED] hover:border-[#F28C28]/50 hover:text-[#F28C28] transition-all"
                  >
                    <span>{item}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#292929] group-hover:bg-[#F28C28]/60 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#292929] text-[10px] font-mono text-[#929292] flex justify-between">
              <span>COUNT</span>
              <span className="text-[#F28C28]">{cat.items.length} TECHNOLOGIES</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
