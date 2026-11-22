import React, { useState } from 'react';
import { ArrowUpRight, Trophy, Calendar, MapPin } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import AchievementModal from './AchievementModal';
import ScrollReveal from './ScrollReveal';
import type { AchievementDetail } from '../types';

const AchievementStrip: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementDetail | null>(null);

  const premierWin = achievementsData[0]; // CodeNeura 1st Place
  const timelineEntries = achievementsData.slice(1);

  return (
    <section id="achievements" className="w-full px-5 sm:px-8 pt-16 md:pt-20 pb-20 md:pb-24 bg-[#151515] text-[#FAF7F0] ink-grain scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={16} duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#2A2A2A]">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#F04B16]">
                <span className="w-2 h-2 rounded-full bg-[#F04B16]" />
                <span>Verified Honors // 2024–2026</span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#FAF7F0] tracking-tight uppercase">
                Chronicle of Wins
              </h2>
              <p className="font-serif italic text-base sm:text-lg text-[#8A877F] mt-1">
                Documented competition records from collegiate, state, and national hackathons.
              </p>
            </div>
            <div className="text-right hidden md:block font-mono text-xs text-[#8A877F]">
              <span>[ INTERACTIVE CASE STUDIES ]</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Premier Featured Showcase: CodeNeura 1st Place */}
        {premierWin && (
          <ScrollReveal direction="up" distance={20} duration={600}>
            <div
              onClick={() => setSelectedAchievement(premierWin)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedAchievement(premierWin);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Open detailed case study for ${premierWin.title}`}
              className="group mb-12 border border-[#2A2A2A] hover:border-[#F04B16] rounded-xl p-6 sm:p-10 bg-[#090909] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F04B16]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Headline & Project Overview */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#F04B16] text-[#FAF7F0]">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{premierWin.award}</span>
                    </span>
                    <span className="font-mono text-xs text-[#8A877F]">
                      {premierWin.organization} · {premierWin.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FAF7F0] group-hover:text-[#F04B16] transition-colors leading-tight">
                    {premierWin.eventName}
                  </h3>

                  <p className="text-sm sm:text-base text-[#8A877F] leading-relaxed max-w-2xl font-sans">
                    {premierWin.projectOverview}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {premierWin.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-[#FAF7F0] bg-[#151515] border border-[#2A2A2A] px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center gap-2 font-mono text-xs text-[#F04B16] font-semibold">
                    <span>EXPLORE VERIFIED CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Right: Authentic Photograph Frame */}
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-xs aspect-[4/3] rounded-lg overflow-hidden border border-[#2A2A2A] bg-[#151515] group-hover:border-[#F04B16]/60 transition-colors">
                    <img
                      src="/profile.jpg"
                      alt="Dhanush D Prabhu — CodeNeura Winner"
                      className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-left">
                      <span className="font-serif font-bold text-xs text-[#FAF7F0] block">
                        Dhanush D Prabhu
                      </span>
                      <span className="font-mono text-[10px] text-[#8A877F]">
                        1st Place · CodeNeura Tech-a-Thon
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Timeline Chronicle: Clean Editorial Rows */}
        <div className="border-t border-[#2A2A2A]">
          {timelineEntries.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 60} direction="up" distance={16} duration={500}>
              <div
                onClick={() => setSelectedAchievement(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedAchievement(item);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Open detailed case study for ${item.title}`}
                className="group py-5 sm:py-6 border-b border-[#2A2A2A] hover:bg-[#090909]/60 px-4 rounded-lg transition-all duration-200 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[#F04B16]"
              >
                {/* Left: Metadata */}
                <div className="md:w-1/4 shrink-0 space-y-1">
                  <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider text-[#F04B16]">
                    {item.award}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#8A877F]">
                    <Calendar className="w-3.5 h-3.5 text-[#8A877F]" />
                    <span>{item.date}</span>
                    {item.location && (
                      <>
                        <span>•</span>
                        <MapPin className="w-3.5 h-3.5 text-[#8A877F]" />
                        <span>{item.location.split(',')[0]}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Center: Title & Description */}
                <div className="md:w-1/2 space-y-1">
                  <h4 className="font-serif text-lg sm:text-xl text-[#FAF7F0] group-hover:text-[#F04B16] transition-colors">
                    {item.eventName}
                  </h4>
                  <p className="text-xs text-[#8A877F] line-clamp-2 font-sans">
                    {item.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="font-mono text-[11px] text-[#8A877F]">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Action */}
                <div className="md:w-1/4 flex md:justify-end items-center gap-2 font-mono text-xs text-[#8A877F] group-hover:text-[#F04B16] transition-colors">
                  <span className="hidden sm:inline">Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <AchievementModal
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </section>
  );
};

export default AchievementStrip;
