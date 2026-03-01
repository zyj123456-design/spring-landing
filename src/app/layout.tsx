import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '新春快乐 | 技术创新 · 马年新起点',
  description: '新春互动拜年，汇聚祝福传递温暖。探索我们的软件开发、智能工厂改造和数据主权理念，共庆马年新春，共创美好未来。',
  keywords: '春节, 新春, 拜年, 马年, 技术创新, AI, 智能制造, 数据主权, 祝福墙',
  authors: [{ name: '技术创新团队' }],
  creator: '技术创新团队',
  publisher: '技术创新团队',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://spring-landing.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '新春快乐 | 技术创新 · 马年新起点',
    description: '新春互动拜年，汇聚祝福传递温暖。探索我们的软件开发、智能工厂改造和数据主权理念，共庆马年新春，共创美好未来。',
    url: '/',
    siteName: 'Spring Festival Landing',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '新春快乐 - 技术创新马年新起点',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '新春快乐 | 技术创新 · 马年新起点',
    description: '新春互动拜年，汇聚祝福传递温暖。共庆马年新春，共创美好未来。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#DC2626' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '新春祝福'
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#C0272D',
  colorScheme: 'light dark',
};

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
