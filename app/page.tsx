import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import FloatingBackground from '@/components/FloatingBackground'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <FloatingBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Certifications />
      <Contact />
    </main>
  )
}
