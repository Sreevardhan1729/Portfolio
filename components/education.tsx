"use client"

import { portfolioData } from "@/lib/portfolio-data"
import { GraduationCap } from "lucide-react"

export function Education() {
  const edu = portfolioData.education

  return (
    <section id="education" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{edu.degree}</p>
              <div className="flex flex-wrap gap-4 mt-2 text-sm">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">CGPA: {edu.cgpa}</span>
                <span className="text-gray-500 dark:text-gray-400">{edu.graduation}</span>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
