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
      className="fixed inset-0 z-50 overflow-y-auto bg-[#090909]/92 backdrop-blur-xl flex justify-center items-start p-0 md:p-6 lg:p-10 animate-modal-backdrop"
    >
      {/* Click backdrop to dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Modal Paper Container */}
      <div className="relative w-full max-w-4xl bg-[#F1EBDD] text-[#151515] border border-[#E2DAC8] md:rounded-2xl shadow-2xl overflow-hidden z-10 my-0 md:my-8 animate-modal-enter paper-grain">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-[#F1EBDD]/95 backdrop-blur-md border-b border-[#E2DAC8] px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 font-mono text-xs text-[#8A877F] hover:text-[#F04B16] transition-colors cursor-pointer min-h-[44px]"
            aria-label="Back to Achievements"
          >
            <ArrowLeft className="w-4 h-4 text-[#F04B16]" />
            <span>RETURN TO ARCHIVE</span>
          </button>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#FAF7F0] border border-[#E2DAC8] flex items-center justify-center text-[#8A877F] hover:text-[#151515] hover:border-[#F04B16] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 space-y-10">
          
          {/* Header Title & Award Plate */}
          <div className="border-b border-[#E2DAC8] pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-bold uppercase bg-[#F04B16] text-[#FAF7F0] mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>{achievement.award}</span>
            </div>

            <h1 id="achievement-modal-title" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#151515] tracking-tight mb-4">
              {achievement.eventName}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 font-mono text-xs text-[#8A877F]">
              {achievement.organization && (
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#F04B16]" />
                  <span>{achievement.organization}</span>
                </div>
              )}
              {achievement.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#F04B16]" />
                  <span>{achievement.location}</span>
                </div>
              )}
              {achievement.date && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#F04B16]" />
                  <span>{achievement.date}</span>
                </div>
              )}
            </div>
          </div>

          {/* Photography & Verified Documentation */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#8A877F] mb-4">
              Verified Event Documentation & Photography
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Personal Photo */}
              <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl overflow-hidden p-4">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#E2DAC8] border border-[#E2DAC8] mb-3">
                  <img
                    src="/profile.jpg"
                    alt="Dhanush D Prabhu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-serif font-bold text-sm text-[#151515]">Dhanush D Prabhu</p>
                <p className="font-mono text-xs text-[#8A877F]">Lead Engineer & Participant</p>
              </div>

              {/* Event Documentation Frame */}
              <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl overflow-hidden p-4 flex flex-col justify-between">
                <div className="aspect-[4/3] rounded-lg bg-[#FAF7F0] border border-[#E2DAC8] flex flex-col items-center justify-center p-6 text-center mb-3">
                  <ImageIcon className="w-8 h-8 text-[#8A877F] mb-2 stroke-1" />
                  <p className="font-sans text-xs text-[#8A877F] max-w-xs">
                    {achievement.eventPhotos[0]?.caption || 'Official competition record'}
                  </p>
                </div>
                <div>
                  <p className="font-serif font-bold text-sm text-[#151515]">Event Record</p>
                  <p className="font-mono text-xs text-[#8A877F]">{achievement.organization}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Statement & Project Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#F04B16] mb-2">
                Problem Statement
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#151515]/90 leading-relaxed">
                {achievement.problemStatement}
              </p>
            </div>

            <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#F04B16] mb-2">
                Project Overview
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#151515]/90 leading-relaxed">
                {achievement.projectOverview}
              </p>
            </div>
          </div>

          {/* What Was Built */}
          <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#F04B16] mb-2">
              What Was Built
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#151515] leading-relaxed">
              {achievement.whatIBuilt}
            </p>
          </div>

          {/* Individual Contributions & Technologies */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#8A877F]">
                Individual Contributions
              </h3>
              <div className="space-y-2">
                {achievement.individualContributions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-[#FAF7F0] border border-[#E2DAC8] rounded-lg p-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F04B16] shrink-0 mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-[#151515] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#8A877F]">
                Technologies Used
              </h3>
              <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-5">
                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono px-2.5 py-1 rounded text-xs text-[#151515] bg-[#F1EBDD] border border-[#E2DAC8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#8A877F]">
                Technical Challenges
              </h3>
              <div className="space-y-2">
                {achievement.technicalChallenges.map((challenge, idx) => (
                  <div key={idx} className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-4 font-sans text-xs text-[#8A877F] leading-relaxed">
                    {challenge}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#8A877F]">
                Solutions Implemented
              </h3>
              <div className="space-y-2">
                {achievement.solutions.map((sol, idx) => (
                  <div key={idx} className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-4 font-sans text-xs text-[#151515] leading-relaxed">
                    {sol}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results & Key Takeaways */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#E2DAC8]">
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#F04B16] mb-3">
                Final Results
              </h3>
              <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#151515]">
                {achievement.finalResults.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#F04B16] font-bold mt-0.5">•</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#F04B16] mb-3">
                Key Takeaways
              </h3>
              <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#8A877F]">
                {achievement.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#8A877F] mt-0.5">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF7F0] border-t border-[#E2DAC8] px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#151515] text-[#FAF7F0] hover:bg-[#F04B16] font-mono text-xs font-bold uppercase rounded-lg transition-colors cursor-pointer"
          >
            Close Archive
          </button>
        </div>

      </div>
    </div>
  );
};

export default AchievementModal;
