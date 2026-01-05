import React, { useState, useEffect } from 'react';
import { 
  Linkedin, Github, Mail, ArrowUpRight, GraduationCap, Briefcase, 
  Trophy, FileText, Command, Search, Home, Folder, Eye, EyeOff
} from 'lucide-react';

// --- Icons / Logos ---

const LogoCodeNeura = () => (
  <div className="w-10 h-10 bg-yellow-500/10 rounded-md flex items-center justify-center shrink-0 border border-yellow-500/20">
    <Trophy className="text-yellow-500 w-5 h-5" />
  </div>
);

// --- Components ---

interface ExperienceCardProps {
  icon: React.ReactNode;
  company: string;
  role: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ icon, company, role }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-default">
      {icon}
      <div className="flex flex-col">
        <h3 className="font-bold text-slate-100 text-sm md:text-base">{company}</h3>
        <p className="text-slate-400 text-xs md:text-sm font-medium">{role}</p>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  linkText?: string;
  hasGithub?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, linkText = "GitHub", hasGithub = true }) => {
  return (
    <div className="flex flex-col justify-between p-6 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 transition-colors h-full">
      <div>
        <h3 className="font-bold text-slate-100 text-lg mb-3">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <a href="#" className="flex items-center gap-1 text-xs font-bold text-white hover:text-emerald-400 transition-colors">
          {linkText} <ArrowUpRight className="w-3 h-3" />
        </a>
        {hasGithub && (
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};

const SocialButton: React.FC<{ icon: React.ReactNode; href?: string }> = ({ icon, href = "#" }) => (
  <a 
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all"
  >
    {icon}
  </a>
);

// --- Main App ---

const App: React.FC = () => {
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [showBlobs, setShowBlobs] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCmdOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsCmdOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsCmdOpen(false);
    }
  };

  const menuItems = [
    { type: 'header', label: 'Pages' },
    { icon: <Home className="w-4 h-4" />, label: 'Home', action: () => scrollToSection('home'), shortcut: 'h' },
    { icon: <Briefcase className="w-4 h-4" />, label: 'Projects', action: () => scrollToSection('projects'), shortcut: 'p' },
    { type: 'header', label: 'Actions' },
    { icon: showBlobs ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />, label: 'Toggle Circles', action: () => { setShowBlobs(!showBlobs); setIsCmdOpen(false); }, shortcut: 't c' },
    { type: 'header', label: 'Socials' },
    { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', action: () => window.open('https://www.linkedin.com/in/dhanushdprabhu/', '_blank') },
    { icon: <Github className="w-4 h-4" />, label: 'GitHub', action: () => window.open('https://github.com/iamdevdhanush', '_blank') },
    { icon: <Mail className="w-4 h-4" />, label: 'Email', action: () => window.open('mailto:dhanushdprabhu18@gmail.com', '_blank') },
  ];

  const filteredItems = menuItems.filter(item => {
    if (item.type === 'header') return true;
    return item.label?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-100 pb-20 relative">
      
      {/* Background Gradients */}
      {showBlobs && (
        <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-700 ease-in-out">
          {/* Top Left - Purple/Pink glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" />
          {/* Top Right - Blue/Cyan glow */}
          <div className="absolute top-[5%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          {/* Bottom Left - Subtle Emerald/Teal hint */}
          <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px]" />
        </div>
      )}

      {/* Floating Command Button */}
      <button
        onClick={() => setIsCmdOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
        aria-label="Open Command Palette"
      >
        <Command className="w-6 h-6" />
      </button>

      {/* Command Palette Overlay */}
      {isCmdOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCmdOpen(false)} />
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Search Input */}
            <div className="flex items-center px-4 py-3 border-b border-slate-800">
              <Search className="w-5 h-5 text-slate-500 mr-3" />
              <input 
                autoFocus
                type="text"
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent border-none outline-none text-slate-200 placeholder-slate-500 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="text-xs text-slate-500 font-mono border border-slate-700 px-1.5 py-0.5 rounded bg-slate-800">esc</span>
            </div>
            
            {/* Menu Items */}
            <div className="max-h-[60vh] overflow-y-auto py-2">
              {filteredItems.map((item, index) => {
                if (item.type === 'header') {
                  const nextItemIndex = filteredItems.findIndex((i, idx) => idx > index && i.type !== 'header');
                  if (nextItemIndex === -1 && index !== filteredItems.length - 1) return null;
                   
                  return (
                    <div key={`header-${index}`} className="px-4 py-2 text-[10px] uppercase tracking-wider font-semibold text-slate-600 mt-2 first:mt-0">
                      {item.label}
                    </div>
                  );
                }
                
                return (
                  <button
                    key={`item-${index}`}
                    onClick={item.action}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors group cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 group-hover:text-slate-300">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    {item.shortcut && (
                      <div className="flex gap-1">
                        {item.shortcut.split(' ').map(key => (
                          <span key={key} className="text-xs bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded border border-slate-700 group-hover:border-slate-600 group-hover:text-slate-400 font-mono">
                            {key}
                          </span>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
              {filteredItems.length === 0 && (
                 <div className="px-4 py-8 text-center text-sm text-slate-500">
                   No results found.
                 </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 pt-20 md:pt-32 relative z-10" id="home">
        
        {/* Header / Profile Section */}
        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-8 mb-16">
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Dhanush D Prabhu
              </h1>
              <p className="text-slate-400 font-medium text-sm md:text-base max-w-lg leading-relaxed">
                DevOps Engineer (Entry-level)
              </p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-lg mt-4">
                I’m a BCA student learning DevOps by working close to Linux systems, automation, and infrastructure basics. 
                I focus on understanding how systems behave, how they fail, and how to fix them—rather than just collecting tools.
                This site documents what I’m building, experimenting with, and learning in public.
              </p>
            </div>

            <div className="space-y-2 text-xs md:text-sm text-slate-500">
               <div className="flex items-center gap-2">
                 <GraduationCap className="w-4 h-4 text-purple-400" />
                 <span>Bachelor of Computer Applications (BCA) - 2027</span>
               </div>
               <div className="flex items-center gap-2">
                 <Briefcase className="w-4 h-4 text-red-400" />
                 <span>P.E.S. Institute of Advanced Management Studies</span>
               </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <SocialButton icon={<Github className="w-4 h-4" />} href="https://github.com/iamdevdhanush" />
              <SocialButton icon={<Linkedin className="w-4 h-4" />} href="https://www.linkedin.com/in/dhanushdprabhu/" />
              <SocialButton icon={<Mail className="w-4 h-4" />} href="mailto:dhanushdprabhu18@gmail.com" />
            </div>
          </div>

          <div className="shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10 bg-slate-800">
               {/* Profile Image */}
               <img 
                 src="https://avatars.githubusercontent.com/u/198190059?v=4" 
                 alt="Dhanush D Prabhu" 
                 className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
               />
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-20" id="achievements">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            Achievements
          </h2>
          <div className="flex flex-col gap-3">
            <ExperienceCard 
              icon={<LogoCodeNeura />} 
              company="CodeNeura (Inter-College Tech-a-Thon)" 
              role="First Place" 
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20" id="projects">
          <h2 className="text-xl font-bold text-white mb-6">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard 
              title="Linux System Health Auditor"
              description="Audits CPU, memory, disk usage, running processes, and open ports on a Linux system."
            />
            <ProjectCard 
              title="CI/CD Pipeline (Learning Project)"
              description="Automates basic build and test workflows for a sample application using GitHub Actions."
            />
            <ProjectCard 
              title="Dockerized Application (Learning Lab)"
              description="Containerized a simple application to understand image building and runtime behavior."
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12 pt-8 border-t border-white/5" id="contact">
          <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
          <p className="text-slate-400 text-sm mb-6">
            You can reach out to me via email at <a href="mailto:dhanushdprabhu18@gmail.com" className="text-emerald-400 hover:underline">dhanushdprabhu18@gmail.com</a>, connect with me on <a href="https://www.linkedin.com/in/dhanushdprabhu/" className="text-emerald-400 hover:underline">LinkedIn</a>, or <a href="/resume.pdf" target="_blank" className="text-emerald-400 hover:underline">download my resume</a>.
          </p>
          
          <div className="flex items-center gap-3">
              <SocialButton icon={<Github className="w-3.5 h-3.5" />} href="https://github.com/iamdevdhanush" />
              <SocialButton icon={<Linkedin className="w-3.5 h-3.5" />} href="https://www.linkedin.com/in/dhanushdprabhu/" />
              <SocialButton icon={<Mail className="w-3.5 h-3.5" />} href="mailto:dhanushdprabhu18@gmail.com" />
              <SocialButton icon={<FileText className="w-3.5 h-3.5" />} href="/resume.pdf" />
          </div>
        </section>

      </div>
    </div>
  );
};

export default App;