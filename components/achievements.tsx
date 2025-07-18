"use client";

import { portfolioData } from "@/lib/portfolio-data";
import {
  Award,
  Github,
  Mic,
  Trophy,
  Star,
  Medal,
  Target,
  Zap,
} from "lucide-react";
import { MotionDiv } from "./ui/animation";

const iconMap = {
  award: Award,
  github: Github,
  mic: Mic,
  trophy: Trophy,
  star: Star,
  medal: Medal,
  target: Target,
  zap: Zap,
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

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <MotionDiv
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolioData.achievements.map((achievement, index) => {
            // Handle both string and object formats
            if (typeof achievement === "string") {
              return (
                <MotionDiv
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                    <span className="text-gray-900 dark:text-white font-medium">
                      {achievement}
                    </span>
                  </div>
                </MotionDiv>
              );
            }

            // Handle object format
            const IconComponent =
              iconMap[achievement.icon as keyof typeof iconMap] || Award;

            return (
              <MotionDiv
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <time className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {achievement.date}
                    </time>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </MotionDiv>
            );
          })}
        </MotionDiv>
      </div>
    </section>
  );
}

export default Achievements;
