import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  onNavigate: (id: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigate }) => {
  const flagship = projects.find(p => p.isFlagship);
  const others = projects.filter(p => !p.isFlagship);

  return (
    <section id="projects" className="mb-24 md:mb-32 scroll-mt-28">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#F28C28] uppercase tracking-widest">
            <span>03 // CODE & ARCHITECTURE</span>
            <span className="w-2 h-px bg-[#F28C28]" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F2ED] tracking-tight">
            Featured Systems & Projects
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#929292] font-mono max-w-md">
          Engineered for production resilience: multi-agent AI pipelines, distributed telemetry daemons, and realtime platforms.
        </p>
      </div>

      {/* Projects Grid with Varied Layouts */}
      <div className="space-y-8">
        {/* Flagship Project (Avana V2) */}
        {flagship && (
          <ProjectCard key={flagship.slug} project={flagship} onNavigate={onNavigate} />
        )}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} onNavigate={onNavigate} />
          ))}
        </div>
      </div>

      {/* Bottom Link to GitHub */}
      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/iamdevdhanush"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111214] border border-[#292929] hover:border-[#F28C28]/60 text-xs font-mono text-[#F5F2ED] hover:text-[#F28C28] transition-all group"
        >
          <span>VIEW COMPLETE REPOSITORY ARCHIVE ON GITHUB</span>
          <ArrowUpRight className="w-4 h-4 text-[#F28C28] transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
