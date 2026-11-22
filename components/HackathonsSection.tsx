import React from 'react';
import ScrollReveal from './ScrollReveal';

const HackathonsSection: React.FC = () => {
  const leadershipPrinciples = [
    {
      num: '01',
      title: 'Architectural Scoping & Schema Contracts',
      narrative:
        'In the opening two hours of a 24–48 hour sprint, I lock down API contracts, database schemas, and service boundaries. Establishing explicit interfaces early eliminates blocking dependencies between backend, frontend, and database team members.'
    },
    {
      num: '02',
      title: 'Decisive Triage Under Time Limits',
      narrative:
        'Hackathon constraints force ruthless engineering triage. I prioritize rock-solid execution on core computational pipelines over shallow feature sets. Defending an application with zero runtime exceptions always beats presenting unfinished ambition.'
    },
    {
      num: '03',
      title: 'Dockerized Reproducible Deployments',
      narrative:
        'I enforce containerization with Docker Compose from the start. When jury evaluation begins, judges interact with a live, running full-stack deployment rather than pitch slides or simulated mocks.'
    },
    {
      num: '04',
      title: 'Defending Architectural Decisions',
      narrative:
        'Technical presentations require clear, confident articulation of design choices—explaining spatial query optimization, multi-agent pipelines, or database normalization trade-offs with verifiable clarity.'
    }
  ];

  return (
    <section id="hackathons" className="py-24 md:py-32 scroll-mt-28">
      {/* Section Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#E2DAC8]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#F04B16]">
              <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
              <span>Leadership // Crucible Constraints</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-[#151515] tracking-tight uppercase">
              Execution Under Pressure
            </h2>
          </div>
          <span className="font-hand text-2xl text-[#F04B16] -rotate-2 hidden sm:inline select-none">
            ✦ 48 hours. Zero room for bloat.
          </span>
        </div>
      </ScrollReveal>

      {/* Narrative Lead Paragraph */}
      <ScrollReveal direction="up" distance={18} duration={600} delay={60}>
        <div className="mb-14 max-w-3xl">
          <p className="font-serif italic text-lg sm:text-xl text-[#151515]/90 leading-relaxed font-normal">
            In competitive hackathons, software architecture either survives contact with reality or collapses. Leading teams in these high-stress sprints requires rapid, pragmatic triage: locking down system contracts early, containerizing immediately, and shipping verifiable code.
          </p>
        </div>
      </ScrollReveal>

      {/* Asymmetric Numbered Plates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-[#E2DAC8] pt-10">
        {leadershipPrinciples.map((item, idx) => (
          <ScrollReveal key={item.num} delay={idx * 75} direction="up" distance={16} duration={500}>
            <div className="space-y-2.5 group">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm font-bold text-[#F04B16]">
                  {item.num} //
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#151515] group-hover:text-[#F04B16] transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#151515]/75 leading-relaxed pl-8">
                {item.narrative}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default HackathonsSection;
