import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-void border-t border-dust/30 py-16 px-6 md:px-12 flex flex-col items-center gap-10">

      {/* 1. Fine-Line Geometric Hieroglyph Strip */}
      <div className="flex items-center gap-6 text-gold-deep/30">
        {/* Ra / Sun Disc Vector */}
        <svg className="w-5 h-5 transition-transform duration-700 hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
        <div className="w-16 h-px bg-linear-to-r from-transparent via-gold-deep/20 to-transparent" />

        {/* Benben / Pyramid Silhouette Vector */}
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path d="M4 19L12 4L20 19H4Z" />
          <path d="M12 8L16.5 19H7.5L12 8Z" fill="currentColor" fillOpacity="0.05" />
        </svg>
        <div className="w-16 h-px bg-linear-to-r from-transparent via-gold-deep/20 to-transparent" />

        {/* Unified Horizon Vector */}
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <rect x="3" y="6" width="18" height="12" rx="1" />
          <line x1="4" y1="12" x2="20" y2="12" strokeDasharray="2 2" />
          <path d="M12 8V16" />
        </svg>
      </div>

      {/* 2. Editorial Site Navigation Links */}
      <nav className="flex gap-10 font-sc-custom text-[11px] tracking-[0.18em] uppercase text-gold-mist/40">
        <Link href="/" className="hover:text-gold-true hover:drop-shadow-[0_0_8px_rgba(201,148,58,0.3)] transition-all duration-300">
          Home
        </Link>
        <Link href="/timeline" className="hover:text-gold-true hover:drop-shadow-[0_0_8px_rgba(201,148,58,0.3)] transition-all duration-300">
          Timeline
        </Link>
        <Link href="/gallery" className="hover:text-gold-true hover:drop-shadow-[0_0_8px_rgba(201,148,58,0.3)] transition-all duration-300">
          Gallery
        </Link>
      </nav>

      {/* 3. Literary Vignette & System Credentials */}
      <div className="text-center max-w-lg space-y-5">
        <p className="font-display text-sm italic text-gold-mist/35 leading-relaxed selection:bg-gold-true/10">
          &quot;Kemet — The Black Land. Where the waters rose to nourish, and the stones rose to endure.&quot;
        </p>

        <div className="flex flex-col items-center gap-1.5 pt-2 border-t border-dust/10 max-w-xs mx-auto">
          <p className="font-sc-custom text-[10px] text-text-muted tracking-[0.2em] uppercase">
            &copy; 2026 Kemet Encyclopedia
          </p>

          {/* Engineering attribution link pointing directly to your Vercel space */}
          <span className="font-sc-custom text-[9px] text-text-muted/60 tracking-[0.15em] normal-case">
            Engineered by{' '}
            <a
              href="https://hosnie.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-deep/80 hover:text-gold-true transition-colors duration-300 underline underline-offset-4 decoration-gold-deep/30 hover:decoration-gold-true"
            >
              Hosnie
            </a>
          </span>
        </div>
      </div>

    </footer>
  )
}
