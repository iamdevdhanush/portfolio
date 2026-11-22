import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import AchievementStrip from '../components/AchievementStrip';
import AboutSection from '../components/AboutSection';
import HackathonsSection from '../components/HackathonsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { homeSEO } from '../data/seo';
import { personSchema, websiteSchema } from '../data/structuredData';
import { scrollToSection } from '../utils/smoothScroll';

const SECTION_IDS = ['home', 'projects', 'achievements', 'about', 'hackathons', 'skills', 'contact'];

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
        
        {/* 1. Hero: Light Warm Paper with bottom torn paper cutting into #151515 */}
        <section id="home">
          <Hero onNavigate={onNavigate} />
        </section>

        {/* 2. Work (Featured Projects): Deep Ink #151515 */}
        <ProjectsSection onNavigate={onNavigate} />

        {/* 3. Achievements: Deep Ink #151515 */}
        <AchievementStrip />

        {/* Organic deckle-edge paper transition from Deep Ink #151515 back to Warm Paper #F1EBDD */}
        <div className="w-full overflow-hidden leading-none z-20 -mt-1 pointer-events-none" aria-hidden="true">
          <svg
            viewBox="0 0 1440 40"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-6 sm:h-8 md:h-9 text-[#151515]"
          >
            <path
              d="M0,0 L1440,0 L1440,20 C1410,18 1370,22 1300,16 C1220,24 1150,17 1080,22 C1000,15 930,22 860,18 C780,25 710,16 630,21 C550,14 480,24 410,17 C330,23 270,15 210,21 C130,12 75,20 0,16 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* 4. About: Light Warm Paper */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <AboutSection />
        </div>

        {/* 5 & 6. Hackathons & Skills: Light Warm Paper */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <HackathonsSection />
          <SkillsSection />
        </div>

        {/* 7 & 8. Contact & Footer: Deep Ink #090909 */}
        <ContactSection />
        <Footer />

      </div>
    </>
  );
};

export default HomePage;
