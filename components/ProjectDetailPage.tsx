import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
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
      .filter(p => p.slug !== project.slug)
      .map(p => ({ ...p, overlap: p.tags.filter(tag => project.tags.includes(tag)).length }))
      .filter(p => p.overlap > 0)
      .sort((a, b) => b.overlap - a.overlap)
      .slice(0, 2);
  }, [project, allProjects]);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-20 relative z-10 animate-in fade-in duration-300">
      <Link
        to="/#projects"
        className="group mb-6 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to projects
      </Link>

      <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8 font-mono">
        <Link to="/"
          className="text-zinc-400 hover:text-white transition-colors cursor-pointer">~</Link>
        <span>/</span>
        <Link to="/#projects"
          className="text-zinc-400 hover:text-white transition-colors cursor-pointer">Projects</Link>
        <span>/</span>
        <span className="text-green-400">{project.slug}</span>
      </div>

      <div className="flex items-start gap-6 mb-6">
        <div className="w-16 h-16 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-[#333]">
          {project.icon}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">{project.title}</h1>
          <p className="text-zinc-400 mt-1">{project.subtitle}</p>
        </div>
      </div>

      {project.badge && (
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-3 py-1.5 mb-6">
          {project.badge}
        </span>
      )}

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <span key={tag} className="bg-zinc-800 text-zinc-300 text-xs font-medium px-3 py-1 rounded-full border border-zinc-700">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-12">
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group">
            <Github className="w-4 h-4" />
            <span className="border-b border-blue-400/20 group-hover:border-blue-300/40">Source Code</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-300 transition-colors" />
          </a>
        )}
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors group">
            <ExternalLink className="w-4 h-4" />
            <span className="border-b border-zinc-700 group-hover:border-zinc-400">Live Demo</span>
          </a>
        )}
      </div>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Overview</h2>
          <p className="text-sm">{project.longDescription}</p>
        </div>

        {project.problemStatement && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Problem Statement</h2>
            <p className="text-sm text-zinc-300">{project.problemStatement}</p>
          </div>
        )}

        <div>
          <h2 className="text-xl font-bold text-white mb-4">Architecture</h2>
          <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-6">
            <div className="flex flex-wrap gap-6">
              <div className="flex-1 min-w-[200px]">
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-zinc-300 bg-zinc-800/50 border border-zinc-700/50 rounded-full px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1 min-w-[200px]">
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Key Capabilities</h3>
                <ul className="space-y-1.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-zinc-400 flex items-start gap-2">
                      <span className="text-zinc-600 mt-0.5">·</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-4">Technical Achievements</h2>
          <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-zinc-300">
            {project.technicalAchievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {project.challenges && project.challenges.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Challenges</h2>
            <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-zinc-300">
              {project.challenges.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.keyFeatures.map((item, index) => (
                <div key={index} className="bg-[#0a0a0a] border border-white/5 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400 shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm text-zinc-300">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.images && project.images.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900/50 group">
                  <img src={img} alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {relatedProjects.length > 0 && (
        <div className="mt-16 pt-12 border-t border-white/5">
          <h2 className="text-xl font-bold text-white mb-6">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedProjects.map(p => (
              <Link
                key={p.slug}
                to={'/project/' + p.slug}
                className="flex flex-col text-left p-6 rounded-xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="p-2 rounded-lg bg-black border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors">
                    {p.icon}
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
                <h3 className="font-semibold text-zinc-200 group-hover:text-white text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-zinc-400 line-clamp-2">{p.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-24 pt-8 border-t border-white/5 flex justify-center items-center gap-4">
        <SocialButton icon={<Github className="w-4 h-4" />} href="https://github.com/iamdevdhanush" />
        <SocialButton icon={<Linkedin className="w-4 h-4" />} href="https://www.linkedin.com/in/dhanushdprabhu/" />
        <SocialButton icon={<Mail className="w-4 h-4" />} href="mailto:dhanushdprabhu18@gmail.com" />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
