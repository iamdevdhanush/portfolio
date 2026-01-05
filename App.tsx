import React, { useState, useEffect } from 'react';
import { 
  Linkedin, Github, Mail, ArrowUpRight, GraduationCap, Briefcase, 
  Trophy, Command, Search, Home, Eye, EyeOff, MapPin, FileText,
  Terminal, GitBranch, Zap, Code, Container
} from 'lucide-react';

// --- Icons / Logos ---

const LogoCodeNeura = () => (
  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-[#333]">
    <Trophy className="text-yellow-500 w-6 h-6" />
  </div>
);

const LogoTournament = () => (
  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-[#333]">
    <Trophy className="text-zinc-400 w-6 h-6" />
  </div>
);

const LogoLinux = () => (
  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-[#333]">
    <div className="text-white font-bold text-xs">LINUX</div>
  </div>
);

const LogoGithub = () => (
  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-[#333]">
    <Github className="text-white w-6 h-6" />
  </div>
);

const LogoDocker = () => (
  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-[#333]">
    <Container className="text-blue-500 w-6 h-6" />
  </div>
);

const LogoBash = () => (
  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-[#333]">
    <Terminal className="text-green-500 w-6 h-6" />
  </div>
);

const LogoPython = () => (
  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-[#333]">
    <div className="text-yellow-400 font-bold text-xs">PY</div>
  </div>
);

const LogoGit = () => (
  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-[#333]">
    <GitBranch className="text-orange-500 w-6 h-6" />
  </div>
);

const LogoGHActions = () => (
  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-[#333]">
    <Zap className="text-blue-400 w-6 h-6" />
  </div>
);


// --- Components ---

interface ExperienceCardProps {
  icon: React.ReactNode;
  company: string;
  role: string;
  description?: string;
  date?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ icon, company, role, description, date }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:bg-[#111] transition-colors cursor-default group">
      {icon}
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start">
            <h3 className="font-semibold text-zinc-100 text-base">{company}</h3>
            {date && <span className="text-xs text-zinc-500">{date}</span>}
        </div>
        <p className="text-zinc-400 text-sm">{role}</p>
        {description && <p className="text-zinc-500 text-xs mt-1">{description}</p>}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, description, linkText = "GitHub" }) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:bg-[#111] transition-colors cursor-default h-full group">
      {icon}
      <div className="flex flex-col flex-1">
        <h3 className="font-semibold text-zinc-100 text-base mb-1 group-hover:text-emerald-400 transition-colors">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-3">{description}</p>
        <div className="flex items-center mt-auto">
           <span className="text-xs font-medium text-zinc-400 flex items-center gap-1 group-hover:text-zinc-200 transition-colors">
             {linkText} <ArrowUpRight className="w-3 h-3" />
           </span>
        </div>
      </div>
    </div>
  );
};

const SocialButton: React.FC<{ icon: React.ReactNode; href?: string }> = ({ icon, href = "#" }) => (
  <a 
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#222] hover:text-white transition-all hover:scale-105"
  >
    {icon}
  </a>
);

// --- Main App ---

export default function App() {
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [showBlobs, setShowBlobs] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Image loading state with fallback chain
  const [imgSrc, setImgSrc] = useState("/profile.jpg");
  
  const handleImgError = () => {
    // Fallback chain: jpg -> png -> jpeg -> github
    if (imgSrc === "/profile.jpg") {
      setImgSrc("/profile.png");
    } else if (imgSrc === "/profile.png") {
      setImgSrc("/profile.jpeg");
    } else {
      setImgSrc("https://avatars.githubusercontent.com/u/169132950?v=4");
    }
  };

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
    { icon: <Trophy className="w-4 h-4" />, label: 'Achievements', action: () => scrollToSection('achievements'), shortcut: 'a' },
    { icon: <Briefcase className="w-4 h-4" />, label: 'Projects', action: () => scrollToSection('projects'), shortcut: 'p' },
    { icon: <Code className="w-4 h-4" />, label: 'Skills', action: () => scrollToSection('skills'), shortcut: 's' },
    { type: 'header', label: 'Actions' },
    { icon: showBlobs ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />, label: 'Toggle Background', action: () => { setShowBlobs(!showBlobs); setIsCmdOpen(false); }, shortcut: 't b' },
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
    <div className="min-h-screen bg-black text-zinc-200 selection:bg-zinc-800 selection:text-white pb-20 relative font-sans overflow-x-hidden">
      
      {/* Background - Minimal, modern dark gradient */}
      {showBlobs && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Base: Pure Black */}
          <div className="absolute inset-0 bg-black" />
          
          {/* Layer 1: Cool white/blue light source from top-left - More subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_rgba(56,189,248,0.08),_rgba(0,0,0,0)_50%)]" />

          {/* Layer 2: Subtle Ambient Blue Glow (replacing purple) - More subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,_rgba(14,165,233,0.03),_rgba(0,0,0,0)_60%)]" />
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-end px-6 py-6 md:px-12 max-w-5xl mx-auto w-full mix-blend-difference">
        <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors bg-zinc-900/50 px-3 py-1.5 rounded-full border border-zinc-800/50">Home</button>
            <button onClick={() => scrollToSection('achievements')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Achievements</button>
            <button onClick={() => scrollToSection('projects')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Skills</button>
        </div>
      </nav>

      {/* Floating Command Button */}
      <button
        onClick={() => setIsCmdOpen(true)}
        className="fixed bottom-8 right-8 z-40 p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shadow-2xl hover:scale-105 active:scale-95"
        aria-label="Open Command Palette"
      >
        <Command className="w-5 h-5" />
      </button>

      {/* Command Palette Overlay */}
      {isCmdOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsCmdOpen(false)} />
          <div className="relative w-full max-w-xl bg-[#0a0a0a] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Search Input */}
            <div className="flex items-center px-4 py-3 border-b border-zinc-800">
              <Search className="w-4 h-4 text-zinc-500 mr-3" />
              <input 
                autoFocus
                type="text"
                placeholder="Type a command..."
                className="flex-1 bg-transparent border-none outline-none text-zinc-200 placeholder-zinc-600 text-sm h-6"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="text-[10px] text-zinc-600 font-mono bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">ESC</div>
            </div>
            
            {/* Menu Items */}
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filteredItems.map((item, index) => {
                if (item.type === 'header') {
                  const nextItemIndex = filteredItems.findIndex((i, idx) => idx > index && i.type !== 'header');
                  if (nextItemIndex === -1 && index !== filteredItems.length - 1) return null;
                   
                  return (
                    <div key={`header-${index}`} className="px-3 py-2 text-[10px] uppercase tracking-wider font-medium text-zinc-600 mt-2 first:mt-0 ml-1">
                      {item.label}
                    </div>
                  );
                }
                
                return (
                  <button
                    key={`item-${index}`}
                    onClick={item.action}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 rounded-lg transition-colors group cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-500 group-hover:text-zinc-400">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    {item.shortcut && (
                      <div className="flex gap-1">
                        {item.shortcut.split(' ').map(key => (
                          <span key={key} className="text-[10px] bg-zinc-900 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-800 group-hover:border-zinc-700 font-mono uppercase">
                            {key}
                          </span>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
              {filteredItems.length === 0 && (
                 <div className="px-4 py-8 text-center text-sm text-zinc-600">
                   No results found.
                 </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 pt-32 md:pt-40 relative z-10" id="home">
        
        {/* Header / Profile Section */}
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-start gap-8 md:gap-12 mb-24">
          
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/5 bg-zinc-900 relative">
               <img 
                 src={imgSrc}
                 onError={handleImgError}
                 alt="Dhanush D Prabhu" 
                 className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
               />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
              Dhanush D Prabhu
            </h1>
            <h2 className="text-lg md:text-xl text-zinc-400 font-medium mb-6">
              DevOps Engineer • BCA Student
            </h2>

            <div className="space-y-3 mb-8">
               <div className="flex items-start gap-3 text-zinc-500 text-sm">
                 <GraduationCap className="w-4 h-4 mt-0.5 text-zinc-600" />
                 <span>Bachelor of Computer Applications (2027)</span>
               </div>
               <div className="flex items-start gap-3 text-zinc-500 text-sm">
                 <MapPin className="w-4 h-4 mt-0.5 text-zinc-600" />
                 <span>Shimoga, Karnataka, India</span>
               </div>
               <div className="flex items-start gap-3 text-zinc-500 text-sm">
                 <Briefcase className="w-4 h-4 mt-0.5 text-zinc-600" />
                 <span>Aspiring DevOps & Cloud Engineer</span>
               </div>
            </div>

            <div className="flex items-center gap-3">
              <SocialButton icon={<Github className="w-4 h-4" />} href="https://github.com/iamdevdhanush" />
              <SocialButton icon={<Linkedin className="w-4 h-4" />} href="https://www.linkedin.com/in/dhanushdprabhu/" />
              <SocialButton icon={<Mail className="w-4 h-4" />} href="mailto:dhanushdprabhu18@gmail.com" />
              <SocialButton icon={<FileText className="w-4 h-4" />} href="/resume.pdf" />
            </div>
          </div>

        </div>

        {/* Achievements Section (Formerly Experience) */}
        <section className="mb-20" id="achievements">
          <h2 className="text-2xl font-bold text-zinc-100 mb-8">
            Achievements
          </h2>
          <div className="flex flex-col gap-4">
            <ExperienceCard 
              icon={<LogoCodeNeura />} 
              company="First Place – CodeNeura" 
              role="Issued by LBS College, Sagara"
              description="The competition evaluated problem-solving ability, coding efficiency, and practical technical implementation under strict time constraints, competing against teams from multiple colleges." 
            />
            <ExperienceCard 
              icon={<LogoTournament />} 
              company="Runner-Up – College Coding Tournament" 
              role="Inter-college coding competition"
              date="2024"
              description="Secured runner-up position in a college-level coding tournament focused on logical problem-solving and coding accuracy under time constraints." 
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20" id="projects">
          <h2 className="text-2xl font-bold text-zinc-100 mb-8">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard 
              icon={<LogoBash />}
              title="Linux System Health Auditor"
              description="Shell script based tool to audit CPU, memory, disk usage, and running processes on Linux systems."
            />
            <ProjectCard 
              icon={<LogoGHActions />}
              title="CI/CD Pipeline"
              description="Automated build and test workflows using GitHub Actions for a sample application."
            />
            <ProjectCard 
              icon={<LogoDocker />}
              title="Dockerized App Lab"
              description="Containerization of a web application to understand image building layers and runtime behavior."
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20" id="skills">
          <h2 className="text-2xl font-bold text-zinc-100 mb-8">
            Skills
          </h2>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <LogoLinux />
            <LogoBash />
            <LogoPython />
            <LogoGit />
            <LogoGithub />
            <LogoGHActions />
            <LogoDocker />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-sm">
            <div>
              <h3 className="font-semibold text-zinc-100 mb-2">Linux</h3>
              <ul className="space-y-1 text-zinc-500">
                <li>- Comfortable working in the terminal on Ubuntu</li>
                <li>- Basic understanding of filesystems, processes, and permissions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-100 mb-2">Shell Scripting (Bash)</h3>
              <ul className="space-y-1 text-zinc-500">
                <li>- Writing small to medium Bash scripts for automation</li>
                <li>- Using core utilities for system inspection and reporting</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-100 mb-2">Python</h3>
              <ul className="space-y-1 text-zinc-500">
                <li>- Using Python for scripting and small automation tasks</li>
                <li>- Writing simple programs to support DevOps-related workflows</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-100 mb-2">Git & Version Control</h3>
              <ul className="space-y-1 text-zinc-500">
                <li>- Daily use of Git for personal and learning projects</li>
                <li>- Comfortable with branching, commits, and basic history inspection</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-100 mb-2">CI/CD (Learning)</h3>
              <ul className="space-y-1 text-zinc-500">
                <li>- Building basic pipelines using GitHub Actions</li>
                <li>- Understanding workflow structure, steps, and failures</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-100 mb-2">Containers (Learning)</h3>
              <ul className="space-y-1 text-zinc-500">
                <li>- Building and running Docker images</li>
                <li>- Understanding container basics and image structure</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-100 mb-2">General</h3>
              <ul className="space-y-1 text-zinc-500">
                <li>- Debugging issues step by step</li>
                <li>- Learning by breaking and fixing systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 mb-8">
          <p>© 2025 Dhanush D Prabhu.</p>
          <div className="flex gap-4">
            <span>Built with React & Tailwind</span>
          </div>
        </footer>

      </div>
    </div>
  );
}