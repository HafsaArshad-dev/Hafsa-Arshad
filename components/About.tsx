'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Cloud, Code, Palette, Globe, Target } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const interests = [
    { icon: Brain, text: 'AI & Robotics', color: 'from-purple-400 to-purple-600' },
    { icon: Cloud, text: 'Cloud Computing', color: 'from-primary-400 to-primary-600' },
    { icon: Code, text: 'Full-Stack Development', color: 'from-purple-500 to-primary-500' },
    { icon: Palette, text: 'Creative Technology', color: 'from-primary-500 to-purple-500' },
    { icon: Globe, text: 'Web3 & Emerging Tech', color: 'from-purple-400 to-primary-400' },
    { icon: Target, text: 'Problem Solving', color: 'from-primary-400 to-purple-400' },
  ]

  return (
    <section id="about" className="section-padding bg-gray-900/50 backdrop-blur-custom">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate technology enthusiast advancing through the Cloud Applied Generative AI Engineering certification program
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a passionate and driven technology enthusiast currently advancing my skills through the 
                <span className="font-semibold text-purple-400"> Cloud Applied Generative AI Engineering</span> 
                certification program, focusing on Generative AI, cloud computing, DevOps, and full-stack development.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I am also exploring robotics, intelligent agents, and applications of AI in healthcare, finance, and Web3. 
                My goal is to leverage these skills to create scalable, tech-driven solutions that solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I thrive in collaborative environments, enjoy taking on challenges, and aim to contribute to transformative 
                projects in AI and technology.
              </p>
            </div>

            {/* Key Interests Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/70 backdrop-blur-custom shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-10 h-10 bg-gradient-to-r ${interest.color} rounded-lg flex items-center justify-center`}>
                    <interest.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-300 text-sm">{interest.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-purple-900/30 to-primary-900/30 rounded-2xl p-8 flex items-center justify-center overflow-hidden">
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-80"
              />
              
              <motion.div
                animate={{ 
                  rotate: [360, 0],
                  y: [0, -20, 0]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-16 right-12 w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-80"
              />
              
              <motion.div
                animate={{ 
                  rotate: [0, -360],
                  scale: [1, 0.9, 1]
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-16 left-16 w-20 h-20 bg-gradient-to-r from-purple-500 to-primary-500 rounded-full opacity-60"
              />

              {/* Central illustration */}
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-primary-400 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AI & Innovation</h3>
                <p className="text-gray-600 text-sm">Generative AI • Cloud Computing • Creative Tech</p>
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 1 }}
                  d="M 100 100 Q 200 50 300 100"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 1.5 }}
                  d="M 100 300 Q 200 350 300 300"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#b8a5ff" />
                    <stop offset="100%" stopColor="#a5d8ff" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a5d8ff" />
                    <stop offset="100%" stopColor="#b8a5ff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
