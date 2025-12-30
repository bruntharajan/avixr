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
  metadataBase: new URL('https://avixr.com'),
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
        url: '/avixrlogo.png',
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
    images: ['/avixrlogo.png'],
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
    // Add your Google Search Console verification code here when you get it
    // google: 'your-google-verification-code',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

