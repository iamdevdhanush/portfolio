import type { ReactNode } from 'react';

export interface ArchitectureStep {
  step: string;
  label: string;
  tech: string;
  description: string;
}

export interface EngineeringDecision {
  decision: string;
  rationale: string;
  tradeOff: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: ReactNode;
  tags: string[];
  githubLink: string;
  liveLink?: string;
  badge?: string;
  highlights: string[];
  images: string[];
  technicalAchievements: string[];
  problemStatement?: string;
  challenges?: string[];
  keyFeatures?: string[];
  isFlagship?: boolean;
  architectureFlow?: ArchitectureStep[];
  engineeringDecisions?: EngineeringDecision[];
  outcomeAndLearnings?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface AchievementPhoto {
  url: string;
  caption: string;
  isPlaceholder?: boolean;
}

export interface AchievementDetail {
  id: string;
  title: string;
  subtitle: string;
  eventName: string;
  award: string;
  date?: string;
  location?: string;
  organization?: string;
  projectTitle?: string;
  projectOverview: string;
  problemStatement: string;
  whatIBuilt: string;
  individualContributions: string[];
  technologies: string[];
  technicalChallenges: string[];
  solutions: string[];
  finalResults: string[];
  keyTakeaways: string[];
  eventPhotos: AchievementPhoto[];
  personalPhotos: AchievementPhoto[];
  badge?: string;
  rank?: string;
  highlightStat?: string;
}
