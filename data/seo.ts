export interface SEOData {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}

export const siteConfig = {
  name: 'Dhanush D Prabhu',
  siteUrl: 'https://dhanushdprabhu.is-a.dev',
  defaultOgImage: 'https://dhanushdprabhu.is-a.dev/og-image.svg',
  twitterHandle: '@dhanushdprabhu',
};

export const homeSEO: SEOData = {
  title: 'Dhanush D Prabhu | AI Engineer & Software Developer',
  description: 'Portfolio of Dhanush D Prabhu, an AI engineer and software developer. Features AI platforms, FastAPI backends, distributed monitoring systems, and hackathon-winning projects.',
  ogTitle: 'Dhanush D Prabhu — AI Engineer & Software Developer',
  ogDescription: 'Building intelligent systems with Python, FastAPI, PostgreSQL, Docker, and modern web technologies.',
  canonical: '/',
};

export const projectSEO: Record<string, SEOData> = {
  'avana-v2': {
    title: 'Avana V2 — Multi-Agent AI Safety Platform | Dhanush D Prabhu',
    description: 'Avana V2 is a multi-agent AI safety platform built with FastAPI, PostGIS, and Gemini AI. Features geospatial risk scoring, safety heatmaps, and intelligent routing for urban safety analytics.',
    ogTitle: 'Avana V2 — Multi-Agent Intelligence Platform for Safety Analytics',
    ogDescription: 'AI-powered safety platform with multi-agent workflows, geospatial analytics, real-time risk scoring, and safe-route intelligence. Top 5 National AI Hackathon finalist.',
    canonical: '/project/avana-v2',
  },
  'greenops': {
    title: 'GreenOps — Distributed Monitoring & Energy Intelligence | Dhanush D Prabhu',
    description: 'GreenOps is a distributed infrastructure monitoring platform for telemetry ingestion, heartbeat tracking, and energy analytics. Built with Python, FastAPI, and Docker.',
    ogTitle: 'GreenOps — Distributed Infrastructure Monitoring & Energy Intelligence',
    ogDescription: 'Distributed monitoring system for telemetry ingestion, heartbeat tracking, and energy consumption analytics. Built with Python, FastAPI, and Docker.',
    canonical: '/project/greenops',
  },
  'little-heartbeat': {
    title: 'Little Heartbeat — AI-Assisted Community Support | Dhanush D Prabhu',
    description: 'Little Heartbeat is an AI-assisted community support platform built with React, Express.js, Supabase, and Gemini AI. Runner-Up at State Level Hackathon.',
    ogTitle: 'Little Heartbeat — AI-Assisted Community Support Platform',
    ogDescription: 'AI-powered community support platform built during a state-level hackathon. Features intelligent query triage and real-time community discussions.',
    canonical: '/project/little-heartbeat',
  },
};
