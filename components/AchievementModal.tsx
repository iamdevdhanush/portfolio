import React, { useEffect, useState } from 'react';
import { X, Trophy, Award, MapPin, Calendar, CheckCircle2, ArrowLeft, ShieldCheck, FileCheck } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import type { AchievementDetail } from '../types';

interface AchievementModalProps {
  achievement: AchievementDetail | null;
  onClose: () => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({ achievement, onClose }) => {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    if (!achievement) return;
    setImgFailed(false);

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

  // Only use authentic photograph from public assets (/profile.jpg) for CodeNeura or verified assets
  const hasAuthenticPhoto = achievement.id === 'codeneura' && !imgFailed;

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
      <div className="relative w-full max-w-5xl bg-[#F1EBDD] text-[#151515] border border-[#E2DAC8] md:rounded-2xl shadow-2xl overflow-hidden z-10 my-0 md:my-6 animate-modal-enter paper-grain">
        
        {/* Sticky Architectural Navigation Bar */}
        <div className="sticky top-0 z-30 bg-[#F1EBDD]/95 backdrop-blur-md border-b border-[#E2DAC8] px-5 sm:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 font-mono text-xs text-[#8A877F] hover:text-[#F04B16] transition-colors cursor-pointer min-h-[44px]"
            aria-label="Back to Achievements"
          >
            <ArrowLeft className="w-4 h-4 text-[#F04B16]" />
            <span className="font-bold tracking-wider uppercase">RETURN TO WINNER'S ARCHIVE</span>
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
        <div className="p-5 sm:p-8 md:p-12 space-y-10 sm:space-y-12 relative overflow-hidden">
          
          {/* ============================================================ */}
          {/* 1. HERO PRESENTATION — THE WINNER'S ARCHIVE                   */}
          {/* ============================================================ */}
          <div className="relative border-b border-[#E2DAC8] pb-8 sm:pb-10">
            
            {/* Oversized Editorial Numeral Watermark in Background */}
            <span
              className="absolute -top-10 sm:-top-16 -right-2 sm:-right-4 font-display italic text-[140px] sm:text-[220px] text-[#151515]/[0.05] pointer-events-none select-none leading-none z-0"
              aria-hidden="true"
            >
              {displayNum}
            </span>

            {/* Archival Identification Stamp & Status Badge */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-[#F04B16] text-[#FAF7F0] shadow-sm flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>{achievement.award}</span>
                </span>
                <span className="font-mono text-xs text-[#8A877F] hidden sm:inline">
                  OFFICIAL ARCHIVAL RECORD
                </span>
              </div>

              <div className="font-mono text-[11px] text-[#8A877F] uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F04B16]" />
                <span>CONFERRED HONOR // {achievement.date}</span>
              </div>
            </div>

            {/* Sophisticated Editorial Serif Title */}
            <div className="relative z-10 mb-5">
              <h1
                id="achievement-modal-title"
                className="font-serif italic text-3xl sm:text-5xl lg:text-6xl text-[#151515] tracking-tight leading-[1.08] max-w-4xl"
              >
                {achievement.eventName}
              </h1>
              {achievement.subtitle && (
                <p className="font-serif text-base sm:text-xl text-[#8A877F] mt-2 italic font-normal">
                  {achievement.subtitle}
                </p>
              )}
            </div>

            {/* Compact Metadata Row */}
            <div className="relative z-10 flex flex-wrap items-center gap-y-2 gap-x-6 font-mono text-xs text-[#151515]/80 pt-3 border-t border-[#E2DAC8]/70">
              {achievement.organization && (
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#F04B16]" />
                  <span className="font-semibold text-[#151515]">{achievement.organization}</span>
                </div>
              )}
              {achievement.location && (
                <>
                  <span className="text-[#E2DAC8] hidden sm:inline">•</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F04B16]" />
                    <span>{achievement.location}</span>
                  </div>
                </>
              )}
              {achievement.date && (
                <>
                  <span className="text-[#E2DAC8] hidden sm:inline">•</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#F04B16]" />
                    <span>{achievement.date}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ============================================================ */}
          {/* 2. PHOTOGRAPHY & PRIMARY VISUAL PRESENTATION                  */}
          {/* Authentic image or Tasteful Museum Archival Placeholder       */}
          {/* ============================================================ */}
          <div className="relative">
            {hasAuthenticPhoto ? (
              /* Authentic Competition Photography Frame */
              <div className="space-y-2">
                <div className="p-2 sm:p-3 bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl shadow-sm relative group overflow-hidden">
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-lg overflow-hidden border border-[#E2DAC8] bg-[#151515]">
                    <img
                      src="/profile.jpg"
                      alt={`Dhanush D Prabhu — ${achievement.eventName} Winner`}
                      onError={() => setImgFailed(true)}
                      className="w-full h-full object-cover grayscale contrast-110 brightness-95 group-hover:contrast-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Corner Archival Stamp */}
                    <div className="absolute top-3 right-3 font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded bg-[#090909]/80 text-[#FAF7F0] border border-[#FAF7F0]/20 backdrop-blur-sm">
                      VERIFIED ARTIFACT
                    </div>

                    {/* Bottom Identification Label */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white/90">
                      <div>
                        <span className="font-serif font-bold text-sm block">Dhanush D Prabhu</span>
                        <span className="font-mono text-[10px] text-[#F04B16] uppercase tracking-wider">
                          {achievement.award} · {achievement.eventName}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-white/70">
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Archival Figure Caption */}
                <div className="flex items-center justify-between px-2 font-mono text-[11px] text-[#8A877F]">
                  <span>FIG 1.0 // COMPETITION PHOTO DOCUMENTATION</span>
                  <span>AUTHENTIC RECORD</span>
                </div>
              </div>
            ) : (
              /* Tasteful Typographic Museum Archival Placeholder (Never broken images) */
              <div className="p-6 sm:p-10 bg-gradient-to-b from-[#FAF7F0] to-[#F1EBDD] border border-[#E2DAC8] rounded-xl shadow-sm space-y-4 text-center relative overflow-hidden">
                <div className="w-14 h-14 rounded-full bg-[#F04B16]/10 border border-[#F04B16]/30 flex items-center justify-center text-[#F04B16] mx-auto">
                  {achievement.award.includes('1st') ? (
                    <Trophy className="w-6 h-6 text-[#F04B16]" />
                  ) : (
                    <Award className="w-6 h-6 text-[#F04B16]" />
                  )}
                </div>

                <div className="max-w-xl mx-auto space-y-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#F04B16] font-bold block">
                    ARCHIVAL CITATION // REGISTRY NO. {displayNum}
                  </span>
                  <h3 className="font-serif italic text-2xl sm:text-3xl font-bold text-[#151515]">
                    {achievement.eventName}
                  </h3>
                  <p className="font-mono text-xs text-[#8A877F]">
                    {achievement.organization} · {achievement.location}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2DAC8] flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-[#151515]/75">
                  <span className="px-3 py-1 rounded bg-[#FAF7F0] border border-[#E2DAC8]">
                    VERIFIED RANK: <strong className="text-[#F04B16]">{achievement.award}</strong>
                  </span>
                  <span className="px-3 py-1 rounded bg-[#FAF7F0] border border-[#E2DAC8]">
                    CITING BODY: <strong>{achievement.organization}</strong>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* ============================================================ */}
          {/* 3. VERIFIED AWARD RECORD (MUSEUM-STYLE SPECIFICATION PANEL)   */}
          {/* ============================================================ */}
          <div className="bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-6 sm:p-8 shadow-sm paper-grain space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DAC8]">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#F04B16]" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#151515]">
                  Verified Award Record & Specifications
                </span>
              </div>
              <span className="font-mono text-xs text-[#F04B16] font-bold">
                REGISTRY // 2024–2026
              </span>
            </div>

            {/* Museum Registry Grid: Fine borders, elegant spacing, contrasting typography */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#8A877F] uppercase tracking-widest block">
                  Host Institution
                </span>
                <span className="font-serif text-lg font-bold text-[#151515] block">
                  {achievement.organization}
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#8A877F] uppercase tracking-widest block">
                  Award Granted
                </span>
                <span className="font-serif text-lg font-bold text-[#F04B16] block">
                  {achievement.award}
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#8A877F] uppercase tracking-widest block">
                  Competition Category
                </span>
                <span className="font-serif text-lg font-bold text-[#151515] block">
                  {achievement.category || 'Engineering Crucible'}
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#8A877F] uppercase tracking-widest block">
                  Year Conferred
                </span>
                <span className="font-mono text-sm font-semibold text-[#151515] block">
                  {achievement.date}
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#8A877F] uppercase tracking-widest block">
                  Jurisdiction & Venue
                </span>
                <span className="font-mono text-sm font-semibold text-[#151515] block">
                  {achievement.location}
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#8A877F] uppercase tracking-widest block">
                  Associated Project
                </span>
                <span className="font-mono text-sm font-semibold text-[#F04B16] block">
                  {achievement.projectTitle || achievement.title.split('—')[0]}
                </span>
              </div>

            </div>

            {/* Technology Stack Badges */}
            <div className="pt-4 border-t border-[#E2DAC8] flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-[#8A877F] uppercase tracking-wider mr-2">
                Verified Disciplines:
              </span>
              {achievement.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-[#151515] bg-[#F1EBDD] border border-[#E2DAC8] px-2.5 py-1 rounded select-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ============================================================ */}
          {/* 4. TECHNICAL STORY — EDITORIAL CASE STUDY (4 SECTIONS)        */}
          {/* ============================================================ */}
          <div className="space-y-8">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DAC8]">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F04B16]">
                Technical Case Study & Jury Review
              </span>
              <span className="font-mono text-xs text-[#8A877F]">
                CRUCIBLE EVALUATION
              </span>
            </div>

            {/* Asymmetrical 4-Section Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Section 01: The Challenge */}
              <div className="md:col-span-6 bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-6 shadow-sm paper-grain space-y-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-[#F04B16] font-bold block">
                  01 // The Challenge
                </span>
                <h3 className="font-serif font-bold text-xl text-[#151515]">
                  Algorithmic Constraints & Computational Rigor
                </h3>
                <p className="font-sans text-sm text-[#151515]/85 leading-relaxed">
                  {achievement.problemStatement}
                </p>
                {achievement.technicalChallenges && achievement.technicalChallenges.length > 0 && (
                  <div className="pt-3 border-t border-[#E2DAC8] space-y-1.5">
                    {achievement.technicalChallenges.map((ch, i) => (
                      <p key={i} className="font-sans text-xs text-[#8A877F] flex items-start gap-2">
                        <span className="text-[#F04B16] font-bold">•</span>
                        <span>{ch}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Section 02: What Was Built */}
              <div className="md:col-span-6 bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-6 shadow-sm paper-grain space-y-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-[#F04B16] font-bold block">
                  02 // What Was Built
                </span>
                <h3 className="font-serif font-bold text-xl text-[#151515]">
                  Optimized Execution Under Pressure
                </h3>
                <p className="font-sans text-sm text-[#151515]/85 leading-relaxed">
                  {achievement.whatIBuilt}
                </p>
                {achievement.solutions && achievement.solutions.length > 0 && (
                  <div className="pt-3 border-t border-[#E2DAC8] space-y-1.5">
                    {achievement.solutions.map((sol, i) => (
                      <p key={i} className="font-sans text-xs text-[#151515]/80 flex items-start gap-2">
                        <span className="text-[#F04B16] font-bold">✓</span>
                        <span>{sol}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Section 03: Technical Contribution */}
              <div className="md:col-span-7 bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-6 shadow-sm paper-grain space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#F04B16] font-bold block">
                  03 // Technical Contribution
                </span>
                <h3 className="font-serif font-bold text-xl text-[#151515]">
                  Core Architecture & Implementation Ownership
                </h3>
                <div className="space-y-2 pt-1">
                  {achievement.individualContributions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-[#F1EBDD]/60 border border-[#E2DAC8] rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-[#F04B16] shrink-0 mt-0.5" />
                      <span className="font-sans text-xs sm:text-sm text-[#151515] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 04: Outcome */}
              <div className="md:col-span-5 bg-[#FAF7F0] border border-[#E2DAC8] rounded-xl p-6 shadow-sm paper-grain space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#F04B16] font-bold block">
                  04 // Outcome
                </span>
                <h3 className="font-serif font-bold text-xl text-[#151515]">
                  Jury Verdict & Validated Findings
                </h3>
                <div className="space-y-2 pt-1">
                  {achievement.finalResults.map((result, idx) => (
                    <div key={idx} className="p-3 bg-[#F1EBDD]/60 border border-[#E2DAC8] rounded-lg text-xs font-sans text-[#151515]">
                      <strong className="text-[#F04B16] block mb-0.5">Official Verdict:</strong>
                      <span>{result}</span>
                    </div>
                  ))}
                  {achievement.keyTakeaways.length > 0 && (
                    <div className="pt-2 text-xs font-sans text-[#8A877F]">
                      <span className="font-mono text-[10px] uppercase font-bold text-[#8A877F] block mb-1">
                        Crucible Takeaway:
                      </span>
                      <span>{achievement.keyTakeaways[0]}</span>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Archival Sign-off Colophon */}
          <div className="pt-6 border-t border-[#E2DAC8] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8A877F]">
            <span className="font-hand text-xl text-[#151515]">
              ✦ Certified Competition Entry — Dhanush D Prabhu
            </span>
            <span>SHIMOGA ARCHIVE // VERIFIED</span>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-[#FAF7F0] border-t border-[#E2DAC8] px-6 py-4 flex items-center justify-between">
          <span className="font-mono text-xs text-[#8A877F]">
            PRESS <kbd className="px-1.5 py-0.5 rounded bg-[#F1EBDD] border border-[#E2DAC8] text-[#151515]">ESC</kbd> OR CLICK OUTSIDE TO CLOSE
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#151515] text-[#FAF7F0] hover:bg-[#F04B16] font-mono text-xs font-bold uppercase rounded transition-colors cursor-pointer active:scale-95 shadow-sm"
          >
            Close Archive
          </button>
        </div>

      </div>
    </div>
  );
};

export default AchievementModal;