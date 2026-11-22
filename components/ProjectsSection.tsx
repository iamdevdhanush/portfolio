import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';

interface ProjectsSectionProps {
  onNavigate: (id: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigate }) => {
  const flagship = projects.find(p => p.isFlagship);
  const others = projects.filter(p => !p.isFlagship);

  return (
    <section id="projects" className="mb-24 md:mb-32 scroll-mt-28">
      {/* Clean Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm text-[#929292] mt-1">
              Production-grade backend architectures, AI systems, and distributed platforms.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      <div className="space-y-8">
        {/* Flagship Project */}
        {flagship && (
          <ScrollReveal direction="up" distance={22} duration={650}>
            <ProjectCard key={flagship.slug} project={flagship} onNavigate={onNavigate} />
          </ScrollReveal>
        )}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((project, idx) => (
            <ScrollReveal key={project.slug} delay={idx * 90} direction="up" distance={20} duration={600}>
              <ProjectCard project={project} onNavigate={onNavigate} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bottom Link to GitHub */}
      <ScrollReveal delay={120} direction="up" distance={14} duration={500}>
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/iamdevdhanush"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111214] border border-[#292929] hover:border-[#F28C28]/60 text-xs text-[#F5F2ED] hover:text-[#F28C28] transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            <span>View all repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#F28C28]" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProjectsSection;
