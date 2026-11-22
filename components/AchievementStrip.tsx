import React, { useState } from 'react';
import { ArrowUpRight, Trophy, Calendar, MapPin, Award } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import AchievementModal from './AchievementModal';
import ScrollReveal from './ScrollReveal';
import type { AchievementDetail } from '../types';

const AchievementStrip: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementDetail | null>(null);

  // Separate the premier highlight from the chronicle timeline
  const featured = achievementsData[0]; // CodeNeura 1st Place
  const timelineEntries = achievementsData.slice(1);

  return (
    <section id="achievements" className="mb-24 md:mb-32 scroll-mt-28">
      {/* Clean Editorial Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-5 h-[2px] bg-[#F28C28]" />
              <span className="text-xs uppercase tracking-widest text-[#F28C28] font-semibold">
                Competition Record
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] tracking-tight">
              Verified Hackathon Honors
            </h2>
          </div>
          <span className="text-xs text-[#929292]">
            Select any entry to view verified case study
          </span>
        </div>
      </ScrollReveal>

      {/* Asymmetric Showcase: Featured Win + Timeline Chronicle */}
      <div className="space-y-10">
        
        {/* Featured Premier Win: Large Editorial Spotlight */}
        {featured && (
          <ScrollReveal direction="up" distance={20} duration={600}>
            <div
              onClick={() => setSelectedAchievement(featured)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedAchievement(featured);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View detailed case study for ${featured.title}`}
              className="group border border-[#292929] hover:border-[#F28C28]/60 rounded-2xl p-6 sm:p-8 lg:p-10 bg-[#111214] transition-all duration-300 hover:shadow-xl hover:shadow-[#F28C28]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Text Content */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B0C0E] bg-[#F28C28] px-3 py-1 rounded-full shadow-sm">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{featured.award}</span>
                    </span>
                    <span className="text-xs text-[#929292] font-mono">
                      {featured.organization} · {featured.date}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] group-hover:text-[#F28C28] transition-colors leading-tight">
                    {featured.eventName}
                  </h3>

                  <p className="text-sm text-[#929292] leading-relaxed max-w-2xl">
                    {featured.projectOverview}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {featured.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-[#F5F2ED] bg-[#171719] px-2.5 py-1 rounded-md border border-[#292929]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 flex items-center gap-2 text-xs font-semibold text-[#F28C28]">
                    <span>Open Case Study & Verified Results</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Evidence Photo Frame */}
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="w-full max-w-xs aspect-[4/3] rounded-xl overflow-hidden bg-[#171719] border border-[#292929] relative">
                    <img
                      src="/profile.jpg"
                      alt="Dhanush D Prabhu — CodeNeura Winner"
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-left">
                      <span className="text-[11px] text-[#F5F2ED] font-medium block">
                        Dhanush D Prabhu
                      </span>
                      <span className="text-[10px] text-[#929292]">
                        1st Place · CodeNeura Tech-a-Thon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Timeline Chronicle: Clean Editorial Rows with Hairline Dividers */}
        <div className="border-t border-[#292929]">
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
                aria-label={`View detailed case study for ${item.title}`}
                className="group py-6 border-b border-[#292929] hover:bg-[#111214]/50 px-2 sm:px-4 rounded-xl transition-all duration-200 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[#F28C28]"
              >
                {/* Left: Metadata */}
                <div className="md:w-1/4 shrink-0 space-y-1">
                  <span className="text-xs font-semibold text-[#F28C28] uppercase tracking-wide block">
                    {item.award}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#929292]">
                    <Calendar className="w-3.5 h-3.5 text-[#929292]" />
                    <span>{item.date}</span>
                    {item.location && (
                      <>
                        <span>•</span>
                        <MapPin className="w-3.5 h-3.5 text-[#929292]" />
                        <span>{item.location.split(',')[0]}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Center: Title & Project Summary */}
                <div className="md:w-1/2 space-y-1">
                  <h4 className="text-base sm:text-lg font-semibold text-[#F5F2ED] group-hover:text-[#F28C28] transition-colors">
                    {item.eventName}
                  </h4>
                  <p className="text-xs text-[#929292] line-clamp-2">
                    {item.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-[11px] text-[#929292]">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Action Indicator */}
                <div className="md:w-1/4 flex md:justify-end items-center gap-2 text-xs text-[#929292] group-hover:text-[#F28C28] transition-colors">
                  <span className="hidden sm:inline font-medium">Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <AchievementModal
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </section>
  );
};

export default AchievementStrip;
