import React, { useEffect } from 'react';
import { X, Trophy, Award, MapPin, Calendar, CheckCircle2, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import type { AchievementDetail } from '../types';

interface AchievementModalProps {
  achievement: AchievementDetail | null;
  onClose: () => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({ achievement, onClose }) => {
  useEffect(() => {
    if (!achievement) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="achievement-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0C0E]/90 backdrop-blur-xl flex justify-center items-start p-0 md:p-6 lg:p-10 animate-modal-backdrop"
    >
      {/* Background click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Container */}
      <div className="relative w-full max-w-4xl bg-[#111214] border border-[#292929] md:rounded-2xl shadow-2xl overflow-hidden z-10 my-0 md:my-8 text-[#F5F2ED] animate-modal-enter">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-[#111214]/95 backdrop-blur-md border-b border-[#292929] px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs text-[#929292] hover:text-[#F28C28] transition-colors cursor-pointer min-h-[44px]"
            aria-label="Back to Achievements"
          >
            <ArrowLeft className="w-4 h-4 text-[#F28C28]" />
            <span>Back to Achievements</span>
          </button>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#171719] border border-[#292929] flex items-center justify-center text-[#929292] hover:text-[#F5F2ED] hover:border-[#F28C28] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 space-y-10">
          
          {/* Event Title & Metadata Banner */}
          <div className="border-b border-[#292929] pb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#F28C28]/10 text-[#F28C28] border border-[#F28C28]/30 mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>{achievement.award}</span>
            </div>

            <h1 id="achievement-modal-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F2ED] tracking-tight mb-4">
              {achievement.eventName}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#929292]">
              {achievement.organization && (
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#F28C28]" />
                  <span>{achievement.organization}</span>
                </div>
              )}
              {achievement.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#F28C28]" />
                  <span>{achievement.location}</span>
                </div>
              )}
              {achievement.date && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#F28C28]" />
                  <span>{achievement.date}</span>
                </div>
              )}
            </div>
          </div>

          {/* Photography & Evidence Showcase */}
          <div>
            <h2 className="text-sm font-semibold text-[#F5F2ED] mb-4">
              Event Documentation & Photography
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Personal Photo */}
              <div className="bg-[#171719] border border-[#292929] rounded-xl overflow-hidden p-4">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#0B0C0E] border border-[#292929] mb-3">
                  <img
                    src="/profile.jpg"
                    alt="Dhanush D Prabhu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs font-medium text-[#F5F2ED]">Dhanush D Prabhu</p>
                <p className="text-xs text-[#929292] mt-0.5">Participant & Developer</p>
              </div>

              {/* Event Photograph / Clean Neutral Placeholder */}
              <div className="bg-[#171719] border border-[#292929] rounded-xl overflow-hidden p-4 flex flex-col justify-between">
                <div className="aspect-[4/3] rounded-lg bg-[#0B0C0E] border border-[#292929] flex flex-col items-center justify-center p-6 text-center mb-3">
                  <ImageIcon className="w-8 h-8 text-[#929292] mb-2 stroke-1" />
                  <p className="text-xs text-[#929292] max-w-xs">
                    {achievement.eventPhotos[0]?.caption || 'Competition record photograph'}
                  </p>
                </div>
                <p className="text-xs font-medium text-[#F5F2ED]">Event Record</p>
                <p className="text-xs text-[#929292] mt-0.5">{achievement.organization}</p>
              </div>
            </div>
          </div>

          {/* Problem Statement & Project Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#171719] border border-[#292929] rounded-xl p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F28C28] mb-2">
                Problem Statement
              </h3>
              <p className="text-xs sm:text-sm text-[#929292] leading-relaxed">
                {achievement.problemStatement}
              </p>
            </div>

            <div className="bg-[#171719] border border-[#292929] rounded-xl p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F28C28] mb-2">
                Project Overview
              </h3>
              <p className="text-xs sm:text-sm text-[#929292] leading-relaxed">
                {achievement.projectOverview}
              </p>
            </div>
          </div>

          {/* What Was Built */}
          <div className="bg-[#171719] border border-[#292929] rounded-xl p-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F28C28] mb-2">
              What Was Built
            </h3>
            <p className="text-xs sm:text-sm text-[#F5F2ED] leading-relaxed">
              {achievement.whatIBuilt}
            </p>
          </div>

          {/* Individual Contributions & Technologies */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#929292]">
                Individual Contributions
              </h3>
              <div className="space-y-2">
                {achievement.individualContributions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-[#171719] border border-[#292929] rounded-lg p-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#F5F2ED] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#929292]">
                Technologies Used
              </h3>
              <div className="bg-[#171719] border border-[#292929] rounded-xl p-4">
                <div className="flex flex-wrap gap-1.5">
                  {achievement.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs text-[#F5F2ED] bg-[#111214] border border-[#292929]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#929292]">
                Technical Challenges
              </h3>
              <div className="space-y-2">
                {achievement.technicalChallenges.map((challenge, idx) => (
                  <div key={idx} className="bg-[#171719] border border-[#292929] rounded-xl p-3.5 text-xs text-[#929292] leading-relaxed">
                    {challenge}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#929292]">
                Solutions Implemented
              </h3>
              <div className="space-y-2">
                {achievement.solutions.map((sol, idx) => (
                  <div key={idx} className="bg-[#171719] border border-[#292929] rounded-xl p-3.5 text-xs text-[#F5F2ED] leading-relaxed">
                    {sol}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results & Key Takeaways */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#292929]">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F28C28] mb-3">
                Final Results
              </h3>
              <ul className="space-y-2">
                {achievement.finalResults.map((result, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#F5F2ED] flex items-start gap-2">
                    <span className="text-[#F28C28] mt-0.5">•</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F28C28] mb-3">
                Key Takeaways
              </h3>
              <ul className="space-y-2">
                {achievement.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#929292] flex items-start gap-2">
                    <span className="text-[#929292] mt-0.5">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#171719] border-t border-[#292929] px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#F28C28] text-[#0B0C0E] text-xs font-semibold rounded-lg hover:bg-[#FA9E42] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default AchievementModal;
