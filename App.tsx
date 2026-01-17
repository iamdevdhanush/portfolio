import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  Linkedin, Github, Mail, ArrowUpRight, GraduationCap, Briefcase, 
  Trophy, Command, Search, Home, Eye, EyeOff, MapPin, FileText,
  Terminal, GitBranch, Zap, Code, Container, Menu, X, ExternalLink,
  BarChart3, BrainCircuit, AppWindow, TestTube2, MessageSquareQuote, Network
} from 'lucide-react';
import ProjectDetailPage from './components/ProjectDetailPage';

// --- Data ---

const projects = [
    {
      slug: 'AWS-EC2-Automation-Using-Shell-Script',
      title: 'AWS EC2 Automation with Shell Scripting',
      descriptions: [
        'A robust Bash script to automate AWS EC2 instance management using the AWS CLI, featuring safe resource creation and cleanup.'
      ],
      readMoreLink: '#/project/AWS-EC2-Automation-Using-Shell-Script',
      codeLink: 'https://github.com/iamdevdhanush/AWS-EC2-Automation-Using-Shell-Script',
      icon: <Zap className="w-8 h-8 text-zinc-400" />,
      subtitle: 'Automating the AWS EC2 instance lifecycle with Bash and the AWS CLI.',
      tags: ['Bash', 'Shell Scripting', 'AWS', 'AWS CLI', 'EC2', 'Automation', 'IAM'],
      githubLink: 'https://github.com/iamdevdhanush/AWS-EC2-Automation-Using-Shell-Script',
      longDescription: 'This project provides a comprehensive Bash script for automating the creation, monitoring, and termination of AWS EC2 instances. It leverages the AWS CLI and is designed to handle real-world challenges such as region mismatches, IAM permission validation, and adherence to Free Tier limits to prevent unexpected costs. The script includes robust error handling and a safe cleanup mechanism.',
      technicalAchievements: [
        'Developed a modular script to launch, stop, and terminate EC2 instances.',
        'Implemented dynamic checks for AWS CLI configuration and IAM permissions.',
        'Added safeguards to prevent accidental deletion of non-project resources.',
        'Included logic to automatically select Free Tier eligible AMIs and instance types.',
        'Ensured idempotent execution for safe re-running of the script.',
        'Managed security groups and key pairs programmatically.'
      ],
      researchImpact: 'This tool serves as a practical example of Infrastructure as Code (IaC) principles using native shell scripting. It simplifies repetitive DevOps tasks, reduces manual error, and provides a foundational template for more complex cloud automation workflows without relying on external libraries.',
      images: [
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1667372393119-c81c0e28a7f9?q=80&w=1932&auto=format&fit=crop"
      ]
    },
    {
      slug: 'python-cicd-github-actions',
      title: 'Python CI/CD with GitHub Actions',
      descriptions: [
        'An automated CI/CD pipeline for a Python Flask application using Docker and GitHub Actions for continuous integration and deployment.'
      ],
      readMoreLink: '#/project/python-cicd-github-actions',
      codeLink: 'https://github.com/iamdevdhanush/python-cicd-github-actions',
      icon: <BrainCircuit className="w-8 h-8 text-zinc-400" />,
      subtitle: 'Automating build, test, and deployment for a Python app.',
      tags: ['Python', 'Flask', 'Docker', 'GitHub Actions', 'CI/CD', 'Automation', 'Pytest'],
      githubLink: 'https://github.com/iamdevdhanush/python-cicd-github-actions',
      longDescription: 'This project demonstrates a complete CI/CD workflow for a simple Python Flask web application. The pipeline, built with GitHub Actions, automatically triggers on code pushes. It runs unit tests using Pytest, builds a Docker image for the application, and pushes the image to a container registry, ensuring that every change is automatically tested and packaged for deployment.',
      technicalAchievements: [
        'Configured a multi-stage YAML workflow in GitHub Actions for build, test, and publish stages.',
        'Integrated Pytest to automatically run unit tests and validate code quality on every commit.',
        'Containerized the Flask application using a multi-stage Dockerfile for a lightweight and secure final image.',
        'Automated the process of building and pushing Docker images to Docker Hub using secrets for authentication.',
        'Established a foundation for blue-green or canary deployments by separating build and deployment jobs.'
      ],
      researchImpact: 'This project provides a hands-on implementation of modern DevOps practices. It showcases how to leverage GitHub Actions and Docker to create a reliable and efficient CI/CD pipeline, which is crucial for increasing development velocity, improving code quality, and ensuring consistent application deployments.',
      images: []
    }
  ];

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

const LogoAWSConsole = () => (
  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex flex-col items-center justify-center shrink-0 border border-[#333]">
    <div className="text-[#FF9900] font-bold text-xs">AWS</div>
    <div className="text-gray-400 text-[8px] leading-none">Console</div>
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

const LogoKubernetes = () => (
  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0 border border-[#333]">
    <div className="text-[#326CE5] font-bold text-xs tracking-wide">
      K8S
    </div>
  </div>
);


// --- Components ---

interface ExperienceCardProps {
  icon: React.ReactNode;
  company: string;
  role: string;
  description?: string;
  date?: string;
  link?: string;
  linkText?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ icon, company, role, description, date, link, linkText }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:bg-[#111] transition-colors cursor-default group">
      {icon}
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start">
            <h3 className="font-semibold text-zinc-100 text-base">{company}</h3>
            {date && <span className="text-xs text-zinc-400">{date}</span>}
        </div>
        <p className="text-zinc-300 text-sm">{role}</p>
        {description && <p className="text-zinc-400 text-xs mt-1">{description}</p>}
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-zinc-200 text-xs mt-2 block w-fit transition-colors"
          >
            Read more → {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  descriptions: string[];
  readMoreLink?: string;
  codeLink?: string;
  appleLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, descriptions, readMoreLink, codeLink, appleLink }) => {
  const primaryLink = readMoreLink;

  return (
    <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 flex flex-col h-full group transition-[transform,border-color] duration-300 hover:border-zinc-700 hover:-translate-y-1 relative">
      {primaryLink && (
        <a 
          href={primaryLink}
          aria-label={`View project: ${title}`}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center bg-zinc-100 text-black rounded-full opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-300 transform -translate-y-2 group-hover:translate-y-0 hover:scale-110"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
      <h3 className="font-bold text-lg text-zinc-100 mb-3">{title}</h3>
      <div className="space-y-4 text-sm text-zinc-300 leading-relaxed flex-grow">
        {descriptions.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <div className="mt-auto pt-4 border-t border-zinc-800/50 flex items-center gap-6 text-sm font-medium">
        {readMoreLink && (
          <a href={readMoreLink} className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5">
            Read More
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2">
            <Code className="w-4 h-4" />
            Code
          </a>
        )}
        {appleLink && (
          <a href={appleLink} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-transform duration-200 hover:-translate-y-0.5">
           
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
    className="w-10 h-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-zinc-300 hover:bg-[#222] hover:text-white transition-colors transition-transform duration-200 transform hover:scale-110"
  >
    {icon}
  </a>
);

// --- Main App ---

export default function App() {
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [showBlobs, setShowBlobs] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentProjectSlug, setCurrentProjectSlug] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  // Image loading state with fallback chain
  const [imgSrc, setImgSrc] = useState("/profile.jpg");
  
  const handleImgError = () => {
    // Fallback chain: jpg -> png -> jpeg -> github
    if (imgSrc === "/profile.jpg") {
      setImgSrc("/profile.png");
    } else if (imgSrc === "/profile.png") {
      setImgSrc("/profile.jpeg");
    } else if (imgSrc === "/profile.jpeg") {
      setImgSrc("https://avatars.githubusercontent.com/u/169132950?v=4");
    }
    // Explicitly do nothing if it's already the github URL to prevent infinite loop
  };

  // Safe Navigation Handler to prevent 'Refused to Connect' errors in some environments
  const performSafeNavigation = useCallback((id: string) => {
    setIsMobileMenuOpen(false);
    setIsCmdOpen(false); // Close command palette if open
    
    // Update hash history without triggering default anchor navigation
    try {
      window.history.pushState(null, '', `#${id}`);
    } catch (e) {
      console.warn("Navigation state update failed", e);
    }

    // Check if we are navigating TO a project
    if (id.startsWith('/project/')) {
        const slug = id.replace('/project/', '');
        setCurrentProjectSlug(slug);
        window.scrollTo(0, 0);
        return;
    }
    
    // If we are currently on a project page, we need to reset the state to go back to main view.
    if (currentProjectSlug) {
      setCurrentProjectSlug(null);
    } else {
      // If we are already on the main page, manually scroll to the section.
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [currentProjectSlug]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    performSafeNavigation(id);
  };

  // Routing effect
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#\/project\/(.*)$/);
      if (match && match[1]) {
        setCurrentProjectSlug(match[1]);
        window.scrollTo(0, 0);
      } else {
        // Only reset if we are not purely navigating hash sections (which we handle manually for smoothness)
        // Actually, if user hits back button to a non-project URL, we should handle it.
        // But for our app flow, this checks if we are NOT on a project route.
        if (currentProjectSlug) {
           setCurrentProjectSlug(null);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check on load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentProjectSlug]);

  // Scroll to hash when switching back to main view
  useEffect(() => {
    if (!currentProjectSlug) {
      const hash = window.location.hash;
      // Check if hash is a section ID (not empty, not project route)
      if (hash && hash !== '#' && !hash.startsWith('#/')) {
        // Small timeout to allow DOM to render
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            // Smooth behavior is handled by CSS
            element.scrollIntoView(); 
          }
        }, 100);
      } else if (!hash || hash === '#') {
        window.scrollTo(0, 0);
      }
    }
  }, [currentProjectSlug]);

  // Section observer for active nav link
  useEffect(() => {
    if (currentProjectSlug) {
      setActiveSection(''); // No active section on project page
      return;
    }

    const sections = ['home', 'achievements', 'projects', 'devops-practice', 'skills'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the vertical center
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [currentProjectSlug]);


  const menuItems = useMemo(() => [
    { type: 'header', label: 'Pages' },
    { icon: <Home className="w-4 h-4" />, label: 'Home', action: () => performSafeNavigation('home'), shortcut: 'h' },
    { icon: <Trophy className="w-4 h-4" />, label: 'Achievements', action: () => performSafeNavigation('achievements'), shortcut: 'a' },
    { icon: <Briefcase className="w-4 h-4" />, label: 'Projects', action: () => performSafeNavigation('projects'), shortcut: 'p' },
    { icon: <Terminal className="w-4 h-4" />, label: 'DevOps Practice', action: () => performSafeNavigation('devops-practice'), shortcut: 'd' },
    { icon: <Code className="w-4 h-4" />, label: 'Skills', action: () => performSafeNavigation('skills'), shortcut: 's' },
    { type: 'header', label: 'Actions' },
    { icon: showBlobs ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />, label: 'Toggle Background', action: () => { setShowBlobs(prev => !prev); setIsCmdOpen(false); }, shortcut: 'b' },
    { type: 'header', label: 'Socials' },
    { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', action: () => window.open('https://www.linkedin.com/in/dhanushdprabhu/', '_blank') },
    { icon: <Github className="w-4 h-4" />, label: 'GitHub', action: () => window.open('https://github.com/iamdevdhanush', '_blank') },
    { icon: <Mail className="w-4 h-4" />, label: 'Email', action: () => window.open('mailto:dhanushdprabhu18@gmail.com', '_blank') },
  ], [showBlobs, performSafeNavigation]);

  // Filter items for display
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      if (searchQuery) {
          // If searching, hide headers and only show matching items
          return item.type !== 'header' && item.label.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true; // Show everything if no search
    });
  }, [menuItems, searchQuery]);

  // Get only actionable items for navigation
  const navigableItems = useMemo(() => {
    return filteredItems.filter(item => item.type !== 'header');
  }, [filteredItems]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery, isCmdOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle Command Palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCmdOpen(prev => !prev);
        return;
      }

      // Close on Escape
      if (e.key === 'Escape') {
        setIsCmdOpen(false);
        return;
      }

      // Navigation when Palette is Open
      if (isCmdOpen) {
          if (e.key === 'ArrowDown') {
              e.preventDefault();
              setSelectedIndex(prev => (prev + 1) % navigableItems.length);
          } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              setSelectedIndex(prev => (prev - 1 + navigableItems.length) % navigableItems.length);
          } else if (e.key === 'Enter') {
              e.preventDefault();
              const item = navigableItems[selectedIndex];
              if (item && item.action) {
                  item.action();
              }
          }
          return;
      }

      // Global Shortcuts (only if not typing in an input)
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName || '')) {
        return;
      }

      const key = e.key.toLowerCase();
      const item = menuItems.find(i => i.shortcut === key);
      if (item && item.action) {
          e.preventDefault();
          item.action();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCmdOpen, navigableItems, selectedIndex, menuItems]);
  
  const projectToShow = useMemo(() => projects.find(p => p.slug === currentProjectSlug), [currentProjectSlug]);

  const navLinkClasses = (section: string) => {
    const baseClasses = "text-sm font-medium transition-colors px-4 py-1.5 rounded-full cursor-pointer";
    const isActive = (activeSection === section) || (section === 'projects' && projectToShow);
    const activeClasses = "bg-white/10 text-white";
    const inactiveClasses = "text-zinc-300 hover:text-white";
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };
  
  const mobileNavLinkClasses = (section: string) => {
    const baseClasses = "text-left hover:text-white transition-colors border-b border-white/5 pb-4 cursor-pointer";
    const isActive = (activeSection === section) || (section === 'projects' && projectToShow);
    const activeClasses = "text-white";
    const inactiveClasses = "text-zinc-300";
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <div className="min-h-screen bg-black text-zinc-200 selection:bg-zinc-800 selection:text-white pb-20 relative font-sans overflow-x-hidden">
      
      {/* Background - Minimal, modern dark gradient */}
      {showBlobs && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_rgba(56,189,248,0.08),_rgba(0,0,0,0)_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,_rgba(14,165,233,0.03),_rgba(0,0,0,0)_60%)]" />
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 py-6 md:px-12 max-w-5xl mx-auto w-full">
        <button 
          className="md:hidden text-zinc-300 hover:text-white transition-colors p-2 bg-zinc-900/50 backdrop-blur-md rounded-lg border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex items-center gap-1 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-full p-1">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={navLinkClasses('home')}>Home</a>
            <a href="#achievements" onClick={(e) => handleNavClick(e, 'achievements')} className={navLinkClasses('achievements')}>Achievements</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className={navLinkClasses('projects')}>Projects</a>
            <a href="#devops-practice" onClick={(e) => handleNavClick(e, 'devops-practice')} className={navLinkClasses('devops-practice')}>Practice</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className={navLinkClasses('skills')}>Skills</a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden animate-in slide-in-from-top-5 duration-200">
           <div className="flex flex-col gap-6 text-xl font-medium">
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={mobileNavLinkClasses('home')}>Home</a>
              <a href="#achievements" onClick={(e) => handleNavClick(e, 'achievements')} className={mobileNavLinkClasses('achievements')}>Achievements</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className={mobileNavLinkClasses('projects')}>Projects</a>
              <a href="#devops-practice" onClick={(e) => handleNavClick(e, 'devops-practice')} className={mobileNavLinkClasses('devops-practice')}>DevOps Practice</a>
              <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className={mobileNavLinkClasses('skills')}>Skills</a>
           </div>
        </div>
      )}

      {/* Floating Command Button */}
      <button
        onClick={() => setIsCmdOpen(true)}
        className="fixed bottom-8 right-8 z-40 p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:text-white hover:border-zinc-700 transition-[color,border-color,transform] shadow-2xl hover:scale-105 active:scale-95"
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
              <Search className="w-4 h-4 text-zinc-400 mr-3" />
              <input 
                autoFocus
                type="text"
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent border-none outline-none text-zinc-200 placeholder-zinc-500 text-sm h-6"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="hidden sm:flex items-center gap-2">
                  <div className="text-[10px] text-zinc-400 font-mono">
                     <span className="bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800 mr-1">↑</span>
                     <span className="bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">↓</span> to navigate
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">ESC</div>
              </div>
            </div>
            
            {/* Menu Items */}
            <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide">
              {filteredItems.map((item, index) => {
                if (item.type === 'header') {
                  const nextItemIndex = filteredItems.findIndex((i, idx) => idx > index && i.type !== 'header');
                  if (nextItemIndex === -1 && index !== filteredItems.length - 1) return null;
                   
                  return (
                    <div key={`header-${index}`} className="px-3 py-2 text-[10px] uppercase tracking-wider font-medium text-zinc-400 mt-2 first:mt-0 ml-1">
                      {item.label}
                    </div>
                  );
                }
                
                const isSelected = navigableItems[selectedIndex] === item;

                return (
                  <button
                    key={`item-${index}`}
                    onClick={item.action}
                    onMouseEnter={() => {
                        const navIndex = navigableItems.indexOf(item);
                        if (navIndex !== -1) setSelectedIndex(navIndex);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors group cursor-pointer ${
                        isSelected 
                            ? 'bg-zinc-800 text-white' 
                            : 'text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`${isSelected ? 'text-zinc-300' : 'text-zinc-400'}`}>{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    {item.shortcut && (
                      <div className="flex gap-1">
                          <span className={`text-[10px] px-1.5 py-0.5 rounded border font-mono uppercase ${
                              isSelected 
                                ? 'bg-zinc-700 text-zinc-300 border-zinc-600' 
                                : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                          }`}>
                            {item.shortcut}
                          </span>
                      </div>
                    )}
                  </button>
                );
              })}
              {filteredItems.length === 0 && (
                 <div className="px-4 py-8 text-center text-sm text-zinc-400">
                   No results found.
                 </div>
              )}
            </div>
          </div>
        </div>
      )}

      {projectToShow ? (
        <ProjectDetailPage project={projectToShow} allProjects={projects} onNavigate={(id) => performSafeNavigation(id)} />
      ) : (
        <div className="max-w-4xl mx-auto px-6 pt-12 md:pt-20 relative z-10">
        
          {/* Header / Profile Section */}
          <section id="home" className="flex flex-col md:flex-row-reverse md:justify-between md:items-start gap-8 md:gap-12 mb-24 scroll-mt-32">
            
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
              <h2 className="text-lg md:text-xl text-zinc-300 font-medium mb-6">
                DevOps Engineer • BCA Student
              </h2>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-zinc-300 text-sm">
                  <GraduationCap className="w-4 h-4 mt-0.5 text-zinc-400" />
                  <span>Bachelor of Computer Applications (2027)</span>
                </div>
                <div className="flex items-start gap-3 text-zinc-300 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-zinc-400" />
                  <span>Shimoga, Karnataka, India</span>
                </div>
                <div className="flex items-start gap-3 text-zinc-300 text-sm">
                  <Briefcase className="w-4 h-4 mt-0.5 text-zinc-400" />
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

          </section>

          {/* Achievements Section */}
          <section className="mb-20 scroll-mt-28" id="achievements">
            <h2 className="text-2xl font-bold text-zinc-100 mb-8">
              Achievements
            </h2>
            <div className="flex flex-col gap-4">
              <ExperienceCard 
                icon={<LogoCodeNeura />} 
                company="First Place – CodeNeura" 
                role="Issued by LBS College, Sagara"
                date="2025-NOV"
                description="The competition evaluated problem-solving ability, coding efficiency, and practical technical implementation under strict time constraints, competing against teams from multiple colleges." 
                link="https://www.linkedin.com/posts/dhanushdprabhu_neura2025-codingcompetition-firstplace-activity-7391068108612071425-zN4C"
                linkText="LinkedIn"
              />
              <ExperienceCard 
                icon={<LogoTournament />} 
                company="Runner-Up – College Coding Tournament" 
                role="Inter-college coding competition"
                date="2025-JAN"
                description="Secured runner-up position in a college-level coding tournament focused on logical problem-solving and coding accuracy under time constraints." 
              />
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-20 scroll-mt-28" id="projects">
            <h2 className="text-3xl font-bold text-zinc-100 mb-12">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <a href="https://github.com/iamdevdhanush" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                View All Projects on GitHub
                <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </section>

          {/* DevOps Practice Section */}
          <section className="mb-20 scroll-mt-28" id="devops-practice">
            <h2 className="text-2xl font-bold text-zinc-100 mb-8">
              DevOps Practice
            </h2>
            <div className="flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed">
              <p>
                I maintain a public DevOps practice repository where I document hands-on learning across Linux, shell scripting, Git, CI/CD, and container fundamentals.
              </p>
              <p>
                This repository focuses on practice, experiments, and understanding system behavior rather than claiming production experience.
              </p>
              <a 
                href="https://github.com/iamdevdhanush/Devops"
                target="_blank" 
                rel="noreferrer"
                className="text-zinc-300 hover:text-zinc-100 transition-colors inline-block mt-2"
              >
                Read more → https://github.com/iamdevdhanush/Devops
              </a>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-20 scroll-mt-28" id="skills">
            <h2 className="text-2xl font-bold text-zinc-100 mb-8">
              Skills
            </h2>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <LogoLinux />
              <LogoBash />
              <LogoPython />
              <LogoGit />
              <LogoGithub />
              <LogoAWSConsole/>
              <LogoGHActions />
              <LogoDocker />
              <LogoKubernetes/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-sm">
              <div>
                <h3 className="font-semibold text-zinc-100 mb-2">Linux</h3>
                <ul className="space-y-1 text-zinc-300">
                  <li>- Comfortable working in the terminal on Ubuntu</li>
                  <li>- Basic understanding of filesystems, processes, and permissions</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-100 mb-2">Shell Scripting (Bash)</h3>
                <ul className="space-y-1 text-zinc-300">
                  <li>- Writing small to medium Bash scripts for automation</li>
                  <li>- Using core utilities for system inspection and reporting</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-100 mb-2">Python</h3>
                <ul className="space-y-1 text-zinc-300">
                  <li>- Using Python for scripting and small automation tasks</li>
                  <li>- Writing simple programs to support DevOps-related workflows</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-100 mb-2">Git & Version Control</h3>
                <ul className="space-y-1 text-zinc-300">
                  <li>- Daily use of Git for personal and learning projects</li>
                  <li>- Comfortable with branching, commits, and basic history inspection</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-100 mb-2">CI/CD (Learning)</h3>
                <ul className="space-y-1 text-zinc-300">
                  <li>- Building basic pipelines using GitHub Actions</li>
                  <li>- Understanding workflow structure, steps, and failures</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-100 mb-2">Containers (Learning)</h3>
                <ul className="space-y-1 text-zinc-300">
                  <li>- Building and running Docker images</li>
                  <li>- Understanding container basics and image structure</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-100 mb-2">General</h3>
                <ul className="space-y-1 text-zinc-300">
                  <li>- Debugging issues step by step</li>
                  <li>- Learning by breaking and fixing systems</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400 mb-8">
            <p>© {new Date().getFullYear().toString()} Dhanush D Prabhu.</p>
            <div className="flex gap-4">
              <span>Built with React & Tailwind</span>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}