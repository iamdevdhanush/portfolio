import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
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
    <div className="min-h-screen bg-[#F1EBDD] text-[#151515] relative font-sans overflow-x-hidden selection:bg-[#F04B16] selection:text-[#FAF7F0]">
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
    <div className="max-w-4xl mx-auto px-6 pt-36 pb-20 relative z-10 text-center text-[#8A877F]">
      <h1 className="font-serif text-3xl font-bold text-[#151515] mb-3">Page Not Found</h1>
      <p className="font-sans text-sm mb-6">The requested resource could not be resolved.</p>
      <a href="/" className="px-6 py-3 bg-[#151515] text-[#FAF7F0] hover:bg-[#F04B16] font-mono text-xs font-bold uppercase rounded-lg transition-colors inline-block">
        Return to Home
      </a>
    </div>
  );
}
