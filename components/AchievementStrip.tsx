import React, { useState } from 'react';
import { Trophy, Award, Zap, ArrowUpRight, Flame, Target } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import AchievementModal from './AchievementModal';
import type { AchievementDetail } from '../types';

const AchievementStrip: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementDetail | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'codeneura':
        return <Trophy className="w-5 h-5 text-[#F28C28]" />;
      case 'national-ai-hackathon':
        return <Flame className="w-5 h-5 text-[#F28C28]" />;
      case 'state-hackathon-gmit':
        return <Award className="w-5 h-5 text-[#F28C28]" />;
      case 'ey-techathon':
        return <Zap className="w-5 h-5 text-[#F28C28]" />;
      case 'green-it':
        return <Target className="w-5 h-5 text-[#F28C28]" />;
      default:
        return <Trophy className="w-5 h-5 text-[#F28C28]" />;
    }
  };

  return (
    <section id="achievements" className="mb-24 md:mb-32 scroll-mt-28">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#F28C28] uppercase tracking-widest">
            <span>01 // COMPETITION RECORD</span>
            <span className="w-2 h-px bg-[#F28C28]" />
            <span>HONORS & HACKATHONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F2ED] tracking-tight">
            Championship Record
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#929292] font-mono max-w-md">
          Tested under high-pressure competitive environments. Click any achievement to inspect the architectural debrief and technical solutions.
        </p>
      </div>

      {/* Editorial Interactive Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {achievementsData.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedAchievement(item)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedAchievement(item);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View detailed report for ${item.title}`}
            className="group relative bg-[#111214] border border-[#292929] hover:border-[#F28C28]/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F28C28]/5 cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
          >
            {/* Topographic Background Contour Accent inside Card */}
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full border border-[#292929]/50 pointer-events-none group-hover:border-[#F28C28]/20 transition-colors" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#171719] border border-[#292929] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#F28C28]/50 transition-all">
                  {getIcon(item.id)}
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center text-[11px] font-mono font-medium text-[#F28C28] bg-[#F28C28]/10 border border-[#F28C28]/30 rounded-full px-3 py-1">
                    {item.award}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#171719] border border-[#292929] flex items-center justify-center text-[#929292] group-hover:text-[#F28C28] group-hover:border-[#F28C28]/40 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-lg text-[#F5F2ED] group-hover:text-[#F28C28] transition-colors leading-snug mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-[#929292] leading-relaxed mb-4">
                {item.subtitle}
              </p>
            </div>

            <div className="pt-4 border-t border-[#292929]/80 flex items-center justify-between text-[11px] font-mono text-[#929292]">
              <span className="text-[#F5F2ED] font-medium">{item.highlightStat}</span>
              <span className="group-hover:text-[#F28C28] transition-colors flex items-center gap-1">
                <span>View Case Study</span>
                <span className="text-xs">→</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Dedicated Experience Modal / Full-Screen View */}
      <AchievementModal
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </section>
  );
};

export default AchievementStrip;
