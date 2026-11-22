import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowLeft, ArrowRight, CheckCircle2, Layers, Cpu, ShieldCheck, Trophy, GitCommit } from 'lucide-react';
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
    <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-24 relative z-10 animate-fade-in text-[#151515]">
      
      {/* Back button */}
      <Link
        to="/#projects"
        className="group mb-6 sm:mb-8 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8A877F] hover:text-[#F04B16] transition-colors cursor-pointer min-h-[44px]"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#F04B16]" />
        <span>Return to Selected Works</span>
      </Link>

      {/* Clean Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#8A877F] mb-6 sm:mb-8">
        <Link to="/" className="hover:text-[#151515] transition-colors">Home</Link>
        <span>/</span>
        <Link to="/#projects" className="hover:text-[#151515] transition-colors">Selected Works</Link>
        <span>/</span>
        <span className="text-[#F04B16] font-semibold">{project.title}</span>
      </nav>

      {/* Hero Header Spread */}
      <div className="border-b border-[#E2DAC8] pb-6 sm:pb-10 mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-6 mb-5 sm:mb-6">
          <div className="space-y-1.5 sm:space-y-2">
            {project.badge && (
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold uppercase bg-[#F04B16] text-[#FAF7F0] px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full mb-1 sm:mb-2">
                <Trophy className="w-3.5 h-3.5" />
                <span>{project.badge}</span>
              </span>
            )}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-[#151515] tracking-tight leading-[1.05]">
              {project.title}
            </h1>
            <p className="font-serif italic text-base sm:text-xl text-[#8A877F] max-w-2xl">
              {project.subtitle}
            </p>
          </div>

          {/* Repository & Demo Links: Mobile Friendly */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0 pt-2 md:pt-0">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-[#151515] text-[#FAF7F0] hover:bg-[#F04B16] font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm min-h-[44px]"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-[#F04B16] text-[#FAF7F0] hover:bg-[#D93E0D] font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm min-h-[44px]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live System</span>
              </a>
            )}
          </div>
        </div>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono bg-[#FAF7F0] text-[#151515] text-[11px] sm:text-xs px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md border border-[#E2DAC8]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 6-PART VISUAL STORYTELLING EDITORIAL CASE STUDY STRUCTURE     */}
      {/* ============================================================ */}
      <div className="space-y-6 sm:space-y-10 md:space-y-12 text-[#151515]">
        
        {/* 01 — Project Overview */}
        <section className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl sm:rounded-2xl p-4 sm:p-7 md:p-10 shadow-sm paper-grain space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#E2DAC8]">
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#F04B16]">
              01 // Project Overview
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-[#8A877F]">
              SYSTEM PROFILE
            </span>
          </div>
          <p className="font-serif text-base sm:text-lg md:text-xl text-[#151515] leading-relaxed font-normal">
            {project.longDescription}
          </p>
        </section>

        {/* 02 — Problem & Context */}
        {project.problemStatement && (
          <section className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl sm:rounded-2xl p-4 sm:p-7 md:p-10 shadow-sm paper-grain space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#E2DAC8]">
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#F04B16]">
                02 // Problem & Context
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-[#8A877F]">
                THE CHALLENGE
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#151515]/85 leading-relaxed">
              {project.problemStatement}
            </p>
            {project.challenges && project.challenges.length > 0 && (
              <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
                {project.challenges.map((c, i) => (
                  <div key={i} className="p-3 sm:p-3.5 bg-[#F1EBDD] border border-[#E2DAC8] rounded-lg text-xs font-sans text-[#151515]/80 flex items-start gap-2">
                    <span className="text-[#F04B16] font-mono font-bold shrink-0">{i + 1}.</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 03 — System Architecture (with Visual Pipeline Diagram) */}
        {project.architectureFlow && project.architectureFlow.length > 0 && (
          <section className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl sm:rounded-2xl p-4 sm:p-7 md:p-10 shadow-sm paper-grain space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#E2DAC8]">
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#F04B16] flex items-center gap-1.5 sm:gap-2">
                <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F04B16]" />
                <span>03 // System Architecture & Pipeline</span>
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-[#8A877F]">
                DATA FLOW
              </span>
            </div>

            {/* Visual Architecture Flow Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {project.architectureFlow.map((flow) => (
                <div key={flow.step} className="p-3.5 sm:p-4 bg-[#F1EBDD] border border-[#E2DAC8] rounded-xl flex flex-col justify-between space-y-2 sm:space-y-3">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs pb-1.5 sm:pb-2 border-b border-[#E2DAC8]">
                      <span className="font-bold text-[#F04B16]">{flow.step}</span>
                      <span className="text-[9px] sm:text-[10px] text-[#8A877F] uppercase tracking-wider">{flow.tech}</span>
                    </div>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#151515] mt-1.5 sm:mt-2 mb-1">
                      {flow.label}
                    </h3>
                    <p className="font-sans text-xs text-[#151515]/75 leading-relaxed">
                      {flow.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 04 — Engineering Decisions */}
        {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
          <section className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl sm:rounded-2xl p-4 sm:p-7 md:p-10 shadow-sm paper-grain space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#E2DAC8]">
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#F04B16] flex items-center gap-1.5 sm:gap-2">
                <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F04B16]" />
                <span>04 // Engineering Decisions & Trade-Offs</span>
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-[#8A877F]">
                ARCHITECTURAL RIGOR
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
              {project.engineeringDecisions.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 bg-[#F1EBDD] border border-[#E2DAC8] rounded-xl space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2">
                    <GitCommit className="w-4 h-4 text-[#F04B16] shrink-0 mt-0.5" />
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#151515]">
                      {item.decision}
                    </h3>
                  </div>
                  <div className="space-y-1 text-xs font-sans">
                    <p className="text-[#151515]/85">
                      <strong className="text-[#151515] font-semibold">Rationale: </strong>
                      {item.rationale}
                    </p>
                    <p className="text-[#8A877F]">
                      <strong className="text-[#151515] font-semibold">Trade-Off: </strong>
                      {item.tradeOff}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 05 — Implementation Highlights */}
        <section className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl sm:rounded-2xl p-4 sm:p-7 md:p-10 shadow-sm paper-grain space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#E2DAC8]">
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#F04B16]">
              05 // Implementation Highlights
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-[#8A877F]">
              VERIFIED MILESTONES
            </span>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {project.technicalAchievements.map((item, index) => (
              <div key={index} className="flex items-start gap-2.5 sm:gap-3 bg-[#F1EBDD] border border-[#E2DAC8] rounded-xl p-3 sm:p-4">
                <CheckCircle2 className="w-4 h-4 text-[#F04B16] shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm text-[#151515] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 06 — Outcome & Learnings */}
        {project.outcomeAndLearnings && project.outcomeAndLearnings.length > 0 && (
          <section className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl sm:rounded-2xl p-4 sm:p-7 md:p-10 shadow-sm paper-grain space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#E2DAC8]">
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#F04B16] flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F04B16]" />
                <span>06 // Outcome & Learnings</span>
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-[#8A877F]">
                CRUCIBLE TAKEAWAYS
              </span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {project.outcomeAndLearnings.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 sm:p-4 bg-[#F1EBDD] border border-[#E2DAC8] rounded-xl text-xs sm:text-sm font-sans text-[#151515]/90">
                  <span className="text-[#F04B16] font-mono font-bold shrink-0">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-[#E2DAC8]">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#8A877F] mb-4 sm:mb-6">
            Related Architectural Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {relatedProjects.map((p) => (
              <Link
                key={p.slug}
                to={'/project/' + p.slug}
                className="flex flex-col p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#E2DAC8] bg-[#FAF7F0] hover:border-[#F04B16] transition-all group cursor-pointer shadow-sm paper-grain"
              >
                <div className="flex items-center justify-between w-full mb-2 sm:mb-3">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-[#F1EBDD] border border-[#E2DAC8] text-[#F04B16]">
                    {p.icon}
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#8A877F] group-hover:text-[#F04B16] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#151515] group-hover:text-[#F04B16] transition-colors mb-1">
                  {p.title}
                </h3>
                <p className="font-sans text-xs text-[#8A877F] line-clamp-2">{p.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Social Connectors */}
      <div className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-[#E2DAC8] flex justify-center items-center gap-4">
        <SocialButton icon={<Github className="w-4 h-4" />} href="https://github.com/iamdevdhanush" label="GitHub" />
        <SocialButton icon={<ExternalLink className="w-4 h-4" />} href="https://www.linkedin.com/in/dhanushdprabhu/" label="LinkedIn" />
      </div>
    </div>
  );
};

export default ProjectDetailPage;