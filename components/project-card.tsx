"use client";

import type React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "./ui/animation";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
}

const cardVariants = {
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

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <MotionDiv
      className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          {liveUrl && (
            <Button
              size="sm"
              onClick={() => window.open(liveUrl, "_blank")}
              className="flex-1"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
          <Button
            size="sm"
            variant="outline"
            onClick={() => window.open(githubUrl, "_blank")}
            className="flex-1"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        </div>
      </div>
    </MotionDiv>
  );
}
