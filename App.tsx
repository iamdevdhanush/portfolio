import React from 'react';
import { Linkedin, Github, Mail, ArrowUpRight, GraduationCap, Briefcase, Trophy, FileText } from 'lucide-react';

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
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-100 pb-20 relative overflow-hidden">
      
      {/* Background Gradients from previous design (subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-20 md:pt-32 relative z-10">
        
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
                 src="/profile.jpg" 
                 alt="Dhanush D Prabhu" 
                 className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
               />
            </div>
          </div>
        </div>

        {/* Experience Section (Repurposed for Achievements as per content) */}
        <section className="mb-20">
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
        <section className="mb-20">
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
        <section className="mb-12 pt-8 border-t border-white/5">
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