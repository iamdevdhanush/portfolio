import React from 'react';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 md:py-18 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Pre-title */}
        <ScrollReveal direction="up" distance={16} duration={500}>
          <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-[#F04B16]">
            <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
            <span>Profile // Architectural Conviction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#151515] tracking-tight leading-tight mb-8">
            Architecture over abstraction.
          </h2>
        </ScrollReveal>

        {/* Integrated Grid: Engineering Manifesto & Academic Foundation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Concise Narrative (74 words) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" distance={18} duration={600} delay={60}>
              <div className="space-y-4 text-base sm:text-lg text-[#151515]/90 font-serif leading-relaxed border-l-4 border-[#F04B16] pl-6 sm:pl-8 py-1">
                <p>
                  I design resilient backend services, distributed telemetry pipelines, and AI systems. My work focuses on deterministic data models, containerized microservices, and geospatial intelligence platforms using Python, FastAPI, PostgreSQL, and Docker.
                </p>
                <p className="font-sans text-sm sm:text-base text-[#151515]/80">
                  Approaching engineering through competitive hackathon crucible constraints, I prioritize explicit schema contracts and verifiable deployments over speculative abstraction—building software engineered to survive contact with reality.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Academic Foundation & Credential Plate */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" distance={18} duration={600} delay={120}>
              <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-6 shadow-sm paper-grain space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2DAC8]">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#F04B16] font-bold uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4" />
                    <span>Academic Foundation</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#8A877F] uppercase tracking-wider">
                    UNIVERSITY
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-[#151515]">
                    PES Institute of Advanced Management Studies
                  </h3>
                  <p className="font-mono text-xs text-[#8A877F]">
                    Bachelor of Computer Applications (BCA) · 2024–2027
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E2DAC8]/70 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F1EBDD] text-[#151515] border border-[#E2DAC8] font-bold">
                    <Award className="w-3.5 h-3.5 text-[#F04B16]" />
                    <span>CGPA: 8.53 / 10</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#8A877F]">
                    <MapPin className="w-3.5 h-3.5 text-[#F04B16]" />
                    <span>Shimoga, Karnataka</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;