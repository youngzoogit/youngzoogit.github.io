'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ArrowRight, Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { archNodes, type ArchNode } from '@/lib/data'

export function Architecture() {
  const [active, setActive] = useState<ArchNode | null>(null)

  return (
    <section id="architecture" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading
        eyebrow="아키텍처"
        title="현장부터 AI까지, 시스템을 연결합니다."
        description="현장 장비에서 발생한 데이터를 업무 시스템과 데이터베이스에 연결하고, 필요한 영역에 백엔드 API와 AI 기능을 적용하는 구조를 이해합니다."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {archNodes.map((node, i) => (
          <motion.button
            key={node.id}
            type="button"
            onClick={() => setActive(node)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="mt-1 text-lg font-medium">{node.label}</h3>
                <p className="mt-0.5 truncate font-mono text-xs text-muted-foreground">{node.tech}</p>
              </div>
              <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                <ArrowRight className="size-4" />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 260 }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-md overflow-y-auto border-l border-border bg-card p-6 shadow-2xl shadow-black/50 sm:p-8"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-mono text-xs text-primary">{active.tech}</div>
                  <h3 className="mt-1 text-2xl font-semibold">{active.label}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="패널 닫기"
                  className="grid size-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
                >
                  <X className="size-4" />
                </button>
              </div>

              <p className="mt-5 leading-relaxed text-muted-foreground">{active.purpose}</p>

              <div className="mt-7">
                <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  주요 역할
                </h4>
                <ul className="mt-3 space-y-2">
                  {active.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  경험한 내용
                </h4>
                <ul className="mt-3 space-y-2">
                  {active.advantages.map((a) => (
                    <li key={a} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
