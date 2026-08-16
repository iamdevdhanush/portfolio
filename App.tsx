import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { Command } from 'lucide-react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

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
    navigate('/#' + id);
  }, [navigate]);

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
    <div className="min-h-screen bg-black text-zinc-200 selection:bg-zinc-800 selection:text-white relative font-sans overflow-x-hidden">
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

      <button
        onClick={() => setIsCmdOpen(true)}
        className="fixed bottom-8 right-8 z-40 p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:text-white hover:border-zinc-700 transition-[color,border-color,transform] shadow-2xl hover:scale-105 active:scale-95"
        aria-label="Open Command Palette"
      >
        <Command className="w-5 h-5" />
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
    <div className="max-w-4xl mx-auto px-6 pt-32 relative z-10 text-center">
      <h1 className="text-base font-normal text-zinc-400">Page not found. <a href="/" className="text-blue-400 hover:text-blue-300">Return home.</a></h1>
    </div>
  );
}
