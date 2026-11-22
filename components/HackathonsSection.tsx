import React from 'react';
import { Users, Timer, Compass, Terminal } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const HackathonsSection: React.FC = () => {
  const leadershipFacets = [
    {
      icon: <Users className="w-5 h-5 text-[#F28C28]" />,
      title: 'Architectural Scoping & Delegation',
      description: 'Establishing API contracts, data schemas, and sprint checkpoints early. Dividing responsibilities across frontend, backend, and database to keep team members unblocked.'
    },
    {
      icon: <Timer className="w-5 h-5 text-[#F28C28]" />,
      title: 'Decisions Under Time Constraints',
      description: 'Making pragmatic engineering trade-offs during 24–48 hour competitions. Prioritizing core computational functionality over non-essential features, with robust handling on primary user paths.'
    },
    {
      icon: <Terminal className="w-5 h-5 text-[#F28C28]" />,
      title: 'Working Full-Stack Deployments',
      description: 'Containerizing services with Docker Compose so that judging panels evaluate a working, reproducible deployment rather than concept slides.'
    },
    {
      icon: <Compass className="w-5 h-5 text-[#F28C28]" />,
      title: 'Technical Presentation',
      description: 'Articulating system design, geospatial query mechanics, and data flow to evaluation panels clearly, defending technical architectural choices with confidence.'
    }
  ];

  return (
    <section id="hackathons" className="mb-24 md:mb-32 scroll-mt-28">
      {/* Clean Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] tracking-tight">
              Hackathons & Leadership
            </h2>
            <p className="text-sm text-[#929292] mt-1">
              Experience leading teams, making architectural decisions, and delivering working solutions under strict deadlines.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Leadership Facets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {leadershipFacets.map((facet, idx) => (
          <ScrollReveal key={idx} delay={idx * 75} direction="up" distance={18} duration={550}>
            <div
              className="bg-[#111214] border border-[#292929] hover:border-[#F28C28]/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F28C28]/5 flex items-start gap-4 h-full group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#171719] border border-[#292929] flex items-center justify-center shrink-0 text-[#F28C28]">
                {facet.icon}
              </div>
              <div>
                <h3 className="font-semibold text-base text-[#F5F2ED] mb-1.5 group-hover:text-[#F28C28] transition-colors">
                  {facet.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#929292] leading-relaxed">
                  {facet.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default HackathonsSection;
