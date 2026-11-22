import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, Activity, Layers, Cpu, Server, Compass } from 'lucide-react';
import { projects } from '../data/projects';
import ScrollReveal from './ScrollReveal';

interface ProjectsSectionProps {
  onNavigate: (id: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigate: _onNavigate }) => {
  const avana = projects.find(p => p.slug === 'avana-v2');
  const greenops = projects.find(p => p.slug === 'greenops');
  const littleHeartbeat = projects.find(p => p.slug === 'little-heartbeat');

  return (
    <section id="projects" className="mb-24 md:mb-32 scroll-mt-28">
      {/* Clean Editorial Section Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-4 border-b border-[#292929]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-5 h-[2px] bg-[#F28C28]" />
              <span className="text-xs uppercase tracking-widest text-[#F28C28] font-semibold">
                Selected Works
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F2ED] tracking-tight">
              Production Architecture & Systems
            </h2>
          </div>
          <span className="text-xs text-[#929292]">
            Custom backend architectures, spatial data, and telemetry
          </span>
        </div>
      </ScrollReveal>

      <div className="space-y-16 md:space-y-24">
        
        {/* ============================================================ */}
        {/* 1. AVANA V2 — FULL-WIDTH CINEMATIC EDITORIAL SPREAD           */}
        {/* ============================================================ */}
        {avana && (
          <ScrollReveal direction="up" distance={22} duration={650}>
            <div className="border border-[#292929] hover:border-[#F28C28]/50 rounded-2xl p-6 sm:p-10 lg:p-12 bg-[#111214] transition-all duration-300">
              
              {/* Flagship Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-6 border-b border-[#292929]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#F28C28] bg-[#F28C28]/10 border border-[#F28C28]/30 px-3 py-1 rounded-full">
                      {avana.badge}
                    </span>
                    <span className="text-xs text-[#929292] font-mono">Flagship System</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F2ED] tracking-tight">
                    {avana.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#929292] mt-1 font-medium">
                    {avana.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to={`/project/${avana.slug}`}
                    className="px-5 py-2.5 bg-[#F28C28] text-[#0B0C0E] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#FA9E42] transition-colors flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Full Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  {avana.githubLink && (
                    <a
                      href={avana.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-[#292929] hover:border-[#F28C28]/40 text-[#F5F2ED] hover:text-[#F28C28] transition-colors"
                      aria-label="View Avana V2 GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Two-Column Asymmetrical Composition */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left: Narrative, Problem Statement & Capabilities */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#929292] font-semibold block mb-2">
                      System Purpose & Problem Context
                    </span>
                    <p className="text-sm sm:text-base text-[#F5F2ED]/90 leading-relaxed font-normal">
                      {avana.description}
                    </p>
                    {avana.problemStatement && (
                      <p className="text-xs sm:text-sm text-[#929292] leading-relaxed mt-2 pt-2 border-t border-[#292929]/60">
                        {avana.problemStatement}
                      </p>
                    )}
                  </div>

                  {/* Highlights */}
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#F28C28] font-semibold block mb-2.5">
                      Core Engineering Solutions
                    </span>
                    <div className="space-y-2">
                      {avana.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#929292]">
                          <span className="text-[#F28C28] font-bold mt-0.5">•</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-2">
                    <span className="text-xs uppercase tracking-wider text-[#929292] font-semibold block mb-2">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {avana.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono text-[#F5F2ED] bg-[#171719] px-2.5 py-1 rounded-md border border-[#292929]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Authentic Architecture Blueprint (No Fake Telemetry) */}
                <div className="lg:col-span-5 bg-[#171719] border border-[#292929] rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#292929]">
                    <span className="text-xs uppercase tracking-wider text-[#F5F2ED] font-semibold">
                      System Architecture Pipeline
                    </span>
                    <span className="text-[10px] text-[#F28C28] font-mono">FastAPI × PostGIS</span>
                  </div>

                  {/* Typographic Architecture Flow */}
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-lg bg-[#111214] border border-[#292929]">
                      <div className="flex items-center justify-between text-[#F5F2ED] font-medium mb-1">
                        <span className="flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-[#F28C28]" />
                          <span>01. Multi-Source Ingestion</span>
                        </span>
                        <span className="text-[#929292] text-[10px] font-mono">REST API</span>
                      </div>
                      <p className="text-[#929292] text-[11px] leading-relaxed">
                        Receives unstructured incident reports and geospatial telemetry streams.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-[#111214] border border-[#292929]">
                      <div className="flex items-center justify-between text-[#F5F2ED] font-medium mb-1">
                        <span className="flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-[#F28C28]" />
                          <span>02. Agent Normalization</span>
                        </span>
                        <span className="text-[#929292] text-[10px] font-mono">Gemini AI</span>
                      </div>
                      <p className="text-[#929292] text-[11px] leading-relaxed">
                        Extracts structured severity metadata and computes dynamic hazard scores.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-[#111214] border border-[#292929]">
                      <div className="flex items-center justify-between text-[#F5F2ED] font-medium mb-1">
                        <span className="flex items-center gap-1.5">
                          <Server className="w-3.5 h-3.5 text-[#F28C28]" />
                          <span>03. PostGIS Spatial Indexing</span>
                        </span>
                        <span className="text-[#929292] text-[10px] font-mono">PostgreSQL</span>
                      </div>
                      <p className="text-[#929292] text-[11px] leading-relaxed">
                        Spatial geometry indexing for sub-second radius searches and cluster analysis.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-[#111214] border border-[#292929]">
                      <div className="flex items-center justify-between text-[#F5F2ED] font-medium mb-1">
                        <span className="flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-[#F28C28]" />
                          <span>04. Client Heatmap & Navigation</span>
                        </span>
                        <span className="text-[#929292] text-[10px] font-mono">React / Leaflet</span>
                      </div>
                      <p className="text-[#929292] text-[11px] leading-relaxed">
                        Real-time visualization of urban hazard zones and safest navigational path.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================ */}
        {/* 2. GREENOPS — ASYMMETRICAL HORIZONTAL SPLIT                  */}
        {/* ============================================================ */}
        {greenops && (
          <ScrollReveal direction="up" distance={20} duration={600}>
            <div className="border border-[#292929] hover:border-[#F28C28]/50 rounded-2xl p-6 sm:p-8 lg:p-10 bg-[#111214] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Project Identity & Engineering Focus */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#F28C28]" />
                    <span className="text-xs uppercase tracking-wider text-[#F28C28] font-semibold">
                      Distributed Infrastructure Monitoring
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] tracking-tight">
                    {greenops.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#929292] font-mono">
                    {greenops.subtitle}
                  </p>

                  <p className="text-sm text-[#929292] leading-relaxed">
                    {greenops.description}
                  </p>

                  {greenops.problemStatement && (
                    <div className="pt-2 text-xs text-[#929292] border-t border-[#292929]">
                      <span className="font-semibold text-[#F5F2ED] block mb-1">Problem:</span>
                      {greenops.problemStatement}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {greenops.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-[#F5F2ED] bg-[#171719] px-2.5 py-1 rounded border border-[#292929]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      to={`/project/${greenops.slug}`}
                      className="text-xs font-semibold text-[#F28C28] hover:text-[#FA9E42] transition-colors flex items-center gap-1.5"
                    >
                      <span>Read System Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    {greenops.githubLink && (
                      <a
                        href={greenops.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#929292] hover:text-[#F5F2ED] transition-colors flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Key Technical Specs & State Machine */}
                <div className="lg:col-span-6 bg-[#171719] border border-[#292929] rounded-xl p-6 space-y-4">
                  <span className="text-xs uppercase tracking-wider text-[#F5F2ED] font-semibold block pb-3 border-b border-[#292929]">
                    Technical Implementation Highlights
                  </span>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#F28C28] font-bold mt-0.5">•</span>
                      <div>
                        <span className="text-[#F5F2ED] font-medium block">Machine Lifecycle State Machine</span>
                        <span className="text-[#929292]">Tracks transitions across ACTIVE, IDLE, and OFFLINE states to quantify compute underutilization.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <span className="text-[#F28C28] font-bold mt-0.5">•</span>
                      <div>
                        <span className="text-[#F5F2ED] font-medium block">Telemetry Ingestion Engine</span>
                        <span className="text-[#929292]">Lightweight Python metric collectors with asynchronous ingestion handling high-frequency heartbeats.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <span className="text-[#F28C28] font-bold mt-0.5">•</span>
                      <div>
                        <span className="text-[#F5F2ED] font-medium block">Energy Optimization Analytics</span>
                        <span className="text-[#929292]">Calculates estimated idle power loss and recommends scaling schedules based on workload history.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <span className="text-[#F28C28] font-bold mt-0.5">•</span>
                      <div>
                        <span className="text-[#F5F2ED] font-medium block">Authentication & Deployment</span>
                        <span className="text-[#929292]">Secured via JWT authentication middleware; containerized with multi-stage Docker builds.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================ */}
        {/* 3. LITTLE HEARTBEAT — 24-HR SPRINT STORY SPREAD             */}
        {/* ============================================================ */}
        {littleHeartbeat && (
          <ScrollReveal direction="up" distance={20} duration={600}>
            <div className="border border-[#292929] hover:border-[#F28C28]/50 rounded-2xl p-6 sm:p-8 lg:p-10 bg-[#111214] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Sprint Context */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#F28C28] bg-[#F28C28]/10 border border-[#F28C28]/30 px-2.5 py-0.5 rounded-full">
                      {littleHeartbeat.badge}
                    </span>
                    <span className="text-xs text-[#929292]">24-Hour Sprint</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] tracking-tight">
                    {littleHeartbeat.title}
                  </h3>

                  <p className="text-xs text-[#929292]">
                    State Level Hackathon · GMIT Davangere
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {littleHeartbeat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-[#F5F2ED] bg-[#171719] px-2 py-0.5 rounded border border-[#292929]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      to={`/project/${littleHeartbeat.slug}`}
                      className="text-xs font-semibold text-[#F28C28] hover:text-[#FA9E42] transition-colors flex items-center gap-1.5"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    {littleHeartbeat.githubLink && (
                      <a
                        href={littleHeartbeat.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#929292] hover:text-[#F5F2ED] transition-colors flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Execution Narrative */}
                <div className="lg:col-span-7 space-y-3 text-sm text-[#929292] leading-relaxed">
                  <p>
                    <span className="text-[#F5F2ED] font-medium">The 24-Hour Challenge:</span> Delivered an end-to-end community support platform under strict hackathon constraints at GMIT Davangere, securing Runner-Up honors among participating collegiate teams.
                  </p>
                  <p>
                    <span className="text-[#F5F2ED] font-medium">Technical Architecture:</span> Integrated a React frontend with an Express.js backend and Supabase real-time database subscriptions to facilitate immediate message synchronization across active users.
                  </p>
                  <p>
                    <span className="text-[#F5F2ED] font-medium">AI Triage:</span> Connected Gemini AI to categorize and summarize incoming queries, assisting community responders in addressing urgent inquiries first.
                  </p>
                </div>

              </div>
            </div>
          </ScrollReveal>
        )}

      </div>

      {/* GitHub Portfolio Link */}
      <ScrollReveal delay={100} direction="up" distance={14} duration={500}>
        <div className="mt-14 pt-8 border-t border-[#292929] flex justify-between items-center text-xs text-[#929292]">
          <span>More architectural experiments and repositories on GitHub</span>
          <a
            href="https://github.com/iamdevdhanush"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5F2ED] hover:text-[#F28C28] transition-colors flex items-center gap-1.5 font-medium"
          >
            <span>github.com/iamdevdhanush</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#F28C28]" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProjectsSection;
