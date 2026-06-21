import React, { useState, useEffect, useCallback } from 'react';
import { Command } from 'lucide-react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Hero from './components/Hero';
import AchievementStrip from './components/AchievementStrip';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import HackathonsSection from './components/HackathonsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage';
import { projects } from './data/projects';

const SECTION_IDS = ['home', 'achievements', 'about', 'projects', 'hackathons', 'skills', 'contact'];

export default function App() {
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [showBlobs, setShowBlobs] = useState(true);
  const [currentProjectSlug, setCurrentProjectSlug] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const performSafeNavigation = useCallback((id: string) => {
    setIsCmdOpen(false);
    if (id.startsWith('/project/')) {
      const slug = id.replace('/project/', '');
      setCurrentProjectSlug(slug);
      try { window.history.pushState(null, '', `#/project/${slug}`); } catch (_) {}
      window.scrollTo(0, 0);
      return;
    }
    if (currentProjectSlug) {
      setCurrentProjectSlug(null);
      try { window.history.pushState(null, '', `#${id}`); } catch (_) {}
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      try { window.history.pushState(null, '', `#${id}`); } catch (_) {}
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentProjectSlug]);

  // Hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#\/project\/(.*)$/);
      if (match?.[1]) {
        setCurrentProjectSlug(match[1]);
        window.scrollTo(0, 0);
      } else if (currentProjectSlug) {
        setCurrentProjectSlug(null);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentProjectSlug]);

  // Scroll to section when navigating back from project
  useEffect(() => {
    if (!currentProjectSlug) {
      const hash = window.location.hash;
      if (hash && hash !== '#' && !hash.startsWith('#/')) {
        setTimeout(() => {
          document.getElementById(hash.substring(1))?.scrollIntoView();
        }, 100);
      } else if (!hash || hash === '#') {
        window.scrollTo(0, 0);
      }
    }
  }, [currentProjectSlug]);

  // Scroll spy
  useEffect(() => {
    if (currentProjectSlug) { setActiveSection(''); return; }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [currentProjectSlug]);

  // Global keyboard shortcuts (Cmd+K and Escape only)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCmdOpen(prev => !prev);
        return;
      }
      if (e.key === 'Escape') {
        setIsCmdOpen(false);
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const projectToShow = currentProjectSlug
    ? projects.find(p => p.slug === currentProjectSlug)
    : null;

  return (
    <div className="min-h-screen bg-black text-zinc-200 selection:bg-zinc-800 selection:text-white relative font-sans overflow-x-hidden">
      {showBlobs && <Background />}

      <Navbar activeSection={activeSection} onNavigate={performSafeNavigation} />

      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        onNavigate={performSafeNavigation}
        showBlobs={showBlobs}
        onToggleBlobs={() => setShowBlobs(prev => !prev)}
      />

      <button
        onClick={() => setIsCmdOpen(true)}
        className="fixed bottom-8 right-8 z-40 p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:text-white hover:border-zinc-700 transition-[color,border-color,transform] shadow-2xl hover:scale-105 active:scale-95"
        aria-label="Open Command Palette"
      >
        <Command className="w-5 h-5" />
      </button>

      {projectToShow ? (
        <ProjectDetailPage
          project={projectToShow}
          allProjects={projects}
          onNavigate={performSafeNavigation}
        />
      ) : (
        <div className="max-w-4xl mx-auto px-6 pt-12 md:pt-20 relative z-10">
          <Hero onNavigate={performSafeNavigation} />
          <AchievementStrip />
          <AboutSection />
          <ProjectsSection onNavigate={performSafeNavigation} />
          <HackathonsSection />
          <SkillsSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </div>
  );
}
