import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { aboutPoints } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="소개"
            title="제조 현장의 경험을 시스템과 AI로 확장합니다."
            description="약 3년간 MES·WMS 및 제조 업무 시스템을 개발하며 현장 장비와 데이터 흐름을 이해했습니다. 요구사항 분석부터 설계, 개발, 배포, 사용자 교육까지 직접 수행한 경험을 바탕으로, 지금은 Spring Boot·FastAPI·React와 AI 기술까지 역량을 확장하고 있습니다."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <div className="mb-3 font-mono text-xs text-primary">0{i + 1}</div>
                <h3 className="text-lg font-medium">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
