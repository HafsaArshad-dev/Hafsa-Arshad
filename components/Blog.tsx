'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, BookOpen, Rocket, Shield, Thermometer, Droplets } from 'lucide-react'

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const blogPosts = [
    {
      title: 'Neural Flight: How AI Pilots Are Learning to Fly Jets Without Eyes',
      summary: 'Exploring the fascinating world of AI-powered flight systems that can navigate and control aircraft using advanced neural networks and sensor fusion technology.',
      excerpt: 'Artificial intelligence is revolutionizing aviation with neural flight systems that can pilot aircraft without traditional visual inputs...',
      category: 'AI & Aerospace',
      icon: Rocket,
      color: 'from-purple-400 to-purple-600',
      link: 'https://aerostudents.org/neural-flight',
      readTime: '8 min read',
      date: 'August 2025',
      featured: true
    },
    {
      title: 'How Spacecraft Use Whipple Shields to Survive Micrometeorites',
      summary: 'Understanding the ingenious design of Whipple shields that protect spacecraft from high-velocity space debris and micrometeorite impacts.',
      excerpt: 'Space is not empty - it\'s filled with tiny but dangerous particles that can destroy spacecraft. Whipple shields provide the solution...',
      category: 'Space Technology',
      icon: Shield,
      color: 'from-primary-400 to-primary-600',
      link: 'https://aerostudents.org/whipple-shields',
      readTime: '6 min read',
      date: 'August 2025'
    },
    {
      title: 'Exploring Cryogenic Propulsion',
      summary: 'Delving into the science behind cryogenic rocket fuels and how extremely cold temperatures enable more efficient space propulsion systems.',
      excerpt: 'Cryogenic propulsion represents the cutting edge of rocket technology, using supercooled fuels to achieve unprecedented efficiency...',
      category: 'Propulsion Systems',
      icon: Thermometer,
      color: 'from-purple-500 to-primary-500',
      link: 'https://aerostudents.org/cryogenic-propulsion',
      readTime: '7 min read',
      date: 'August 2025'
    },
    {
      title: 'The Incredible Versatility of Aerogel',
      summary: 'Discovering the remarkable properties of aerogel, the world\'s lightest solid material, and its diverse applications in aerospace and beyond.',
      excerpt: 'Aerogel, often called "frozen smoke," is a material that defies conventional physics with its extraordinary properties...',
      category: 'Materials Science',
      icon: Droplets,
      color: 'from-primary-500 to-purple-500',
      link: 'https://aerostudents.org/aerogel-versatility',
      readTime: '9 min read',
      date: 'August 2025'
    }
  ]

  const BlogCard = ({ post, index }: { post: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`group relative bg-gray-800/70 backdrop-blur-custom rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
        post.featured ? 'ring-2 ring-purple-400' : ''
      }`}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 bg-gradient-to-r ${post.color} rounded-lg flex items-center justify-center`}>
              <post.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-sm font-medium text-purple-600">{post.category}</span>
              <div className="flex items-center space-x-2 text-xs text-white/70">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          {post.featured && (
            <span className="bg-gradient-to-r from-purple-400 to-primary-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
          {post.title}
        </h3>
        
        <p className="text-white/80 leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      {/* Content */}
      <div className="p-6">
                        <p className="text-white/90 mb-6 leading-relaxed">
          {post.summary}
        </p>

        {/* Action Button */}
        <motion.a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-400 to-primary-400 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:shadow-xl"
        >
          <span>Read Full Article</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-primary-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )

  return (
    <section id="blog" className="section-padding bg-gradient-to-br from-purple-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Blog & Articles
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Published STEM content simplifying complex aerospace topics for younger readers and enthusiasts
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>

        {/* Blog Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-400 to-primary-400 rounded-2xl p-8 text-white">
            <BookOpen className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Students for Accessible Aerospace</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
              Collaborated with a global team on a nonprofit initiative supported by Google and Microsoft, 
              producing 2 structured articles weekly that blend science with hobbies and travel.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="text-lg font-semibold mb-2">Articles Published</h4>
                <p className="text-3xl font-bold opacity-90">4</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Weekly Output</h4>
                <p className="text-3xl font-bold opacity-90">2</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Global Team</h4>
                <p className="text-3xl font-bold opacity-90">✓</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Major Support</h4>
                <p className="text-3xl font-bold opacity-90">Google + Microsoft</p>
              </div>
            </div>

            <motion.a
              href="https://aerostudents.org"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 mt-6"
            >
              <span>Visit AeroStudents</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Writing Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Content Creation Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Research & Analysis</h4>
              <p className="text-white/80">Deep dive into complex aerospace concepts and current research</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Simplification</h4>
              <p className="text-white/80">Transform technical jargon into accessible, engaging content</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Storytelling</h4>
              <p className="text-white/80">Blend science with relatable examples and engaging narratives</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
