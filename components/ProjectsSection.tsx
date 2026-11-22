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
    <section id="projects" className="w-full px-5 sm:px-8 pt-12 md:pt-16 pb-20 md:pb-24 bg-[#151515] text-[#FAF7F0] ink-grain scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={16} duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#2A2A2A]">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#F04B16]">
                <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
                <span>Selected Works // 2024–2026</span>
              </div>
              <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#FAF7F0] tracking-tight uppercase">
                Selected Works
              </h2>
              <p className="font-serif italic text-base sm:text-lg text-[#8A877F] mt-1">
                Production architectures, spatial analytics, and distributed telemetry.
              </p>
            </div>
            <div className="text-right hidden md:block font-mono text-xs text-[#8A877F]">
              <span>[ 03 PRODUCTION ARCHITECTURES ]</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-24">
          
          {/* ============================================================ */}
          {/* 1. AVANA V2 — FULL-WIDTH EDITORIAL FLAGSHIP SPREAD            */}
          {/* ============================================================ */}
          {avana && (
            <ScrollReveal direction="up" distance={22} duration={650}>
              <div className="border border-[#2A2A2A] hover:border-[#F04B16]/60 rounded-xl p-6 sm:p-10 lg:p-12 bg-[#090909] transition-all duration-300">
                
                {/* Flagship Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#2A2A2A]">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#F04B16] text-[#FAF7F0]">
                        {avana.badge}
                      </span>
                      <span className="font-mono text-xs text-[#8A877F]">Flagship System</span>
                    </div>
                    <h3 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#FAF7F0] tracking-tight uppercase">
                      {avana.title}
                    </h3>
                    <p className="font-serif italic text-base sm:text-lg text-[#8A877F] mt-1">
                      {avana.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      to={`/project/${avana.slug}`}
                      className="px-5 py-2.5 bg-[#F04B16] text-[#FAF7F0] hover:bg-[#D93E0D] font-mono text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-2 cursor-pointer active:scale-95 shadow-md shadow-[#F04B16]/20"
                    >
                      <span>Full Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    {avana.githubLink && (
                      <a
                        href={avana.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded border border-[#2A2A2A] hover:border-[#F04B16] text-[#FAF7F0] hover:text-[#F04B16] transition-colors"
                        aria-label="View Avana V2 GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Two-Column Composition */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  
                  {/* Left: Problem & Capabilities */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* The Problem */}
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#F04B16] block mb-2 font-bold">
                        The Challenge
                      </span>
                      <p className="font-sans text-sm sm:text-base text-[#FAF7F0]/90 leading-relaxed font-normal">
                        {avana.problemStatement || avana.description}
                      </p>
                    </div>

                    {/* The Architectural Solution */}
                    <div className="pt-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#8A877F] block mb-2 font-bold">
                        The Architectural Solution
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-[#8A877F] leading-relaxed">
                        {avana.description}
                      </p>
                    </div>

                    {/* Key Technical Capabilities */}
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#FAF7F0] font-bold block mb-2.5">
                        Key Technical Capabilities
                      </span>
                      <div className="space-y-2">
                        {avana.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#8A877F] font-sans">
                            <span className="text-[#F04B16] font-bold mt-0.5">•</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="pt-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#8A877F] font-bold block mb-2">
                        Stack Components
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {avana.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs text-[#FAF7F0] bg-[#151515] px-2.5 py-1 rounded border border-[#2A2A2A]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Scannable Architecture Flow Blueprint */}
                  <div className="lg:col-span-5 bg-[#151515] border border-[#2A2A2A] rounded-xl p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#2A2A2A]">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#FAF7F0] font-bold">
                        Pipeline Blueprint
                      </span>
                      <span className="font-mono text-[11px] text-[#F04B16]">FastAPI × PostGIS</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3.5 rounded-lg bg-[#090909] border border-[#2A2A2A]">
                        <div className="flex items-center justify-between text-[#FAF7F0] font-medium mb-1">
                          <span className="flex items-center gap-2">
                            <Layers className="w-3.5 h-3.5 text-[#F04B16]" />
                            <span className="font-serif">01. Multi-Source Ingestion</span>
                          </span>
                          <span className="font-mono text-[#8A877F] text-[10px]">REST API</span>
                        </div>
                        <p className="font-sans text-[#8A877F] text-[11px] leading-relaxed">
                          Receives unstructured incident reports and real-time public telemetry streams.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[#090909] border border-[#2A2A2A]">
                        <div className="flex items-center justify-between text-[#FAF7F0] font-medium mb-1">
                          <span className="flex items-center gap-2">
                            <Cpu className="w-3.5 h-3.5 text-[#F04B16]" />
                            <span className="font-serif">02. Agent Normalization</span>
                          </span>
                          <span className="font-mono text-[#8A877F] text-[10px]">Gemini AI</span>
                        </div>
                        <p className="font-sans text-[#8A877F] text-[11px] leading-relaxed">
                          Extracts structured location attributes, severity levels, and hazard scores.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[#090909] border border-[#2A2A2A]">
                        <div className="flex items-center justify-between text-[#FAF7F0] font-medium mb-1">
                          <span className="flex items-center gap-2">
                            <Server className="w-3.5 h-3.5 text-[#F04B16]" />
                            <span className="font-serif">03. PostGIS Spatial Indexing</span>
                          </span>
                          <span className="font-mono text-[#8A877F] text-[10px]">PostgreSQL</span>
                        </div>
                        <p className="font-sans text-[#8A877F] text-[11px] leading-relaxed">
                          Spatial indexing on geometry columns for sub-second radius lookups and clustering.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[#090909] border border-[#2A2A2A]">
                        <div className="flex items-center justify-between text-[#FAF7F0] font-medium mb-1">
                          <span className="flex items-center gap-2">
                            <Compass className="w-3.5 h-3.5 text-[#F04B16]" />
                            <span className="font-serif">04. Client Heatmap & Navigation</span>
                          </span>
                          <span className="font-mono text-[#8A877F] text-[10px]">React / Leaflet</span>
                        </div>
                        <p className="font-sans text-[#8A877F] text-[11px] leading-relaxed">
                          Interactive safety heatmaps and algorithmic safe-route navigation guidance.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          )}

          {/* ============================================================ */}
          {/* 2. GREENOPS — ASYMMETRICAL HORIZONTAL ARCHITECTURE SPREAD    */}
          {/* ============================================================ */}
          {greenops && (
            <ScrollReveal direction="up" distance={20} duration={600}>
              <div className="border border-[#2A2A2A] hover:border-[#F04B16]/60 rounded-xl p-6 sm:p-8 lg:p-10 bg-[#090909] transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Identity & Purpose */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#F04B16]">
                      <Activity className="w-4 h-4 text-[#F04B16]" />
                      <span>Distributed Telemetry & Energy Intelligence</span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-5xl text-[#FAF7F0] tracking-tight uppercase">
                      {greenops.title}
                    </h3>

                    <p className="font-mono text-xs text-[#8A877F]">
                      {greenops.subtitle}
                    </p>

                    <p className="font-sans text-sm text-[#8A877F] leading-relaxed">
                      {greenops.description}
                    </p>

                    {greenops.problemStatement && (
                      <div className="pt-2 text-xs font-sans text-[#8A877F] border-t border-[#2A2A2A]">
                        <strong className="text-[#FAF7F0] block mb-1">Problem:</strong>
                        {greenops.problemStatement}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-2">
                      {greenops.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs text-[#FAF7F0] bg-[#151515] px-2.5 py-1 rounded border border-[#2A2A2A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <Link
                        to={`/project/${greenops.slug}`}
                        className="font-mono text-xs font-bold uppercase tracking-wider text-[#F04B16] hover:text-[#FAF7F0] transition-colors flex items-center gap-1.5"
                      >
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      {greenops.githubLink && (
                        <a
                          href={greenops.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-[#8A877F] hover:text-[#FAF7F0] transition-colors flex items-center gap-1.5"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Technical Implementation Highlights */}
                  <div className="lg:col-span-6 bg-[#151515] border border-[#2A2A2A] rounded-xl p-6 space-y-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#FAF7F0] font-bold block pb-3 border-b border-[#2A2A2A]">
                      Technical Implementation
                    </span>

                    <div className="space-y-3 text-xs font-sans">
                      <div className="flex items-start gap-2.5">
                        <span className="text-[#F04B16] font-bold mt-0.5">•</span>
                        <div>
                          <strong className="text-[#FAF7F0] block">Machine Lifecycle State Machine</strong>
                          <span className="text-[#8A877F]">Tracks transitions across ACTIVE, IDLE, and OFFLINE states to quantify compute underutilization.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-[#F04B16] font-bold mt-0.5">•</span>
                        <div>
                          <strong className="text-[#FAF7F0] block">Telemetry Ingestion Engine</strong>
                          <span className="text-[#8A877F]">Lightweight Python metric collectors with asynchronous ingestion handling high-frequency heartbeats.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-[#F04B16] font-bold mt-0.5">•</span>
                        <div>
                          <strong className="text-[#FAF7F0] block">Energy Optimization Analytics</strong>
                          <span className="text-[#8A877F]">Calculates estimated idle power loss and recommends scaling schedules based on workload history.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-[#F04B16] font-bold mt-0.5">•</span>
                        <div>
                          <strong className="text-[#FAF7F0] block">Authentication & Deployment</strong>
                          <span className="text-[#8A877F]">Secured via JWT authentication middleware; containerized with multi-stage Docker builds.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          )}

          {/* ============================================================ */}
          {/* 3. LITTLE HEARTBEAT — 24-HR SPRINT CHRONICLE SPREAD         */}
          {/* ============================================================ */}
          {littleHeartbeat && (
            <ScrollReveal direction="up" distance={20} duration={600}>
              <div className="border border-[#2A2A2A] hover:border-[#F04B16]/60 rounded-xl p-6 sm:p-8 lg:p-10 bg-[#090909] transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Sprint Context */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full font-mono text-xs font-bold uppercase bg-[#F04B16] text-[#FAF7F0]">
                        {littleHeartbeat.badge}
                      </span>
                      <span className="font-mono text-xs text-[#8A877F]">24-Hour Sprint</span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-5xl text-[#FAF7F0] tracking-tight uppercase">
                      {littleHeartbeat.title}
                    </h3>

                    <p className="font-mono text-xs text-[#8A877F]">
                      State Level Hackathon · GMIT Davangere
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {littleHeartbeat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs text-[#FAF7F0] bg-[#151515] px-2 py-0.5 rounded border border-[#2A2A2A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <Link
                        to={`/project/${littleHeartbeat.slug}`}
                        className="font-mono text-xs font-bold uppercase tracking-wider text-[#F04B16] hover:text-[#FAF7F0] transition-colors flex items-center gap-1.5"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      {littleHeartbeat.githubLink && (
                        <a
                          href={littleHeartbeat.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-[#8A877F] hover:text-[#FAF7F0] transition-colors flex items-center gap-1.5"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Execution Narrative */}
                  <div className="lg:col-span-7 space-y-3 font-sans text-sm text-[#8A877F] leading-relaxed">
                    <p>
                      <strong className="text-[#FAF7F0]">The 24-Hour Sprint:</strong> Delivered an end-to-end community support platform under strict hackathon constraints at GMIT Davangere, securing Runner-Up honors among participating collegiate teams.
                    </p>
                    <p>
                      <strong className="text-[#FAF7F0]">Technical Architecture:</strong> Integrated a React frontend with an Express.js backend and Supabase real-time database subscriptions to facilitate immediate message synchronization across active users.
                    </p>
                    <p>
                      <strong className="text-[#FAF7F0]">AI Triage:</strong> Connected Gemini AI to categorize and summarize incoming queries, assisting community responders in addressing urgent inquiries first.
                    </p>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          )}

        </div>

        {/* GitHub Colophon Link */}
        <ScrollReveal delay={100} direction="up" distance={14} duration={500}>
          <div className="mt-14 pt-8 border-t border-[#2A2A2A] flex justify-between items-center font-mono text-xs text-[#8A877F]">
            <span>More architectural repositories on GitHub</span>
            <a
              href="https://github.com/iamdevdhanush"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FAF7F0] hover:text-[#F04B16] transition-colors flex items-center gap-1.5 font-bold"
            >
              <span>github.com/iamdevdhanush</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F04B16]" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ProjectsSection;
