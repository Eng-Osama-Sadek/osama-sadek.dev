import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "smart-ip-auditor-engine",
    title: "Smart-IP Auditor Engine",
    tagline: "AI patent analysis platform using RAG — cut legal review time by 70%.",
    description:
      "A legal-tech platform that leverages Retrieval-Augmented Generation (RAG) to perform semantic similarity analysis across patents and IP documents. Built to drastically reduce manual review time for patent attorneys and IP auditors. The system ingests large document corpora, generates embeddings, and answers complex queries with citation-backed responses.",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
    ],
    liveUrl: "https://github.com/Eng-Osama-Sadek",
    githubUrl: "https://github.com/Eng-Osama-Sadek",
    techStack: ["RAG", "OpenAI", "TypeScript", "Next.js", "PostgreSQL", "Vector DB"],
    features: [
      "Semantic similarity search across thousands of patents",
      "Citation-backed AI answers — no hallucinations",
      "70% reduction in manual legal review time",
      "Streaming responses with source highlighting",
    ],
    featured: true,
    order: 1,
    year: 2025,
    category: "AI",
  },
  {
    slug: "coommit-echo-ai-canvas",
    title: "Coommit Echo — AI Canvas",
    tagline: "Real-time collaborative infinite canvas with live Whisper transcription + GPT-4o layout.",
    description:
      "An AI-powered real-time collaborative workspace featuring an infinite canvas, live audio processing via OpenAI Whisper, WebSocket-based synchronization for multi-user editing, and automated layout generation using GPT-4o. Teams sketch together, speak, and the canvas self-organizes.",
    coverImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
    ],
    liveUrl: "https://github.com/Eng-Osama-Sadek",
    githubUrl: "https://github.com/Eng-Osama-Sadek",
    techStack: ["Next.js", "OpenAI GPT-4o", "Whisper", "WebSockets", "TypeScript", "PostgreSQL"],
    features: [
      "Infinite canvas with smooth pan/zoom",
      "Live audio → text via Whisper API",
      "WebSocket real-time multi-user sync",
      "AI auto-layout that organizes messy boards",
    ],
    featured: true,
    order: 2,
    year: 2025,
    category: "AI",
  },
  {
    slug: "spotter-ai",
    title: "Spotter AI — Logistics Route Calculator",
    tagline: "Enterprise route-planning engine improving freight efficiency by 60%.",
    description:
      "An enterprise-grade route planning and fuel stop optimization engine for logistics companies. Calculates optimal fuel stops, cheapest stations along a route, and predicts delivery windows. Optimized for freight trucking with real-world constraints (tank range, fuel prices, traffic).",
    coverImage:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80",
    ],
    liveUrl: "https://github.com/Eng-Osama-Sadek",
    githubUrl: "https://github.com/Eng-Osama-Sadek",
    techStack: ["React", "NestJS", "PostgreSQL", "Redis", "Google Maps API", "TypeScript"],
    features: [
      "Optimal fuel-stop algorithm with real prices",
      "Cheapest station detection along any route",
      "60% improvement in freight calculation efficiency",
      "Enterprise multi-tenant architecture",
    ],
    featured: true,
    order: 3,
    year: 2024,
    category: "Web",
  },
  {
    slug: "ride-hailing-platform",
    title: "Ride-Hailing Platform",
    tagline: "Full-stack ride-hailing system: riders, drivers, admins — built for scale.",
    description:
      "A complete ride-hailing platform with three distinct surfaces: rider app, driver app, and admin dashboard. Features real-time trip matching, live location tracking, fare calculation, payment flows, and an admin panel with analytics, driver management, and dispute resolution.",
    coverImage:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80",
    ],
    liveUrl: "https://github.com/Eng-Osama-Sadek",
    githubUrl: "https://github.com/Eng-Osama-Sadek",
    techStack: ["NestJS", "React", "PostgreSQL", "Redis", "TypeScript", "JWT"],
    features: [
      "Real-time ride matching via WebSockets",
      "Live driver location + ETA tracking",
      "Admin dashboard with analytics",
      "Payments, receipts, and dispute workflow",
    ],
    featured: true,
    order: 4,
    year: 2024,
    category: "Full-Stack",
  },
  {
    slug: "electricity-theft-inspection",
    title: "Electricity Theft Inspection App",
    tagline: "Offline-first mobile app — cut incident documentation from 2 hours to 15 minutes.",
    description:
      "A field-ready mobile application for electricity distribution inspectors to record theft incidents offline. Designed for rural areas with poor connectivity. Features offline data recording, GPS tagging, photo evidence, and automatic sync when back online. Cut the documentation workflow from 2 hours to 15 minutes per incident.",
    coverImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1200&q=80",
    ],
    liveUrl: "https://github.com/Eng-Osama-Sadek",
    githubUrl: "https://github.com/Eng-Osama-Sadek",
    techStack: ["React Native", "SQLite", "Offline Sync", "Expo", "TypeScript"],
    features: [
      "100% offline-first data capture",
      "GPS-tagged photo evidence",
      "Background sync when connectivity returns",
      "Reduced documentation from 2h → 15min",
    ],
    featured: false,
    order: 5,
    year: 2024,
    category: "Mobile",
  },
  {
    slug: "asyut-maintenance-dashboard",
    title: "Asyut Maintenance Dashboard",
    tagline: "Monthly maintenance tracking for Assiut South engineering departments with AI assistant.",
    description:
      "A comprehensive web application for managing and tracking monthly periodic maintenance work across Assiut South Sector engineering departments. Includes interactive dashboards, PDF report generation, and an integrated AI assistant for querying maintenance history.",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    ],
    liveUrl: "https://github.com/Eng-Osama-Sadek",
    githubUrl: "https://github.com/Eng-Osama-Sadek",
    techStack: ["Next.js", "PostgreSQL", "OpenAI", "Recharts", "TypeScript"],
    features: [
      "Interactive maintenance dashboards",
      "One-click PDF report generation",
      "AI assistant for maintenance queries",
      "Department-level access control",
    ],
    featured: false,
    order: 6,
    year: 2025,
    category: "Web",
  },
  {
    slug: "drawing-course-platform",
    title: "Drawing Course Platform",
    tagline: "Interactive educational platform + native recording studio for Engineering Drawing.",
    description:
      "An interactive educational platform for teaching Engineering Drawing courses, paired with a native recording studio that captures screen, voice, and drawing strokes. Built with Python (Flask) and WebRTC for real-time lessons.",
    coverImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80",
    gallery: [],
    liveUrl: "https://github.com/Eng-Osama-Sadek",
    githubUrl: "https://github.com/Eng-Osama-Sadek",
    techStack: ["Python", "Flask", "WebRTC", "JavaScript"],
    features: [
      "Live drawing sessions over WebRTC",
      "Native screen+audio+stroke recorder",
      "Course management & student progress",
    ],
    featured: false,
    order: 7,
    year: 2023,
    category: "Web",
  },
  {
    slug: "fuel-planner",
    title: "Fuel Planner",
    tagline: "Algorithm to find cheapest fuel stops along any route — coding challenge winner.",
    description:
      "A clean algorithmic solution to the classic Fuel Stop Planner problem: given a route and a car with limited tank capacity, compute the optimal set of stops that minimizes total fuel cost. Solved at the 97th percentile in the Gorilla Problem Solving Assessment.",
    coverImage:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1600&q=80",
    gallery: [],
    liveUrl: "https://github.com/Eng-Osama-Sadek",
    githubUrl: "https://github.com/Eng-Osama-Sadek",
    techStack: ["TypeScript", "Algorithms", "Data Structures"],
    features: [
      "O(n log n) optimal-stop algorithm",
      "Cheapest-station detection",
      "97th percentile problem-solving score",
    ],
    featured: false,
    order: 8,
    year: 2024,
    category: "Automation",
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);

export const allTechStack = Array.from(
  new Set(projects.flatMap((p) => p.techStack)),
).sort();