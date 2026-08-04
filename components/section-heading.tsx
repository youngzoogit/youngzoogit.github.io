import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <Reveal className={cn(align === 'center' && 'text-center', className)}>
      <div className={cn('flex items-center gap-2.5', align === 'center' && 'justify-center')}>
        <span className="size-1.5 rounded-full bg-primary" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
