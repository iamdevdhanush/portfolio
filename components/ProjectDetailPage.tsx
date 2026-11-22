import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';
import SocialButton from './SocialButton';
import type { Project } from '../types';

interface ProjectDetailPageProps {
  project: Project;
  allProjects: Project[];
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, allProjects }) => {
  const relatedProjects = useMemo(() => {
    if (!allProjects) return [];
    return allProjects
      .filter((p) => p.slug !== project.slug)
      .map((p) => ({ ...p, overlap: p.tags.filter((tag) => project.tags.includes(tag)).length }))
      .filter((p) => p.overlap > 0)
      .sort((a, b) => b.overlap - a.overlap)
      .slice(0, 2);
  }, [project, allProjects]);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-28 md:pt-36 pb-24 relative z-10 animate-fade-in text-[#F5F2ED]">
      {/* Back button */}
      <Link
        to="/#projects"
        className="group mb-8 inline-flex items-center gap-2 text-xs font-mono text-[#929292] hover:text-[#F28C28] transition-colors cursor-pointer min-h-[44px]"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#F28C28]" />
        <span className="uppercase tracking-wider">Back to Projects</span>
      </Link>

      {/* Clean Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#929292] mb-8">
        <Link to="/" className="hover:text-[#F5F2ED] transition-colors">Home</Link>
        <span>/</span>
        <Link to="/#projects" className="hover:text-[#F5F2ED] transition-colors">Projects</Link>
        <span>/</span>
        <span className="text-[#F28C28]">{project.title}</span>
      </nav>

      {/* Project Header */}
      <div className="border-b border-[#292929] pb-8 mb-10">
        <div className="flex items-start gap-5 mb-4">
          <div className="w-12 h-12 bg-[#171719] rounded-xl flex items-center justify-center shrink-0 border border-[#292929] text-[#F28C28]">
            {project.icon}
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#F5F2ED] tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm text-[#929292] mt-1">{project.subtitle}</p>
          </div>
        </div>

        {project.badge && (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F28C28] bg-[#F28C28]/10 border border-[#F28C28]/30 rounded-full px-3 py-1 mb-6">
            {project.badge}
          </span>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#171719] text-[#F5F2ED] text-xs px-3 py-1 rounded-md border border-[#292929]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#171719] border border-[#292929] hover:border-[#F28C28]/50 text-xs text-[#F5F2ED] hover:text-[#F28C28] transition-colors"
            >
              <Github className="w-4 h-4 text-[#F28C28]" />
              <span>Source Code (GitHub)</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#929292]" />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F28C28] text-[#0B0C0E] text-xs font-semibold hover:bg-[#FA9E42] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Narrative & Architecture Sections */}
      <div className="space-y-10 text-[#929292] leading-relaxed">
        {/* Overview */}
        <div className="bg-[#111214] border border-[#292929] rounded-2xl p-6 sm:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#F28C28] mb-3">
            Overview
          </h2>
          <p className="text-sm sm:text-base text-[#F5F2ED] leading-relaxed font-normal">
            {project.longDescription}
          </p>
        </div>

        {/* Problem Statement */}
        {project.problemStatement && (
          <div className="bg-[#111214] border border-[#292929] rounded-2xl p-6 sm:p-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#F28C28] mb-3">
              Problem Statement
            </h2>
            <p className="text-sm text-[#929292] leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        )}

        {/* Architecture & Capabilities */}
        <div className="bg-[#111214] border border-[#292929] rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-[#F28C28]" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#F28C28]">
              Architecture & Stack
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#171719] border border-[#292929] rounded-xl p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F5F2ED] mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#F5F2ED] bg-[#111214] border border-[#292929] rounded px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#171719] border border-[#292929] rounded-xl p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F5F2ED] mb-3">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-[#929292] flex items-start gap-2">
                    <span className="text-[#F28C28] mt-0.5">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Achievements */}
        <div className="bg-[#111214] border border-[#292929] rounded-2xl p-6 sm:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#F28C28] mb-4">
            Technical Achievements
          </h2>
          <div className="space-y-3">
            {project.technicalAchievements.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-[#171719] border border-[#292929] rounded-xl p-3.5">
                <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#F5F2ED] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="bg-[#111214] border border-[#292929] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-[#F28C28]" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#F28C28]">
                Challenges Solved
              </h2>
            </div>
            <ul className="space-y-3">
              {project.challenges.map((item, index) => (
                <li key={index} className="bg-[#171719] border border-[#292929] rounded-xl p-4 text-xs sm:text-sm text-[#929292]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="bg-[#111214] border border-[#292929] rounded-2xl p-6 sm:p-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#F28C28] mb-4">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((item, index) => (
                <div key={index} className="bg-[#171719] border border-[#292929] rounded-xl p-4 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-[#111214] border border-[#292929] flex items-center justify-center text-xs text-[#F28C28] shrink-0 font-medium">
                    {index + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-[#F5F2ED]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="mt-16 pt-12 border-t border-[#292929]">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#F28C28] mb-6">
            Related Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedProjects.map((p) => (
              <Link
                key={p.slug}
                to={'/project/' + p.slug}
                className="flex flex-col p-6 rounded-2xl border border-[#292929] bg-[#111214] hover:border-[#F28C28]/50 transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="p-2.5 rounded-lg bg-[#171719] border border-[#292929] text-[#F28C28]">
                    {p.icon}
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#929292] group-hover:text-[#F28C28] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-bold text-base text-[#F5F2ED] group-hover:text-[#F28C28] transition-colors mb-1">
                  {p.title}
                </h3>
                <p className="text-xs text-[#929292] line-clamp-2">{p.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Social / Contact connectors */}
      <div className="mt-20 pt-8 border-t border-[#292929] flex justify-center items-center gap-4">
        <SocialButton icon={<Github className="w-4 h-4" />} href="https://github.com/iamdevdhanush" label="GitHub" />
        <SocialButton icon={<ExternalLink className="w-4 h-4" />} href="https://www.linkedin.com/in/dhanushdprabhu/" label="LinkedIn" />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
