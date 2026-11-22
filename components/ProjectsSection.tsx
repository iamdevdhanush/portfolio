import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, Activity, Layers, Radio, Clock, ShieldCheck } from 'lucide-react';
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
              <span>[ 03 DISTINCT SYSTEM ARCHITECTURES ]</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-12 md:space-y-16">
          
          {/* ============================================================ */}
          {/* 1. AVANA V2 — FULL-WIDTH EDITORIAL FLAGSHIP SPREAD            */}
          {/* Distinct architecture visualization with 4-stage pipeline     */}
          {/* ============================================================ */}
          {avana && (
            <ScrollReveal direction="up" distance={20} duration={600}>
              <article className="border border-[#2A2A2A] hover:border-[#F04B16]/60 rounded-xl p-6 sm:p-8 lg:p-10 bg-[#090909] transition-all duration-300 ring-1 ring-[#F04B16]/20">
                
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[#2A2A2A]">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full font-mono text-xs font-bold uppercase bg-[#F04B16] text-[#FAF7F0]">
                        Flagship System
                      </span>
                      <span className="font-mono text-xs text-[#8A877F]">
                        Geospatial Intelligence & Multi-Agent Dispatch
                      </span>
                    </div>
                    <h3 className="font-display text-4xl sm:text-6xl text-[#FAF7F0] tracking-tight uppercase">
                      {avana.title}
                    </h3>
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
                        className="px-4 py-2.5 rounded border border-[#2A2A2A] hover:border-[#F04B16] text-[#FAF7F0] hover:text-[#F04B16] font-mono text-xs transition-colors flex items-center gap-2"
                        aria-label="View Avana V2 Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                        <span className="hidden sm:inline">Source</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Narrative & Architecture Blueprint Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Concise Concept & Tech Chips */}
                  <div className="lg:col-span-5 space-y-4">
                    <p className="font-sans text-sm sm:text-base text-[#FAF7F0]/90 leading-relaxed font-normal">
                      Multi-agent emergency dispatch engine synthesizing unstructured incident reports into prioritized relief corridors with sub-second geospatial lookups.
                    </p>

                    <div className="pt-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#8A877F] font-bold block mb-2">
                        Core Technologies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'FastAPI', 'PostGIS', 'Docker', 'Gemini AI'].map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs text-[#FAF7F0] bg-[#151515] px-2.5 py-1 rounded border border-[#2A2A2A]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#8A877F]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#F04B16]" />
                      <span>Validated: Top 5 National AI Hackathon Finalist</span>
                    </div>
                  </div>

                  {/* Right Column: Embedded Architecture Visualization */}
                  <div className="lg:col-span-7 bg-[#151515] border border-[#2A2A2A] rounded-xl p-5 space-y-3">
                    <div className="flex items-center justify-between pb-2.5 border-b border-[#2A2A2A]">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#FAF7F0] font-bold flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#F04B16]" />
                        <span>System Pipeline Architecture</span>
                      </span>
                      <span className="font-mono text-[11px] text-[#F04B16] font-semibold">FastAPI × PostGIS</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                      <div className="p-3 rounded-lg bg-[#090909] border border-[#2A2A2A] space-y-1">
                        <div className="flex items-center justify-between text-[#FAF7F0] font-medium">
                          <span className="font-serif">01. Ingestion</span>
                          <span className="font-mono text-[#8A877F] text-[10px]">REST API</span>
                        </div>
                        <p className="font-sans text-[#8A877F] text-[11px] leading-snug">
                          Async endpoints ingest unstructured incident reports and stream alerts.
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-[#090909] border border-[#2A2A2A] space-y-1">
                        <div className="flex items-center justify-between text-[#FAF7F0] font-medium">
                          <span className="font-serif">02. AI Normalization</span>
                          <span className="font-mono text-[#8A877F] text-[10px]">Gemini AI</span>
                        </div>
                        <p className="font-sans text-[#8A877F] text-[11px] leading-snug">
                          Multi-agent pipeline extracts severity scores and coordinates.
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-[#090909] border border-[#2A2A2A] space-y-1">
                        <div className="flex items-center justify-between text-[#FAF7F0] font-medium">
                          <span className="font-serif">03. Spatial Indexing</span>
                          <span className="font-mono text-[#8A877F] text-[10px]">PostGIS R-Tree</span>
                        </div>
                        <p className="font-sans text-[#8A877F] text-[11px] leading-snug">
                          GIST geometry index executes sub-second radius proximity queries.
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-[#090909] border border-[#2A2A2A] space-y-1">
                        <div className="flex items-center justify-between text-[#FAF7F0] font-medium">
                          <span className="font-serif">04. Dispatch Corridors</span>
                          <span className="font-mono text-[#8A877F] text-[10px]">Leaflet / Vectors</span>
                        </div>
                        <p className="font-sans text-[#8A877F] text-[11px] leading-snug">
                          Renders dynamic safety density heatmaps and safe route navigation.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </article>
            </ScrollReveal>
          )}

          {/* ============================================================ */}
          {/* 2. GREENOPS — INFRASTRUCTURE & TELEMETRY PRESENTATION        */}
          {/* Distinct State Machine & Energy Calculation Visualization    */}
          {/* ============================================================ */}
          {greenops && (
            <ScrollReveal direction="up" distance={20} duration={600}>
              <article className="border border-[#2A2A2A] hover:border-[#F04B16]/60 rounded-xl p-6 sm:p-8 lg:p-10 bg-[#090909] transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Identity, Description & Stack */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full font-mono text-xs font-bold uppercase bg-[#F04B16] text-[#FAF7F0]">
                        1st Place Winner
                      </span>
                      <span className="font-mono text-xs text-[#8A877F]">
                        Distributed Telemetry & Energy State Machine
                      </span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-5xl text-[#FAF7F0] tracking-tight uppercase">
                      {greenops.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-[#FAF7F0]/90 leading-relaxed font-normal">
                      Telemetry aggregation platform analyzing workload lifecycle states and heartbeats to calculate idle energy waste and automate compute scaling.
                    </p>

                    <div className="pt-1">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#8A877F] font-bold block mb-2">
                        Core Technologies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'TimescaleDB'].map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs text-[#FAF7F0] bg-[#151515] px-2.5 py-1 rounded border border-[#2A2A2A]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-4">
                      <Link
                        to={`/project/${greenops.slug}`}
                        className="font-mono text-xs font-bold uppercase tracking-wider text-[#F04B16] hover:text-[#FAF7F0] transition-colors flex items-center gap-1.5"
                      >
                        <span>Case Study</span>
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

                  {/* Right Column: Visual Lifecycle State Machine Diagram */}
                  <div className="lg:col-span-7 bg-[#151515] border border-[#2A2A2A] rounded-xl p-5 space-y-4">
                    <div className="flex items-center justify-between pb-2.5 border-b border-[#2A2A2A]">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#FAF7F0] font-bold flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#F04B16]" />
                        <span>Machine Lifecycle State Machine</span>
                      </span>
                      <span className="font-mono text-[11px] text-[#8A877F]">Heartbeat: 30s</span>
                    </div>

                    {/* State Transition Nodes */}
                    <div className="grid grid-cols-3 gap-2.5 text-center">
                      <div className="p-3 rounded-lg bg-[#090909] border border-emerald-500/40">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 mx-auto mb-1.5 animate-pulse" />
                        <span className="font-mono text-xs font-bold text-emerald-400 block">ACTIVE</span>
                        <span className="font-sans text-[10px] text-[#8A877F]">Full Utilization</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#090909] border border-amber-500/40">
                        <div className="w-2 h-2 rounded-full bg-amber-400 mx-auto mb-1.5" />
                        <span className="font-mono text-xs font-bold text-amber-400 block">IDLE</span>
                        <span className="font-sans text-[10px] text-[#8A877F]">Waste Tracking</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#090909] border border-[#2A2A2A]">
                        <div className="w-2 h-2 rounded-full bg-zinc-600 mx-auto mb-1.5" />
                        <span className="font-mono text-xs font-bold text-zinc-400 block">OFFLINE</span>
                        <span className="font-sans text-[10px] text-[#8A877F]">De-allocated</span>
                      </div>
                    </div>

                    {/* Telemetry Metrics Bar */}
                    <div className="p-3 rounded-lg bg-[#090909] border border-[#2A2A2A] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                      <div>
                        <span className="text-[#8A877F] block text-[10px]">AUTH PROTOCOL</span>
                        <span className="text-[#FAF7F0] font-semibold">JWT Bearer Header</span>
                      </div>
                      <div>
                        <span className="text-[#8A877F] block text-[10px]">INGESTION LATENCY</span>
                        <span className="text-[#FAF7F0] font-semibold">&lt; 15ms / payload</span>
                      </div>
                      <div>
                        <span className="text-[#8A877F] block text-[10px]">ENERGY SAVINGS</span>
                        <span className="text-[#F04B16] font-bold">Automated Scaling</span>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            </ScrollReveal>
          )}

          {/* ============================================================ */}
          {/* 3. LITTLE HEARTBEAT — 24-HR SPRINT & REAL-TIME WEBSOCKETS    */}
          {/* Distinct Simulated Real-Time Feed Preview Presentation       */}
          {/* ============================================================ */}
          {littleHeartbeat && (
            <ScrollReveal direction="up" distance={20} duration={600}>
              <article className="border border-[#2A2A2A] hover:border-[#F04B16]/60 rounded-xl p-6 sm:p-8 lg:p-10 bg-[#090909] transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Sprint Identity & Description */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full font-mono text-xs font-bold uppercase bg-[#F04B16] text-[#FAF7F0]">
                        Runner-Up Honors
                      </span>
                      <span className="font-mono text-xs text-[#8A877F]">
                        24-Hour Hackathon Delivery
                      </span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-5xl text-[#FAF7F0] tracking-tight uppercase">
                      {littleHeartbeat.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-[#FAF7F0]/90 leading-relaxed font-normal">
                      Emergency triage coordination platform with real-time websocket messaging and automated incident severity classification built under 24-hour hackathon constraints.
                    </p>

                    <div className="pt-1">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#8A877F] font-bold block mb-2">
                        Core Technologies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Express.js', 'Supabase', 'Gemini AI', 'WebSockets'].map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs text-[#FAF7F0] bg-[#151515] px-2.5 py-1 rounded border border-[#2A2A2A]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-4">
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

                  {/* Right Column: Simulated Real-Time Triage Interface Preview */}
                  <div className="lg:col-span-7 bg-[#151515] border border-[#2A2A2A] rounded-xl p-5 space-y-3">
                    <div className="flex items-center justify-between pb-2.5 border-b border-[#2A2A2A]">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#FAF7F0] font-bold flex items-center gap-1.5">
                        <Radio className="w-3.5 h-3.5 text-[#F04B16]" />
                        <span>Real-Time Triage Channel</span>
                      </span>
                      <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Supabase WebSocket Live
                      </span>
                    </div>

                    {/* Simulated Triage Cards */}
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-lg bg-[#090909] border border-[#F04B16]/40 flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#F04B16] text-[#FAF7F0]">
                              URGENT
                            </span>
                            <span className="font-serif font-semibold text-[#FAF7F0]">Medical Response Unit Needed</span>
                          </div>
                          <p className="font-sans text-[#8A877F] text-[11px]">
                            AI Triage automatically flagged high-severity keywords and dispatched alert.
                          </p>
                        </div>
                        <span className="font-mono text-[10px] text-[#8A877F] shrink-0">Just now</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#090909] border border-[#2A2A2A] flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-zinc-800 text-zinc-300">
                              NORMAL
                            </span>
                            <span className="font-serif font-semibold text-[#FAF7F0]">Shelter Resource Logistics</span>
                          </div>
                          <p className="font-sans text-[#8A877F] text-[11px]">
                            Categorized under community inventory support by Gemini triage parser.
                          </p>
                        </div>
                        <span className="font-mono text-[10px] text-[#8A877F] shrink-0">2m ago</span>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-[#8A877F]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#F04B16]" />
                        <span>Sprint Duration: 24 Hours</span>
                      </span>
                      <span>GMIT Davangere State Hackathon</span>
                    </div>
                  </div>

                </div>
              </article>
            </ScrollReveal>
          )}

        </div>

        {/* GitHub Colophon Link */}
        <ScrollReveal delay={100} direction="up" distance={14} duration={500}>
          <div className="mt-12 pt-6 border-t border-[#2A2A2A] flex justify-between items-center font-mono text-xs text-[#8A877F]">
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