import React from 'react';
import ScrollReveal from './ScrollReveal';

const AboutSection: React.FC = () => {
  const architecturalPillars = [
    {
      num: '01',
      title: 'Backend Systems & API Architecture',
      description: 'Designing production-grade services in Python and FastAPI. Focused on predictable schema modeling, JWT-authenticated REST APIs, and containerized microservices ready for deployment.'
    },
    {
      num: '02',
      title: 'Multi-Agent AI Workflows',
      description: 'Architecting coordinated AI workflows that process unstructured incident reports into structured intelligence, geospatial hazard scoring, and real-time situational insights.'
    },
    {
      num: '03',
      title: 'Distributed Telemetry & Energy State Tracking',
      description: 'Building telemetry pipelines handling concurrent data streams, heartbeat tracking, machine lifecycle state machines (ACTIVE/IDLE/OFFLINE), and energy optimization analytics.'
    },
    {
      num: '04',
      title: 'Competitive Hackathon Delivery',
      description: 'Leading engineering teams across multiple state and national hackathons. Owning architecture end-to-end and delivering full-stack solutions under strict 24–48 hour deadlines.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 scroll-mt-24">
      {/* Section Pre-title */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-widest text-[#F04B16]">
          <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
          <span>Essay // Architectural Conviction</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#151515] tracking-tight leading-tight mb-3">
          The discipline of building systems that do not break.
        </h2>
      </ScrollReveal>

      {/* Editorial Pull-Quote with Handwritten Margin Note */}
      <ScrollReveal direction="up" distance={18} duration={600} delay={60}>
        <div className="relative my-8 pl-6 sm:pl-8 border-l-4 border-[#F04B16] py-2">
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#151515] leading-relaxed max-w-4xl font-normal">
            "Engineering maturity is demonstrated not by speculative abstraction, but by explicit boundaries: normalized data models, stateless handlers, and verifiable container deployments."
          </p>
          <span className="absolute -top-7 right-4 sm:right-12 font-hand text-xl sm:text-2xl text-[#F04B16] rotate-[-2deg] select-none hidden md:block">
            ✦ code that survives contact with reality
          </span>
        </div>
      </ScrollReveal>

      {/* Two-Column Editorial Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-8">
        
        {/* Left Column: Narrative Background & Academic Foundation */}
        <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#151515]/85 font-sans leading-relaxed">
          <ScrollReveal direction="up" distance={18} duration={550} delay={100}>
            <p>
              I build <strong className="text-[#151515] font-semibold">backend systems</strong> and <strong className="text-[#151515] font-semibold">AI-powered applications</strong>. My work focuses on designing APIs, managing structured data pipelines, and deploying containerized services. I work primarily with Python, FastAPI, PostgreSQL, and Docker.
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

          {/* Integrated Academic Foundation (Editorial Stamp) */}
          <ScrollReveal direction="up" distance={18} duration={550} delay={250}>
            <div className="pt-5 border-t border-[#E2DAC8] space-y-2.5">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F04B16] font-bold block">
                Academic Foundation
              </span>
              <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-4 sm:p-5 space-y-1.5">
                <p className="font-serif font-bold text-base text-[#151515]">
                  PES Institute of Advanced Management Studies
                </p>
                <p className="font-mono text-xs text-[#8A877F]">
                  Bachelor of Computer Applications (BCA) · 2024–2027
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-[#F1EBDD] text-[#151515] border border-[#E2DAC8]">
                    CGPA: <strong className="text-[#F04B16]">8.53 / 10</strong>
                  </span>
                  <span className="text-[#8A877F]">Shimoga, Karnataka, India</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Four Architectural Focus Pillars */}
        <div className="lg:col-span-6 space-y-5">
          <div className="pb-2 font-mono text-xs uppercase tracking-widest text-[#8A877F] border-b border-[#E2DAC8]">
            Core Directives & Focus
          </div>

          <div className="space-y-5">
            {architecturalPillars.map((item, idx) => (
              <ScrollReveal key={item.num} delay={100 + idx * 75} direction="up" distance={16} duration={500}>
                <div className="pb-5 border-b border-[#E2DAC8] group">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="font-mono text-sm text-[#F04B16] font-bold">
                      {item.num} //
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#151515] group-hover:text-[#F04B16] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#151515]/75 leading-relaxed pl-8">
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
