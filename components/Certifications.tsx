'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink, Calendar, Building, GraduationCap, Palette, Brain, FileText } from 'lucide-react'

export default function Certifications() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const certifications = [
    {
      title: 'Prompt Engineering for ChatGPT',
      issuer: 'Vanderbilt University, Coursera',
      date: 'August 2025',
      icon: Brain,
      color: 'from-purple-400 to-purple-600',
      category: 'AI & Technology',
      description: 'Advanced techniques in prompt engineering for large language models, focusing on ChatGPT optimization and effective AI communication strategies.',
      link: `${basePath}/images/certifications/Prompt-Certificate.jpg`,
      verified: true
    },
    {
      title: 'Introduction to Model Context Protocol (MCP)',
      issuer: 'Anthropic',
      date: 'August 2025',
      icon: Brain,
      color: 'from-primary-400 to-primary-600',
      category: 'AI & Technology',
      description: 'Comprehensive understanding of Model Context Protocol for building intelligent AI agents and enhancing AI system capabilities.',
      link: `${basePath}/images/certifications/MCP-certificate.jpg`,
      verified: true
    },
    {
      title: 'Create and Design Digital Products using Canva',
      issuer: 'Coursera Project Network',
      date: 'June 2025',
      icon: Palette,
      color: 'from-purple-500 to-primary-500',
      category: 'Design & Creativity',
      description: 'Mastery of Canva for creating professional digital products, marketing materials, and visual assets for various applications.',
      link: `${basePath}/images/certifications/create-and-design-using-using-canva.jpg`,
      verified: true
    },
    {
      title: 'Pen Tool & Layer Management',
      issuer: 'Adobe Illustrator',
      date: 'April 2025',
      icon: Palette,
      color: 'from-primary-500 to-purple-500',
      category: 'Design & Creativity',
      description: 'Advanced Illustrator techniques including pen tool mastery, layer organization, and structured 2D design workflows.',
      link: 'https://www.linkedin.com/posts/hafsa-arshad-dev_adobeillustrator-2danimation-vectordesign-activity-7316139416958214144-Bdy_/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtvpxQBo7KSvaNtYF_Arg7ASEAroyoYtqk',
      verified: true
    },
    {
      title: 'Pathfinder & Shapes',
      issuer: 'Adobe Illustrator',
      date: 'April 2025',
      icon: Palette,
      color: 'from-purple-400 to-primary-400',
      category: 'Design & Creativity',
      description: 'Expert-level skills in Illustrator pathfinder tools, shape manipulation, and geometric design principles.',
      link: 'https://www.linkedin.com/posts/hafsa-arshad-dev_adobeillustrator-2danimation-pentool-activity-7317146921876303872-LRu3/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtvpxQBo7KSvaNtYF_Arg7ASEAroyoYtqk',
      verified: true
    },
    {
      title: 'Content Writing Excellence',
      issuer: 'Students for Accessible Aerospace',
      date: 'August 2025',
      icon: FileText,
      color: 'from-primary-400 to-purple-400',
      category: 'Content & Communication',
      description: 'Recognition for outstanding contributions to STEM content development and science communication excellence.',
      link: `${basePath}/images/certifications/content-writing-excellence.jpg`,
      verified: true
    }
  ]

  const education = [
    {
      title: 'BS Data Science',
      issuer: 'Virtual University of Pakistan (VU)',
      date: 'Apr 2025 – Apr 2029',
      icon: GraduationCap,
      color: 'from-purple-400 to-primary-400',
      category: 'Higher Education',
      description: 'Comprehensive program covering data analysis, machine learning, statistics, and computational methods.',
      current: true
    },
    {
      title: 'Certified Agentic and Robotic AI Engineer',
      issuer: 'PIAIC',
      date: 'Dec 2024 – Dec 2025',
      icon: Brain,
      color: 'from-primary-400 to-purple-400',
      category: 'AI & Robotics',
      description: 'Specialized certification in developing intelligent agents, robotics systems, and AI engineering solutions.',
      current: true
    },
    {
      title: 'Intermediate, Medical',
      issuer: 'Alley Group Of Colleges',
      date: 'Jun 2022 – Sep 2024',
      icon: Building,
      color: 'from-purple-500 to-primary-500',
      category: 'Secondary Education',
      description: 'Completed intermediate education with focus on medical sciences and foundational academic preparation.',
      current: false
    }
  ]

  const TimelineItem = ({ item, index, isLast }: { item: any, index: number, isLast: boolean }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
    >
      {/* Timeline Line */}
      <div className="hidden lg:block absolute top-8 left-1/2 w-0.5 h-full bg-gradient-to-b from-purple-200 to-primary-200 transform -translate-x-1/2" />
      
      {/* Timeline Dot */}
      <div className="hidden lg:block absolute top-8 left-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-primary-400 rounded-full transform -translate-x-1/2 z-10" />
      
      {/* Content Card */}
              <div className={`bg-gray-800/70 backdrop-blur-custom rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
        index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
      }`}>
        {/* Header */}
        <div className="flex items-start space-x-4 mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <item.icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              {item.current && (
                <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Current
                </span>
              )}
              {item.verified && (
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Verified
                </span>
              )}
            </div>
            <p className="text-lg font-semibold text-purple-600">{item.issuer}</p>
            <div className="flex items-center space-x-2 text-sm text-white/70">
              <Calendar className="w-4 h-4" />
              <span>{item.date}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/80 leading-relaxed mb-4">{item.description}</p>

        {/* Category */}
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full font-medium">
            {item.category}
          </span>
          
          {item.link && (
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-400 to-primary-400 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              <span>Verify</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="certifications" className="section-padding bg-gray-900/50 backdrop-blur-custom">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education & Certifications
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Continuous learning journey through formal education and specialized certifications in AI, design, and technology
          </p>
        </motion.div>

        {/* Current Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Current Education</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {education.filter(item => item.current).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-gray-800/70 backdrop-blur-custom rounded-2xl p-8 border-2 border-gray-700"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                    <p className="text-lg font-semibold text-purple-600">{item.issuer}</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">{item.description}</p>
                <div className="flex items-center space-x-2 text-sm text-white/70">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Professional Certifications</h3>
          <div className="relative">
            {certifications.map((cert, index) => (
              <TimelineItem 
                key={index} 
                item={cert} 
                index={index} 
                isLast={index === certifications.length - 1} 
              />
            ))}
          </div>
        </motion.div>

        {/* Certification Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-400 to-primary-400 rounded-2xl p-8 text-white">
            <Award className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Continuous Professional Development</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="text-lg font-semibold mb-2">Total Certifications</h4>
                <p className="text-3xl font-bold opacity-90">{certifications.length}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">AI & Tech</h4>
                <p className="text-3xl font-bold opacity-90">3</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Design & Creativity</h4>
                <p className="text-3xl font-bold opacity-90">3</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Content & Communication</h4>
                <p className="text-3xl font-bold opacity-90">1</p>
              </div>
            </div>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mt-6">
              Focused on AI engineering, creative technology, and professional development through recognized institutions and platforms.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
