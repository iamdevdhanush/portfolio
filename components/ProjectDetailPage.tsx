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
    <div className="max-w-5xl mx-auto px-6 pt-28 md:pt-36 pb-24 relative z-10 animate-fade-in text-[#151515]">
      
      {/* Back button */}
      <Link
        to="/#projects"
        className="group mb-8 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8A877F] hover:text-[#F04B16] transition-colors cursor-pointer min-h-[44px]"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#F04B16]" />
        <span>Return to Selected Works</span>
      </Link>

      {/* Clean Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8A877F] mb-8">
        <Link to="/" className="hover:text-[#151515] transition-colors">Home</Link>
        <span>/</span>
        <Link to="/#projects" className="hover:text-[#151515] transition-colors">Selected Works</Link>
        <span>/</span>
        <span className="text-[#F04B16] font-semibold">{project.title}</span>
      </nav>

      {/* Project Header Spread */}
      <div className="border-b border-[#E2DAC8] pb-10 mb-12">
        <div className="flex items-start gap-5 mb-4">
          <div className="w-14 h-14 bg-[#FAF7F0] rounded-xl flex items-center justify-center shrink-0 border border-[#E2DAC8] text-[#F04B16] shadow-sm">
            {project.icon}
          </div>
          <div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#151515] tracking-tight">
              {project.title}
            </h1>
            <p className="font-serif italic text-base sm:text-lg text-[#8A877F] mt-1">{project.subtitle}</p>
          </div>
        </div>

        {project.badge && (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase bg-[#F04B16] text-[#FAF7F0] px-3.5 py-1 rounded-full mb-6">
            {project.badge}
          </span>
        )}

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono bg-[#FAF7F0] text-[#151515] text-xs px-3 py-1 rounded-md border border-[#E2DAC8]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Repository & Demo Links */}
        <div className="flex flex-wrap items-center gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#151515] text-[#FAF7F0] hover:bg-[#F04B16] font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <Github className="w-4 h-4 text-[#FAF7F0]" />
              <span>Source Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F04B16] text-[#FAF7F0] hover:bg-[#D93E0D] font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Deployment</span>
            </a>
          )}
        </div>
      </div>

      {/* Narrative & Architectural Documentation */}
      <div className="space-y-10 text-[#151515] leading-relaxed">
        
        {/* Overview */}
        <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-2xl p-6 sm:p-10 shadow-sm paper-grain">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#F04B16] mb-3">
            System Overview
          </h2>
          <p className="font-serif text-base sm:text-lg text-[#151515] leading-relaxed font-normal">
            {project.longDescription}
          </p>
        </div>

        {/* Problem Statement */}
        {project.problemStatement && (
          <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-2xl p-6 sm:p-10 shadow-sm paper-grain">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#F04B16] mb-3">
              Problem Statement
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#151515]/80 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        )}

        {/* Architecture & Stack */}
        <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-2xl p-6 sm:p-10 shadow-sm paper-grain">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-4 h-4 text-[#F04B16]" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#F04B16]">
              Architecture & Stack
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F1EBDD] border border-[#E2DAC8] rounded-xl p-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#151515] mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-[#151515] bg-[#FAF7F0] border border-[#E2DAC8] rounded px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#F1EBDD] border border-[#E2DAC8] rounded-xl p-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#151515] mb-3">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="font-sans text-xs sm:text-sm text-[#151515]/80 flex items-start gap-2">
                    <span className="text-[#F04B16] font-bold mt-0.5">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Achievements */}
        <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-2xl p-6 sm:p-10 shadow-sm paper-grain">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#F04B16] mb-5">
            Technical Achievements
          </h2>
          <div className="space-y-3">
            {project.technicalAchievements.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-[#F1EBDD] border border-[#E2DAC8] rounded-xl p-4">
                <CheckCircle2 className="w-4 h-4 text-[#F04B16] shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-[#151515] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Solved */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-2xl p-6 sm:p-10 shadow-sm paper-grain">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-[#F04B16]" />
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#F04B16]">
                Challenges Solved
              </h2>
            </div>
            <ul className="space-y-3">
              {project.challenges.map((item, index) => (
                <li key={index} className="bg-[#F1EBDD] border border-[#E2DAC8] rounded-xl p-4 font-sans text-xs sm:text-sm text-[#151515]/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-2xl p-6 sm:p-10 shadow-sm paper-grain">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#F04B16] mb-5">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((item, index) => (
                <div key={index} className="bg-[#F1EBDD] border border-[#E2DAC8] rounded-xl p-4 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-[#FAF7F0] border border-[#E2DAC8] flex items-center justify-center font-mono text-xs text-[#F04B16] shrink-0 font-bold">
                    {index + 1}
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-[#151515]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="mt-16 pt-12 border-t border-[#E2DAC8]">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#8A877F] mb-6">
            Related Architectural Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((p) => (
              <Link
                key={p.slug}
                to={'/project/' + p.slug}
                className="flex flex-col p-6 rounded-2xl border border-[#E2DAC8] bg-[#FAF7F0] hover:border-[#F04B16] transition-all group cursor-pointer shadow-sm paper-grain"
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="p-2.5 rounded-lg bg-[#F1EBDD] border border-[#E2DAC8] text-[#F04B16]">
                    {p.icon}
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#8A877F] group-hover:text-[#F04B16] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#151515] group-hover:text-[#F04B16] transition-colors mb-1">
                  {p.title}
                </h3>
                <p className="font-sans text-xs text-[#8A877F] line-clamp-2">{p.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Social Connectors */}
      <div className="mt-20 pt-8 border-t border-[#E2DAC8] flex justify-center items-center gap-4">
        <SocialButton icon={<Github className="w-4 h-4" />} href="https://github.com/iamdevdhanush" label="GitHub" />
        <SocialButton icon={<ExternalLink className="w-4 h-4" />} href="https://www.linkedin.com/in/dhanushdprabhu/" label="LinkedIn" />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
