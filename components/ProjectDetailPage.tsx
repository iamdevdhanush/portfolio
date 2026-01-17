import React, { useMemo } from 'react';
import { 
  Linkedin, Github, Mail, FileText, ExternalLink, ArrowLeft, ArrowRight
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
    images?: string[];
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

const ProjectDetailPage: React.FC<{ project: Project; allProjects: Project[]; onNavigate: (id: string) => void }> = ({ project, allProjects, onNavigate }) => {
  
  const relatedProjects = useMemo(() => {
        if (!allProjects) return [];
        return allProjects
            .filter(p => p.slug !== project.slug)
            .map(p => ({
                ...p,
                overlap: p.tags.filter(tag => project.tags.includes(tag)).length
            }))
            .filter(p => p.overlap > 0)
            .sort((a, b) => b.overlap - a.overlap)
            .slice(0, 2);
    }, [project, allProjects]);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-20 relative z-10 animate-in fade-in duration-300">
      
      {/* Back Button */}
      <button 
        onClick={() => onNavigate('projects')}
        className="group mb-6 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to projects
      </button>

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

      {/* Gallery */}
      {project.images && project.images.length > 0 && (
          <div className="mt-12">
            <h3 className="font-bold text-xl text-white mb-6">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900/50 group">
                  <img src={img} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
      )}
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
            <div className="mt-16 pt-12 border-t border-white/5">
                <h3 className="text-2xl font-bold text-white mb-6">Related Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {relatedProjects.map(p => (
                            <button
                            key={p.slug}
                            onClick={() => {
                                window.scrollTo(0,0);
                                onNavigate('/project/' + p.slug);
                            }}
                            className="flex flex-col text-left p-6 rounded-xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 group cursor-pointer"
                            >
                            <div className="flex items-center justify-between w-full mb-3">
                                <div className="p-2 rounded-lg bg-black border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors">
                                    {p.icon}
                                </div>
                                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                            </div>
                            <h4 className="font-semibold text-zinc-200 group-hover:text-white text-lg mb-2">{p.title}</h4>
                            <p className="text-sm text-zinc-400 line-clamp-2">{p.subtitle}</p>
                            </button>
                        ))}
                </div>
            </div>
      )}

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