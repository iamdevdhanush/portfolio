import React, { useEffect } from 'react';
import { X, Trophy, Award, MapPin, Calendar, CheckCircle2, ArrowLeft, ShieldCheck, FileCheck } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import AchievementPlaque from './AchievementPlaque';
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

  // Find index in archive for oversized numeral (e.g. 01, 02...)
  const archiveIndex = achievementsData.findIndex((a) => a.id === achievement.id);
  const displayNum = archiveIndex >= 0 ? `0${archiveIndex + 1}` : '01';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="achievement-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#090909]/94 backdrop-blur-xl flex justify-center items-start p-0 sm:p-4 md:p-8 animate-modal-backdrop"
    >
      {/* Click backdrop to dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Museum Archive Paper Container */}
      <div className="relative w-full max-w-5xl bg-[#F1EBDD] text-[#151515] border-x sm:border border-[#E2DAC8] sm:rounded-2xl shadow-2xl overflow-hidden z-10 my-0 sm:my-4 md:my-6 animate-modal-enter paper-grain min-h-screen sm:min-h-0">
        
        {/* Sticky Architectural Navigation Bar */}
        <div className="sticky top-0 z-30 bg-[#F1EBDD]/95 backdrop-blur-md border-b border-[#E2DAC8] px-4 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 font-mono text-xs text-[#8A877F] hover:text-[#F04B16] transition-colors cursor-pointer min-h-[44px]"
            aria-label="Back to Achievements"
          >
            <ArrowLeft className="w-4 h-4 text-[#F04B16] shrink-0" />
            <span className="font-bold tracking-wider uppercase hidden sm:inline">RETURN TO WINNER'S ARCHIVE</span>
            <span className="font-bold tracking-wider uppercase sm:hidden">ARCHIVE</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-mono text-[10px] text-[#8A877F] uppercase tracking-widest">
              RECORD // {displayNum}
            </span>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#FAF7F0] border border-[#E2DAC8] flex items-center justify-center text-[#8A877F] hover:text-[#151515] hover:border-[#F04B16] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-4 sm:p-8 md:p-12 space-y-6 sm:space-y-10 relative overflow-hidden">
          
          {/* ============================================================ */}
          {/* 1. HERO PRESENTATION — THE WINNER'S ARCHIVE                   */}
          {/* ============================================================ */}
          <div className="relative border-b border-[#E2DAC8] pb-6 sm:pb-10">
            
            {/* Oversized Editorial Numeral Watermark in Background */}
            <span
              className="absolute -top-8 sm:-top-16 -right-2 sm:-right-4 font-display italic text-[100px] sm:text-[200px] text-[#151515]/[0.05] pointer-events-none select-none leading-none z-0"
              aria-hidden="true"
            >
              {displayNum}
            </span>

            {/* Archival Identification Stamp & Status Badge */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2.5 mb-3 sm:mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#F04B16] text-[#FAF7F0] shadow-sm flex items-center gap-1.5">
                  <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span>{achievement.award}</span>
                </span>
                <span className="font-mono text-[10px] sm:text-xs text-[#8A877F] hidden sm:inline">
                  OFFICIAL ARCHIVAL RECORD
                </span>
              </div>

              <div className="font-mono text-[10px] sm:text-[11px] text-[#8A877F] uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F04B16] shrink-0" />
                <span>HONOR // {achievement.date}</span>
              </div>
            </div>

            {/* Sophisticated Editorial Serif Title */}
            <div className="relative z-10 mb-4 sm:mb-5">
              <h1
                id="achievement-modal-title"
                className="font-serif italic text-2xl sm:text-4xl lg:text-5xl text-[#151515] tracking-tight leading-[1.1] max-w-4xl"
              >
                {achievement.eventName}
              </h1>
              {achievement.subtitle && (
                <p className="font-serif text-sm sm:text-lg text-[#8A877F] mt-1.5 italic font-normal">
                  {achievement.subtitle}
                </p>
              )}
            </div>

            {/* Compact Metadata Row */}
            <div className="relative z-10 flex flex-wrap items-center gap-y-1.5 gap-x-4 sm:gap-x-6 font-mono text-[11px] sm:text-xs text-[#151515]/80 pt-2.5 sm:pt-3 border-t border-[#E2DAC8]/70">
              {achievement.organization && (
                <div className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#F04B16] shrink-0" />
                  <span className="font-semibold text-[#151515]">{achievement.organization}</span>
                </div>
              )}
              {achievement.location && (
                <>
                  <span className="text-[#E2DAC8] hidden sm:inline">•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F04B16] shrink-0" />
                    <span>{achievement.location}</span>
                  </div>
                </>
              )}
              {achievement.date && (
                <>
                  <span className="text-[#E2DAC8] hidden sm:inline">•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#F04B16] shrink-0" />
                    <span>{achievement.date}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ============================================================ */}
          {/* 2. ARCHIVAL CITATION PLATE & VISUAL DOSSIER                  */}
          {/* ============================================================ */}
          <div className="relative space-y-2">
            <div className="p-1.5 sm:p-2 bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl shadow-sm">
              <AchievementPlaque achievement={achievement} variant="modal" />
            </div>

            {/* Archival Figure Caption & Verification Transparency Stamp */}
            <div className="flex flex-wrap items-center justify-between gap-1.5 px-1 font-mono text-[10px] sm:text-[11px] text-[#8A877F]">
              <span>FIG 1.0 // OFFICIAL CITATION DOCKET & RECORD</span>
              <span className="text-[#F04B16] font-semibold">
                ✦ PHYSICAL CREDENTIAL ARCHIVED AT SHIMOGA
              </span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* 3. VERIFIED AWARD RECORD (MUSEUM SPECIFICATION PANEL)         */}
          {/* ============================================================ */}
          <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-4 sm:p-7 shadow-sm paper-grain space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between pb-2.5 border-b border-[#E2DAC8]">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FileCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F04B16] shrink-0" />
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#151515]">
                  Verified Award Record & Specs
                </span>
              </div>
              <span className="font-mono text-[10px] sm:text-xs text-[#F04B16] font-bold">
                REGISTRY // 2024–2026
              </span>
            </div>

            {/* Museum Registry Grid: Mobile Responsive 1 to 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
              
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] sm:text-[11px] text-[#8A877F] uppercase tracking-widest block">
                  Host Institution
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-[#151515] block">
                  {achievement.organization}
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="font-mono text-[10px] sm:text-[11px] text-[#8A877F] uppercase tracking-widest block">
                  Award Granted
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-[#F04B16] block">
                  {achievement.award}
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="font-mono text-[10px] sm:text-[11px] text-[#8A877F] uppercase tracking-widest block">
                  Competition Category
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-[#151515] block">
                  {achievement.category || 'Engineering Crucible'}
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="font-mono text-[10px] sm:text-[11px] text-[#8A877F] uppercase tracking-widest block">
                  Year Conferred
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#151515] block">
                  {achievement.date}
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="font-mono text-[10px] sm:text-[11px] text-[#8A877F] uppercase tracking-widest block">
                  Jurisdiction & Venue
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#151515] block">
                  {achievement.location}
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="font-mono text-[10px] sm:text-[11px] text-[#8A877F] uppercase tracking-widest block">
                  Associated Project
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#F04B16] block">
                  {achievement.projectTitle || achievement.title.split('—')[0]}
                </span>
              </div>

            </div>

            {/* Technology Stack Badges */}
            <div className="pt-3 border-t border-[#E2DAC8] flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-[10px] sm:text-xs text-[#8A877F] uppercase tracking-wider mr-1">
                Disciplines:
              </span>
              {achievement.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] sm:text-xs text-[#151515] bg-[#F1EBDD] border border-[#E2DAC8] px-2 py-0.5 rounded select-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ============================================================ */}
          {/* 4. TECHNICAL STORY — EDITORIAL CASE STUDY (4 SECTIONS)        */}
          {/* ============================================================ */}
          <div className="space-y-5 sm:space-y-8">
            
            <div className="flex items-center justify-between pb-2.5 border-b border-[#E2DAC8]">
              <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#F04B16]">
                Technical Case Study & Jury Review
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-[#8A877F]">
                CRUCIBLE EVALUATION
              </span>
            </div>

            {/* Asymmetrical 4-Section Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
              
              {/* Section 01: The Challenge */}
              <div className="md:col-span-6 bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-4 sm:p-6 shadow-sm paper-grain space-y-2">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#F04B16] font-bold block">
                  01 // The Challenge
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#151515]">
                  Algorithmic Constraints & Rigor
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#151515]/85 leading-relaxed">
                  {achievement.problemStatement}
                </p>
                {achievement.technicalChallenges && achievement.technicalChallenges.length > 0 && (
                  <div className="pt-2.5 border-t border-[#E2DAC8] space-y-1">
                    {achievement.technicalChallenges.map((ch, i) => (
                      <p key={i} className="font-sans text-[11px] sm:text-xs text-[#8A877F] flex items-start gap-1.5">
                        <span className="text-[#F04B16] font-bold shrink-0">•</span>
                        <span>{ch}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Section 02: What Was Built */}
              <div className="md:col-span-6 bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-4 sm:p-6 shadow-sm paper-grain space-y-2">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#F04B16] font-bold block">
                  02 // What Was Built
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#151515]">
                  Optimized Execution Under Pressure
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#151515]/85 leading-relaxed">
                  {achievement.whatIBuilt}
                </p>
                {achievement.solutions && achievement.solutions.length > 0 && (
                  <div className="pt-2.5 border-t border-[#E2DAC8] space-y-1">
                    {achievement.solutions.map((sol, i) => (
                      <p key={i} className="font-sans text-[11px] sm:text-xs text-[#151515]/80 flex items-start gap-1.5">
                        <span className="text-[#F04B16] font-bold shrink-0">✓</span>
                        <span>{sol}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Section 03: Technical Contribution */}
              <div className="md:col-span-7 bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-4 sm:p-6 shadow-sm paper-grain space-y-2.5">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#F04B16] font-bold block">
                  03 // Technical Contribution
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#151515]">
                  Architecture & Implementation
                </h3>
                <div className="space-y-1.5 pt-1">
                  {achievement.individualContributions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-[#F1EBDD]/60 border border-[#E2DAC8] rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F04B16] shrink-0 mt-0.5" />
                      <span className="font-sans text-xs sm:text-sm text-[#151515] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 04: Outcome */}
              <div className="md:col-span-5 bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-4 sm:p-6 shadow-sm paper-grain space-y-2.5">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#F04B16] font-bold block">
                  04 // Outcome
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#151515]">
                  Jury Verdict & Validated Findings
                </h3>
                <div className="space-y-2 pt-1">
                  {achievement.finalResults.map((result, idx) => (
                    <div key={idx} className="p-2.5 bg-[#F1EBDD]/60 border border-[#E2DAC8] rounded-lg text-xs font-sans text-[#151515]">
                      <strong className="text-[#F04B16] block mb-0.5">Verdict:</strong>
                      <span>{result}</span>
                    </div>
                  ))}
                  {achievement.keyTakeaways.length > 0 && (
                    <div className="pt-1.5 text-xs font-sans text-[#8A877F]">
                      <span className="font-mono text-[9px] uppercase font-bold text-[#8A877F] block mb-0.5">
                        Key Takeaway:
                      </span>
                      <span>{achievement.keyTakeaways[0]}</span>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Archival Sign-off Colophon */}
          <div className="pt-4 sm:pt-6 border-t border-[#E2DAC8] flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] sm:text-xs text-[#8A877F]">
            <span className="font-hand text-lg sm:text-xl text-[#151515]">
              ✦ Certified Competition Entry — Dhanush D Prabhu
            </span>
            <span>SHIMOGA ARCHIVE // VERIFIED</span>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-[#FAF7F0] border-t border-[#E2DAC8] px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <span className="font-mono text-[11px] text-[#8A877F] hidden sm:inline">
            PRESS <kbd className="px-1.5 py-0.5 rounded bg-[#F1EBDD] border border-[#E2DAC8] text-[#151515]">ESC</kbd> OR CLICK OUTSIDE TO CLOSE
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#151515] text-[#FAF7F0] hover:bg-[#F04B16] font-mono text-xs font-bold uppercase rounded transition-colors cursor-pointer active:scale-95 shadow-sm min-h-[44px]"
          >
            Close Archive
          </button>
        </div>

      </div>
    </div>
  );
};

export default AchievementModal;