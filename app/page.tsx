import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="relative min-h-svh">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  )
}
