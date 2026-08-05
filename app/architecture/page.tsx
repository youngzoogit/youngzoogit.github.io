import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Architecture } from '@/components/architecture'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '아키텍처 | Heo Yeongju',
}

export default function ArchitecturePage() {
  return (
    <div className="relative min-h-svh">
      <Navbar />
      <main className="pt-16">
        <Architecture />
      </main>
      <Footer />
    </div>
  )
}
