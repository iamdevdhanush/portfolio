import React from 'react';
import { ArrowUpRight, Code, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onNavigate: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onNavigate }) => {
  const handleClick = () => {
    onNavigate('/project/' + project.slug);
  };

  return (
    <div className={`bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 flex flex-col h-full group transition-[transform,border-color] duration-300 hover:border-zinc-700 hover:-translate-y-1 relative ${project.isFlagship ? 'md:col-span-2' : ''}`}>
      <button
        onClick={handleClick}
        aria-label={`View project: ${project.title}`}
        className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center bg-zinc-100 text-black rounded-full opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-300 transform -translate-y-2 group-hover:translate-y-0 hover:scale-110"
      >
        <ExternalLink className="w-4 h-4" />
      </button>

      {project.badge && (
        <span className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-3 py-1 mb-4 w-fit">
          {project.badge}
        </span>
      )}

      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-[#333]">
          {project.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-zinc-100">{project.title}</h3>
          <p className="text-sm text-zinc-400 mt-0.5 leading-relaxed">{project.subtitle}</p>
        </div>
      </div>

      <p className="text-sm text-zinc-300 leading-relaxed mb-4 flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, project.isFlagship ? 8 : 4).map(tag => (
          <span key={tag} className="text-[10px] font-medium text-zinc-400 bg-zinc-800/50 px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
        {!project.isFlagship && project.tags.length > 4 && (
          <span className="text-[10px] font-medium text-zinc-500 px-2 py-0.5">
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {project.highlights && (
        <ul className="space-y-1.5 mb-6">
          {project.highlights.slice(0, project.isFlagship ? 4 : 2).map((h, i) => (
            <li key={i} className="text-xs text-zinc-400 flex items-start gap-2">
              <span className="text-zinc-600 mt-0.5">·</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-800/50 text-sm font-medium">
        <button
          onClick={handleClick}
          className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
        >
          Read More
          <ArrowUpRight className="w-4 h-4" />
        </button>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <Code className="w-4 h-4" />
            Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
