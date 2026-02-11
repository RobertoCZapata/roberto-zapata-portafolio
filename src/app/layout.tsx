import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Roberto Carlos Zapata - Senior Frontend Developer',
  description: 'Senior Frontend Developer especializado en React, Next.js, TypeScript y Testing. Con experiencia en TicketMaster @ Globant. Testing Expert con Jest, Playwright y Cypress.',
  keywords: ['Roberto Zapata', 'Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Jest', 'Playwright', 'TicketMaster', 'Globant'],
  authors: [{ name: 'Roberto Carlos Zapata' }],
  creator: 'Roberto Carlos Zapata',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://roberto-zapata.vercel.app',
    title: 'Roberto Carlos Zapata - Senior Frontend Developer',
    description: 'Senior Frontend Developer con 6+ años de experiencia. Especialista en React, Testing y English Proficient.',
    siteName: 'Roberto Zapata Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roberto Carlos Zapata - Senior Frontend Developer',
    description: 'Senior Frontend Developer con experiencia en React, Next.js, TypeScript y Testing Expert',
    creator: '@robertoczapata',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <main>{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
