import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import AchievementStrip from '../components/AchievementStrip';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import HackathonsSection from '../components/HackathonsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { homeSEO } from '../data/seo';
import { personSchema, websiteSchema } from '../data/structuredData';
import { scrollToSection } from '../utils/smoothScroll';

const SECTION_IDS = ['home', 'achievements', 'about', 'projects', 'hackathons', 'skills', 'contact'];

interface HomePageProps {
  onNavigate: (id: string) => void;
  onSectionChange: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSectionChange }) => {
  const location = useLocation();

  const jsonLd = useMemo(() => [personSchema(), websiteSchema()], []);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && SECTION_IDS.includes(hash)) {
      setTimeout(() => {
        scrollToSection(hash, 88);
      }, 50);
    } else if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 120) {
        onSectionChange('home');
        return;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        onSectionChange('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSectionChange(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [onSectionChange]);

  return (
    <>
      <SEO {...homeSEO} jsonLd={jsonLd} />
      <div className="relative z-10 w-full overflow-x-hidden">
        
        {/* 1. Hero: Light Warm Paper */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Hero onNavigate={onNavigate} />
        </div>

        {/* 2. Achievements: Deep Ink Dark Section (100% Full-Width) */}
        <AchievementStrip />

        {/* 3. About: Light Warm Paper */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <AboutSection />
        </div>

        {/* 4. Projects: Deep Ink Dark Section (100% Full-Width) */}
        <ProjectsSection onNavigate={onNavigate} />

        {/* 5 & 6. Hackathons & Skills: Light Warm Paper */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <HackathonsSection />
          <SkillsSection />
        </div>

        {/* 7 & 8. Contact & Footer: Deep Ink Dark Section (100% Full-Width) */}
        <ContactSection />
        <Footer />

      </div>
    </>
  );
};

export default HomePage;
