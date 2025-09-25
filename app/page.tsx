import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

const FloatingBackground = dynamic(() => import('@/components/FloatingBackground'), { ssr: false })
const Blog = dynamic(() => import('@/components/Blog'))
const Certifications = dynamic(() => import('@/components/Certifications'))

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
