"use client";

import { portfolioData } from "@/lib/portfolio-data";
import {
  Code,
  Database,
  Cloud,
  Layers,
  Terminal,
  Globe,
  Server,
  Cpu,
  Brain,
  BarChart3,
  Eye,
  MessageSquare,
} from "lucide-react";
import { MotionDiv } from "./ui/animation";

const skillIcons: Record<string, any> = {
  Languages: Code,
  "Frameworks & Libraries": Layers,
  "Machine Learning": Brain,
  "Data Science": BarChart3,
  "AI & Deep Learning": Eye,
  Databases: Database,
  "Cloud & DevOps": Cloud,
};

const techIcons: Record<string, any> = {
  // Languages
  JavaScript: Terminal,
  TypeScript: Terminal,
  Python: Terminal,
  Java: Terminal,
  SQL: Database,

  // Frameworks & Libraries
  React: Globe,
  "Next.js": Globe,
  "Node.js": Server,
  Express: Server,
  Django: Server,
  FastAPI: Server,
  Flask: Server,

  // Machine Learning
  TensorFlow: Brain,
  PyTorch: Brain,
  "Scikit-learn": Brain,
  Keras: Brain,
  XGBoost: Brain,
  LightGBM: Brain,

  // Data Science
  NumPy: BarChart3,
  Pandas: BarChart3,
  Matplotlib: BarChart3,
  Seaborn: BarChart3,
  Plotly: BarChart3,
  Jupyter: BarChart3,

  // AI & Deep Learning
  "Computer Vision": Eye,
  NLP: MessageSquare,
  OpenCV: Eye,
  NLTK: MessageSquare,
  spaCy: MessageSquare,
  Transformers: Brain,
  RAG: Brain,

  // Databases
  PostgreSQL: Database,
  MongoDB: Database,
  Redis: Database,
  SQLite3: Database,

  // Cloud & DevOps
  AWS: Cloud,
  Vercel: Cloud,
  Docker: Cloud,
  "GitHub Actions": Cloud,
  Render: Cloud,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <MotionDiv
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {Object.entries(portfolioData.skills).map(([category, skills]) => {
            const IconComponent = skillIcons[category] || Cpu;

            return (
              <MotionDiv
                key={category}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {skills.map((skill) => {
                    const TechIcon = techIcons[skill] || Terminal;

                    return (
                      <div
                        key={skill}
                        className="flex items-center p-2 bg-white dark:bg-gray-700 rounded-md hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        <TechIcon className="w-4 h-4 text-gray-600 dark:text-gray-400 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </MotionDiv>
            );
          })}
        </MotionDiv>
      </div>
    </section>
  );
}

export default Skills;
