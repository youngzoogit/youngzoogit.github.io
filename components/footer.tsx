import Link from 'next/link'
import { Mail } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { navLinks, site } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <Link href="#home" className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">
              H
            </span>
            <span className="font-mono text-sm font-semibold tracking-tight">HEO YEONGJU</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            제조 현장을 이해하고, 시스템과 AI를 연결하는 백엔드 개발자입니다.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-2">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="이메일"
            className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Heo Yeongju. 모든 권리 보유.
          </p>
          <p className="font-mono text-xs text-muted-foreground">정성을 담아 디자인하고 만들었습니다.</p>
        </div>
      </div>
    </footer>
  )
}
