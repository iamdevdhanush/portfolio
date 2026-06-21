import { Trophy, Award, Zap, Star } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-4 h-4 text-yellow-500" />,
    title: 'Top 5 Finalist',
    subtitle: 'National Level AI Hackathon — SJBIT Bengaluru',
  },
  {
    icon: <Award className="w-4 h-4 text-zinc-300" />,
    title: 'Runner-Up',
    subtitle: 'State Level Hackathon — GMIT Davangere',
  },
  {
    icon: <Trophy className="w-4 h-4 text-yellow-500" />,
    title: 'Winner',
    subtitle: 'CodeNeura Inter-College Tech-a-Thon',
  },
  {
    icon: <Zap className="w-4 h-4 text-blue-400" />,
    title: 'EY Techathon',
    subtitle: 'Round 2 Qualifier',
  },
];

const AchievementStrip = () => {
  return (
    <section id="achievements" className="mb-20 scroll-mt-28">
      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-2 mb-6">
          <Star className="w-4 h-4 text-zinc-400" />
          <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Competition Record</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-black/50 border border-white/5 hover:bg-zinc-900/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-semibold text-zinc-100">{item.title}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementStrip;
