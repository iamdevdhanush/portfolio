import React, { useEffect } from 'react';
import { X, Trophy, Award, MapPin, Calendar, CheckCircle2, AlertTriangle, Lightbulb, ArrowLeft, Image as ImageIcon } from 'lucide-react';
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

    // Lock body scroll when modal is active
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
      <div className="relative w-full max-w-5xl bg-[#111214] border border-[#292929] md:rounded-2xl shadow-2xl overflow-hidden z-10 my-0 md:my-8 text-[#F5F2ED] animate-modal-enter">
        
        {/* Topographic Contour Header Bar */}
        <div className="sticky top-0 z-20 bg-[#111214]/95 backdrop-blur-md border-b border-[#292929] px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono text-[#929292] hover:text-[#F28C28] transition-colors cursor-pointer group min-h-[44px]"
            aria-label="Back to Achievements"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#F28C28]" />
            <span className="uppercase tracking-wider">Back to Achievements</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block font-mono text-[11px] text-[#929292] bg-[#171719] px-2.5 py-1 rounded border border-[#292929]">
              ESC to close
            </span>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#171719] border border-[#292929] flex items-center justify-center text-[#929292] hover:text-[#F5F2ED] hover:border-[#F28C28] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 space-y-12">
          
          {/* 1 & 2. Event Title & Honors Banner */}
          <div className="relative pb-8 border-b border-[#292929]">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F28C28]/15 text-[#F28C28] border border-[#F28C28]/30">
                <Trophy className="w-3.5 h-3.5" />
                {achievement.award}
              </span>
              {achievement.rank && (
                <span className="font-mono text-xs text-[#929292] bg-[#171719] px-3 py-1 rounded-full border border-[#292929]">
                  {achievement.rank}
                </span>
              )}
            </div>

            <h1 id="achievement-modal-title" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F2ED] tracking-tight leading-tight mb-4">
              {achievement.eventName}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#929292] font-mono">
              {achievement.organization && (
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#F28C28]" />
                  <span className="text-[#F5F2ED]">{achievement.organization}</span>
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

          {/* 3 & 4. Editorial Visual Showcase / Photography */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#929292]">
                Event & Technical Imagery // Documented Records
              </h3>
              <span className="text-[11px] font-mono text-[#F28C28]">VERIFIED EVIDENCE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Personal Photo from Repo */}
              <div className="md:col-span-5 bg-[#171719] border border-[#292929] rounded-xl overflow-hidden p-4 flex flex-col justify-between">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-[#0B0C0E] border border-[#292929] mb-3 group">
                  <img
                    src="/profile.jpg"
                    alt="Dhanush D Prabhu"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-[#0B0C0E]/90 text-[10px] font-mono text-[#F28C28] px-2 py-0.5 rounded border border-[#292929]">
                    PARTICIPANT / LEAD
                  </div>
                </div>
                <div className="text-xs text-[#929292] font-mono">
                  <p className="text-[#F5F2ED] font-medium">Dhanush D Prabhu</p>
                  <p className="text-[11px] text-[#929292] mt-0.5">Competitor & System Architect · PES IAMS</p>
                </div>
              </div>

              {/* Event Documentation / Identified Placeholders */}
              <div className="md:col-span-7 flex flex-col gap-4">
                {achievement.eventPhotos.map((photo, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-[#171719] border border-[#292929] rounded-xl p-5 flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Topographic Background Overlay in placeholder */}
                    <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full border border-[#292929]/40 pointer-events-none" />
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full border border-[#F28C28]/10 pointer-events-none" />

                    <div className="flex items-start justify-between mb-3 relative z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#111214] border border-[#292929] flex items-center justify-center text-[#F28C28]">
                          <ImageIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-[#F5F2ED] block">
                            Event Record #{idx + 1}
                          </span>
                          <span className="text-[10px] font-mono text-[#F28C28]">
                            [PHOTO SLOT READY FOR ASSET DROP]
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#929292] bg-[#111214] px-2 py-0.5 rounded border border-[#292929]">
                        ARCHIVE
                      </span>
                    </div>

                    <p className="text-xs text-[#929292] relative z-10 leading-relaxed font-mono">
                      {photo.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5, 6, 7. Project Overview, Problem Statement & What Was Built */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="bg-[#171719] border border-[#292929] rounded-xl p-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#F28C28] mb-3">
                01 // Problem Statement
              </h3>
              <p className="text-sm text-[#929292] leading-relaxed">
                {achievement.problemStatement}
              </p>
            </div>

            <div className="bg-[#171719] border border-[#292929] rounded-xl p-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#F28C28] mb-3">
                02 // Project Overview
              </h3>
              <p className="text-sm text-[#929292] leading-relaxed">
                {achievement.projectOverview}
              </p>
            </div>
          </div>

          {/* What I Built */}
          <div className="bg-[#171719] border border-[#292929] rounded-xl p-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#F28C28] mb-3">
              03 // What I Built During the Competition
            </h3>
            <p className="text-sm text-[#F5F2ED] leading-relaxed font-normal">
              {achievement.whatIBuilt}
            </p>
          </div>

          {/* 8 & 9. Individual Contributions & Technologies Used */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#929292]">
                04 // My Individual Contributions & Leadership
              </h3>
              <div className="space-y-3">
                {achievement.individualContributions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#171719] border border-[#292929] rounded-lg p-3.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#F5F2ED] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#929292]">
                05 // Technologies & Tools Deployed
              </h3>
              <div className="bg-[#171719] border border-[#292929] rounded-xl p-5">
                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono text-[#F5F2ED] bg-[#111214] border border-[#292929]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 10 & 11. Technical Challenges & Solutions Implemented */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#F28C28]" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#929292]">
                  06 // Technical Challenges Faced
                </h3>
              </div>
              <div className="space-y-3">
                {achievement.technicalChallenges.map((challenge, idx) => (
                  <div key={idx} className="bg-[#171719] border border-[#292929] rounded-xl p-4 text-xs text-[#929292] leading-relaxed">
                    <span className="font-mono text-[#F28C28] block mb-1">CHALLENGE {idx + 1}</span>
                    {challenge}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-[#F28C28]" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#929292]">
                  07 // Solutions & Architecture Engineered
                </h3>
              </div>
              <div className="space-y-3">
                {achievement.solutions.map((sol, idx) => (
                  <div key={idx} className="bg-[#171719] border border-[#292929] rounded-xl p-4 text-xs text-[#F5F2ED] leading-relaxed">
                    <span className="font-mono text-[#F28C28] block mb-1">SOLUTION {idx + 1}</span>
                    {sol}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 12 & 13. Final Results & Key Takeaways */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#292929]">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#F28C28] mb-3">
                08 // Final Results & Outcomes
              </h3>
              <ul className="space-y-2">
                {achievement.finalResults.map((result, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#F5F2ED] flex items-start gap-2">
                    <span className="text-[#F28C28] font-mono mt-0.5">»</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#F28C28] mb-3">
                09 // Key Architectural Takeaways
              </h3>
              <ul className="space-y-2">
                {achievement.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#929292] flex items-start gap-2">
                    <span className="text-[#929292] font-mono mt-0.5">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#171719] border-t border-[#292929] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#929292]">
            Dhanush D Prabhu · Authentic Competition Record
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-[#F28C28] text-[#0B0C0E] text-xs font-semibold rounded-lg hover:bg-[#FA9E42] transition-colors cursor-pointer"
          >
            Close Debrief
          </button>
        </div>

      </div>
    </div>
  );
};

export default AchievementModal;

