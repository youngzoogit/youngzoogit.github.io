import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { WorkExperience } from '@/components/work-experience'
import { Projects } from '@/components/projects'
import { Architecture } from '@/components/architecture'
import { Skills } from '@/components/skills'
import { Journey } from '@/components/journey'
import { GithubSection } from '@/components/github-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="relative min-h-svh">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Architecture />
        <Skills />
        <Journey />
        <GithubSection />
      </main>
      <Footer />
    </div>
  )
}
