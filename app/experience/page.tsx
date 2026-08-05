import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { WorkExperience } from '@/components/work-experience'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '실무 경력 | Heo Yeongju',
}

export default function ExperiencePage() {
  return (
    <div className="relative min-h-svh">
      <Navbar />
      <main className="pt-16">
        <WorkExperience />
      </main>
      <Footer />
    </div>
  )
}
