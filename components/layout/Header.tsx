'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useStore } from '../../lib/store'
import { eras } from '../../data/eras'

export default function Header() {
  const pathname = usePathname()
  const { activeEra } = useStore()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Find currently active era object
  const currentEra = eras.find((e) => e.id === activeEra)

  const navLinks = [
    { name: 'Timeline', href: '/timeline' },
    { name: 'Gallery', href: '/gallery' },
  ]

  // Lock background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    // Cleanup function to prevent locking body scroll if component unmounts unexpectedly
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 z-50 bg-void/80 backdrop-blur-md border-b border-dust/30 flex items-center justify-between px-6 md:px-12 select-none transition-all duration-300">

        {/* Left: Logo Composition */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          <svg className="w-7 h-7 text-gold-true group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="10" width="70" height="80" rx="35" stroke="currentColor" strokeWidth="2.5" />
            <line x1="30" y1="80" x2="70" y2="80" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="38" r="10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="38" r="3" fill="currentColor" />
            <line x1="40" y1="62" x2="60" y2="62" stroke="currentColor" strokeWidth="2" />
            <line x1="45" y1="54" x2="55" y2="54" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="font-display text-xl tracking-widest font-medium text-gold-pale group-hover:text-gold-true transition-colors duration-300">
            KEMET
          </span>
        </Link>

        {/* Center Navigation (Desktop Layout) */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sc-custom text-xs tracking-widest relative py-1 transition-colors duration-300 hover:text-gold-true ${isActive ? 'text-gold-true' : 'text-gold-mist/60'
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gold-true" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right: Status Era Badging (Desktop Layout) */}
        <div className="hidden md:block">
          {currentEra ? (
            <div className="border border-gold-deep/40 bg-tomb/50 px-4 py-1.5 rounded-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-true animate-pulse" />
              <span className="font-sc-custom text-[10px] text-gold-mist tracking-widest uppercase">
                {currentEra.name}
              </span>
            </div>
          ) : (
            <div className="border border-dust/30 bg-void px-4 py-1.5 rounded-sm">
              <span className="font-sc-custom text-[10px] text-text-muted tracking-widest uppercase">
                Egypt
              </span>
            </div>
          )}
        </div>

        {/* Interactive Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gold-true hover:text-gold-rich focus:outline-none z-50 p-1"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Fullscreen Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-void/98 backdrop-blur-lg z-40 md:hidden flex flex-col justify-between pt-24 pb-12 px-6 border-b border-dust/20 transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        {/* Nav Link Stack Frame */}
        <nav className="flex flex-col gap-5 mt-12 w-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-sc-custom text-lg tracking-[0.2em] uppercase text-center py-4 rounded-sm transition-all duration-300 ${isActive
                  ? 'text-gold-true bg-gold-true/5 border border-gold-deep/30'
                  : 'text-gold-mist/70 hover:text-gold-true border border-transparent'
                  }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Lower Drawer Meta Flag */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-px bg-linear-to-r from-transparent via-dust/30 to-transparent" />
          {currentEra ? (
            <div className="border border-gold-deep/40 bg-tomb/40 px-5 py-2 rounded-sm flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-true animate-pulse" />
              <span className="font-sc-custom text-xs text-gold-pale tracking-widest uppercase">
                {currentEra.name}
              </span>
            </div>
          ) : (
            <span className="font-sc-custom text-[10px] text-text-muted tracking-[0.25em] uppercase">
              Kemet Encyclopedia
            </span>
          )}
        </div>
      </div>
    </>
  )
}
