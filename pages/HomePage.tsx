import React, { useEffect } from 'react';
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

const SECTION_IDS = ['home', 'achievements', 'about', 'projects', 'hackathons', 'skills', 'contact'];

interface HomePageProps {
  onNavigate: (id: string) => void;
  onSectionChange: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSectionChange }) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && SECTION_IDS.includes(hash)) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onSectionChange(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onSectionChange]);

  return (
    <>
      <SEO {...homeSEO} jsonLd={[personSchema(), websiteSchema()]} />
      <div className="max-w-4xl mx-auto px-6 pt-12 md:pt-20 relative z-10">
        <Hero onNavigate={onNavigate} />
        <AchievementStrip />
        <AboutSection />
        <ProjectsSection onNavigate={onNavigate} />
        <HackathonsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
