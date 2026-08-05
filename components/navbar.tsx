'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Button } from '@/components/ui/button'
import { navLinks, site } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'mx-auto flex h-16 max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6',
          scrolled && 'h-14',
        )}
      >
        <div
          className={cn(
            'pointer-events-none absolute inset-x-3 top-2 -z-10 h-12 rounded-2xl border border-transparent transition-all duration-300 sm:inset-x-4',
            scrolled && 'glass border-border shadow-lg shadow-black/20',
          )}
        />
        <Link href="/" className="group flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">
            H
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight">HEO YEONGJU</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground',
                pathname === link.href && 'text-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="sm" render={<a href={site.github} target="_blank" rel="noreferrer" />}>
            <GithubIcon className="size-4" />
            GitHub
          </Button>
        </div>

        <button
          type="button"
          aria-label="메뉴 토글"
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-3 mt-1 overflow-hidden rounded-2xl border border-border glass p-2 shadow-xl shadow-black/30 lg:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
                    pathname === link.href && 'bg-muted text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 p-1">
                <Button variant="outline" size="sm" className="w-full" render={<a href={site.github} target="_blank" rel="noreferrer" />}>
                  <GithubIcon className="size-4" />
                  GitHub
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
