'use client'

import { useState } from 'react'
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

  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 bg-void/85 backdrop-blur-md border-b border-dust flex items-center justify-between px-6 md:px-12 transition-all duration-300">
      {/* Left: Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <svg className="w-8 h-8 text-gold-true group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cartouche SVG outline */}
          <rect x="15" y="10" width="70" height="80" rx="35" stroke="currentColor" strokeWidth="2.5" />
          <line x1="30" y1="80" x2="70" y2="80" stroke="currentColor" strokeWidth="2" />
          {/* Hieroglyph symbols (Eye of Horus simplified shape or sun) */}
          <circle cx="50" cy="38" r="10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="38" r="3" fill="currentColor" />
          <line x1="40" y1="62" x2="60" y2="62" stroke="currentColor" strokeWidth="2" />
          <line x1="45" y1="54" x2="55" y2="54" stroke="currentColor" strokeWidth="2" />
        </svg>
        <span className="font-display text-2xl tracking-wider font-medium text-gold-pale group-hover:text-gold-true transition-colors duration-300">
          KEMET
        </span>
      </Link>

      {/* Center Navigation (Desktop) */}
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`font-sc-custom text-sm relative py-2 transition-colors duration-300 hover:text-gold-true ${isActive ? 'text-gold-true' : 'text-gold-mist'
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

      {/* Right: Era Indicator (Desktop) */}
      <div className="hidden md:block">
        {currentEra ? (
          <div className="border border-gold-deep/50 bg-tomb px-4 py-1.5 rounded-full flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-true animate-pulse" />
            <span className="font-sc-custom text-xs text-gold-mist tracking-widest">
              {currentEra.name}
            </span>
          </div>
        ) : (
          <div className="border border-dust bg-void px-4 py-1.5 rounded-full">
            <span className="font-sc-custom text-xs text-text-muted tracking-widest">
              Egypt
            </span>
          </div>
        )}
      </div>

      {/* Hamburger (Mobile) */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-gold-true hover:text-gold-rich focus:outline-none"
        aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-void/98 z-40 flex flex-col p-8 md:hidden border-t border-dust">
          <div className="flex flex-col gap-8 my-auto text-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-sc-custom text-xl tracking-wider transition-colors duration-300 py-3 ${isActive ? 'text-gold-true border-b border-gold-true/30' : 'text-gold-mist hover:text-gold-true'
                    }`}
                >
                  {link.name}
                </Link>
              )
            }
            )}

            {/* Mobile Era Indicator */}
            {currentEra && (
              <div className="mt-8 mx-auto border border-gold-deep bg-tomb px-6 py-2.5 rounded-full flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-gold-true animate-pulse" />
                <span className="font-sc-custom text-sm text-gold-pale tracking-widest">
                  {currentEra.name}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
