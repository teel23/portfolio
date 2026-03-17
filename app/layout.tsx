import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'C2T Builds | Developer Portfolio',
  description: 'Developer portfolio showcasing web applications and projects by C2T Builds.',
  keywords: ['developer', 'portfolio', 'web apps', 'software', 'C2T Builds'],
  openGraph: {
    title: 'C2T Builds | Developer Portfolio',
    description: 'Developer portfolio showcasing web applications and projects.',
    type: 'website',
    url: 'https://c2tbuilds.com',
    images: [
      {
        url: 'https://c2tbuilds.com/screenshots/darts-real.png',
        width: 1170,
        height: 2532,
        alt: 'C2T Builds — Developer Portfolio',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
