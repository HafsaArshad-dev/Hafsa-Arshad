'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Brain, Palette, FileText, Users, TrendingUp } from 'lucide-react'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: 'Technical & Programming',
      icon: Code,
      color: 'from-purple-400 to-purple-600',
      skills: [
        { name: 'Python', percentage: 85 },
        { name: 'Object-Oriented Programming (OOP)', percentage: 65 },
        { name: 'Algorithms', percentage: 70 },
        { name: 'Scripting & Automation', percentage: 75 },
        { name: 'Problem Solving / Software Development', percentage: 80 },
      ]
    },
    {
      title: 'AI & Emerging Tech',
      icon: Brain,
      color: 'from-primary-400 to-primary-600',
      skills: [
        { name: 'Generative AI', percentage: 95 },
        { name: 'Artificial Intelligence (AI)', percentage: 95 },
        { name: 'Agentic AI', percentage: 90 },
        { name: 'Cloud Computing', percentage: 70 },
      ]
    },
    {
      title: 'Design & Creativity',
      icon: Palette,
      color: 'from-purple-500 to-primary-500',
      skills: [
        { name: 'Adobe Illustrator', percentage: 75 },
        { name: 'Canva (Product Design, Marketing Materials, Digital Assets)', percentage: 90 },
        { name: '2D Animation (Pen Tool, Vector Design, Layering)', percentage: 95 },
        { name: 'Creative Development', percentage: 95 },
      ]
    },
    {
      title: 'Writing & Communication',
      icon: FileText,
      color: 'from-primary-500 to-purple-500',
      skills: [
        { name: 'Creative Writing', percentage: 95 },
        { name: 'Technical Writing', percentage: 95 },
        { name: 'Science Communication', percentage: 80 },
        { name: 'STEM Content Development', percentage: 90 },
        { name: 'Content Editing & Proofreading', percentage: 85 },
      ]
    },
    {
      title: 'Professional Skills',
      icon: Users,
      color: 'from-purple-400 to-primary-400',
      skills: [
        { name: 'Remote Collaboration', percentage: 70 },
        { name: 'Attention to Detail', percentage: 80 },
        { name: 'Critical Thinking', percentage: 75 },
        { name: 'Time Management', percentage: 80 },
        { name: 'Communication & Teamwork', percentage: 90 },
      ]
    }
  ]

  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, gradientFrom = '#b8a5ff', gradientTo = '#7cc2ff' }: {
    percentage: number
    size?: number
    strokeWidth?: number
    gradientFrom?: string
    gradientTo?: string
  }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    const gradientId = `circle-gradient-${gradientFrom.replace(/[#\s]/g, '')}-${gradientTo.replace(/[#\s]/g, '')}-${size}-${strokeWidth}`

    return (
      <div className="relative inline-block">
        <svg width={size} height={size} className="transform -rotate-90">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradientFrom} />
              <stop offset="100%" stopColor={gradientTo} />
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-white/30"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
    )
  }

  return (
    <section id="skills" className="section-padding bg-gray-900/50 backdrop-blur-custom">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A comprehensive range of technical, creative, and professional skills developed through continuous learning and hands-on experience
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gray-800/70 backdrop-blur-custom rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-white group-hover:text-purple-400 transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-purple-600">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.percentage}%` } : {}}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Skills with Circular Progress */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-12">Core Competencies</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Python */}
            <div className="text-center">
              <CircularProgress percentage={85} gradientFrom="#b8a5ff" gradientTo="#9333ea" />
              <h4 className="text-xl font-semibold text-white mt-4 mb-2">Python</h4>
              <p className="text-white/80">Advanced programming with focus on AI, automation, and problem-solving</p>
            </div>

            {/* Generative AI */}
            <div className="text-center">
              <CircularProgress percentage={95} gradientFrom="#7cc2ff" gradientTo="#3d8bff" />
              <h4 className="text-xl font-semibold text-white mt-4 mb-2">Generative AI</h4>
              <p className="text-white/80">Expert-level knowledge in AI models, agents, and emerging technologies</p>
            </div>

            {/* Creative Development */}
            <div className="text-center">
              <CircularProgress percentage={95} gradientFrom="#a855f7" gradientTo="#5ba6ff" />
              <h4 className="text-xl font-semibold text-white mt-4 mb-2">Creative Development</h4>
              <p className="text-white/80">Mastery in design tools, vector graphics, and creative problem-solving</p>
            </div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-purple-400 to-primary-400 rounded-2xl p-8 text-white">
            <TrendingUp className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Continuous Learning & Growth</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Currently advancing through Cloud Applied Generative AI Engineering certification, 
              exploring robotics, intelligent agents, and applications of AI in healthcare, finance, and Web3.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
