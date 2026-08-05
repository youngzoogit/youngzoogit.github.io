import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Skills } from '@/components/skills'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '기술 | Heo Yeongju',
}

export default function SkillsPage() {
  return (
    <div className="relative min-h-svh">
      <Navbar />
      <main className="pt-16">
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
