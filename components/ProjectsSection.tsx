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
    <section id="projects" className="mb-20 scroll-mt-28">
      <h2 className="text-2xl font-bold text-zinc-100 mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {flagship && (
          <ProjectCard key={flagship.slug} project={flagship} onNavigate={onNavigate} />
        )}
        {others.map(project => (
          <ProjectCard key={project.slug} project={project} onNavigate={onNavigate} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/iamdevdhanush"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium"
        >
          View All Repositories on GitHub
          <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
