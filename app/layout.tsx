import type { Metadata } from 'next'
import { displayFont, scFont, bodyFont } from './fonts'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PageTransition from '../components/layout/PageTransition'
import './globals.css'

export const metadata: Metadata = {
  title: 'KEMET — An Interactive Encyclopedia of Ancient Egypt',
  description: 'A premium, cinematic exploration of historical eras, royal dynasties, priority pharaohs, and grand monuments of the Nile Valley.',
  keywords: 'Ancient Egypt, Kemet, Pharaohs, Dynasties, Pyramids, Nile Valley, History, Encyclopedia',
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
      {/* min-h-screen guarantees the page is at least full height.
        flex flex-col lets us control vertical flow cleanly.
      */}
      <body className="min-h-screen flex flex-col bg-void text-gold-pale select-text antialiased">
        {/* Interactive Header navigation */}
        <Header />

        {/* CLEANED MAIN:
          - Removed 'flex-1' and 'flex-col' so it doesn't aggressively stretch or warp inner divs.
          - Added 'flex-grow' so it pushes the footer to the bottom if content is short.
          - Removed 'relative z-10' so it respects normal layout rules.
        */}
        <main className="grow pt-16 w-full overflow-x-hidden">
          <PageTransition>{children}</PageTransition>
        </main>

        {/* Minimal Egyptian Footer (Make sure to remove z-10/relative from inside Footer component too!) */}
        <Footer />
      </body>
    </html>
  )
}
