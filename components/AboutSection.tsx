import React from 'react';
import ScrollReveal from './ScrollReveal';

const AboutSection: React.FC = () => {
  const architecturalDirectives = [
    {
      num: '01',
      title: 'Backend & API Architecture',
      description: 'Designing production-grade services in Python and FastAPI. Focused on predictable schema modeling, JWT-authenticated REST APIs, and containerized microservices ready for deployment.'
    },
    {
      num: '02',
      title: 'Multi-Agent AI Systems',
      description: 'Architecting coordinated AI workflows that process unstructured incident reports into structured intelligence, geospatial hazard scoring, and real-time situational insights.'
    },
    {
      num: '03',
      title: 'Distributed Telemetry & Monitoring',
      description: 'Building telemetry pipelines handling concurrent data streams, heartbeat tracking, machine lifecycle state machines (ACTIVE/IDLE/OFFLINE), and energy optimization analytics.'
    },
    {
      num: '04',
      title: 'Hackathon Leadership & Delivery',
      description: 'Leading engineering teams across multiple state and national hackathons. Owning architecture end-to-end and delivering full-stack solutions under strict 24–48 hour deadlines.'
    }
  ];

  return (
    <section id="about" className="mb-24 md:mb-32 scroll-mt-28">
      {/* Clean Editorial Section Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-[2px] bg-[#F28C28]" />
          <span className="text-xs uppercase tracking-widest text-[#F28C28] font-semibold">
            Background & Philosophy
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F2ED] tracking-tight mb-8">
          Architectural Discipline Under Pressure
        </h2>
      </ScrollReveal>

      {/* Editorial Lead Pull Statement */}
      <ScrollReveal direction="up" distance={18} duration={600} delay={60}>
        <div className="py-6 border-y border-[#292929] mb-12">
          <p className="text-lg sm:text-xl md:text-2xl text-[#F5F2ED] font-normal leading-relaxed max-w-4xl">
            "Software that functions reliably under real-world conditions requires clear architectural discipline: normalized data schemas, explicit service boundaries, and reproducible container environments."
          </p>
        </div>
      </ScrollReveal>

      {/* Two-Column Open Editorial Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Narrative Background & Academic Context */}
        <div className="lg:col-span-6 space-y-6 text-sm sm:text-base text-[#929292] leading-relaxed">
          <ScrollReveal direction="up" distance={18} duration={550} delay={100}>
            <p>
              I build <span className="text-[#F5F2ED] font-medium">backend systems</span> and <span className="text-[#F5F2ED] font-medium">AI-powered applications</span>. My work focuses on designing APIs, managing structured data pipelines, and deploying containerized services. I work primarily with Python, FastAPI, PostgreSQL, and Docker.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={18} duration={550} delay={150}>
            <p>
              Having led engineering teams through multiple competitive hackathons, I approach software with a bias toward clean execution: choosing robust technologies over unnecessary abstraction, handling database constraints properly, and validating edge cases early.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={18} duration={550} delay={200}>
            <p>
              Currently expanding my expertise in distributed systems, telemetry pipelines, and high-performance backend infrastructure.
            </p>
          </ScrollReveal>

          {/* Integrated Education & Location Strip (Typographic, No Box) */}
          <ScrollReveal direction="up" distance={18} duration={550} delay={250}>
            <div className="pt-6 border-t border-[#292929] space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#F28C28] font-semibold block">
                Academic Foundation
              </span>
              <div className="text-xs space-y-1">
                <p className="text-[#F5F2ED] font-medium">
                  PES Institute of Advanced Management Studies
                </p>
                <p className="text-[#929292]">
                  Bachelor of Computer Applications (BCA) · 2024–2027
                </p>
                <p className="text-[#F5F2ED]">
                  Cumulative CGPA: <span className="text-[#F28C28] font-semibold">8.53 / 10</span> · Shimoga, Karnataka, India
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Architectural Focus Directives (Typographic List, No Cards) */}
        <div className="lg:col-span-6 space-y-8">
          <div className="pb-2">
            <span className="text-xs uppercase tracking-wider text-[#929292] font-semibold block">
              Core Engineering Focus
            </span>
          </div>

          <div className="space-y-6">
            {architecturalDirectives.map((item, idx) => (
              <ScrollReveal key={item.num} delay={100 + idx * 75} direction="up" distance={16} duration={500}>
                <div className="pb-6 border-b border-[#292929]/70 group">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="text-xs font-mono text-[#F28C28] font-semibold">
                      {item.num}
                    </span>
                    <h3 className="text-base font-semibold text-[#F5F2ED] group-hover:text-[#F28C28] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#929292] leading-relaxed pl-7">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
