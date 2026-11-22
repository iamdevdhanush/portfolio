import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onNavigate?: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const projectPath = '/project/' + project.slug;

  return (
    <div className="border border-[#2A2A2A] hover:border-[#F04B16] rounded-2xl p-6 sm:p-8 bg-[#090909] text-[#FAF7F0] transition-all duration-300 hover:shadow-xl group h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#F04B16]">
            {project.badge || 'System'}
          </span>
          <div className="flex gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="font-mono text-[11px] text-[#8A877F]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF7F0] group-hover:text-[#F04B16] transition-colors mb-2">
          {project.title}
        </h3>

        <p className="font-sans text-xs sm:text-sm text-[#8A877F] leading-relaxed mb-4">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-6 text-xs text-[#8A877F] font-sans">
            {project.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#F04B16] font-bold">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 border-t border-[#2A2A2A] flex items-center justify-between text-xs font-mono">
        <Link
          to={projectPath}
          className="text-[#FAF7F0] hover:text-[#F04B16] transition-colors flex items-center gap-1 font-bold"
        >
          <span>View Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#F04B16]" />
        </Link>

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A877F] hover:text-[#FAF7F0] transition-colors flex items-center gap-1"
          >
            <Code className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
