import type { ReactNode } from 'react';

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
}

export interface SkillCategory {
  category: string;
  items: string[];
}
