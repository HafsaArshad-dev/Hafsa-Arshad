'use client'

import { motion } from 'framer-motion'

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30" />
      
      {/* Animated gradient blobs with enhanced effects */}
      <motion.div
        className="floating-blob-glow top-20 left-10"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="floating-blob-glow top-40 right-20"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      <motion.div
        className="floating-blob bottom-40 left-20"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />
      
      <motion.div
        className="floating-blob-glow bottom-20 right-10"
        animate={{
          x: [0, -40, 0],
          y: [0, 80, 0],
          scale: [1, 0.9, 1],
          rotate: [360, 0, -360],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 15
        }}
      />
      
      {/* Additional floating elements for depth */}
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-r from-purple-400/10 to-primary-400/10 rounded-full blur-3xl"
        style={{ top: '30%', left: '60%' }}
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
      />
      
      <motion.div
        className="absolute w-48 h-48 bg-gradient-to-r from-primary-400/10 to-purple-400/10 rounded-full blur-3xl"
        style={{ top: '70%', left: '20%' }}
        animate={{
          x: [0, -20, 0],
          y: [0, 40, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 12
        }}
      />
      
      {/* Enhanced grid pattern with animation */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(184,165,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(184,165,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute w-32 h-32 border border-purple-400/20 rounded-lg"
        style={{ top: '15%', right: '15%' }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="absolute w-24 h-24 border border-primary-400/20 rounded-full"
        style={{ bottom: '25%', left: '10%' }}
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          rotate: { duration: 35, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Particle field with enhanced animation */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400/40 to-primary-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.3, 1, 0.3],
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
      
      {/* Subtle light rays effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-full bg-gradient-to-b from-transparent via-purple-400/10 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              transform: `rotate(${15 + i * 5}deg)`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>
      
      {/* Ambient glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-400/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary-400/5 to-transparent" />
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-purple-400/5 to-transparent" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primary-400/5 to-transparent" />
      </div>
    </div>
  )
}
