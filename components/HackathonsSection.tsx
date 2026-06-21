import { Users, Trophy, Zap, Target, Award } from 'lucide-react';

const hackathonData = [
  {
    icon: <Users className="w-5 h-5 text-zinc-400" />,
    title: 'Led teams across 3+ hackathons',
    description: 'Coordinated development, delegation, and delivery under strict time constraints.'
  },
  {
    icon: <Trophy className="w-5 h-5 text-yellow-500" />,
    title: 'Top 5 National AI Hackathon Finalist',
    description: 'SJBIT Bengaluru — Built multi-agent AI platform for safety analytics.'
  },
  {
    icon: <Award className="w-5 h-5 text-zinc-300" />,
    title: 'Runner-Up State Level Hackathon',
    description: 'GMIT Davangere — AI-assisted community support platform.'
  },
  {
    icon: <Zap className="w-5 h-5 text-blue-400" />,
    title: 'EY Techathon Round 2 Qualifier',
    description: 'Advanced to Round 2 in national-level corporate hackathon.'
  },
  {
    icon: <Target className="w-5 h-5 text-zinc-400" />,
    title: 'CodeNeura Winner',
    description: 'First place in inter-college coding competition at LBS College, Sagara.'
  }
];

const HackathonsSection = () => {
  return (
    <section id="hackathons" className="mb-20 scroll-mt-28">
      <h2 className="text-2xl font-bold text-zinc-100 mb-8">Hackathons & Leadership</h2>
      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hackathonData.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-black/50 border border-white/5 hover:bg-zinc-900/50 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-semibold text-zinc-100">{item.title}</div>
                <div className="text-xs text-zinc-500 mt-1 leading-relaxed">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
