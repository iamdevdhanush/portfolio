import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code, Cpu, Activity, MessageSquare } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onNavigate: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const projectPath = '/project/' + project.slug;

  // Render Flagship Layout for Avana V2
  if (project.isFlagship) {
    return (
      <div className="relative bg-[#111214] border border-[#292929] hover:border-[#F28C28]/60 rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#F28C28]/5 overflow-hidden group">
        {/* Topographic Background Contour Elements */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-[#292929]/40 pointer-events-none group-hover:border-[#F28C28]/20 transition-colors" />

        {/* Flagship Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#292929]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F28C28] animate-pulse" />
            <span className="font-mono text-xs font-semibold text-[#F28C28] uppercase tracking-wider">
              FLAGSHIP SYSTEM ARCHITECTURE
            </span>
          </div>
          {project.badge && (
            <span className="font-mono text-[11px] text-[#F5F2ED] bg-[#171719] px-3 py-1 rounded-full border border-[#292929]">
              {project.badge}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Project Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#171719] border border-[#292929] flex items-center justify-center text-[#F28C28] shrink-0">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F2ED] tracking-tight group-hover:text-[#F28C28] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#929292] font-mono mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#F5F2ED]/90 leading-relaxed mb-6 font-normal">
                {project.description}
              </p>

              {/* Problem Statement */}
              {project.problemStatement && (
                <div className="bg-[#171719] border border-[#292929] rounded-xl p-4 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#F28C28] block mb-1">
                    Problem Solved
                  </span>
                  <p className="text-xs text-[#929292] leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
              )}

              {/* Technical Features & Highlights */}
              <div className="mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#929292] block mb-2">
                  Key Technical Features
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-[#929292] flex items-start gap-2">
                      <span className="text-[#F28C28] font-mono mt-0.5">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-[#F5F2ED] bg-[#171719] px-2.5 py-1 rounded-md border border-[#292929]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links / Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#292929]">
              <Link
                to={projectPath}
                className="px-5 py-2.5 bg-[#F28C28] text-[#0B0C0E] text-xs font-semibold rounded-xl hover:bg-[#FA9E42] transition-colors flex items-center gap-2 group/btn cursor-pointer"
              >
                <span>Read Full Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#171719] border border-[#292929] hover:border-[#F28C28]/40 text-[#F5F2ED] hover:text-[#F28C28] text-xs font-mono rounded-xl transition-colors flex items-center gap-2"
                >
                  <Code className="w-3.5 h-3.5 text-[#F28C28]" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual Architectural Schematic Preview */}
          <div className="lg:col-span-5">
            <div className="bg-[#171719] border border-[#292929] rounded-xl p-5 relative overflow-hidden flex flex-col justify-between h-full min-h-[320px]">
              {/* Header of Schematic */}
              <div className="flex items-center justify-between border-b border-[#292929] pb-3 mb-4 font-mono text-[11px] text-[#929292]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[#F5F2ED]">AVANA-V2.SERVICE</span>
                </div>
                <span>POSTGIS · 14°N</span>
              </div>

              {/* Schematic Graphic / Wireframe Map */}
              <div className="relative my-4 aspect-[4/3] rounded-lg bg-[#0B0C0E] border border-[#292929] p-4 flex flex-col justify-between overflow-hidden">
                {/* Visual Topographic Isolines for heatmap representation */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 150">
                  <circle cx="100" cy="75" r="50" stroke="#292929" strokeWidth="1" fill="none" />
                  <circle cx="100" cy="75" r="35" stroke="#F28C28" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                  <circle cx="100" cy="75" r="20" stroke="#F28C28" strokeWidth="1" fill="none" />
                  <line x1="100" y1="20" x2="100" y2="130" stroke="#292929" strokeWidth="0.5" />
                  <line x1="40" y1="75" x2="160" y2="75" stroke="#292929" strokeWidth="0.5" />
                </svg>

                <div className="flex justify-between items-center z-10 font-mono text-[10px] text-[#929292]">
                  <span className="text-[#F28C28] bg-[#111214] px-1.5 py-0.5 rounded border border-[#292929]">
                    AGENT PIPELINE ACTIVE
                  </span>
                  <span>LATENCY: 42ms</span>
                </div>

                {/* Central Agent Node Diagram */}
                <div className="z-10 flex flex-col items-center justify-center my-auto">
                  <div className="w-12 h-12 rounded-full bg-[#111214] border border-[#F28C28] flex items-center justify-center shadow-lg shadow-[#F28C28]/20">
                    <Cpu className="w-5 h-5 text-[#F28C28]" />
                  </div>
                  <span className="font-mono text-[10px] text-[#F5F2ED] mt-2 bg-[#111214] px-2 py-0.5 rounded border border-[#292929]">
                    MULTI-AGENT SPATIAL ENGINE
                  </span>
                </div>

                <div className="flex justify-between items-center z-10 font-mono text-[10px] text-[#929292]">
                  <span>REPORTS: INGESTED</span>
                  <span className="text-emerald-400">STATUS: HEALTHY</span>
                </div>
              </div>

              {/* Schematic Metadata */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#929292] pt-2 border-t border-[#292929]">
                <div>
                  <span className="text-[#929292] block text-[9px]">ENGINE</span>
                  <span className="text-[#F5F2ED]">FastAPI + PostGIS</span>
                </div>
                <div>
                  <span className="text-[#929292] block text-[9px]">ORCHESTRATION</span>
                  <span className="text-[#F28C28]">Multi-Agent Workflows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Secondary Projects (GreenOps & Little Heartbeat)
  return (
    <div className="bg-[#111214] border border-[#292929] hover:border-[#F28C28]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F28C28]/5 group">
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-[#171719] border border-[#292929] flex items-center justify-center text-[#F28C28] shrink-0">
            {project.slug === 'greenops' ? (
              <Activity className="w-5 h-5 text-[#F28C28]" />
            ) : (
              <MessageSquare className="w-5 h-5 text-[#F28C28]" />
            )}
          </div>

          <div className="flex items-center gap-2">
            {project.badge && (
              <span className="font-mono text-[10px] text-[#F28C28] bg-[#F28C28]/10 border border-[#F28C28]/30 px-2.5 py-1 rounded-full">
                {project.badge}
              </span>
            )}
          </div>
        </div>

        <h3 className="font-bold text-xl text-[#F5F2ED] group-hover:text-[#F28C28] transition-colors mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-[#929292] font-mono mb-4">
          {project.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-[#929292] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Problem Statement Box */}
        {project.problemStatement && (
          <div className="bg-[#171719] border border-[#292929] rounded-xl p-3.5 mb-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F28C28] block mb-1">
              Problem Statement
            </span>
            <p className="text-xs text-[#929292] leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        )}

        {/* Technical Highlights */}
        <div className="mb-5">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#929292] block mb-2">
            Main Features
          </span>
          <ul className="space-y-1.5">
            {project.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="text-xs text-[#929292] flex items-start gap-2">
                <span className="text-[#F28C28] font-mono mt-0.5">›</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-[#F5F2ED] bg-[#171719] px-2 py-0.5 rounded border border-[#292929]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / Links */}
      <div className="flex items-center justify-between pt-4 border-t border-[#292929] text-xs font-mono">
        <Link
          to={projectPath}
          className="text-[#F5F2ED] hover:text-[#F28C28] transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
        >
          <span>Read Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#F28C28]" />
        </Link>

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#929292] hover:text-[#F5F2ED] transition-colors flex items-center gap-1.5"
          >
            <Code className="w-3.5 h-3.5" />
            <span>Code</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
