import React from 'react';
import { Trophy, Award, ShieldCheck, Binary, Compass, Activity, Cpu, Lock } from 'lucide-react';
import type { AchievementDetail } from '../types';

interface AchievementPlaqueProps {
  achievement: AchievementDetail;
  variant?: 'card' | 'modal';
}

interface PlaqueConfig {
  serial: string;
  domainTag: string;
  icon: typeof Trophy;
  watermark: string;
  accentClass: string;
  stampText: string;
  symbolNode: React.ReactNode;
}

const PLAQUE_CONFIGS: Record<string, PlaqueConfig> = {
  'codeneura': {
    serial: 'CIT-2025-CN-01',
    domainTag: 'ALGORITHMIC OPTIMIZATION',
    icon: Trophy,
    watermark: 'O(N log N) // MEMOIZED',
    accentClass: 'text-[#F04B16]',
    stampText: 'LBS COLLEGE SAGARA // WINNER',
    symbolNode: <Binary className="w-4 h-4 sm:w-5 sm:h-5 text-[#F04B16]" />,
  },
  'national-ai-hackathon': {
    serial: 'CIT-2025-NAI-02',
    domainTag: 'GEOSPATIAL INTELLIGENCE',
    icon: Award,
    watermark: 'GIST R-TREE // ST_DWITHIN',
    accentClass: 'text-[#F04B16]',
    stampText: 'SJBIT BENGALURU // TOP 5',
    symbolNode: <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#F04B16]" />,
  },
  'state-hackathon-gmit': {
    serial: 'CIT-2025-GMIT-03',
    domainTag: '24-HOUR EMERGENCY SPRINT',
    icon: Award,
    watermark: 'REALTIME // WEBSOCKETS',
    accentClass: 'text-amber-400',
    stampText: 'GMIT DAVANGERE // RUNNER-UP',
    symbolNode: <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />,
  },
  'green-it': {
    serial: 'CIT-2025-GIT-04',
    domainTag: 'COMPUTE ENERGY TELEMETRY',
    icon: Trophy,
    watermark: 'STATE MACHINE // TELEMETRY',
    accentClass: 'text-emerald-400',
    stampText: 'STATE COMPETITION // 1ST PLACE',
    symbolNode: <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />,
  },
  'ey-techathon': {
    serial: 'CIT-2025-EY-05',
    domainTag: 'ENTERPRISE ARCHITECTURE',
    icon: ShieldCheck,
    watermark: 'STATELESS REST // COMPLIANCE',
    accentClass: 'text-yellow-400',
    stampText: 'ERNST & YOUNG // QUALIFIER',
    symbolNode: <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />,
  },
};

const AchievementPlaque: React.FC<AchievementPlaqueProps> = ({ achievement, variant = 'card' }) => {
  const cfg = PLAQUE_CONFIGS[achievement.id] || {
    serial: 'CIT-2025-GEN',
    domainTag: 'ENGINEERING CRUCIBLE',
    icon: Trophy,
    watermark: 'OFFICIAL RECORD',
    accentClass: 'text-[#F04B16]',
    stampText: achievement.organization || 'COMPETITION',
    symbolNode: <Award className="w-4 h-4 text-[#F04B16]" />,
  };

  const IconComponent = cfg.icon;
  const isModal = variant === 'modal';

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border border-[#2A2A2A] bg-gradient-to-br from-[#171717] via-[#101010] to-[#0A0A0A] text-[#FAF7F0] flex flex-col justify-between select-none ${
        isModal ? 'aspect-[16/10] sm:aspect-[16/9] p-5 sm:p-8' : 'aspect-[16/10] p-3.5 sm:p-4'
      }`}
    >
      {/* 1. Subtle Guilloche Security Corner Accents */}
      <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-[#F04B16]/50 pointer-events-none" />
      <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-[#F04B16]/50 pointer-events-none" />
      <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-[#F04B16]/50 pointer-events-none" />
      <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-[#F04B16]/50 pointer-events-none" />

      {/* 2. Background Monospace Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-mono text-[42px] sm:text-[72px] font-black uppercase tracking-widest text-[#FAF7F0] rotate-[-8deg] whitespace-nowrap">
          {cfg.watermark}
        </span>
      </div>

      {/* 3. Top Security Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-[#2A2A2A]/80 font-mono text-[9px] sm:text-[10px] text-[#8A877F]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F04B16] animate-pulse" />
          <span className="font-bold tracking-wider text-[#FAF7F0]">{cfg.serial}</span>
        </div>
        <div className="flex items-center gap-1.5 uppercase tracking-widest">
          <span className="text-[#8A877F] hidden xs:inline">{achievement.date}</span>
          <span className="px-1.5 py-0.5 rounded bg-[#2A2A2A]/70 text-[#FAF7F0] text-[8px] sm:text-[9px] font-bold">
            VERIFIED
          </span>
        </div>
      </div>

      {/* 4. Center Archival Presentation */}
      <div className="relative z-10 my-auto py-2 text-center flex flex-col items-center justify-center space-y-1.5 sm:space-y-2">
        {/* Central Seal Medallion */}
        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#1F1F1F] border border-[#333333] shadow-inner flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 rounded-full border border-[#F04B16]/30 animate-spin-slow pointer-events-none" />
          <IconComponent className={`w-5 h-5 sm:w-7 sm:h-7 ${cfg.accentClass}`} />
        </div>

        {/* Citing Body / Organization */}
        <div>
          <span className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-[#8A877F] block">
            {cfg.domainTag}
          </span>
          <h4 className="font-serif italic text-sm sm:text-lg md:text-xl font-bold text-[#FAF7F0] leading-tight line-clamp-1">
            {achievement.organization}
          </h4>
        </div>

        {/* Award Designation */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F04B16]/15 border border-[#F04B16]/40 text-[#FAF7F0] font-mono text-[9px] sm:text-[11px] font-bold uppercase tracking-wider">
          {cfg.symbolNode}
          <span>{achievement.award}</span>
        </div>
      </div>

      {/* 5. Bottom Archival Docket Footer */}
      <div className="relative z-10 pt-2 border-t border-[#2A2A2A]/80 flex items-center justify-between font-mono text-[8px] sm:text-[10px] text-[#8A877F]">
        <span className="truncate max-w-[65%] text-[#8A877F]">
          {cfg.stampText}
        </span>
        <span className="text-[#F04B16] font-semibold tracking-wider">
          {achievement.location ? achievement.location.split(',')[0].toUpperCase() : 'INDIA'}
        </span>
      </div>
    </div>
  );
};

export default AchievementPlaque;

