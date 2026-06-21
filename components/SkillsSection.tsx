import { skillCategories } from '../data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="mb-20 scroll-mt-28">
      <h2 className="text-2xl font-bold text-zinc-100 mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skillCategories.map(cat => (
          <div
            key={cat.category}
            className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5 hover:bg-[#111] transition-colors"
          >
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map(item => (
                <span
                  key={item}
                  className="text-xs text-zinc-300 bg-zinc-800/50 border border-zinc-700/50 rounded-full px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
