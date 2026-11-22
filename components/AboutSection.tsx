import React from 'react';
import { Server, Cpu, Network, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AboutSection: React.FC = () => {
  const focusAreas = [
    {
      icon: <Server className="w-5 h-5 text-[#F28C28]" />,
      title: 'Backend & API Architecture',
      description: 'Designing production-grade services in Python and FastAPI. Focused on predictable schema modeling, JWT-authenticated REST APIs, and containerized microservices ready for deployment.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#F28C28]" />,
      title: 'Multi-Agent AI Systems',
      description: 'Architecting coordinated AI workflows that process unstructured incident reports into structured intelligence, geospatial hazard scoring, and real-time situational insights.'
    },
    {
      icon: <Network className="w-5 h-5 text-[#F28C28]" />,
      title: 'Distributed Telemetry & Monitoring',
      description: 'Building telemetry pipelines handling concurrent data streams, heartbeat tracking, machine lifecycle state machines (ACTIVE/IDLE/OFFLINE), and energy optimization analytics.'
    },
    {
      icon: <Award className="w-5 h-5 text-[#F28C28]" />,
      title: 'Hackathon Leadership & Delivery',
      description: 'Leading engineering teams across multiple state and national hackathons. Owning architecture end-to-end and delivering full-stack solutions under strict 24–48 hour deadlines.'
    }
  ];

  return (
    <section id="about" className="mb-24 md:mb-32 scroll-mt-28">
      {/* Clean Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] tracking-tight">
              About
            </h2>
            <p className="text-sm text-[#929292] mt-1">
              Background, engineering focus, and software development approach.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Narrative Lead Paragraphs in Open Layout */}
      <ScrollReveal direction="up" distance={18} duration={600} delay={60}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-[#929292] leading-relaxed">
            <p>
              I build <span className="text-[#F5F2ED] font-medium">backend systems</span> and <span className="text-[#F5F2ED] font-medium">AI-powered applications</span>. My work focuses on designing APIs, managing structured data pipelines, and deploying containerized services. I work primarily with Python, FastAPI, PostgreSQL, and Docker.
            </p>
            <p>
              Having led engineering teams through multiple hackathons, I approach software with a bias toward clean architectural discipline: building systems that function reliably under real conditions, with normalized database models, secure authentication, and clear boundaries.
            </p>
            <p>
              Currently exploring distributed systems, system design patterns, and production-grade backend architecture. I treat every project as an opportunity to build dependable software.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#111214] border border-[#292929] rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F28C28] mb-4">
              Education & Background
            </h3>
            <div className="space-y-4 text-xs text-[#929292]">
              <div>
                <span className="text-xs font-medium text-[#F5F2ED] block">PES Institute of Advanced Management Studies</span>
                <span className="text-[11px] text-[#929292]">Bachelor of Computer Applications (BCA) · 2024–2027</span>
              </div>
              <div className="pt-3 border-t border-[#292929]">
                <span className="text-xs font-medium text-[#F5F2ED] block">Academic Performance</span>
                <span className="text-[11px] text-[#929292]">Cumulative CGPA: 8.53 / 10</span>
              </div>
              <div className="pt-3 border-t border-[#292929]">
                <span className="text-xs font-medium text-[#F5F2ED] block">Location</span>
                <span className="text-[11px] text-[#929292]">Shimoga, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 4 Focus Areas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {focusAreas.map((item, idx) => (
          <ScrollReveal key={idx} delay={idx * 75} direction="up" distance={18} duration={550}>
            <div
              className="bg-[#111214] border border-[#292929] hover:border-[#F28C28]/40 rounded-xl p-5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#171719] border border-[#292929] flex items-center justify-center mb-4 text-[#F28C28]">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-sm text-[#F5F2ED] mb-2 group-hover:text-[#F28C28] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#929292] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
