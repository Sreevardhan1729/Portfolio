// Centralized data structure for easy updates
export const portfolioData = {
  personal: {
    name: "Sree Vardhan Reddy",
    title: "Software Engineer",
    bio: "Computer Science graduate from IIIT Kottayam (CGPA: 9.28) with production experience building and scaling enterprise SaaS platforms. Currently at DevRev, working on large-scale TypeScript migrations and frontend architecture.",
    email: "itssreevardhan@gmail.com",
    photo: "/static/user.jpeg",
    resume:
      "https://drive.google.com/file/d/1A9pcq4ArSuREJSgF7hr9oVLg6hfgRolg/view?usp=sharing",
    social: {
      github: "https://github.com/Sreevardhan1729",
      linkedin: "https://www.linkedin.com/in/sreevardhanreddy/",
      leetcode: "https://leetcode.com/u/Vardhan1729/",
    },
  },

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Indian Institute of Information Technology Kottayam",
    cgpa: "9.28",
    graduation: "May 2026",
    coursework: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Database Management",
      "Computer Networks",
      "Machine Learning",
    ],
  },

  about: {
    description: [
      "I am a Software Engineer with a strong foundation in TypeScript, React, and large-scale monorepo architecture. At DevRev, I have shipped 60+ merged PRs across a multi-million line Nx monorepo, driving strict TypeScript adoption, removing dead code, and aligning API contracts across frontend and backend.",
      "My experience spans full-stack development, CI/CD optimization, and data-driven systems. I have built sandboxed code executors, automated web scrapers, ETL pipelines, and AI-powered tools — always with an emphasis on type safety, performance, and maintainability.",
      "I thrive on solving complex engineering problems at scale — from migrating widget systems across API boundaries to designing type guards that prevent runtime crashes for thousands of users.",
    ],
    experience: "4 Internships",
    projectsCompleted: "20+",
  },

  experience: [
    {
      title: "Member of Technical Staff Intern",
      company: "DevRev",
      location: "Chennai",
      dates: "January 2026 - Present",
      responsibilities: [
        "Fixed 30%+ of strict-mode TypeScript errors across 20+ libraries in an Nx monorepo; shipped 60+ merged PRs.",
        "Aligned API contracts with backend schemas across 3 repos (devrev-web, schemaregistry-client, gateway); added type guards and null-safe generics to prevent regressions.",
        "Removed dead code, deprecated feature flags, and unused casts across shared libraries; reduced bundle size.",
        "Built a Claude Code-powered automated PR review CI workflow with binary caching and batched comments, cutting review time from 81s to 63s.",
        "Currently driving the widget builder migration from data-sources to data-views API, involving Go backend migrations and frontend adapter rewrites.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "AlgoUniversity (YC S21)",
      location: "Remote",
      dates: "June 2025 - August 2025",
      responsibilities: [
        "Unified Crawl4AI scrapers + tagger; ingested ~2.5k problems from 100+ pages, cutting triage time ~80%.",
        "Dockerized services on EC2 with health checks + rolling restarts; observed 99%+ uptime over 30 days.",
        "Mentored 120+ students in full-stack development; 85%+ completed capstone projects on schedule.",
      ],
    },
    {
      title: "Data Analyst Intern",
      company: "University of Massachusetts",
      location: "Remote",
      dates: "October 2024 - January 2025",
      responsibilities: [
        "Conducted data-driven program evaluation by analyzing 100+ survey responses.",
        "Applied t-tests and ANOVA for statistical analysis, improving accuracy by 25%.",
        "Used Google Sheets for organizing, analyzing, and visualizing data through 10+ interactive charts.",
        "Implemented Python preprocessing scripts to extract insights from 50+ responses.",
      ],
    },
    {
      title: "Research Intern",
      company: "NIT Trichy",
      location: "Tiruchirapalli, Tamil Nadu",
      dates: "June 2024 - October 2024",
      responsibilities: [
        "Architected a security analytics service with parsers and rule sets; promoted alerts API with 97% precision.",
        "Built an ETL pipeline with Python workers for 2M+ records; improved data quality checks and throughput by 30%.",
        "Optimized text services with cached indexes and batch jobs, reducing CPU time and latency by 20%.",
        "Built a KNN-based anomaly detector flagging 4 user-risk patterns; reduced false-positive alerts by 10%.",
      ],
    },
  ],

  skills: {
    Languages: ["TypeScript", "Python", "C++", "JavaScript", "SQL", "Kotlin"],
    "Frameworks & Libraries": [
      "React",
      "Next.js",
      "Django",
      "Flask",
      "FastAPI",
      "Node.js",
      "Express",
    ],
    "Back-End & APIs": [
      "REST",
      "JWT Auth",
      "ETL/Batch Jobs",
      "Caching",
      "Nx Monorepo",
    ],
    "AI & Machine Learning": [
      "NLP",
      "LangChain",
      "PyTorch",
      "Scikit-learn",
      "TensorFlow",
      "Computer Vision",
      "OpenCV",
      "RAG",
    ],
    "Data & Analytics": [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Jupyter",
    ],
    Databases: ["MongoDB", "PostgreSQL", "Redis", "SQLite3"],
    "Cloud & DevOps": [
      "Docker",
      "AWS (EC2)",
      "Git",
      "GitHub Actions",
      "Linux",
      "Vercel",
      "Render",
    ],
  },

  projects: [
    {
      title: "ForgeDB",
      description:
        "Built a production-grade Redis clone from scratch using modern C++ with full RESP protocol support, event-driven architecture via kqueue, and persistent storage. Implemented core data structures (strings, lists, hash maps, sets), key expiration with TTL, RDB snapshots, AOF logging, and pub/sub messaging. Designed with CMake build system, demonstrating deep systems programming knowledge including TCP sockets, non-blocking I/O, file descriptors, and OS-level optimizations.",
      image: "/static/ForgeDB.png?height=300&width=500",
      technologies: ["C++", "CMake", "kqueue", "RESP", "TCP", "Systems Programming"],
      githubUrl: "https://github.com/Sreevardhan1729/ForgeDB",

    },
    {
      title: "Online Judge & AI Debugger",
      description:
        "Engineered a sandboxed code executor with JWT auth, CPU/memory limits, and 5 verdict types (CE/RE/TLE). Built a Django REST API for problem management and submission dispatch with real-time React feedback. Composed an error diagnostics module with enriched logs and stack traces; cut user debug time by 60%.",
      image: "/static/OnlineJudge.jpg?height=300&width=500",
      technologies: ["React", "Django", "Python", "Docker", "EC2"],
      githubUrl: "https://github.com/Sreevardhan1729/coding_platform",
      liveUrl: "https://coding-platform-sage.vercel.app/",
    },
    {
      title: "Intelligent RAG Agent",
      description:
        "Architected a multi-source RAG system to answer natural language queries from PDFs, websites, and raw text. Automated CI/CD (GitHub Actions) to AWS EC2 using Docker, cutting manual deployment effort by 90%. Built a ReAct agent (LangChain) with dynamic tool use through a RAG pipeline and live web API integration.",
      image: "/static/RAGAgent.jpeg?height=300&width=500",
      technologies: [
        "Python",
        "Flask",
        "LangChain",
        "Docker",
        "AWS",
        "GitHub Actions",
      ],
      githubUrl: "https://github.com/Sreevardhan1729/RAG-Agent",
    },
    {
      title: "Smart AI Job Matcher",
      description:
        "Trained a custom NLP model to extract key skills from resumes for accurate job matching. Delivered ranking endpoints returning 90% relevant results; surfaced 5-10 missing skills per applicant. Produced a config-driven ETL system for batch runs; combined validation jobs, improved throughput by 30%.",
      image: "/static/Smart-AI-Job-Matcher.png?height=300&width=500",
      technologies: ["Python", "Flask", "NLP", "React", "Vercel", "Render"],
      githubUrl: "https://github.com/Sreevardhan1729/AIJobFit",
      liveUrl: "https://ai-job-fit.vercel.app/",
    },
    {
      title: "Underwater Fish Disease Detection",
      description:
        "Built a Vision Transformer-based model to detect fish diseases from underwater videos with 90% accuracy, using OpenCV for fish region detection.",
      image:
        "/static/Underwater-Fish-Disease-Detection.png.jpg?height=300&width=500",
      technologies: ["Python", "Computer Vision", "PyTorch", "OpenCV"],
      githubUrl: "https://github.com/Sreevardhan1729/Fish_Disease_Detection",
    },
    {
      title: "BookBridge: Book Exchange Platform",
      description:
        "Designed and led the development of a book exchange platform with real-time chat using Django and SQL, integrating the Google Books API.",
      image: "/static/BookBridge.avif?height=300&width=500",
      technologies: [
        "Python",
        "Django",
        "HTML",
        "CSS",
        "SQL",
        "Google Books API",
      ],
      githubUrl: "https://github.com/Sreevardhan1729/Book-Bridge",
    },
    {
      title: "GuardianPulse: Family Location Insights",
      description:
        "Developed a secure, real-time location-sharing mobile app for families using Kotlin, Google Login, and Firebase.",
      image: "/static/GuardianPulse.png?height=300&width=500",
      technologies: ["Kotlin", "Firebase", "Google Maps API"],
      githubUrl:
        "https://github.com/Sreevardhan1729/GuardianPulse-Family-Location-Insights",
    },
  ],

  achievements: [
    {
      title: "LeetCode Rating",
      highlight: "2,077 — Top 1.69%",
      description:
        "Showcasing strong algorithmic problem-solving skills across 500+ problems.",
      date: "Present",
      icon: "code",
    },
    {
      title: "IICPC Contest Rank",
      highlight: "Rank 565 / 47,000+",
      description:
        "Among over 47,000 global participants in the prestigious IICPC contest.",
      date: " ",
      icon: "trophy",
    },
    {
      title: "CodeChef Rating",
      highlight: "4-Star — 1,827",
      description:
        "Earned through consistent participation in weekly contests.",
      date: "Present",
      icon: "star",
    },
    {
      title: "Codeforces Specialist",
      highlight: "Max: 1,545",
      description:
        "Achieved Specialist rank on Codeforces.",
      date: "Present",
      icon: "star",
    },
    {
      title: "Project Lead",
      highlight: "Team of 6",
      description:
        "Led a team to successfully complete the online book exchanging system 'BookBridge'.",
      date: " ",
      icon: "users",
    },
  ],
};
