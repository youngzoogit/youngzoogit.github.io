import { Star, GitFork, GitCommitHorizontal, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { githubStats, pinnedRepos, latestCommits, site } from '@/lib/data'

export function GithubSection() {
  return (
    <section id="github" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading
        eyebrow="GitHub"
        title="공개적으로 만들어갑니다."
        description="제 활동을 한눈에 — 기여 현황, 고정된 프로젝트, 최근 작업까지."
      />

      <div className="mt-14 grid grid-cols-1 gap-4">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {githubStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05} className="min-w-0">
              <div className="min-w-0 rounded-2xl border border-border bg-card p-5">
                <div className="text-2xl font-semibold tracking-tight break-words sm:text-3xl">{stat.value}</div>
                <div className="mt-1 break-words font-mono text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Pinned repos */}
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-medium">고정된 저장소</h3>
              <div className="flex flex-col gap-3">
                {pinnedRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/40"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="min-w-0 truncate font-mono text-sm text-primary group-hover:underline">
                        {repo.name}
                      </span>
                      <ExternalLink className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{repo.description}</p>
                    <div className="mt-3 flex items-center gap-4 font-mono text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <span className="size-2.5 rounded-full bg-primary" />
                        {repo.language}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="size-3" /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="size-3" /> {repo.forks}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Latest commits */}
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-medium">최근 커밋</h3>
              <div className="flex flex-col">
                {latestCommits.map((commit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 border-b border-border py-3 last:border-0 last:pb-0 first:pt-0"
                  >
                    <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground">
                      <GitCommitHorizontal className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm">{commit.message}</p>
                      <div className="mt-0.5 flex min-w-0 items-center gap-2 font-mono text-[11px] text-muted-foreground">
                        <span className="min-w-0 truncate text-primary">{commit.repo}</span>
                        <span className="shrink-0">·</span>
                        <span className="shrink-0">{commit.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-5 w-full"
                render={<a href={site.github} target="_blank" rel="noreferrer" />}
              >
                전체 프로필 보기
                <ExternalLink className="size-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
