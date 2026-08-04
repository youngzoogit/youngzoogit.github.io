'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Maximize2, X } from 'lucide-react'
import type { Screenshot } from '@/lib/data'

export function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [active, setActive] = useState<Screenshot | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((shot, i) => (
          <motion.button
            key={shot.title}
            type="button"
            onClick={() => setActive(shot)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="relative aspect-video overflow-hidden bg-background">
              <Image
                src={shot.image}
                alt={shot.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute left-3 top-3 rounded-full border border-border glass px-2 py-0.5 font-mono text-[10px] text-primary">
                {shot.category}
              </div>
              <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="grid size-12 place-items-center rounded-full border border-border glass text-foreground">
                  <Maximize2 className="size-5" />
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium">{shot.title}</h3>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {shot.description}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-background/80 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="스크린샷 닫기"
                className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full border border-border glass text-foreground transition-colors hover:bg-muted"
              >
                <X className="size-4" />
              </button>
              <div className="relative aspect-video w-full overflow-hidden bg-background">
                <Image src={active.image} alt={active.title} fill sizes="768px" className="object-contain" />
              </div>
              <div className="p-6">
                <div className="mb-2 inline-flex rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] text-primary">
                  {active.category}
                </div>
                <h3 className="text-xl font-semibold">{active.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{active.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
