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
    <section id="hackathons" className="mb-24 md:mb-32 scroll-mt-28">
      {/* Clean Editorial Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-5 h-[2px] bg-[#F28C28]" />
              <span className="text-xs uppercase tracking-widest text-[#F28C28] font-semibold">
                Engineering Leadership
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] tracking-tight">
              Execution Under Crucible Constraints
            </h2>
          </div>
          <span className="text-xs text-[#929292]">
            Lessons from collegiate, state, and national hackathon leadership
          </span>
        </div>
      </ScrollReveal>

      {/* Narrative Lead Paragraph */}
      <ScrollReveal direction="up" distance={18} duration={600} delay={60}>
        <div className="mb-12 max-w-3xl">
          <p className="text-base sm:text-lg text-[#929292] leading-relaxed">
            In competitive 24 to 48-hour sprints, software architecture either holds up under pressure or collapses. Leading teams in these environments requires quick, pragmatic triage: establishing system contracts early, avoiding speculative complexity, and shipping verifiable code.
          </p>
        </div>
      </ScrollReveal>

      {/* Asymmetric Numbered Narrative Matrix (Zero Cards, Zero Boxed Icons) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-[#292929] pt-8">
        {leadershipPrinciples.map((item, idx) => (
          <ScrollReveal key={item.num} delay={idx * 75} direction="up" distance={16} duration={500}>
            <div className="space-y-3 group">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-[#F28C28] font-bold">
                  {item.num}.
                </span>
                <h3 className="text-base font-semibold text-[#F5F2ED] group-hover:text-[#F28C28] transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#929292] leading-relaxed pl-7">
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
