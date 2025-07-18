// Centralized data structure for easy updates
export const portfolioData = {
  personal: {
    name: "Sree Vardhan Reddy",
    title: "Software Engineer & Data Scientist",
    bio: "A final-year Computer Science student at the Indian Institute of Information Technology Kottayam, passionate about developing intelligent solutions and leveraging data to solve real-world problems.",
    email: "itssreevardhan@gmail.com",
    photo: "/static/user.jpeg",
    social: {
      github: "https://github.com/itssreevardhan",
      linkedin: "https://www.linkedin.com/in/sree-vardhan-reddy-g/",
      leetcode: "https://leetcode.com/u/itssreevardhan/",
    },
  },

  about: {
    description: [
      "I am a Computer Science student with a strong foundation in software engineering and data science. I am experienced in building full-stack applications, developing and deploying machine learning models, and utilizing a wide range of technologies to create practical solutions.",
      "My journey in technology is driven by a passion for problem-solving and a desire to build meaningful products. I have hands-on experience with the entire development lifecycle, from data ingestion and modeling, to deployment and maintenance.",
      "I am always eager to learn new technologies and methodologies to improve my skill set and tackle complex challenges. I have a strong interest in AI, particularly in the fields of Natural Language Processing and Computer Vision.",
    ],
    experience: "1+ Years",
    projectsCompleted: "20+",
  },

  experience: [
    {
      title: "Software Engineer Intern",
      company: "AlgoUniversity",
      location: "Remote",
      dates: "June 2025 - Present",
      responsibilities: [
        "Built an AI-powered web scraper in Python to extract coding problems and generate topic tags.",
        "Developed and deployed a full-stack online coding platform with a custom compiler using Docker on AWS EC2.",
        "Mentored 60+ students in Django and full-stack development.",
        "Integrated resume-to-job matching using NLP to enhance job relevance on a career guidance platform.",
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
      title: "Data Science Intern",
      company: "NIT Trichy",
      location: "Tiruchirapalli, Tamil Nadu",
      dates: "June 2024 - October 2024",
      responsibilities: [
        "Developed an Insider Threat Detection model using NLP and machine learning, achieving 98% accuracy.",
        "Built a text preprocessing pipeline with NLTK & SpaCy for 2M+ records, improving data quality by 30%.",
        "Engineered Word2Vec embeddings to enhance semantic analysis.",
        "Applied machine learning techniques to analyze numerical data from 2M+ records to extract key insights.",
      ],
    },
  ],

  skills: {
    Languages: ["JavaScript", "C++", "Python", "HTML", "CSS", "Kotlin", "SQL"],
    "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express", "Django", "FastAPI","Flask"],
    "Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM"],
    "Data Science": ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Jupyter"],
    "AI & Deep Learning": ["Computer Vision", "OpenCV", "NLP", "NLTK", "spaCy", "Transformers","RAG"],
    Databases: ["PostgreSQL", "MongoDB", "Redis","SQLite3"],
    "Cloud & DevOps": ["AWS", "Vercel", "Docker", "GitHub Actions", "Render"],
  },

  projects: [
    {
      title: "Underwater Fish Disease Detection",
      description: "Built a Vision Transformer-based model to detect fish diseases from underwater videos with 90% accuracy, using OpenCV for fish region detection.",
      image: "/static/Underwater-Fish-Disease-Detection.png.jpg?height=300&width=500",
      technologies: ["Python", "Computer Vision", "PyTorch", "OpenCV"],
      githubUrl: "https://github.com/itssreevardhan/Fish-Disease-Detection",
    },
    {
      title: "Smart AI Job Matcher",
      description: "Created an AI-powered skill-matching system to rank job descriptions based on resume similarity, deployed with Vercel and Render.",
      image: "/static/Smart-AI-Job-Matcher.png?height=300&width=500",
      technologies: ["Python", "Flask", "NLP", "React", "Vercel", "Render"],
      githubUrl: "https://github.com/Sreevardhan1729/AIJobFit",
      liveUrl: "https://smart-ai-job-matcher.vercel.app/",
    },
    {
      title: "BookBridge: Book Exchange Platform",
      description: "Designed and led the development of a book exchange platform with real-time chat using Django and SQL, integrating the Google Books API.",
      image: "/static/BookBridge.avif?height=300&width=500",
      technologies: ["Python", "Django", "HTML", "CSS", "SQL", "Google Books API"],
      githubUrl: "https://github.com/itssreevardhan/BookBridge",
    },
    {
      title: "GuardianPulse: Family Location Insights",
      description: "Developed a secure, real-time location-sharing mobile app for families using Kotlin, Google Login, and Firebase.",
      image: "/static/GuardianPulse.png?height=300&width=500",
      technologies: ["Kotlin", "Firebase", "Google Maps API"],
      githubUrl: "https://github.com/itssreevardhan/GuardianPulse",
    },
  ],

  achievements: [
    {
      title: "LeetCode Rating",
      description: "Secured a rating of 2,036 (top 2.14%) on LeetCode, showcasing strong algorithmic problem-solving skills.",
      date: "Present",
      icon: "code",
    },
    {
      title: "IICPC Contest Rank",
      description: "Ranked 565 among over 47,000 global participants in the prestigious IICPC contest.",
      date: " ",
      icon: "trophy",
    },
    {
      title: "CodeChef Rating",
      description: "Earned a 4-star rating (max: 1827) on CodeChef through consistent participation in weekly contests.",
      date: "Present",
      icon: "star",
    },
    {
      title: "Project Lead",
      description: "Led a team of 6 in a Python project to successfully complete the online book exchanging system 'BookBridge'.",
      date: " ",
      icon: "users",
    },
  ],
}
