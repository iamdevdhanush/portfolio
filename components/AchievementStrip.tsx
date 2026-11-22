import React, { useState } from 'react';
import { ArrowUpRight, Trophy, Calendar, Award, ShieldCheck } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import AchievementModal from './AchievementModal';
import ScrollReveal from './ScrollReveal';
import type { AchievementDetail } from '../types';

const AchievementStrip: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementDetail | null>(null);

  const conciseDescriptions: Record<string, string> = {
    'codeneura': 'Awarded 1st place for optimal algorithmic problem-solving and computational complexity under timed constraints.',
    'national-ai-hackathon': 'Selected in the top 5 finalists out of 100+ state engineering teams for Avana V2 spatial intelligence.',
    'state-hackathon-gmit': 'Delivered an end-to-end community emergency support platform under strict 24-hour sprint constraints.',
    'ey-techathon': 'Advanced to Round 2 by designing scalable enterprise data pipelines for distributed workflows.',
    'green-it-competition': 'Awarded 1st place for architectural modeling of machine state tracking and compute energy reduction.',
  };

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
                Visual Award Archive
              </h2>
              <p className="font-serif italic text-base sm:text-lg text-[#8A877F] mt-1">
                Documented competition records from collegiate, state, and national hackathons.
              </p>
            </div>
            <div className="text-right hidden md:block font-mono text-xs text-[#8A877F]">
              <span>[ 05 VERIFIED CITATIONS ]</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Visual Award Archive Grid with Standardized Aspect Ratios & Sleek Plaques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => {
            const shortDesc = conciseDescriptions[item.id] || item.subtitle;
            const hasPhoto = item.id === 'codeneura';

            return (
              <ScrollReveal key={item.id} delay={idx * 50} direction="up" distance={18} duration={550}>
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
                  aria-label={`Open verified case study for ${item.eventName}`}
                  className="group h-full bg-[#090909] border border-[#2A2A2A] hover:border-[#F04B16] rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F04B16] hover:-translate-y-1"
                >
                  <div>
                    {/* Consistent Aspect Ratio Visual Banner (Zero broken images) */}
                    <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-[#2A2A2A] bg-[#151515] mb-4 flex items-center justify-center">
                      {hasPhoto ? (
                        <>
                          <img
                            src="/profile.jpg"
                            alt={`${item.eventName} — Dhanush D Prabhu`}
                            width="400"
                            height="250"
                            loading="lazy"
                            className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#FAF7F0]">
                            <span>Dhanush D Prabhu</span>
                            <span className="text-[#F04B16] font-bold">1st Place Winner</span>
                          </div>
                        </>
                      ) : (
                        /* Archival Certificate Plaque Visual */
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#181818] via-[#121212] to-[#0d0d0d] text-center relative group-hover:from-[#1f1917] transition-colors">
                          <div className="w-10 h-10 rounded-full bg-[#F04B16]/10 border border-[#F04B16]/40 flex items-center justify-center text-[#F04B16] mb-2 group-hover:scale-110 group-hover:bg-[#F04B16]/20 transition-all">
                            {item.award.includes('1st') ? (
                              <Trophy className="w-4 h-4 text-[#F04B16]" />
                            ) : (
                              <Award className="w-4 h-4 text-[#F04B16]" />
                            )}
                          </div>
                          <span className="font-serif italic text-xs text-[#FAF7F0] font-medium line-clamp-1">
                            {item.organization}
                          </span>
                          <span className="font-mono text-[10px] text-[#8A877F] uppercase tracking-wider mt-1 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-[#F04B16]" />
                            Official Citation · {item.date}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Meta: Award & Year */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-block px-2.5 py-0.5 rounded font-mono text-[11px] font-bold uppercase tracking-wider bg-[#F04B16] text-[#FAF7F0]">
                        {item.award}
                      </span>
                      <div className="flex items-center gap-1 font-mono text-xs text-[#8A877F]">
                        <Calendar className="w-3 h-3" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {/* Competition Name */}
                    <h3 className="font-serif text-lg sm:text-xl text-[#FAF7F0] group-hover:text-[#F04B16] transition-colors leading-snug mb-1.5">
                      {item.eventName}
                    </h3>

                    {/* Organization */}
                    <p className="font-mono text-xs text-[#8A877F] mb-3">
                      {item.organization}
                    </p>

                    {/* One Short Sentence Description */}
                    <p className="font-sans text-xs text-[#8A877F] leading-relaxed">
                      {shortDesc}
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-4 mt-4 border-t border-[#2A2A2A] flex items-center justify-between font-mono text-xs text-[#8A877F] group-hover:text-[#F04B16] transition-colors">
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
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