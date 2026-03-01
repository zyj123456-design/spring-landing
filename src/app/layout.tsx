import type { Metadata } from 'next'
import './globals.css'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata: Metadata = {
  title: 'INK FUTURE | Year of the Horse',
  description: 'Where ancient Chinese ink aesthetics meet modern engineering precision.',
  keywords: 'ink, future, design, chinese, modern, ui, ux',
  authors: [{ name: 'INK FUTURE' }],
  creator: 'INK FUTURE',
  publisher: 'INK FUTURE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ink-future.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'INK FUTURE | Year of the Horse',
    description: 'Where ancient Chinese ink aesthetics meet modern engineering precision.',
    url: '/',
    siteName: 'INK FUTURE',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'INK FUTURE - Year of the Horse',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INK FUTURE | Year of the Horse',
    description: 'Where ancient Chinese ink aesthetics meet modern engineering precision.',
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
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#dc2626' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'INK FUTURE'
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0f',
  colorScheme: 'dark light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="noise-overlay min-h-screen">
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
