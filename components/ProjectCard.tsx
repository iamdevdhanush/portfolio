import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code, Activity, MessageSquare } from 'lucide-react';
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
      <div className="bg-[#111214] border border-[#292929] hover:border-[#F28C28]/60 rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F28C28]/5 group">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#292929]">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#171719] border border-[#292929] flex items-center justify-center text-[#F28C28]">
              {project.icon}
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] tracking-tight group-hover:text-[#F28C28] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#929292] mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>
          {project.badge && (
            <span className="text-xs font-medium text-[#F28C28] bg-[#F28C28]/10 border border-[#F28C28]/30 px-3 py-1 rounded-full">
              {project.badge}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Details */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-sm text-[#F5F2ED]/90 leading-relaxed font-normal">
              {project.description}
            </p>

            {project.problemStatement && (
              <div className="bg-[#171719] border border-[#292929] rounded-xl p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F28C28] block mb-1.5">
                  Problem Statement
                </span>
                <p className="text-xs sm:text-sm text-[#929292] leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
            )}

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#929292] block mb-2">
                Key Technical Capabilities
              </span>
              <ul className="space-y-1.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#929292] flex items-start gap-2">
                    <span className="text-[#F28C28] mt-0.5">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#F5F2ED] bg-[#171719] px-2.5 py-1 rounded-md border border-[#292929]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#292929]">
              <Link
                to={projectPath}
                className="px-5 py-2.5 bg-[#F28C28] text-[#0B0C0E] text-xs font-semibold rounded-xl hover:bg-[#FA9E42] transition-colors flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#171719] border border-[#292929] hover:border-[#F28C28]/40 text-[#F5F2ED] hover:text-[#F28C28] text-xs rounded-xl transition-colors flex items-center gap-2"
                >
                  <Code className="w-3.5 h-3.5 text-[#F28C28]" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Genuine Architecture & Technical Structure Panel (No Fake Telemetry) */}
          <div className="lg:col-span-5 bg-[#171719] border border-[#292929] rounded-xl p-6 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F2ED] pb-3 border-b border-[#292929]">
              Architecture Overview
            </h4>

            <div className="space-y-3 text-xs text-[#929292]">
              <div>
                <span className="text-xs font-medium text-[#F5F2ED] block mb-0.5">Backend Services</span>
                <span>FastAPI application with normalized PostgreSQL schemas and PostGIS spatial indexing.</span>
              </div>
              <div className="pt-3 border-t border-[#292929]">
                <span className="text-xs font-medium text-[#F5F2ED] block mb-0.5">Processing Pipeline</span>
                <span>Multi-agent workflow to normalize unstructured incident reports and calculate location risk scores.</span>
              </div>
              <div className="pt-3 border-t border-[#292929]">
                <span className="text-xs font-medium text-[#F5F2ED] block mb-0.5">Frontend Dashboard</span>
                <span>React dashboard with real-time safety heatmap rendering and safe-route navigation.</span>
              </div>
              <div className="pt-3 border-t border-[#292929]">
                <span className="text-xs font-medium text-[#F5F2ED] block mb-0.5">Deployment</span>
                <span>Containerized with Docker Compose for consistent multi-service orchestration.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Secondary Projects (GreenOps & Little Heartbeat)
  return (
    <div className="bg-[#111214] border border-[#292929] hover:border-[#F28C28]/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F28C28]/5 group h-full">
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#171719] border border-[#292929] flex items-center justify-center text-[#F28C28] shrink-0">
            {project.slug === 'greenops' ? (
              <Activity className="w-5 h-5 text-[#F28C28]" />
            ) : (
              <MessageSquare className="w-5 h-5 text-[#F28C28]" />
            )}
          </div>

          {project.badge && (
            <span className="text-xs font-medium text-[#F28C28] bg-[#F28C28]/10 border border-[#F28C28]/30 px-2.5 py-0.5 rounded-full">
              {project.badge}
            </span>
          )}
        </div>

        <h3 className="font-semibold text-xl text-[#F5F2ED] group-hover:text-[#F28C28] transition-colors mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-[#929292] mb-4">
          {project.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-[#929292] leading-relaxed mb-4">
          {project.description}
        </p>

        {project.problemStatement && (
          <div className="bg-[#171719] border border-[#292929] rounded-xl p-3.5 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F28C28] block mb-1">
              Problem Statement
            </span>
            <p className="text-xs text-[#929292] leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        )}

        <div className="mb-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#929292] block mb-2">
            Key Features
          </span>
          <ul className="space-y-1.5">
            {project.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="text-xs text-[#929292] flex items-start gap-2">
                <span className="text-[#F28C28] mt-0.5">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-[#F5F2ED] bg-[#171719] px-2 py-0.5 rounded border border-[#292929]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / Links */}
      <div className="flex items-center justify-between pt-4 border-t border-[#292929] text-xs">
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
