'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Code, Palette, FileText, Rocket } from 'lucide-react'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: 'Guess the Number',
      description: 'Interactive game where users guess numbers or challenge the computer. Features include user input validation, computer AI opponent, and score tracking.',
      category: 'Python Development',
      icon: Code,
      color: 'from-purple-400 to-purple-600',
      technologies: ['Python', 'OOP', 'Algorithms', 'Game Logic'],
      link: '#',
      github: '#',
      image: '/projects/guess-number.jpg',
      featured: true
    },
    {
      title: 'Mad Libs',
      description: 'Transforms user input into dynamic stories using string manipulation. Creates personalized narratives by filling in story templates with user-provided words.',
      category: 'Python Development',
      icon: Code,
      color: 'from-purple-400 to-purple-600',
      technologies: ['Python', 'Scripting', 'String Manipulation', 'User Input'],
      link: '#',
      github: '#',
      image: '/projects/mad-libs.jpg'
    },
    {
      title: 'Pen Tool & Layer Management',
      description: 'Created vector artwork using pen tool and layers for structured 2D design. Demonstrates advanced Illustrator techniques and professional design workflow.',
      category: 'Adobe Illustrator',
      icon: Palette,
      color: 'from-primary-500 to-purple-500',
      technologies: ['Adobe Illustrator', 'Pen Tool', 'Layer Management', 'Vector Design'],
      link: '#',
      image: '/projects/pen-tool.jpg'
    },
    {
      title: 'Pathfinder & Shapes',
      description: 'Designed vector graphics by merging and refining shapes. Showcases mastery of Illustrator pathfinder tools and geometric design principles.',
      category: 'Adobe Illustrator',
      icon: Palette,
      color: 'from-primary-500 to-purple-500',
      technologies: ['Adobe Illustrator', 'Pathfinder', 'Shape Tools', 'Vector Graphics'],
      link: '#',
      image: '/projects/pathfinder.jpg'
    },
    {
      title: 'STEM Articles - Students for Accessible Aerospace',
      description: 'Published 4 comprehensive articles simplifying complex aerospace topics for younger readers. Collaborated with global team on nonprofit initiative supported by Google and Microsoft.',
      category: 'Content Writing',
      icon: FileText,
      color: 'from-purple-500 to-primary-500',
      technologies: ['Technical Writing', 'Science Communication', 'STEM Education', 'Content Development'],
      link: 'https://aerostudents.org',
      image: '/projects/stem-articles.jpg',
      featured: true
    },
    {
      title: 'Creative Digital Products',
      description: 'Designed digital assets and marketing visuals using Canva. Created professional graphics for various purposes including social media, presentations, and branding.',
      category: 'Canva Design',
      icon: Palette,
      color: 'from-primary-400 to-primary-600',
      technologies: ['Canva', 'Digital Design', 'Marketing Materials', 'Visual Assets'],
      link: '#',
      image: '/projects/canva-designs.jpg'
    }
  ]

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative bg-gray-800/70 backdrop-blur-custom rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
        project.featured ? 'ring-2 ring-purple-400' : ''
      }`}
    >
      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <project.icon className={`w-16 h-16 text-transparent bg-gradient-to-br ${project.color} bg-clip-text`} />
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-400 to-primary-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <div className={`w-3 h-3 bg-gradient-to-r ${project.color} rounded-full`} />
          <span className="text-sm font-medium text-purple-600">{project.category}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {project.link && project.link !== '#' && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-400 to-primary-400 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Project</span>
            </motion.a>
          )}
          
          {project.github && project.github !== '#' && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 border-2 border-purple-400 text-purple-600 rounded-lg font-medium hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
          )}
          
          {(!project.link || project.link === '#') && (!project.github || project.github === '#') && (
            <span className="text-gray-500 text-sm italic">Demo available upon request</span>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-primary-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )

  return (
    <section id="projects" className="section-padding bg-gray-900/50 backdrop-blur-custom">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse portfolio showcasing Python development, creative design, and technical writing projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Project Categories Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-400 to-primary-400 rounded-2xl p-8 text-white">
            <Rocket className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Project Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-lg font-semibold mb-2">Python Development</h4>
                <p className="opacity-90">Interactive games and automation scripts</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Creative Design</h4>
                <p className="opacity-90">Vector graphics and digital assets</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Content Creation</h4>
                <p className="opacity-90">STEM education and technical writing</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
