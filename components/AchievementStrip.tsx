import React, { useState } from 'react';
import { Trophy, Award, Zap, ArrowUpRight, Flame, Target } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import AchievementModal from './AchievementModal';
import ScrollReveal from './ScrollReveal';
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
      {/* Clean Editorial Section Header */}
      <ScrollReveal direction="up" distance={16} duration={500}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#292929]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] tracking-tight">
              Achievements
            </h2>
            <p className="text-sm text-[#929292] mt-1">
              Awards and competition records from collegiate and state-level hackathons.
            </p>
          </div>
          <span className="text-xs text-[#929292] hidden md:block">
            Click any entry to view project details
          </span>
        </div>
      </ScrollReveal>

      {/* Interactive Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {achievementsData.map((item, idx) => (
          <ScrollReveal key={item.id} delay={idx * 75} direction="up" distance={20} duration={600}>
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
              aria-label={`View detailed report for ${item.title}`}
              className="group bg-[#111214] border border-[#292929] hover:border-[#F28C28]/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F28C28]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F28C28] h-full"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#171719] border border-[#292929] flex items-center justify-center shrink-0">
                    {getIcon(item.id)}
                  </div>

                  <span className="inline-flex items-center text-xs font-medium text-[#F28C28] bg-[#F28C28]/10 border border-[#F28C28]/30 rounded-full px-3 py-1">
                    {item.award}
                  </span>
                </div>

                <h3 className="font-semibold text-lg text-[#F5F2ED] group-hover:text-[#F28C28] transition-colors leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#929292] leading-relaxed mb-4">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-[#292929] flex items-center justify-between text-xs text-[#929292]">
                <span className="text-[#F5F2ED] font-medium">{item.organization || item.date}</span>
                <span className="group-hover:text-[#F28C28] transition-colors flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Detail Modal */}
      <AchievementModal
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </section>
  );
};

export default AchievementStrip;
