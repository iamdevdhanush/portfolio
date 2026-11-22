import React from 'react';
import { Users, Timer, Compass, Shield, Terminal, ArrowRight, CheckCircle2 } from 'lucide-react';

const HackathonsSection: React.FC = () => {
  const leadershipFacets = [
    {
      icon: <Users className="w-5 h-5 text-[#F28C28]" />,
      title: 'Architectural Scoping & Delegation',
      description: 'Establishing strict API contracts, data schemas, and sprint checkpoints within hour zero. Dividing responsibilities across frontend interface, backend pipelines, and cloud infra to eliminate blockers.'
    },
    {
      icon: <Timer className="w-5 h-5 text-[#F28C28]" />,
      title: 'High-Velocity Decision Making',
      description: 'Navigating technical debt versus speed under 24–48 hour clocks. Prioritizing core computational engines over cosmetic fluff, ensuring robust error handling on primary paths.'
    },
    {
      icon: <Terminal className="w-5 h-5 text-[#F28C28]" />,
      title: 'Zero-Failure Production Deployments',
      description: 'Enforcing multi-stage Docker builds and automated seed scripts so the live application deploys smoothly on judge staging environments with zero dependency discrepancies.'
    },
    {
      icon: <Compass className="w-5 h-5 text-[#F28C28]" />,
      title: 'Live Technical Defense & Communication',
      description: 'Articulating system architecture, PostGIS geospatial queries, and algorithmic complexity to industry judging panels with clarity and authoritative domain mastery.'
    }
  ];

  return (
    <section id="hackathons" className="mb-24 md:mb-32 scroll-mt-28">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#F28C28] uppercase tracking-widest">
            <span>04 // HIGH-PRESSURE EXECUTION</span>
            <span className="w-2 h-px bg-[#F28C28]" />
            <span>SPRINT LEADERSHIP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F2ED] tracking-tight">
            Hackathons & Engineering Leadership
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#929292] font-mono max-w-md">
          Distinct from awards: focusing on real-time collaboration, team delegation, architectural decisions, and shipping complete working systems under extreme constraints.
        </p>
      </div>

      {/* Leadership Stats Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#111214] border border-[#292929] rounded-xl p-4 sm:p-5">
          <span className="font-mono text-xl sm:text-2xl font-bold text-[#F28C28] block mb-1">
            3+
          </span>
          <span className="text-xs font-mono text-[#F5F2ED] block font-medium">Hackathons Led</span>
          <span className="text-[11px] text-[#929292]">End-to-end technical direction</span>
        </div>

        <div className="bg-[#111214] border border-[#292929] rounded-xl p-4 sm:p-5">
          <span className="font-mono text-xl sm:text-2xl font-bold text-[#F28C28] block mb-1">
            24h – 48h
          </span>
          <span className="text-xs font-mono text-[#F5F2ED] block font-medium">Sprint Timeframes</span>
          <span className="text-[11px] text-[#929292]">Rapid zero-to-one delivery</span>
        </div>

        <div className="bg-[#111214] border border-[#292929] rounded-xl p-4 sm:p-5">
          <span className="font-mono text-xl sm:text-2xl font-bold text-[#F28C28] block mb-1">
            100%
          </span>
          <span className="text-xs font-mono text-[#F5F2ED] block font-medium">Live Demos Functional</span>
          <span className="text-[11px] text-[#929292]">No slide-only presentations</span>
        </div>

        <div className="bg-[#111214] border border-[#292929] rounded-xl p-4 sm:p-5">
          <span className="font-mono text-xl sm:text-2xl font-bold text-[#F28C28] block mb-1">
            2x
          </span>
          <span className="text-xs font-mono text-[#F5F2ED] block font-medium">State/National Podiums</span>
          <span className="text-[11px] text-[#929292]">Top 5 Finalist & Runner-Up</span>
        </div>
      </div>

      {/* 4 Leadership Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {leadershipFacets.map((facet, idx) => (
          <div
            key={idx}
            className="bg-[#111214] border border-[#292929] hover:border-[#F28C28]/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-[#171719] border border-[#292929] flex items-center justify-center shrink-0 text-[#F28C28]">
              {facet.icon}
            </div>
            <div>
              <h3 className="font-bold text-base text-[#F5F2ED] mb-1.5">
                {facet.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#929292] leading-relaxed">
                {facet.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HackathonsSection;
