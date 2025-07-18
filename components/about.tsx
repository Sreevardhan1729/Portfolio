"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { MotionDiv } from "./ui/animation";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <MotionDiv
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={portfolioData.personal.photo ?? "/placeholder.svg"}
                  alt={portfolioData.personal.name ?? "Profile photo"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-600 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {(portfolioData.about?.description ?? []).map(
              (paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              )
            )}

            <div className="pt-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Experience
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {portfolioData.about.experience}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Projects Completed
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {portfolioData.about.projectsCompleted}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionDiv>
    </section>
  );
}

export default About;
