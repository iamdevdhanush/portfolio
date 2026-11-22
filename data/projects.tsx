import React from 'react';
import { BrainCircuit, BarChart3, MessageSquareQuote } from 'lucide-react';
import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'avana-v2',
    title: 'Avana V2',
    subtitle: 'Multi-Agent Intelligence Platform for Safety Analytics',
    description: 'An AI-powered safety intelligence platform featuring multi-agent workflows, geospatial analytics, and real-time risk scoring.',
    longDescription: 'Avana V2 is a safety intelligence platform built with a FastAPI backend, PostgreSQL/PostGIS database, and React frontend. It synthesizes unstructured incident reports into structured geospatial intelligence, rendering real-time safety heatmaps and algorithmic safe-route navigation corridors to protect citizens.',
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
    isFlagship: true,
    architectureFlow: [
      {
        step: '01',
        label: 'Multi-Source Ingestion',
        tech: 'FastAPI / Async REST',
        description: 'Receives unstructured incident reports and real-time alert payloads via asynchronous non-blocking endpoints.',
      },
      {
        step: '02',
        label: 'Agent Normalization',
        tech: 'Gemini AI Pipeline',
        description: 'Specialized LLM agent parses incident narrative to extract standardized severity levels, hazard tags, and spatial entities.',
      },
      {
        step: '03',
        label: 'Spatial Indexing',
        tech: 'PostGIS / GIST R-Tree',
        description: 'PostgreSQL geometry columns indexed with GIST R-Tree enable sub-second spatial radius aggregation and density clustering.',
      },
      {
        step: '04',
        label: 'Heatmap & Safe Corridors',
        tech: 'React / Leaflet & Vectors',
        description: 'Renders dynamic risk density heatmaps and computes algorithmic safe transit corridors avoiding active hazard zones.',
      },
    ],
    engineeringDecisions: [
      {
        decision: 'PostGIS R-Tree Spatial Indexing over In-Memory Kd-Trees',
        rationale: 'Leverages database-level persistence and standard OpenGIS spatial operations (ST_DWithin, ST_ClusterKMeans) directly in SQL queries.',
        tradeOff: 'Slightly higher storage footprint in PostgreSQL, offset by zero memory bottleneck in the Python application layer.',
      },
      {
        decision: 'Stateless FastAPI Endpoints with Asynchronous Agent Workers',
        rationale: 'Isolates ingestion latency from LLM extraction duration to prevent client request backpressure under load.',
        tradeOff: 'Requires persistent job status tracking for client-side resolution.',
      },
    ],
    outcomeAndLearnings: [
      'Selected as Top 5 Finalist out of 100+ collegiate engineering teams at the National Level AI Hackathon (SJBIT Bengaluru).',
      'Sub-second spatial querying validated across dense localized point clusters using PostGIS spatial indexing.',
      'Containerizing the full stack with Docker Compose ensured consistent evaluation before live judging panels.',
    ],
  },
  {
    slug: 'greenops',
    title: 'GreenOps',
    subtitle: 'Distributed Infrastructure Monitoring & Energy Intelligence',
    description: 'A distributed monitoring system for telemetry ingestion, heartbeat tracking, and energy consumption analytics.',
    longDescription: 'GreenOps is a distributed infrastructure monitoring platform built with Python, FastAPI, and PostgreSQL. It tracks distributed machine states through high-frequency heartbeats, analyzes workload lifecycle transitions (ACTIVE / IDLE / OFFLINE), and quantifies unallocated compute energy waste to automate server scaling.',
    icon: <BarChart3 className="w-8 h-8 text-zinc-400" />,
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'JWT'],
    githubLink: 'https://github.com/iamdevdhanush/greenops',
    badge: '1st Place Winner — Green IT Competition',
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
    ],
    architectureFlow: [
      {
        step: '01',
        label: 'Metric Collector Agent',
        tech: 'Python Daemon',
        description: 'Lightweight background service samples system CPU, RAM, and active process state at regular heartbeat intervals.',
      },
      {
        step: '02',
        label: 'Telemetry Ingestion Hub',
        tech: 'FastAPI / TimescaleDB',
        description: 'Concurrent asynchronous ingestion endpoint validates JWT headers and streams metrics into append-only time-series tables.',
      },
      {
        step: '03',
        label: 'Lifecycle State Machine',
        tech: 'ACTIVE / IDLE / OFFLINE',
        description: 'State transition model evaluates machine heartbeats to track continuous idle duration and compute energy wastage.',
      },
      {
        step: '04',
        label: 'Scaling Optimization Engine',
        tech: 'Predictive Scheduling',
        description: 'Computes estimated power waste and generates automated scaling recommendations to de-provision unused instances.',
      },
    ],
    engineeringDecisions: [
      {
        decision: 'Explicit Machine Lifecycle State Machine (ACTIVE / IDLE / OFFLINE)',
        rationale: 'Accurately quantifies unallocated compute capacity without relying on erratic instantaneous CPU utilization spikes.',
        tradeOff: 'Requires dependable heartbeats every 30 seconds to maintain accurate state freshness.',
      },
      {
        decision: 'JWT Middleware Authentication on Telemetry Endpoints',
        rationale: 'Protects ingestion pipelines against spoofed machine metrics while minimizing cryptographic validation overhead.',
        tradeOff: 'Requires periodic token renewal on long-running edge collector daemons.',
      },
    ],
    outcomeAndLearnings: [
      'Awarded 1st Place in the Green IT System Development Competition for practical energy analytics.',
      'Demonstrated measurable idle compute identification across multi-machine simulated workloads.',
      'Reinforced that simple, deterministic state machines often outperform complex heuristic models for uptime tracking.',
    ],
  },
  {
    slug: 'little-heartbeat',
    title: 'Little Heartbeat',
    subtitle: 'AI-Assisted Community Support Platform',
    description: 'An AI-powered support platform with community features, built for a state-level hackathon.',
    longDescription: 'Little Heartbeat is an emergency triage and community support platform developed during a 24-hour state-level hackathon. Combining React, Express.js, Supabase Realtime, and Gemini AI, it enables rapid incident submission, automated severity classification, and instant peer volunteer coordination.',
    icon: <MessageSquareQuote className="w-8 h-8 text-zinc-400" />,
    tags: ['React', 'Express.js', 'Supabase', 'Gemini AI', 'WebSockets'],
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
    ],
    architectureFlow: [
      {
        step: '01',
        label: 'Incident Submission',
        tech: 'React / TypeScript',
        description: 'Citizens submit urgent requests through a mobile-optimized interface with instant client-side validation.',
      },
      {
        step: '02',
        label: 'Realtime WebSocket Broker',
        tech: 'Supabase Realtime',
        description: 'Broadcasts new incoming support requests to active community responders with zero polling latency.',
      },
      {
        step: '03',
        label: 'AI Triage Classification',
        tech: 'Gemini AI API',
        description: 'Categorizes incoming incident narratives by urgency and suggests draft response templates for responders.',
      },
      {
        step: '04',
        label: 'Volunteer Coordination',
        tech: 'Express.js & Postgres',
        description: 'Manages ticket status lifecycle from OPEN to CLAIMED and RESOLVED with audit logging.',
      },
    ],
    engineeringDecisions: [
      {
        decision: 'Supabase Realtime Subscriptions over Custom WebSocket Service',
        rationale: 'Provided instant real-time synchronization with integrated row-level security within the strict 24-hour deadline.',
        tradeOff: 'Tied real-time message distribution directly to Supabase client library.',
      },
      {
        decision: 'Gemini AI Pre-Triage Classification',
        rationale: 'Automatically escalates critical medical and hazard tickets to the top of volunteer response queues.',
        tradeOff: 'Requires cautious prompt tuning to ensure high-priority alerts are never falsely downgraded.',
      },
    ],
    outcomeAndLearnings: [
      'Secured Runner-Up honors among participating collegiate teams at the GMIT Davangere State Level Hackathon.',
      'Achieved a fully functioning full-stack application with zero runtime defects during jury review.',
      'Proved that locking down schema contracts in the first two hours unlocks rapid parallel frontend-backend velocity.',
    ],
  }
];