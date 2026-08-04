'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { ProjectMedia } from '@/components/project-media'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading eyebrow="프로젝트" title="AI·백엔드 확장 프로젝트" />

      <div className="mt-14 flex flex-col gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative grid gap-8 rounded-3xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12"
          >
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary">
                  {project.accent}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {project.type === '팀' ? `팀 프로젝트 (${project.memberCount}인)` : '개인 프로젝트'}
                </span>
                <span className="text-border">·</span>
                <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{project.tagline}</p>

              <div className="mt-5">
                <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">주요 기능</h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs text-foreground/80"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">본인 담당</h4>
                <ul className="mt-2 flex flex-col gap-1">
                  {project.myRole.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-[11px] text-muted-foreground">
                    {t}
                    <span className="px-1 text-border">/</span>
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                <Button size="sm" render={<Link href={`/projects/${project.slug}`} />}>
                  케이스 스터디
                  <ArrowUpRight className="size-4" />
                </Button>
                {project.links.live ? (
                  <Button size="sm" variant="outline" render={<a href={project.links.live} target="_blank" rel="noreferrer" />}>
                    <ExternalLink className="size-4" />
                    라이브 데모
                  </Button>
                ) : null}
                {project.links.github ? (
                  <Button size="sm" variant="ghost" render={<a href={project.links.github} target="_blank" rel="noreferrer" />}>
                    <GithubIcon className="size-4" />
                    GitHub
                  </Button>
                ) : null}
              </div>
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className={`block ${i % 2 === 1 ? 'lg:order-1' : ''}`}
              aria-label={`${project.name} 케이스 스터디 보기`}
            >
              <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
                <ProjectMedia project={project} className="shadow-2xl shadow-black/40" />
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
