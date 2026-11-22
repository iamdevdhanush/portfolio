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
    <div className="border border-[#292929] hover:border-[#F28C28]/60 rounded-2xl p-6 sm:p-8 bg-[#111214] transition-all duration-300 hover:shadow-xl hover:shadow-[#F28C28]/5 group h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-xs font-mono text-[#F28C28] uppercase tracking-wider font-semibold">
            {project.badge || 'Project'}
          </span>
          <div className="flex gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[11px] font-mono text-[#929292]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#F5F2ED] group-hover:text-[#F28C28] transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#929292] leading-relaxed mb-4">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-6 text-xs text-[#929292]">
            {project.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#F28C28]">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 border-t border-[#292929] flex items-center justify-between text-xs">
        <Link
          to={projectPath}
          className="text-[#F5F2ED] hover:text-[#F28C28] transition-colors flex items-center gap-1 font-semibold"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#F28C28]" />
        </Link>

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#929292] hover:text-[#F5F2ED] transition-colors flex items-center gap-1"
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
