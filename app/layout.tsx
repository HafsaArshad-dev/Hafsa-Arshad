import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  title: 'Hafsa Arshad - Python Developer & Generative AI Enthusiast',
  description: 'Portfolio of Hafsa Arshad, a passionate Python Developer, Generative AI enthusiast, and Creative Technologist based in Faisalabad, Pakistan.',
  keywords: 'Hafsa Arshad, Python Developer, Generative AI, OpenAI, Cloud Computing, Creative Technologist, Portfolio',
  authors: [{ name: 'Hafsa Arshad' }],
  creator: 'Hafsa Arshad',
  publisher: 'Hafsa Arshad',
  robots: 'index, follow',
  metadataBase: new URL('https://hafsaarshad.dev'),
  verification: googleVerification ? { google: googleVerification } : undefined,
  openGraph: {
    title: 'Hafsa Arshad - Python Developer & Generative AI Enthusiast',
    description: 'Portfolio of Hafsa Arshad, a passionate Python Developer, Generative AI enthusiast, and Creative Technologist.',
    url: 'https://hafsaarshad.dev',
    siteName: 'Hafsa Arshad Portfolio',
    images: [
      {
        url: `${basePath}/logo.png`,
        width: 1200,
        height: 630,
        alt: 'Hafsa Arshad Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hafsa Arshad - Python Developer & Generative AI Enthusiast',
    description: 'Portfolio of Hafsa Arshad, a passionate Python Developer, Generative AI enthusiast, and Creative Technologist.',
    images: [`${basePath}/logo.png`],
  },
  manifest: `${basePath}/site.webmanifest`,
  icons: {
    icon: [
      { url: `${basePath}/logo.png`, sizes: '32x32', type: 'image/png' },
      { url: `${basePath}/logo.png`, sizes: '192x192', type: 'image/png' },
    ],
    shortcut: `${basePath}/logo.png`,
    apple: `${basePath}/logo.png`,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#b8a5ff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://hafsaarshad.dev" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
