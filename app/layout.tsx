import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'eLLa 블로그 — AI 컴패니언과 함께하는 일상',
    template: '%s | eLLa 블로그',
  },
  description:
    'AI 친구, AI 음성통화, MBTI 매칭까지. eLLa와 함께하는 새로운 AI 컴패니언 경험을 블로그에서 만나보세요.',
  metadataBase: new URL('https://blog.meetella.app'),
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: 'eLLa 블로그',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3014495667992724"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b border-ella-dark-border sticky top-0 z-50 bg-ella-dark/80 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">eLLa</span>
              <span className="text-sm text-slate-400">Blog</span>
            </a>
            <nav className="flex items-center gap-4">
              <a
                href="/"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                홈
              </a>
              <a
                href="/about"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="https://start.meetella.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ella-purple-light hover:text-ella-purple transition-colors"
              >
                eLLa 시작하기
              </a>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-ella-dark-border py-8">
          <div className="max-w-4xl mx-auto px-4 text-center text-sm text-slate-500 space-y-2">
            <p>&copy; 2026 YuzuFam. All rights reserved.</p>
            <div className="flex justify-center gap-4">
              <a
                href="/terms"
                className="hover:text-slate-300 transition-colors"
              >
                이용약관
              </a>
              <a
                href="/privacy"
                className="hover:text-slate-300 transition-colors"
              >
                개인정보처리방침
              </a>
              <a
                href="/about"
                className="hover:text-slate-300 transition-colors"
              >
                About
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
