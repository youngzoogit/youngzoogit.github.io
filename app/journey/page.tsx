import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Journey } from '@/components/journey'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '경력 · 타임라인 | Heo Yeongju',
}

export default function JourneyPage() {
  return (
    <div className="relative min-h-svh">
      <Navbar />
      <main className="pt-16">
        <Journey />
      </main>
      <Footer />
    </div>
  )
}
