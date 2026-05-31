import type { Metadata } from 'next'
import { displayFont, scFont, bodyFont } from './fonts'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PageTransition from '../components/layout/PageTransition'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://hosnie.vercel.app/'),
  title: 'KEMET — An Interactive Encyclopedia of Ancient Egypt',
  description: 'A premium, cinematic exploration of historical eras, royal dynasties, priority pharaohs, and grand monuments of the Nile Valley.',
  keywords: 'Ancient Egypt, Kemet, Pharaohs, Dynasties, Pyramids, Nile Valley, History, Encyclopedia',

  openGraph: {
    title: 'KEMET — An Interactive Encyclopedia of Ancient Egypt',
    description: 'A premium, cinematic exploration of historical eras, royal dynasties, priority pharaohs, and grand monuments of the Nile Valley.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Kemet Encyclopedia',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'KEMET — An Interactive Encyclopedia of Ancient Egypt',
    description: 'A premium, cinematic exploration of historical eras, royal dynasties, priority pharaohs, and grand monuments of the Nile Valley.',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${scFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-void text-gold-pale select-text antialiased">
        {/* Interactive Header navigation */}
        <Header />

        {/* Main core view tracks */}
        <main className="grow pt-16 w-full overflow-x-hidden">
          <PageTransition>{children}</PageTransition>
        </main>

        {/* Minimal Egyptian Footer */}
        <Footer />
      </body>
    </html>
  )
}
