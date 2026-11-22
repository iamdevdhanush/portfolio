import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ScrollReveal from './ScrollReveal';

interface ProjectsSectionProps {
  onNavigate: (id: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigate: _onNavigate }) => {
  const avana = projects.find(p => p.slug === 'avana-v2');
  const greenops = projects.find(p => p.slug === 'greenops');
  const littleHeartbeat = projects.find(p => p.slug === 'little-heartbeat');

  // Streamlined project specs: max 25 words description, 4-5 core tech tags
  const projectList = [
    {
      data: avana,
      category: 'Geospatial Intelligence & Multi-Agent Dispatch',
      shortDesc: 'Multi-agent emergency dispatch engine synthesizing unstructured incident reports into prioritized relief corridors with sub-second geospatial lookups.',
      coreTech: ['Python', 'FastAPI', 'PostGIS', 'Docker', 'Gemini AI'],
      isFlagship: true,
    },
    {
      data: greenops,
      category: 'Distributed Telemetry & Energy State Machine',
      shortDesc: 'Telemetry aggregation platform analyzing workload lifecycle states and heartbeats to calculate idle energy waste and automate compute scaling.',
      coreTech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'TimescaleDB'],
      isFlagship: false,
    },
    {
      data: littleHeartbeat,
      category: 'Real-Time Emergency Dispatch Platform',
      shortDesc: 'Emergency triage coordination platform with real-time websocket messaging and automated incident severity classification built under 24-hour hackathon constraints.',
      coreTech: ['React', 'Express.js', 'Supabase', 'Gemini AI', 'WebSockets'],
      isFlagship: false,
    },
  ].filter(p => p.data !== undefined);

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

        {/* Streamlined Project Cards */}
        <div className="space-y-8 md:space-y-10">
          {projectList.map(({ data, category, shortDesc, coreTech, isFlagship }, idx) => {
            if (!data) return null;
            return (
              <ScrollReveal key={data.slug} direction="up" distance={20} duration={600} delay={idx * 60}>
                <article
                  className={`border border-[#2A2A2A] hover:border-[#F04B16]/60 rounded-xl p-6 sm:p-8 lg:p-10 bg-[#090909] transition-all duration-300 ${
                    isFlagship ? 'ring-1 ring-[#F04B16]/30' : ''
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    
                    {/* Left: Project Identity & Concise Description */}
                    <div className="space-y-3.5 max-w-3xl">
                      {/* Meta Row */}
                      <div className="flex flex-wrap items-center gap-3">
                        {data.badge && (
                          <span className="px-2.5 py-0.5 rounded-full font-mono text-xs font-bold uppercase bg-[#F04B16] text-[#FAF7F0]">
                            {data.badge}
                          </span>
                        )}
                        <span className="font-mono text-xs text-[#8A877F]">
                          {category}
                        </span>
                      </div>

                      {/* Project Name */}
                      <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F0] tracking-tight uppercase">
                        {data.title}
                      </h3>

                      {/* Concise Description (Max 25 words) */}
                      <p className="font-sans text-sm sm:text-base text-[#FAF7F0]/85 leading-relaxed font-normal">
                        {shortDesc}
                      </p>

                      {/* 4–5 Relevant Technologies */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {coreTech.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs text-[#FAF7F0]/90 bg-[#151515] px-2.5 py-1 rounded border border-[#2A2A2A]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex lg:flex-col items-center lg:items-end justify-start gap-3 shrink-0 pt-2 lg:pt-0">
                      <Link
                        to={`/project/${data.slug}`}
                        className="px-5 py-2.5 bg-[#F04B16] text-[#FAF7F0] hover:bg-[#D93E0D] font-mono text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-2 cursor-pointer active:scale-95 shadow-md shadow-[#F04B16]/20"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      {data.githubLink && (
                        <a
                          href={data.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded border border-[#2A2A2A] hover:border-[#F04B16] text-[#FAF7F0] hover:text-[#F04B16] font-mono text-xs transition-colors flex items-center gap-2"
                          aria-label={`View ${data.title} source code on GitHub`}
                        >
                          <Github className="w-4 h-4" />
                          <span>Source</span>
                        </a>
                      )}
                    </div>

                  </div>
                </article>
              </ScrollReveal>
            );
          })}
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