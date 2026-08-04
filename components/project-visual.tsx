import { cn } from '@/lib/utils'

// A stylized browser/app mockup rendered purely with markup — no placeholder images.
export function ProjectVisual({ name, category, className }: { name: string; category: string; className?: string }) {
  return (
    <div className={cn('relative overflow-hidden rounded-xl border border-border bg-background', className)}>
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative flex items-center gap-1.5 border-b border-border bg-card/60 px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-2 truncate rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          {name.toLowerCase().replace(/\s+/g, '-')}.app
        </span>
      </div>
      <div className="relative flex gap-3 p-4">
        <div className="hidden w-24 shrink-0 flex-col gap-2 sm:flex">
          <div className="h-6 rounded-md bg-primary/20" />
          <div className="h-3 w-4/5 rounded bg-muted" />
          <div className="h-3 w-3/5 rounded bg-muted" />
          <div className="h-3 w-4/5 rounded bg-muted" />
          <div className="mt-auto h-3 w-2/3 rounded bg-muted" />
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-4 w-1/3 rounded bg-foreground/20" />
            <div className="h-6 w-16 rounded-md bg-primary" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-border bg-card p-2">
              <div className="h-2 w-8 rounded bg-muted" />
              <div className="mt-2 h-4 w-10 rounded bg-primary/40" />
            </div>
            <div className="rounded-lg border border-border bg-card p-2">
              <div className="h-2 w-8 rounded bg-muted" />
              <div className="mt-2 h-4 w-8 rounded bg-foreground/20" />
            </div>
            <div className="rounded-lg border border-border bg-card p-2">
              <div className="h-2 w-8 rounded bg-muted" />
              <div className="mt-2 h-4 w-9 rounded bg-foreground/20" />
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-3">
            <div className="mb-2 flex items-end gap-1.5">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-primary/60" style={{ height: `${h * 0.5}px` }} />
              ))}
            </div>
            <div className="h-2 w-1/4 rounded bg-muted" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute right-3 top-11 rounded-full border border-border glass px-2 py-0.5 font-mono text-[10px] text-primary">
        {category}
      </div>
    </div>
  )
}
