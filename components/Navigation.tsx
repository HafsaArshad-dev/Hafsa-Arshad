'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Wrench, BookOpen, Award, Mail } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Wrench },
    { name: 'Projects', href: '#projects', icon: BookOpen },
    { name: 'Blog', href: '#blog', icon: BookOpen },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Glassmorphism Navigation Bar */}
      <div className="glass-card mx-4 mt-4 lg:mx-8 lg:mt-6">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('#home')}
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-white/5">
              <Image src="logo.png" alt="Hafsa Arshad logo" width={48} height={48} priority className="w-12 h-12 object-contain" />
            </div>
            <span className="text-white font-bold text-xl font-heading hidden sm:block group-hover:text-purple-300 transition-colors duration-300">
              Hafsa Arshad
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link flex items-center space-x-2 px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{item.name}</span>
                </button>
                
                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-primary-400 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-12 h-12 bg-gradient-to-r from-purple-400/20 to-primary-400/20 border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mx-4 mt-2"
          >
            <div className="glass-card overflow-hidden">
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.href)}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-left text-white hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 group"
                  >
                    <item.icon className="w-5 h-5 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300" />
                    <span className="font-medium">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 to-primary-400 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{
          width: '100%',
          transformOrigin: 'left',
        }}
      />
    </motion.nav>
  )
}
