import React from 'react';
import { 
  Linkedin, Github, Mail, FileText, ExternalLink
} from 'lucide-react';

// --- Type Definitions ---

type Project = {
    slug: string;
    title: string;
    descriptions: string[];
    readMoreLink: string;
    codeLink?: string;
    appleLink?: string;
    icon: React.ReactNode;
    subtitle: string;
    tags: string[];
    githubLink: string;
    longDescription: string;
    technicalAchievements: string[];
    researchImpact: string;
};

// --- Child Components ---

const SocialButton: React.FC<{ icon: React.ReactNode; href?: string }> = ({ icon, href = "#" }) => (
  <a 
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-zinc-300 hover:bg-[#222] hover:text-white transition-all duration-200 transform hover:scale-110"
  >
    {icon}
  </a>
);

// --- Main Component ---

const ProjectDetailPage: React.FC<{ project: Project; onNavigate: (id: string) => void }> = ({ project, onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-20 relative z-10 animate-in fade-in duration-300">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8 font-mono">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
          className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          ~
        </a>
        <span>/</span>
        <a 
          href="#projects" 
          onClick={(e) => { e.preventDefault(); onNavigate('projects'); }}
          className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          Projects
        </a>
        <span>/</span>
        <span className="text-green-400">{project.slug}</span>
      </div>

      {/* Header */}
      <div className="flex items-start gap-6 mb-8">
        <div className="w-16 h-16 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-[#333]">
          {project.icon}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">{project.title}</h1>
          <p className="text-zinc-400 mt-1">{project.subtitle}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <span key={tag} className="bg-zinc-800 text-zinc-300 text-xs font-medium px-3 py-1 rounded-full border border-zinc-700">{tag}</span>
        ))}
      </div>
      
      {/* GitHub Link */}
      {project.githubLink && (
        <div className="mb-12">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group">
            <Github className="w-4 h-4" />
            <span>{project.githubLink.replace('https://', '')}</span>
            <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-blue-300 transition-colors" />
          </a>
        </div>
      )}

      {/* Content */}
      <div className="space-y-8 text-zinc-300 leading-relaxed">
        <p>{project.longDescription}</p>
        
        <div>
          <h3 className="font-bold text-xl text-white mb-4">Technical Achievements:</h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-zinc-300">
            {project.technicalAchievements.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-xl text-white mb-4">Research Impact:</h3>
          <p>{project.researchImpact}</p>
        </div>
      </div>
      
      {/* Footer social links */}
      <div className="mt-24 pt-8 border-t border-white/5 flex justify-center items-center gap-4">
        <SocialButton icon={<Github className="w-4 h-4" />} href="https://github.com/iamdevdhanush" />
        <SocialButton icon={<Linkedin className="w-4 h-4" />} href="https://www.linkedin.com/in/dhanushdprabhu/" />
        <SocialButton icon={<Mail className="w-4 h-4" />} href="mailto:dhanushdprabhu18@gmail.com" />
        <SocialButton icon={<FileText className="w-4 h-4" />} href="/resume.pdf" />
      </div>
    </div>
  );
};

export default ProjectDetailPage;