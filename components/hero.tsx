"use client"

import { Button } from "@/components/ui/button"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { portfolioData } from "@/lib/portfolio-data"
import { Github, Linkedin, Download, Send } from "lucide-react"
import Link from "next/link"
import { LeetcodeIcon } from "./ui/leetcode-icon"

export function Hero() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center py-4 lg:py-12 min-h-screen bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8 px-4">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is{" "}
            <span className="text-blue-500 dark:text-blue-400">{portfolioData.personal.name}</span>
            {`, I'm a `}
            <span className="text-blue-600 dark:text-blue-500">{portfolioData.personal.title}</span>.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 my-8 max-w-2xl leading-relaxed">
            {portfolioData.personal.bio}
          </p>

          <div className="my-12 flex items-center gap-5">
            <Link href={portfolioData.personal.social.github} target="_blank" className="transition-all text-gray-600 dark:text-gray-400 hover:scale-125 duration-300">
              <Github size={30} />
            </Link>
            <Link href={portfolioData.personal.social.linkedin} target="_blank" className="transition-all text-gray-600 dark:text-gray-400 hover:scale-125 duration-300">
              <Linkedin size={30} />
            </Link>
            <Link href={portfolioData.personal.social.leetcode} target="_blank" className="transition-all text-gray-600 dark:text-gray-400 hover:scale-125 duration-300">
              <LeetcodeIcon className="h-[30px] w-[30px]" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button size="lg" onClick={() => scrollToSection("contact")} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105">
              <span>Contact me</span>
              <Send size={16} className="ml-2" />
            </Button>

            <Link href={portfolioData.personal.resume} target="_blank">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105">
                <span>Get Resume</span>
                <Download size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 from-gray-900 to-gray-800 border-gray-700 relative rounded-lg border bg-gradient-to-r">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">{portfolioData.personal.name}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Next.js</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Node.js</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Django</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">TensorFlow</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">PyTorch</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">PostgreSQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{"() {"}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
