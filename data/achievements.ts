import type { AchievementDetail } from '../types';

export const achievementsData: AchievementDetail[] = [
  {
    id: 'codeneura',
    title: 'CodeNeura Inter-College Tech-a-Thon',
    subtitle: '1st Place Winner — Algorithmic Problem Solving & Execution',
    eventName: 'CodeNeura Inter-College Tech-a-Thon',
    award: '1st Place Winner (Gold)',
    date: 'November 2025',
    location: 'Sagara, Karnataka, India',
    organization: 'LBS College, Sagara',
    badge: '1st Place Winner',
    rank: 'Winner',
    highlightStat: 'Top Score Across All Rounds',
    projectOverview: 'An intensive, multi-round technical competition evaluating advanced algorithmic problem solving, computational complexity optimization, code accuracy, and rapid software prototyping under strict time pressure.',
    problemStatement: 'Participants were tested on complex combinatorial optimization challenges, edge-case resilience, and building efficient runtime implementations against concealed, high-throughput test cases.',
    whatIBuilt: 'Engineered high-performance algorithmic solutions in Python and C-style logic optimizing time and space complexity, culminating in a functional technical module completed ahead of deadline with zero syntax or runtime defects.',
    individualContributions: [
      'Authored optimized algorithmic implementations for graph traversal and dynamic state reduction.',
      'Designed structured test suites covering edge cases and memory boundary conditions.',
      'Achieved peak runtime efficiency benchmarks across consecutive competitive rounds.',
      'Delivered live technical defense and code explanation to the panel of evaluator judges.'
    ],
    technologies: ['Python', 'Data Structures & Algorithms', 'System Architecture', 'Optimization', 'Git'],
    technicalChallenges: [
      'Tight 45-minute sprint limits per algorithmic phase with zero margin for memory leaks or timeout exceptions.',
      'Refactoring quadratic time complexity solutions into sub-quadratic linearithmic performance under live clock pressure.',
      'Maintaining clean, self-documenting code architecture while maximizing raw execution speed.'
    ],
    solutions: [
      'Leveraged hash-indexed memoization and custom caching structures to eliminate redundant recursive traversals.',
      'Pre-allocated buffer structures to mitigate garbage collection spikes during dense computational cycles.',
      'Systematically traced edge scenarios prior to compilation, ensuring first-pass acceptance on judge test harnesses.'
    ],
    finalResults: [
      'Secured 1st Place overall in the inter-college tournament.',
      'Awarded first place trophy and official college honor certificate.',
      'Recognized by faculty and industry jury for cleanest codebase and optimal execution time.'
    ],
    keyTakeaways: [
      'Clean architectural discipline under pressure produces fewer defects than hurried ad-hoc coding.',
      'Deep fundamentals in data structures reliably outperform brute-force shortcuts.',
      'Clear technical communication during live judge defense is as decisive as code correctness.'
    ],
    eventPhotos: [
      {
        url: '',
        caption: 'CodeNeura Tech-a-Thon Championship Stage & Certificate Presentation',
        isPlaceholder: true
      },
      {
        url: '',
        caption: 'Live Competitive Round — LBS College Computer Science Labs',
        isPlaceholder: true
      }
    ],
    personalPhotos: [
      {
        url: '/profile.jpg',
        caption: 'Dhanush D Prabhu — Winner, CodeNeura Inter-College Tech-a-Thon',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'national-ai-hackathon',
    title: 'National Level AI Hackathon',
    subtitle: 'Top 5 Finalist (out of 100+ teams across Karnataka) — SJBIT Bengaluru',
    eventName: 'National Level AI Hackathon',
    award: 'Top 5 Finalist (State-Wide)',
    date: '2025',
    location: 'Bengaluru, Karnataka, India',
    organization: 'SJBIT Bengaluru',
    projectTitle: 'Avana V2 — Urban Safety Intelligence Platform',
    badge: 'Top 5 Finalist',
    rank: 'Top 5 / 100+ Teams',
    highlightStat: 'Top 5 of 100+ Teams',
    projectOverview: 'Avana V2 is an AI-powered urban safety intelligence platform that ingests unstructured public incident reports, normalizes them via multi-agent pipelines, performs PostGIS geospatial risk scoring, and serves real-time safe-route guidance.',
    problemStatement: 'Urban safety intelligence is fragmented across disparate municipal reports, social feeds, and local alerts without unified geospatial correlation, making proactive citizen navigation nearly impossible.',
    whatIBuilt: 'Architected and deployed a complete full-stack solution during the hackathon: a high-throughput FastAPI backend integrated with Gemini AI orchestration, PostGIS spatial queries, Docker containerization, and an interactive React safety dashboard.',
    individualContributions: [
      'Formulated the overall platform architecture, database schemas, and microservice container topology.',
      'Engineered the multi-agent orchestration pipeline to parse and categorize heterogeneous incident data.',
      'Constructed PostGIS spatial query procedures and polygon boundary risk-weighting equations.',
      'Led team standups, assigned sprint priorities, and presented the live working deployment to jury members.'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Docker', 'React', 'TypeScript', 'Gemini AI'],
    technicalChallenges: [
      'Orchestrating concurrent multi-agent LLM analysis streams without exceeding API rate thresholds.',
      'Executing millisecond-grade spatial bounding box queries over dense urban coordinates in PostGIS.',
      'Delivering a production-grade, containerized demo within the high-intensity hackathon schedule.'
    ],
    solutions: [
      'Structured asynchronous worker queues with exponential backoff and localized cache layers in FastAPI.',
      'Designed spatial indexing (GIST) on location geometry tables to accelerate nearest-neighbor radius calculations.',
      'Pre-built reproducible Docker Compose environments ensuring instantaneous zero-failure staging for judges.'
    ],
    finalResults: [
      'Selected among the Top 5 Finalist teams out of 100+ competing engineering institutions across Karnataka.',
      'Successfully demonstrated live interactive heatmap generation and dynamic route recalculation before judges.',
      'Flagship project Avana V2 praised for end-to-end technical cohesion and practical public utility.'
    ],
    keyTakeaways: [
      'Containerizing the entire stack from minute one eliminates "works on my machine" pitfalls in high-stakes demos.',
      'Specialized, decoupled AI agents with discrete prompts outperform monolithic general-purpose prompts.',
      'Spatial database design requires thoughtful indexing to maintain low latency under spatial aggregation.'
    ],
    eventPhotos: [
      {
        url: '',
        caption: 'National AI Hackathon Grand Arena — SJBIT Bengaluru',
        isPlaceholder: true
      },
      {
        url: '',
        caption: 'Live Project Demonstration & Judging Booth for Avana V2',
        isPlaceholder: true
      }
    ],
    personalPhotos: [
      {
        url: '/profile.jpg',
        caption: 'Dhanush D Prabhu — Technical Lead, Avana V2',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'state-hackathon-gmit',
    title: 'State Level Hackathon — GMIT Davangere',
    subtitle: 'Runner-Up — AI-Assisted Community Support Platform',
    eventName: 'State Level Hackathon',
    award: 'Runner-Up (2nd Place)',
    date: '2025',
    location: 'Davangere, Karnataka, India',
    organization: 'GMIT Davangere',
    projectTitle: 'Little Heartbeat',
    badge: 'Runner-Up',
    rank: 'Runner-Up',
    highlightStat: 'Delivered in 24 Hours',
    projectOverview: 'Little Heartbeat is a rapid-response community health and advisory platform pairing real-time interactive discussion forums with generative AI query triage and support history tracking.',
    problemStatement: 'Underrepresented and expectant individuals often struggle to access immediate triage, empathetic advisory guidance, and reliable peer-supported community threads during critical moments.',
    whatIBuilt: 'Built an end-to-end web service within a 24-hour sprint: integrated Express.js backend services, Supabase live database subscriptions, and intelligent Gemini response prompts behind a fluid React mobile-responsive interface.',
    individualContributions: [
      'Served as Team Leader, establishing the technical direction and project milestones from hour zero.',
      'Implemented backend API endpoints, validation middleware, and generative AI triage hooks.',
      'Configured Supabase realtime listener channels for instant peer-to-peer thread updates.',
      'Conducted live product walkthrough and architectural defense during jury evaluations.'
    ],
    technologies: ['React', 'Express.js', 'Supabase', 'Gemini AI', 'TailwindCSS', 'TypeScript'],
    technicalChallenges: [
      'Strict 24-hour delivery window requiring uncompromising prioritization of core functionality.',
      'Preventing hallucinations in medical/support advice while ensuring responsive latency.',
      'Ensuring seamless real-time WebSocket communication across diverse client devices.'
    ],
    solutions: [
      'Implemented system-prompt guardrails mandating clarifying disclaimers and emergency hotline redirects.',
      'Leveraged Supabase managed auth and row-level security policies to eliminate bespoke auth boilerplate.',
      'Adopted an optimistic UI update model to provide instantaneous client feedback on thread postings.'
    ],
    finalResults: [
      'Awarded Runner-Up honors among elite collegiate engineering teams from across the state.',
      'Validated end-to-end working prototype with live multi-user WebSocket chatting during demo.',
      'Commended by judges for empathetic problem selection and disciplined technical execution.'
    ],
    keyTakeaways: [
      'Speed in 24-hour hackathons comes from ruthless scope containment and battle-tested building blocks.',
      'Responsible AI prompting with explicit guardrails is non-negotiable for human-centric applications.',
      'Real-time collaborative features create an immediate emotional connection during live judging.'
    ],
    eventPhotos: [
      {
        url: '',
        caption: 'GMIT Davangere State Hackathon Main Auditorium',
        isPlaceholder: true
      },
      {
        url: '',
        caption: '24-Hour Sprint Development Floor & Hackathon Showcase',
        isPlaceholder: true
      }
    ],
    personalPhotos: [
      {
        url: '/profile.jpg',
        caption: 'Dhanush D Prabhu — Team Lead for Little Heartbeat',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'ey-techathon',
    title: 'EY Techathon (Ernst & Young)',
    subtitle: 'Round 2 Qualifier — National Corporate Innovation Challenge',
    eventName: 'EY Techathon',
    award: 'Round 2 Qualifier',
    date: '2025',
    location: 'National / Online Assessment & Review',
    organization: 'Ernst & Young (EY)',
    badge: 'Round 2 Qualifier',
    rank: 'Advanced to Round 2',
    highlightStat: 'National Corporate Selection',
    projectOverview: 'A premier national engineering challenge hosted by EY focusing on enterprise-scale technological transformation, cloud resilience, data architecture, and commercial viability.',
    problemStatement: 'Solving industrial challenges requiring modern distributed data pipelines, enterprise security compliance, and robust computational architectures that scale efficiently across cloud infrastructures.',
    whatIBuilt: 'Architectural blueprint and technical submission demonstrating modular backend design, containerized deployment workflows, and robust security modeling tailored for enterprise data compliance.',
    individualContributions: [
      'Authored the technical architecture design documentation and container topology diagrams.',
      'Formulated API security strategies including JWT lifecycle rotation and role-based access control.',
      'Evaluated cost-performance trade-offs across containerized microservices and database clustering.'
    ],
    technologies: ['Enterprise Architecture', 'FastAPI', 'Docker', 'PostgreSQL', 'Security & RBAC'],
    technicalChallenges: [
      'Complying with stringent enterprise standards for zero-trust security and data isolation.',
      'Demonstrating scalable data ingestion without prohibitive cloud compute overhead.'
    ],
    solutions: [
      'Designed stateless containerized services behind unified gateway routing with health probes.',
      'Applied declarative configuration patterns for predictable, reproducible infrastructure definitions.'
    ],
    finalResults: [
      'Successfully advanced through Round 1 screening to earn Round 2 Qualifier distinction.',
      'Recognized among top applicant cohorts nationally for systematic architectural reasoning.'
    ],
    keyTakeaways: [
      'Enterprise software values predictability, auditability, and security as much as raw functionality.',
      'Clean architectural documentation communicates engineering maturity before code is ever run.'
    ],
    eventPhotos: [
      {
        url: '',
        caption: 'EY Techathon National Challenge Portal & Evaluation',
        isPlaceholder: true
      }
    ],
    personalPhotos: [
      {
        url: '/profile.jpg',
        caption: 'Dhanush D Prabhu — EY Techathon Qualifier',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'green-it',
    title: 'Green IT System Development Competition',
    subtitle: '1st Place Winner — Energy-Aware Computational Architecture',
    eventName: 'Green IT System Development Competition',
    award: '1st Place Winner',
    date: '2025',
    location: 'Karnataka, India',
    organization: 'Collegiate Green Computing Initiative',
    badge: '1st Place Winner',
    rank: 'Winner',
    highlightStat: 'Energy Optimization Champion',
    projectOverview: 'A technical competition focused on architecting sustainable, carbon-efficient compute systems and telemetry platforms to reduce idle energy consumption across distributed server fleets.',
    problemStatement: 'Compute clusters frequently burn substantial electrical energy during idle or unoptimized standby states without automated telemetry or dynamic power curtailment.',
    whatIBuilt: 'Formulated the architectural foundations of GreenOps: an agent-server telemetry daemon monitoring machine lifecycle states (ACTIVE / IDLE / OFFLINE) and estimating kilowatt-hour wastage in real time.',
    individualContributions: [
      'Modeled time-series database schemas for high-frequency telemetry logging with minimal disk I/O.',
      'Created the algorithmic formula correlating CPU duty cycles and idle intervals with energy loss.',
      'Presented the environmental and economic impact projections to the evaluation panel.'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Time-Series Analytics', 'Telemetry'],
    technicalChallenges: [
      'Minimizing the computational footprint of the monitoring agent itself so telemetry does not consume excess power.',
      'Aggregating irregular heartbeat signals across unreliable network connections.'
    ],
    solutions: [
      'Wrote an ultra-lightweight daemon using efficient OS-level system metrics with sub-1% CPU consumption.',
      'Used batched time-series writes and connection pooling to keep database load negligible.'
    ],
    finalResults: [
      'Awarded 1st Place for innovative practical application of Green Computing principles.',
      'Laid the groundwork for the open-source GreenOps distributed monitoring platform.'
    ],
    keyTakeaways: [
      'Sustainable software engineering is an optimization problem with tangible real-world environmental payback.',
      'Telemetry tools must be orders of magnitude lighter than the workloads they observe.'
    ],
    eventPhotos: [
      {
        url: '',
        caption: 'Green IT System Development Forum & Awards',
        isPlaceholder: true
      }
    ],
    personalPhotos: [
      {
        url: '/profile.jpg',
        caption: 'Dhanush D Prabhu — Winner, Green IT System Development',
        isPlaceholder: false
      }
    ]
  }
];

