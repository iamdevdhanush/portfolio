import React from 'react';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Pre-title */}
        <ScrollReveal direction="up" distance={16} duration={500}>
          <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-[#F04B16]">
            <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
            <span>Profile // Engineering Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#151515] tracking-tight leading-tight mb-6">
            Architecture over abstraction.
          </h2>
        </ScrollReveal>

        {/* Focused Narrative (~75 words) */}
        <ScrollReveal direction="up" distance={18} duration={600} delay={60}>
          <div className="space-y-4 text-base sm:text-lg text-[#151515]/90 font-serif leading-relaxed border-l-4 border-[#F04B16] pl-6 sm:pl-8 py-1 mb-8">
            <p>
              I design resilient backend services, distributed telemetry pipelines, and AI systems. My work focuses on deterministic data models, containerized microservices, and geospatial intelligence platforms using Python, FastAPI, PostgreSQL, and Docker.
            </p>
            <p className="font-sans text-sm sm:text-base text-[#151515]/80">
              Approaching engineering through competitive hackathon crucible constraints, I prioritize explicit schema contracts and verifiable deployments over speculative abstraction—building software engineered to survive contact with reality.
            </p>
          </div>
        </ScrollReveal>

        {/* Academic Foundation Badge */}
        <ScrollReveal direction="up" distance={16} duration={550} delay={120}>
          <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm paper-grain">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F04B16] font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#151515]">
                PES Institute of Advanced Management Studies
              </h3>
              <p className="font-mono text-xs text-[#8A877F]">
                Bachelor of Computer Applications (BCA) · Class of 2024–2027
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs shrink-0">
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
    </section>
  );
};

export default AboutSection;