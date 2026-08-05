'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useMotionTemplate } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Button } from '@/components/ui/button'
import { Particles } from '@/components/particles'
import { floatingTech, site } from '@/lib/data'

const positions = [
  'left-[6%] top-[24%]',
  'right-[8%] top-[18%]',
  'left-[12%] bottom-[22%]',
  'right-[10%] bottom-[26%]',
  'left-[3%] top-[54%]',
  'right-[4%] top-[50%]',
  'left-[22%] top-[12%]',
  'right-[24%] bottom-[12%]',
  'left-[30%] bottom-[8%]',
  'right-[30%] top-[8%]',
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const glow = useMotionTemplate`radial-gradient(600px circle at ${mx}px ${my}px, oklch(0.62 0.19 259 / 0.12), transparent 70%)`

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-svh items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <Particles className="absolute inset-0" />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      {/* Floating tech icons */}
      {floatingTech.map((tech, i) => (
        <motion.span
          key={tech}
          className={`pointer-events-none absolute z-0 hidden whitespace-nowrap rounded-full border border-border glass px-3 py-1.5 font-mono text-xs text-muted-foreground md:block ${positions[i]}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.4 + i * 0.05 },
            y: { duration: 4 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 },
          }}
        >
          {tech}
        </motion.span>
      ))}

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1.5"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs text-muted-foreground">새로운 기회를 찾고 있습니다</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-mono text-sm text-muted-foreground"
        >
          안녕하세요, 저는
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-2 text-balance text-5xl font-semibold tracking-tight text-glow sm:text-7xl md:text-8xl"
        >
          HEO YEONGJU
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground"
        >
          Manufacturing IT · Backend · Applied AI
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-balance text-xl font-medium text-primary sm:text-2xl"
        >
          제조 현장을 이해하고,
          <br />
          시스템과 AI를 연결합니다.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground"
        >
          약 3년간 MES·WMS 및 제조 업무 시스템을 개발하고 운영했습니다. 현장 장비와 데이터 흐름을 이해한
          경험을 바탕으로 Spring Boot·FastAPI·React와 AI 기술까지 역량을 확장하고 있습니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button size="lg" render={<Link href="/projects" />}>
            프로젝트 보기
            <ArrowRight className="size-4" />
          </Button>
          <Button size="lg" variant="ghost" render={<a href={site.github} target="_blank" rel="noreferrer" />}>
            <GithubIcon className="size-4" />
            GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
