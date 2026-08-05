'use client'

import { motion } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { archNodes } from '@/lib/data'

export function Architecture() {
  return (
    <section id="architecture" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading
        eyebrow="아키텍처"
        title="현장부터 AI까지, 시스템을 연결합니다."
        description="현장 장비에서 발생한 데이터를 업무 시스템과 데이터베이스에 연결하고, 필요한 영역에 백엔드 API와 AI 기능을 적용하는 구조를 이해합니다."
      />

      {/* Flow diagram — the whole pipeline at a glance */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="mt-10 overflow-x-auto"
      >
        <div className="flex min-w-max items-center gap-2 sm:min-w-0 sm:justify-between">
          {archNodes.map((node, i) => (
            <div key={node.id} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-0.5 rounded-xl border border-border bg-card px-4 py-3 text-center">
                <span className="font-mono text-[10px] text-primary">{String(i + 1).padStart(2, '0')}</span>
                <span className="whitespace-nowrap text-sm font-medium">{node.label}</span>
              </div>
              {i < archNodes.length - 1 ? (
                <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
              ) : null}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Detail reference — every stage's role and experience, no click needed */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card"
      >
        {archNodes.map((node, i) => (
          <div key={node.id} className="grid gap-4 p-5 sm:grid-cols-[200px_1fr] sm:p-6">
            <div>
              <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-1 text-base font-medium">{node.label}</h3>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">{node.tech}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{node.purpose}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  주요 역할
                </h4>
                <ul className="mt-1.5 space-y-1">
                  {node.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-1.5 text-xs leading-relaxed">
                      <span className="mt-1 size-1 shrink-0 rounded-full bg-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  경험한 내용
                </h4>
                <ul className="mt-1.5 space-y-1">
                  {node.advantages.map((a) => (
                    <li key={a} className="flex items-start gap-1.5 text-xs leading-relaxed">
                      <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
