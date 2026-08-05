'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DetailNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex h-12 max-w-5xl items-center justify-between rounded-2xl border border-border glass px-3 shadow-lg shadow-black/20 sm:mx-6 md:mx-auto md:px-4">
        <Button variant="ghost" size="sm" render={<Link href="/projects" />}>
          <ArrowLeft className="size-4" />
          전체 프로젝트
        </Button>
        <Link href="/" className="font-mono text-xs font-semibold tracking-tight">
          HEO YEONGJU
        </Link>
      </div>
    </header>
  )
}
