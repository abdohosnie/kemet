import Link from 'next/link'

export default function Footer() {
  return (
    // REMOVED: z-10 and relative to stop it from creating an overlapping layout layer
    <footer className="w-full bg-void border-t border-dust py-12 px-6 md:px-12 flex flex-col items-center gap-8">
      {/* Decorative Hieroglyph Strip */}
      <div className="flex items-center gap-6 text-gold-deep/40">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
        <div className="w-12 h-px bg-gold-deep/20" />
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 19L12 5L20 19H4Z" />
          <path d="M12 9L17 17.5H7L12 9Z" fill="currentColor" fillOpacity="0.1" />
        </svg>
        <div className="w-12 h-px bg-gold-deep/20" />
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M9 12H15" />
          <path d="M12 9V15" />
        </svg>
      </div>

      {/* Footer Nav */}
      <div className="flex gap-8 font-sc-custom text-xs text-gold-mist/60 hover:text-gold-mist">
        <Link href="/" className="hover:text-gold-true transition-colors duration-300">Home</Link>
        <Link href="/timeline" className="hover:text-gold-true transition-colors duration-300">Timeline</Link>
        <Link href="/gallery" className="hover:text-gold-true transition-colors duration-300">Gallery</Link>
      </div>

      {/* Editorial Copyright */}
      <div className="text-center max-w-md">
        <p className="font-display text-sm italic text-gold-mist/40">
          &quot;Kemet — The Black Land. Where the waters rose to nourish, and the stones rose to endure.&quot;
        </p>
        <p className="font-sc-custom text-[10px] text-text-muted mt-4 tracking-widest">
          © 2026 Kemet Encyclopedia. Crafted with supreme scholarship.
        </p>
      </div>
    </footer>
  )
}
