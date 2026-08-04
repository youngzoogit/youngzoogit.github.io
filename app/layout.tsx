import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Heo Yeongju — Manufacturing IT · Backend · Applied AI',
  description:
    '약 3년간 MES·WMS 및 제조 업무 시스템을 개발하고 운영한 백엔드 개발자 Heo Yeongju의 포트폴리오입니다. 현장 경험을 바탕으로 Spring Boot·FastAPI·React와 AI 기술까지 역량을 넓히고 있습니다.',
  generator: 'v0.app',
  keywords: ['제조 IT', 'MES', 'WMS', '백엔드 개발자', 'C# WinForms', 'Spring Boot', 'AI 개발자', 'LLM 애플리케이션'],
  openGraph: {
    title: 'Heo Yeongju — Manufacturing IT · Backend · Applied AI',
    description: '제조 현장을 이해하고, 시스템과 AI를 연결합니다.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
