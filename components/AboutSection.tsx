import React from 'react';
import { Server, Cpu, Database, Network, ShieldCheck, Terminal, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Server className="w-5 h-5 text-[#F28C28]" />,
      title: 'Backend & API Architecture',
      description: 'Designing production-grade services in Python and FastAPI. Focused on predictable schema modeling, JWT-authenticated REST APIs, and containerized microservices ready for deployment.',
      meta: 'Python · FastAPI · REST'
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#F28C28]" />,
      title: 'Multi-Agent AI Systems',
      description: 'Architecting coordinated AI workflows that process unstructured feeds into structured intelligence, geospatial hazard scoring, and real-time situational insights.',
      meta: 'Multi-Agent Workflows · Geospatial Analytics'
    },
    {
      icon: <Network className="w-5 h-5 text-[#F28C28]" />,
      title: 'Distributed Telemetry & Monitoring',
      description: 'Building telemetry pipelines handling concurrent data streams, heartbeat tracking, machine lifecycle state machines (ACTIVE/IDLE/OFFLINE), and energy optimization analytics.',
      meta: 'GreenOps · Telemetry · Heartbeats'
    },
    {
      icon: <Award className="w-5 h-5 text-[#F28C28]" />,
      title: 'Hackathon Leadership & Delivery',
      description: 'Leading engineering teams across multiple state and national hackathons. Owning architecture end-to-end and delivering full-stack solutions under strict 24–48 hour deadlines.',
      meta: '3+ Hackathons Led · 2x Placements'
    }
  ];

  return (
    <section id="about" className="mb-24 md:mb-32 scroll-mt-28">
      {/* Editorial Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#F28C28] uppercase tracking-widest">
              <span>02 // ARCHITECTURAL PROFILE</span>
              <span className="w-2 h-px bg-[#F28C28]" />
              <span>ENGINEERING FOCUS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F2ED] tracking-tight">
              Systems & Engineering Architecture
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#929292] font-mono max-w-md">
            Pragmatic software engineering focused on reliability, distributed system observability, and high-performance AI services.
          </p>
        </div>
      </ScrollReveal>

      {/* Narrative Lead Paragraphs in Editorial Split */}
      <ScrollReveal direction="up" distance={18} duration={600} delay={60}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7 bg-[#111214] border border-[#292929] rounded-2xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle Topographic contour curve in background */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full border border-[#292929]/40 pointer-events-none" />

            <div className="space-y-4 text-sm sm:text-base text-[#929292] leading-relaxed relative z-10 font-normal">
              <p>
                I build <span className="text-[#F5F2ED] font-medium">backend systems</span> and <span className="text-[#F5F2ED] font-medium">AI-powered applications</span>. My work centers on designing reliable APIs, managing structured data pipelines, and deploying containerized services with Docker.
              </p>
              <p>
                Having led engineering teams through multiple hackathons, I approach software with a bias toward clean architectural discipline: ensuring systems function under real conditions, with normalized database models, secure authentication, and clear boundaries.
              </p>
              <p>
                Currently exploring distributed systems, system design patterns, and production-grade backend architecture. Every build is treated as a blueprint for resilient software.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#292929] flex flex-wrap items-center gap-6 text-xs font-mono text-[#929292] relative z-10">
              <div>
                <span className="text-[#F28C28] block font-bold text-sm">BCA</span>
                <span>Degree In Progress (2027)</span>
              </div>
              <div className="h-6 w-px bg-[#292929]" />
              <div>
                <span className="text-[#F5F2ED] block font-bold text-sm">8.53 / 10</span>
                <span>Cumulative CGPA</span>
              </div>
              <div className="h-6 w-px bg-[#292929]" />
              <div>
                <span className="text-[#F5F2ED] block font-bold text-sm">SHIMOGA</span>
                <span>Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Right side: Engineering Tenets */}
          <div className="lg:col-span-5 bg-[#171719] border border-[#292929] rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#F28C28] mb-4">
                Core Engineering Tenets
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-[#F5F2ED]">
                  <ShieldCheck className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                  <span><strong>Defensive API Contracts:</strong> Strict typing with Pydantic and explicit OpenAPI specifications.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-[#F5F2ED]">
                  <Database className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                  <span><strong>Relational Integrity:</strong> Normalized PostgreSQL schemas with PostGIS geospatial indexing.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-[#F5F2ED]">
                  <Terminal className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                  <span><strong>Reproducible Environments:</strong> Multi-stage Docker containerization across development and production.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#292929] text-[11px] font-mono text-[#929292]">
              ELEVATION // 640m · PES IAMS AFFILIATION
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((pillar, idx) => (
          <ScrollReveal key={idx} delay={idx * 75} direction="up" distance={18} duration={550}>
            <div
              className="bg-[#111214] border border-[#292929] hover:border-[#F28C28]/50 rounded-xl p-5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#171719] border border-[#292929] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:border-[#F28C28]/40 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-sm text-[#F5F2ED] mb-2 group-hover:text-[#F28C28] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#929292] leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[#292929] text-[10px] font-mono text-[#F28C28]">
                {pillar.meta}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
