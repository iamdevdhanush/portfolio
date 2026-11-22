import type { AchievementDetail } from '../types';

export const achievementsData: AchievementDetail[] = [
  {
    id: 'codeneura',
    title: 'CodeNeura Inter-College Tech-a-Thon',
    subtitle: '1st Place Winner — Algorithmic Problem Solving & Execution',
    eventName: 'CodeNeura Inter-College Tech-a-Thon',
    award: '1st Place Winner',
    date: 'November 2025',
    location: 'Sagara, Karnataka, India',
    organization: 'LBS College, Sagara',
    badge: '1st Place Winner',
    rank: 'Winner',
    projectOverview: 'An intensive competitive programming and technical hackathon evaluating algorithmic problem solving, computational complexity, and coding accuracy under time constraints.',
    problemStatement: 'Solving complex algorithmic problems requiring optimal time and space complexity with strict constraints and edge-case handling.',
    whatIBuilt: 'Implemented optimized solutions for algorithmic challenges, optimizing graph traversal and memory structures to achieve correct results within time limits.',
    individualContributions: [
      'Developed optimized algorithmic implementations for core competition problems.',
      'Designed structured test cases covering edge and boundary conditions.',
      'Explained implementation logic and technical trade-offs during live code review.'
    ],
    technologies: ['Python', 'Data Structures & Algorithms', 'Optimization', 'Git'],
    technicalChallenges: [
      'Strict time limits per problem round with zero tolerance for syntax or runtime defects.',
      'Refactoring high-complexity brute-force logic into linearithmic performance.'
    ],
    solutions: [
      'Applied memoization and hash-based lookups to avoid redundant computations.',
      'Carefully analyzed constraints beforehand to select optimal data structures.'
    ],
    finalResults: [
      'Awarded 1st Place in the inter-college competition.',
      'Official certificate and trophy awarded by LBS College, Sagara.'
    ],
    keyTakeaways: [
      'Strong fundamentals in data structures are critical under time pressure.',
      'Writing test cases before submitting prevents subtle off-by-one errors.'
    ],
    eventPhotos: [
      {
        url: '',
        caption: 'CodeNeura Tech-a-Thon at LBS College, Sagara',
        isPlaceholder: true
      }
    ],
    personalPhotos: [
      {
        url: '/profile.jpg',
        caption: 'Dhanush D Prabhu — 1st Place, CodeNeura',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'national-ai-hackathon',
    title: 'National Level AI Hackathon',
    subtitle: 'Top 5 Finalist (of 100+ teams across Karnataka) — SJBIT Bengaluru',
    eventName: 'National Level AI Hackathon',
    award: 'Top 5 Finalist',
    date: '2025',
    location: 'Bengaluru, Karnataka, India',
    organization: 'SJBIT Bengaluru',
    projectTitle: 'Avana V2',
    badge: 'Top 5 Finalist',
    rank: 'Top 5 / 100+ Teams',
    projectOverview: 'Avana V2 is an urban safety intelligence platform designed to convert public incident reports into structured insights, geospatial heatmaps, and safe route recommendations.',
    problemStatement: 'Urban safety information is scattered across disparate sources, making it hard for citizens to evaluate local risks or find safe routes.',
    whatIBuilt: 'Built and demonstrated the platform at the hackathon: a FastAPI backend with PostGIS spatial queries, multi-agent processing workflows, and a responsive React interface.',
    individualContributions: [
      'Architected the backend services using FastAPI and PostgreSQL with PostGIS.',
      'Structured the incident normalization pipeline and geospatial query handlers.',
      'Led the technical presentation and live demonstration to the judging panel.'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Docker', 'React', 'TypeScript'],
    technicalChallenges: [
      'Coordinating multiple processing tasks within hackathon time constraints.',
      'Optimizing spatial queries for real-time heatmap aggregation.'
    ],
    solutions: [
      'Implemented spatial indexing on geometry columns in PostgreSQL.',
      'Containerized backend services with Docker Compose for reliable local deployment.'
    ],
    finalResults: [
      'Selected among the Top 5 Finalist teams out of 100+ participating engineering teams.',
      'Demonstrated live working software to the evaluation panel.'
    ],
    keyTakeaways: [
      'Containerizing the application early eliminates deployment discrepancies during live demos.',
      'Decoupled architecture makes rapid iteration during hackathons significantly safer.'
    ],
    eventPhotos: [
      {
        url: '',
        caption: 'National AI Hackathon at SJBIT Bengaluru',
        isPlaceholder: true
      }
    ],
    personalPhotos: [
      {
        url: '/profile.jpg',
        caption: 'Dhanush D Prabhu — Avana V2 Project Lead',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'state-hackathon-gmit',
    title: 'State Level Hackathon — GMIT Davangere',
    subtitle: 'Runner-Up — AI-Assisted Community Support Platform',
    eventName: 'State Level Hackathon',
    award: 'Runner-Up',
    date: '2025',
    location: 'Davangere, Karnataka, India',
    organization: 'GMIT Davangere',
    projectTitle: 'Little Heartbeat',
    badge: 'Runner-Up',
    rank: 'Runner-Up',
    projectOverview: 'Little Heartbeat is an AI-assisted community support platform featuring real-time discussion threads and query triage, delivered during a 24-hour hackathon.',
    problemStatement: 'Users seeking urgent community advice often face delays in triage and finding relevant historical support threads.',
    whatIBuilt: 'Built an end-to-end full-stack web application with React frontend, Express.js backend, and real-time database subscriptions within 24 hours.',
    individualContributions: [
      'Led team development and managed feature delivery milestones.',
      'Implemented backend API endpoints and data models.',
      'Delivered the final product presentation to judges.'
    ],
    technologies: ['React', 'Express.js', 'Supabase', 'TypeScript', 'TailwindCSS'],
    technicalChallenges: [
      'Delivering a complete, working full-stack prototype within a 24-hour sprint.',
      'Ensuring reliable real-time updates across multiple client connections.'
    ],
    solutions: [
      'Scoped features strictly to the core user journey to guarantee completion.',
      'Utilized managed real-time subscription infrastructure for reliable messaging.'
    ],
    finalResults: [
      'Awarded Runner-Up honors at GMIT Davangere.',
      'Demonstrated a fully functional live prototype during judging.'
    ],
    keyTakeaways: [
      'Ruthless feature prioritization is essential when shipping within 24 hours.',
      'Simple, dependable architectures beat overly complex ones during live evaluations.'
    ],
    eventPhotos: [
      {
        url: '',
        caption: 'State Level Hackathon at GMIT Davangere',
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
    title: 'EY Techathon',
    subtitle: 'Round 2 Qualifier — National Innovation Challenge by EY',
    eventName: 'EY Techathon',
    award: 'Round 2 Qualifier',
    date: '2025',
    location: 'National / Online',
    organization: 'Ernst & Young (EY)',
    badge: 'Round 2 Qualifier',
    rank: 'Round 2 Qualifier',
    projectOverview: 'A national engineering challenge by EY focused on enterprise-scale problem solving, cloud architecture, and secure software development.',
    problemStatement: 'Designing scalable backend architectures that adhere to enterprise security, data compliance, and operational standards.',
    whatIBuilt: 'Architectural documentation and technical design proposal for modular containerized services with robust authentication boundaries.',
    individualContributions: [
      'Authored the service architecture and database schema designs.',
      'Formulated API security strategies including JWT validation and access control.'
    ],
    technologies: ['FastAPI', 'Docker', 'PostgreSQL', 'API Security'],
    technicalChallenges: [
      'Addressing enterprise requirements for data isolation and access control.',
      'Balancing performance with strict validation rules.'
    ],
    solutions: [
      'Designed stateless service endpoints with standardized error responses.',
      'Utilized declarative infrastructure configurations for reproducible environments.'
    ],
    finalResults: [
      'Qualified for Round 2 in a competitive national corporate hackathon.'
    ],
    keyTakeaways: [
      'Security and predictability are primary considerations in enterprise systems.',
      'Clear documentation is as important as working code.'
    ],
    eventPhotos: [
      {
        url: '',
        caption: 'EY Techathon National Challenge',
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
    subtitle: '1st Place Winner — Energy-Aware Compute Platform',
    eventName: 'Green IT System Development Competition',
    award: '1st Place Winner',
    date: '2025',
    location: 'Karnataka, India',
    organization: 'Collegiate Competition',
    badge: '1st Place Winner',
    rank: 'Winner',
    projectOverview: 'A technical competition focused on building systems that monitor and reduce server energy consumption during idle states.',
    problemStatement: 'Distributed servers often consume significant power while idling without visibility or automatic state tracking.',
    whatIBuilt: 'Created the initial concept and telemetry prototype for GreenOps, tracking machine lifecycle states (ACTIVE / IDLE / OFFLINE) and estimating idle power loss.',
    individualContributions: [
      'Designed the telemetry data schema and heartbeat tracking logic.',
      'Implemented the time-series aggregation queries for energy estimation.'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    technicalChallenges: [
      'Minimizing the agent footprint so monitoring does not consume excess compute.',
      'Handling intermittent network dropouts in heartbeat tracking.'
    ],
    solutions: [
      'Engineered lightweight metric collectors with low system overhead.',
      'Designed database schemas optimized for high-frequency write operations.'
    ],
    finalResults: [
      'Secured 1st Place in the Green IT System Development Competition.',
      'Laid the foundation for the open-source GreenOps project.'
    ],
    keyTakeaways: [
      'Monitoring software must be lightweight to avoid distorting the metrics it measures.',
      'Energy-aware engineering has direct real-world economic and operational benefits.'
    ],
    eventPhotos: [
      {
        url: '',
        caption: 'Green IT Competition Showcase',
        isPlaceholder: true
      }
    ],
    personalPhotos: [
      {
        url: '/profile.jpg',
        caption: 'Dhanush D Prabhu — 1st Place Winner',
        isPlaceholder: false
      }
    ]
  }
];
