import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowUpRight,
  ExternalLink,
  Play,
  Target,
  Lightbulb,
  ListChecks,
  Wrench,
  GraduationCap,
  Layers,
  Users,
  BarChart3,
} from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { DetailNav } from '@/components/detail-nav'
import { ProjectVisual } from '@/components/project-visual'
import { ScreenshotGallery } from '@/components/screenshot-gallery'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/data'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: '프로젝트를 찾을 수 없습니다' }
  return {
    title: `${project.name} — 케이스 스터디 | Heo Yeongju`,
    description: project.overview,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <div className="relative min-h-svh">
      <DetailNav />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-32 pb-16 sm:px-6 md:pt-40">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -top-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary">
                {project.accent}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {project.category} · {project.period}
              </span>
              <span className="text-border">·</span>
              <span className="font-mono text-xs text-muted-foreground">
                {project.type === '팀' ? `팀 프로젝트 (${project.memberCount}인)` : '개인 프로젝트'}
              </span>
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {project.tagline}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.links.live ? (
                <Button render={<a href={project.links.live} target="_blank" rel="noreferrer" />}>
                  <ExternalLink className="size-4" />
                  라이브 데모
                </Button>
              ) : null}
              {project.links.github ? (
                <Button variant="outline" render={<a href={project.links.github} target="_blank" rel="noreferrer" />}>
                    <GithubIcon className="size-4" />
                  GitHub
                </Button>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            {project.screenshots?.[0] ? (
              <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-background shadow-2xl shadow-black/50">
                <Image
                  src={project.screenshots[0].image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  priority
                  className="object-contain"
                />
              </div>
            ) : (
              <ProjectVisual name={project.name} category={project.category} className="shadow-2xl shadow-black/50" />
            )}
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Overview */}
        <Section id="overview" title="프로젝트 개요">
          <p className="text-lg leading-relaxed text-muted-foreground">{project.overview}</p>
        </Section>

        {/* Demo video */}
        {project.video ? (
          <Section id="demo" title="데모 영상">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-background">
              <video
                src={project.video}
                poster={project.screenshots?.[0]?.image}
                controls
                preload="metadata"
                className="size-full object-contain"
              />
            </div>
          </Section>
        ) : !project.screenshots ? (
          <Section id="demo" title="데모 영상">
            <div className="relative grid aspect-video place-items-center overflow-hidden rounded-2xl border border-border bg-background">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[90px]" />
              <div className="relative flex flex-col items-center gap-3">
                <span className="grid size-16 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105">
                  <Play className="size-7 translate-x-0.5" fill="currentColor" />
                </span>
                <p className="font-mono text-xs text-muted-foreground">{project.name} 워크스루 영상 보기</p>
              </div>
            </div>
          </Section>
        ) : null}

        {/* Problem & Solution */}
        <Section id="problem" title="문제" icon={<Target className="size-5 text-primary" />}>
          <p className="text-lg leading-relaxed text-muted-foreground">{project.problem}</p>
        </Section>

        <Section id="solution" title="해결" icon={<Lightbulb className="size-5 text-primary" />}>
          <p className="text-lg leading-relaxed text-muted-foreground">{project.solution}</p>
        </Section>

        {/* My role */}
        <Section id="my-role" title="본인 담당 영역" icon={<Users className="size-5 text-primary" />}>
          {project.type === '팀' ? (
            <p className="mb-4 text-sm text-muted-foreground">
              아래 항목은 {project.memberCount}인 팀 프로젝트에서 본인이 직접 담당한 영역입니다. 프로젝트 전체
              기능은 위 "주요 기능"을 참고해주세요.
            </p>
          ) : null}
          <div className="grid gap-3 sm:grid-cols-2">
            {project.myRole.map((r) => (
              <div key={r} className="rounded-xl border border-border bg-card p-5">
                <div className="size-2 rounded-full bg-primary" />
                <p className="mt-3 text-sm leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Architecture note */}
        <Section id="architecture" title="아키텍처" icon={<Layers className="size-5 text-primary" />}>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.tech.map((t, i) => (
              <div key={t} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Features */}
        <Section id="features" title="주요 기능" icon={<ListChecks className="size-5 text-primary" />}>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.features.map((f) => (
              <div key={f} className="rounded-xl border border-border bg-card p-5">
                <div className="size-2 rounded-full bg-primary" />
                <p className="mt-3 font-medium">{f}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section id="process" title="개발 과정" icon={<Wrench className="size-5 text-primary" />}>
          <div className="relative pl-8">
            <div className="absolute left-[7px] top-1 bottom-1 w-px bg-border" />
            {project.process.map((step, i) => (
              <div key={i} className="relative pb-6 last:pb-0">
                <span className="absolute -left-8 top-1 grid size-4 place-items-center rounded-full border border-primary/40 bg-background">
                  <span className="size-2 rounded-full bg-primary" />
                </span>
                <p className="leading-relaxed text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Results */}
        <Section id="results" title="결과 및 검증" icon={<BarChart3 className="size-5 text-primary" />}>
          <p className="text-lg leading-relaxed text-muted-foreground">{project.results}</p>
        </Section>

        {/* Challenges */}
        <Section id="challenges" title="기술적 난제" icon={<Target className="size-5 text-primary" />}>
          <div className="flex flex-col gap-3">
            {project.challenges.map((c, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <p className="leading-relaxed text-muted-foreground">{c}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Lessons */}
        <Section id="lessons" title="배운 점" icon={<GraduationCap className="size-5 text-primary" />}>
          <div className="grid gap-3 sm:grid-cols-3">
            {project.lessons.map((l, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <div className="font-mono text-xs text-primary">0{i + 1}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Tech stack */}
        <Section id="tech" title="기술 스택" icon={<Layers className="size-5 text-primary" />}>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground/80">
                {t}
              </span>
            ))}
          </div>
        </Section>

        {/* Gallery */}
        <Section id="gallery" title="갤러리">
          {project.screenshots ? (
            <ScreenshotGallery screenshots={project.screenshots} />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {Array.from({ length: project.gallery }).map((_, i) => (
                <ProjectVisual key={i} name={`${project.name} ${i + 1}`} category={project.category} />
              ))}
            </div>
          )}
        </Section>
      </div>

      {/* Related */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">관련 프로젝트</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/projects/${r.slug}`}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{r.period}</span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{r.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

function Section({
  id,
  title,
  icon,
  children,
}: {
  id: string
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section id={id} className="border-t border-border py-11 first:border-0">
      <Reveal>
        <div className="mb-6 flex items-center gap-3">
          {icon}
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        </div>
        {children}
      </Reveal>
    </section>
  )
}
