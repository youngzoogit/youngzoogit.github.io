'use client'

import { motion } from 'motion/react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { timeline, experience } from '@/lib/data'

export function Journey() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Timeline */}
        <div>
          <SectionHeading eyebrow="타임라인" title="개발 여정." />
          <div className="relative mt-12 pl-8">
            <div className="absolute left-[7px] top-1 bottom-1 w-px bg-border" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.title + i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pb-9 last:pb-0"
              >
                <span className="absolute -left-8 top-1 grid size-4 place-items-center rounded-full border border-primary/40 bg-background">
                  <span className="size-2 rounded-full bg-primary" />
                </span>
                <div className="flex items-center gap-3">
                  <h3 className="font-medium">{item.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <SectionHeading eyebrow="경력" title="집중하는 영역." />
          <div className="mt-12 flex flex-col gap-3">
            {experience.map((exp, i) => (
              <Reveal key={exp.area} delay={i * 0.05}>
                <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-primary">0{i + 1}</span>
                    <h3 className="font-medium">{exp.area}</h3>
                  </div>
                  <p className="mt-2 pl-7 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
