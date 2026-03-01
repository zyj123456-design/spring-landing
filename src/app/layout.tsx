import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '春节快乐 - 技术创新新起点',
  description: '新春互动拜年，探索我们的技术能力',
  keywords: '春节, 拜年, 技术创新, AI, 智能制造, 数据主权',
  authors: [{ name: '技术团队' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}
