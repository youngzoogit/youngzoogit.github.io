import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Projects } from '@/components/projects'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '프로젝트 | Heo Yeongju',
}

export default function ProjectsPage() {
  return (
    <div className="relative min-h-svh">
      <Navbar />
      <main className="pt-16">
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
