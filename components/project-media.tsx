'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ProjectVisual } from '@/components/project-visual'
import type { Project } from '@/lib/data'

// Shows the project's first screenshot as a poster, and on hover plays a
// muted, looping demo video in its place — a GIF-style preview without the
// file-size cost of an actual GIF.
export function ProjectMedia({ project, className }: { project: Project; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const poster = project.screenshots?.[0]?.image

  if (!poster) {
    return <ProjectVisual name={project.name} category={project.category} className={className} />
  }

  return (
    <div
      className={cn('relative aspect-video overflow-hidden rounded-xl border border-border bg-background', className)}
      onMouseEnter={() => {
        setIsHovering(true)
        // play() returns a promise that rejects with AbortError if pause()
        // fires before it resolves (e.g. a quick mouse in/out) — expected, ignore it.
        videoRef.current?.play().catch(() => {})
      }}
      onMouseLeave={() => {
        setIsHovering(false)
        const v = videoRef.current
        if (!v) return
        v.pause()
        v.currentTime = 0
      }}
    >
      <Image
        src={poster}
        alt={project.name}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-contain"
      />
      {project.video ? (
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="none"
          style={{ opacity: isHovering ? 1 : 0 }}
          className="absolute inset-0 size-full object-contain transition-opacity duration-300"
        />
      ) : null}
      <div className="pointer-events-none absolute right-3 top-3 rounded-full border border-border glass px-2 py-0.5 font-mono text-[10px] text-primary">
        {project.category}
      </div>
    </div>
  )
}
