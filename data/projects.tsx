import React from 'react';
import { BrainCircuit, BarChart3, MessageSquareQuote } from 'lucide-react';
import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'avana-v2',
    title: 'Avana V2',
    subtitle: 'Multi-Agent Intelligence Platform for Safety Analytics',
    description: 'An AI-powered safety intelligence platform featuring multi-agent workflows, geospatial analytics, and real-time risk scoring.',
    longDescription: 'Avana V2 is a comprehensive safety intelligence platform built with a FastAPI backend and React frontend. It leverages multi-agent AI workflows to process incident reports, extract actionable intelligence, and provide geospatial safety analytics. The platform features interactive safety heatmaps, risk scoring algorithms, and safe-route intelligence to help users make informed decisions about their environment. The system was architected to handle real-time data ingestion from multiple sources, process it through specialized AI agents, and present actionable insights through an intuitive geospatial interface.',
    icon: <BrainCircuit className="w-8 h-8 text-zinc-400" />,
    tags: ['FastAPI', 'PostgreSQL', 'PostGIS', 'React', 'TypeScript', 'TailwindCSS', 'Docker', 'Gemini AI'],
    githubLink: 'https://github.com/iamdevdhanush/avana-v2',
    badge: 'Top 5 National AI Hackathon Finalist',
    highlights: [
      'Multi-agent intelligence workflows for automated incident analysis',
      'Geospatial analytics with PostGIS for safety heatmap generation',
      'Real-time risk scoring and safe-route intelligence',
      'Incident extraction pipeline using AI-powered processing'
    ],
    images: [],
    technicalAchievements: [
      'Architected a multi-agent AI system using FastAPI and Gemini AI for coordinated task processing',
      'Implemented geospatial queries with PostGIS for efficient location-based analytics',
      'Designed a scalable incident extraction pipeline handling both structured and unstructured data',
      'Built real-time safety heatmap rendering with optimized database aggregation',
      'Developed risk scoring algorithms based on multiple data dimensions'
    ],
    problemStatement: 'Urban safety information is scattered across disparate sources, making it difficult for individuals to assess risks in their environment. Existing solutions lack real-time analysis, geospatial context, and intelligent route recommendations.',
    challenges: [
      'Orchestrating multiple AI agents to work cohesively on complex analysis tasks under strict time constraints',
      'Optimizing geospatial queries for real-time heatmap rendering over large geographic areas',
      'Handling varied incident data formats from multiple sources and normalizing them into a unified schema'
    ],
    keyFeatures: [
      'Multi-agent AI orchestration pipeline for automated incident analysis',
      'Interactive geospatial safety heatmaps with real-time updates',
      'Intelligent safe-route recommendation engine',
      'Incident data aggregation, normalization, and enrichment',
      'Risk scoring with configurable weight parameters'
    ],
    isFlagship: true
  },
  {
    slug: 'greenops',
    title: 'GreenOps',
    subtitle: 'Distributed Infrastructure Monitoring & Energy Intelligence',
    description: 'A distributed monitoring system for telemetry ingestion, heartbeat tracking, and energy consumption analytics.',
    longDescription: 'GreenOps is a distributed infrastructure monitoring platform designed for telemetry ingestion and energy intelligence. Built with Python and FastAPI, it provides real-time heartbeat tracking, system state monitoring, and energy consumption analytics. The platform uses JWT-based authentication for secure access and Docker for consistent deployment across environments. GreenOps demonstrates a practical approach to monitoring distributed systems while incorporating energy awareness into infrastructure management.',
    icon: <BarChart3 className="w-8 h-8 text-zinc-400" />,
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'JWT'],
    githubLink: 'https://github.com/iamdevdhanush/greenops',
    highlights: [
      'Distributed monitoring with telemetry ingestion from multiple sources',
      'Real-time heartbeat tracking and system state monitoring',
      'Energy consumption analytics and intelligence',
      'JWT-authenticated API with role-based access'
    ],
    images: [],
    technicalAchievements: [
      'Designed a telemetry ingestion pipeline handling concurrent data streams from distributed agents',
      'Implemented real-time heartbeat monitoring with configurable alert thresholds',
      'Built energy consumption analytics with time-series aggregation',
      'Secured the API with JWT authentication and middleware-based validation',
      'Containerized the application using multi-stage Docker builds'
    ],
    problemStatement: 'Infrastructure monitoring tools often lack energy awareness and are too complex for small to medium deployments. There is a need for a lightweight, energy-conscious monitoring solution.',
    challenges: [
      'Handling concurrent telemetry streams from hundreds of distributed agents',
      'Designing efficient time-series data storage for energy analytics',
      'Implementing secure authentication without compromising performance'
    ],
    keyFeatures: [
      'Distributed telemetry ingestion with concurrent stream handling',
      'Real-time heartbeat monitoring and alerting',
      'Energy consumption dashboards and analytics',
      'JWT-authenticated REST API',
      'Docker-based deployment and scaling'
    ]
  },
  {
    slug: 'little-heartbeat',
    title: 'Little Heartbeat',
    subtitle: 'AI-Assisted Community Support Platform',
    description: 'An AI-powered support platform with community features, built for a state-level hackathon.',
    longDescription: 'Little Heartbeat is an AI-assisted community support platform developed during a state-level hackathon. It provides a space for community members to seek and offer support, with AI-powered assistance to help triage and respond to queries. Built with React and Express.js, the platform uses Supabase for real-time data management and Gemini AI for intelligent response generation. The project secured the runner-up position in a competitive state-level hackathon.',
    icon: <MessageSquareQuote className="w-8 h-8 text-zinc-400" />,
    tags: ['React', 'Express.js', 'Supabase', 'Gemini AI'],
    githubLink: 'https://github.com/iamdevdhanush/little-heartbeat',
    badge: 'Runner-Up State Level Hackathon',
    highlights: [
      'AI-assisted support with intelligent response generation',
      'Real-time community features powered by Supabase',
      'Built and delivered within hackathon time constraints'
    ],
    images: [],
    technicalAchievements: [
      'Built a full-stack application with React frontend and Express.js backend within 24 hours',
      'Integrated Gemini AI for intelligent response generation and query triage',
      'Implemented real-time community features using Supabase subscriptions',
      'Designed a responsive UI optimized for both desktop and mobile users'
    ],
    problemStatement: 'Community support platforms often lack intelligent triage and response capabilities, making it hard for users to get timely help.',
    challenges: [
      'Delivering a complete full-stack application within a 24-hour hackathon timeframe',
      'Integrating AI-powered responses while maintaining natural conversation flow'
    ],
    keyFeatures: [
      'AI-assisted query triage and response generation',
      'Real-time community discussion threads',
      'User profiles and support history',
      'Responsive design for cross-platform access'
    ]
  }
];
