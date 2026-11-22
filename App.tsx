import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { Command } from 'lucide-react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

import { scrollToSection } from './utils/smoothScroll';

export default function App() {
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [showBlobs, setShowBlobs] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');

  useEffect(() => {
    if (isProjectPage) setActiveSection('');
  }, [isProjectPage]);

  const performSafeNavigation = useCallback((id: string) => {
    setIsCmdOpen(false);
    if (id.startsWith('/project/')) {
      navigate(id);
      return;
    }
    if (location.pathname !== '/') {
      navigate('/#' + id);
      return;
    }
    scrollToSection(id, 88);
  }, [navigate, location.pathname]);

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
      if (isCmdOpen) return;
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName || '')) return;
      const key = e.key.toLowerCase();
      const shortcutMap: Record<string, string> = {
        'h': 'home', 'a': 'achievements', 'b': 'about',
        'p': 'projects', 'k': 'hackathons', 's': 'skills', 'c': 'contact',
      };
      if (shortcutMap[key]) {
        e.preventDefault();
        performSafeNavigation(shortcutMap[key]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCmdOpen, performSafeNavigation]);

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F5F2ED] relative font-sans overflow-x-hidden selection:bg-[#F28C28] selection:text-[#0B0C0E]">
      {showBlobs && <Background />}

      <Navbar
        activeSection={activeSection}
        onNavigate={performSafeNavigation}
      />

      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        onNavigate={performSafeNavigation}
        showBlobs={showBlobs}
        onToggleBlobs={() => setShowBlobs(prev => !prev)}
      />

      {/* Floating Command Trigger */}
      <button
        onClick={() => setIsCmdOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3 bg-[#171719]/90 backdrop-blur-md border border-[#292929] hover:border-[#F28C28]/60 rounded-xl text-[#929292] hover:text-[#F28C28] transition-all shadow-2xl hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 group"
        aria-label="Open Command Palette (Ctrl+K)"
      >
        <Command className="w-4 h-4 text-[#F28C28]" />
        <span className="hidden sm:inline font-mono text-[10px] text-[#929292] group-hover:text-[#F5F2ED] transition-colors">
          ⌘K
        </span>
      </button>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onNavigate={performSafeNavigation}
                onSectionChange={setActiveSection}
              />
            }
          />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NavigateToHome />} />
        </Routes>
      </main>
    </div>
  );
}

function NavigateToHome() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-36 pb-20 relative z-10 text-center text-[#929292]">
      <h1 className="text-2xl font-bold text-[#F5F2ED] mb-3">Page Not Found</h1>
      <p className="text-sm mb-6">The requested page could not be located.</p>
      <a href="/" className="px-5 py-2.5 bg-[#F28C28] text-[#0B0C0E] text-xs font-semibold rounded-lg hover:bg-[#FA9E42] transition-colors inline-block">
        Return to Home
      </a>
    </div>
  );
}
