import type { Metadata } from 'next'
import { Jura, Oswald } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const jura = Jura({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['600', '700'],
})

export const metadata: Metadata = {
  title: 'UA iGEM  Wiki',
  description: 'UA iGEM wiki for the 2025 - 2026 season',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jura.variable} ${oswald.variable}`}>
      <body className="flex min-h-screen flex-col">
        <div className="bacterial-bg flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
