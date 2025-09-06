'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Code, Brain, Palette, Rocket, Sparkles, Zap, Target } from 'lucide-react'

export default function Hero() {
  const floatingIcons = [
    { icon: Code, delay: 0, color: 'from-purple-400/90 to-purple-600/90', position: 'top-20 left-20' },
    { icon: Brain, delay: 0.5, color: 'from-primary-400/90 to-primary-600/90', position: 'top-32 right-24' },
    { icon: Palette, delay: 1, color: 'from-purple-500/90 to-primary-500/90', position: 'bottom-32 left-32' },
    { icon: Rocket, delay: 1.5, color: 'from-primary-500/90 to-purple-500/90', position: 'bottom-20 right-20' },
    { icon: Sparkles, delay: 2, color: 'from-purple-400/80 to-primary-400/80', position: 'top-1/2 left-10' },
    { icon: Zap, delay: 2.5, color: 'from-primary-400/80 to-purple-400/80', position: 'top-1/2 right-10' },
    { icon: Target, delay: 3, color: 'from-purple-500/80 to-primary-500/80', position: 'bottom-1/2 left-16' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  }

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section id="home" className="hero-container relative overflow-hidden pt-32">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />
        
        {/* Animated gradient blobs */}
        <motion.div
          className="floating-blob-glow top-20 left-10"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="floating-blob-glow top-40 right-20"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <motion.div
          className="floating-blob bottom-40 left-20"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,165,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(184,165,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Particle field */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Animated Blocks */}
      <div className="floating-icons-grid">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            variants={floatingVariants}
            animate="float"
            className={`floating-icon ${item.position} bg-gradient-to-br ${item.color}`}
            style={{
              animationDelay: `${item.delay}s`,
            }}
          >
            <item.icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      {/* Main Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom text-center relative z-10"
      >
        {/* Hero Title with Enhanced Animation */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h1 className="hero-title">
            <span className="hero-title">HAFSA</span>
          </h1>
          <h1 className="hero-title mt-2">
            <span className="hero-title">ARSHAD</span>
          </h1>
        </motion.div>
        
        {/* Hero Subtitle */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <h2 className="hero-subtitle">
            Python Developer & Generative AI Enthusiast
          </h2>
        </motion.div>
        
        {/* Enhanced Tagline */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-light">
            <span className="text-purple-300 font-medium">Passionate about emerging tech & innovation</span> • 
            <span className="text-primary-300 font-medium"> Creative Technologist</span> • 
            <span className="text-primary-300 font-medium"> Cloud Computing Learner</span> • 
            <span className="text-primary-300 font-medium"> AI Agent Developer</span>
          </p>
        </motion.div>

        {/* Enhanced Call to Action Buttons */}
        <motion.div
          variants={buttonVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center space-x-3">
              <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore My Work</span>
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center space-x-3">
              <Palette className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Get In Touch</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Enhanced Location and Contact Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80 mb-16"
        >
          <motion.div 
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full group-hover:animate-pulse" />
            <span className="group-hover:text-purple-300 transition-colors duration-300">
              📍 Faisalabad, Punjab, Pakistan
            </span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open('mailto:hafsaarshad3377@gmail.com', '_blank')}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:animate-pulse" />
            <span className="group-hover:text-primary-300 transition-colors duration-300">
              📧 hafsaarshad3377@gmail.com
            </span>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60 cursor-pointer group"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-3 group-hover:text-purple-400 transition-colors duration-300">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 group-hover:text-purple-400 transition-colors duration-300" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  )
}
