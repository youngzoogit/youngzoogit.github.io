import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { skillGroups } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading
        eyebrow="기술"
        title="실무와 프로젝트에서 사용한 기술."
        description="실무에서 오래 다룬 기술과, 최근 프로젝트에서 새로 익힌 기술을 구분해 정리했습니다."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.name} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{group.name}</h3>
                <span className="font-mono text-xs text-muted-foreground">{group.skills.length}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
