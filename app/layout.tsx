import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Avixr Technologies - Digital Solutions & Software Development',
    template: '%s | Avixr Technologies'
  },
  description: 'Avixr Technologies Pvt Ltd is a research-driven software company specializing in transforming visionary ideas into top-tier mobile and web solutions. Expert development services with cutting-edge technologies.',
  keywords: ['software development', 'web development', 'mobile app development', 'digital solutions', 'custom software', 'Avixr Technologies', 'software company'],
  authors: [{ name: 'Avixr Technologies' }],
  creator: 'Avixr Technologies Pvt Ltd',
  publisher: 'Avixr Technologies Pvt Ltd',
  metadataBase: new URL('https://www.avixr.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.avixr.in',
    siteName: 'Avixr Technologies',
    title: 'Avixr Technologies - Digital Solutions & Software Development',
    description: 'Transforming visionary ideas into top-tier mobile and web solutions. Expert software development with cutting-edge technologies.',
    images: [
      {
        url: '/avixr-wings-logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Avixr Technologies Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avixr Technologies - Digital Solutions & Software Development',
    description: 'Transforming visionary ideas into top-tier mobile and web solutions.',
    images: ['/avixr-wings-logo.jpeg'],
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
  verification: {
    google: 'ETp8iTrTPnGNRys4HRlNgVe_3klk5E91sbIkhO3g8W4',
  },
  icons: {
    icon: [
      { url: '/avixr-wings-logo.jpeg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/avixr-wings-logo.jpeg', sizes: '16x16', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/avixr-wings-logo.jpeg', sizes: '180x180', type: 'image/jpeg' },
    ],
    shortcut: '/avixr-wings-logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/avixr-wings-logo.jpeg" type="image/jpeg" sizes="32x32" />
        <link rel="icon" href="/avixr-wings-logo.jpeg" type="image/jpeg" sizes="16x16" />
        <link rel="apple-touch-icon" href="/avixr-wings-logo.jpeg" sizes="180x180" />
        <link rel="shortcut icon" href="/avixr-wings-logo.jpeg" type="image/jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

