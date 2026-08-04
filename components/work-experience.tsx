import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { workExperience } from '@/lib/data'

export function WorkExperience() {
  return (
    <section id="work-experience" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading eyebrow="실무 경력" title="실무 경력" />

      <div className="mt-12 flex flex-col gap-4">
        {workExperience.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-2.5">
                {item.type ? (
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] text-primary">
                    {item.type}
                  </span>
                ) : null}
                <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                {item.company ? (
                  <>
                    <span className="text-border">·</span>
                    <span className="font-mono text-xs text-muted-foreground">{item.company}</span>
                  </>
                ) : null}
              </div>

              <h3 className="mt-3 text-lg font-medium sm:text-xl">{item.title}</h3>
              {item.target ? (
                <p className="mt-1 text-sm text-muted-foreground">대상: {item.target}</p>
              ) : null}

              {item.tech && item.tech.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              {item.problem ? (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">문제 </span>
                  {item.problem}
                </p>
              ) : null}

              <div className="mt-4">
                <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">담당</h4>
                <ul className="mt-2 space-y-1.5">
                  {item.role.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {item.result ? (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">결과 </span>
                  {item.result}
                </p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
