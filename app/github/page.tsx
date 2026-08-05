import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { GithubSection } from '@/components/github-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'GitHub | Heo Yeongju',
}

export default function GithubPage() {
  return (
    <div className="relative min-h-svh">
      <Navbar />
      <main className="pt-16">
        <GithubSection />
      </main>
      <Footer />
    </div>
  )
}
