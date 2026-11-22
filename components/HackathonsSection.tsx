import React from 'react';
import { Trophy, Calendar, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface HackathonEntry {
  event: string;
  organization: string;
  role: string;
  result: string;
  year: string;
  highlight?: boolean;
}

const HackathonsSection: React.FC = () => {
  const hackathons: HackathonEntry[] = [
    {
      event: 'CodeNeura Inter-College Tech-a-Thon',
      organization: 'LBS College, Sagara',
      role: 'Lead Developer',
      result: '1st Place Winner',
      year: '2025',
      highlight: true,
    },
    {
      event: 'National Level AI Hackathon',
      organization: 'SJBIT Bengaluru',
      role: 'Project Lead (Avana V2)',
      result: 'Top 5 Finalist (100+ Teams)',
      year: '2025',
      highlight: true,
    },
    {
      event: 'State Level Hackathon',
      organization: 'GMIT Davangere',
      role: 'Team Lead (Little Heartbeat)',
      result: 'Runner-Up',
      year: '2025',
    },
    {
      event: 'Green IT System Development',
      organization: 'State Level Competition',
      role: 'Lead Developer (GreenOps)',
      result: '1st Place Winner',
      year: '2025',
      highlight: true,
    },
    {
      event: 'EY Techathon',
      organization: 'Ernst & Young',
      role: 'System Architect',
      result: 'Round 2 Qualifier',
      year: '2025',
    },
  ];

  return (
    <section id="hackathons" className="py-14 md:py-18 scroll-mt-24">
      {/* Section Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#E2DAC8]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#F04B16]">
              <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
              <span>Sprint Record // 24–48 Hour Crucibles</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-[#151515] tracking-tight uppercase">
              Hackathon Timeline
            </h2>
          </div>
          <span className="font-mono text-xs text-[#8A877F]">
            [ 05 COMPETITIVE CYCLES ]
          </span>
        </div>
      </ScrollReveal>

      {/* Refined Editorial Timeline Table */}
      <div className="border border-[#E2DAC8] rounded-xl bg-[#FAF7F0] overflow-hidden shadow-sm paper-grain divide-y divide-[#E2DAC8]">
        {hackathons.map((item, idx) => (
          <ScrollReveal key={item.event} delay={idx * 40} direction="up" distance={12} duration={450}>
            <div className="group p-4 sm:p-5 hover:bg-[#F1EBDD]/70 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 relative pl-5 sm:pl-6">
              
              {/* Subtle Active Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#F04B16] transition-colors" />

              {/* Event & Organization */}
              <div className="md:w-5/12 space-y-1">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#151515] group-hover:text-[#F04B16] transition-colors">
                  {item.event}
                </h3>
                <p className="font-mono text-xs text-[#8A877F]">
                  {item.organization}
                </p>
              </div>

              {/* Role */}
              <div className="md:w-3/12 font-mono text-xs text-[#151515]/80">
                <span className="text-[#8A877F] md:hidden">Role: </span>
                <span>{item.role}</span>
              </div>

              {/* Result Badge */}
              <div className="md:w-3/12 flex items-center md:justify-end gap-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider ${
                  item.highlight
                    ? 'bg-[#F04B16] text-[#FAF7F0]'
                    : 'bg-[#151515] text-[#FAF7F0]'
                }`}>
                  {item.result.includes('1st') ? (
                    <Trophy className="w-3.5 h-3.5" />
                  ) : (
                    <Award className="w-3.5 h-3.5" />
                  )}
                  <span>{item.result}</span>
                </span>
              </div>

              {/* Year */}
              <div className="md:w-1/12 flex items-center md:justify-end font-mono text-xs text-[#8A877F]">
                <Calendar className="w-3 h-3 mr-1 md:hidden" />
                <span>{item.year}</span>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default HackathonsSection;