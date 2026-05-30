export default function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center w-full my-6 gap-4 select-none ${className}`}>
      {/* Left fading line */}
      <div className="flex-1 h-px bg-linear-to-r from-transparent via-gold-deep/30 to-gold-true/50" />

      {/* Center ornate diamond ornament */}
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 rotate-45 border border-gold-true bg-void shadow-[0_0_8px_rgba(201,148,58,0.3)]" />
        <div className="w-2.5 h-2.5 rotate-45 border border-gold-true bg-gold-true shadow-[0_0_12px_rgba(201,148,58,0.5)]" />
        <div className="w-1.5 h-1.5 rotate-45 border border-gold-true bg-void shadow-[0_0_8px_rgba(201,148,58,0.3)]" />
      </div>

      {/* Right fading line */}
      <div className="flex-1 h-px bg-linear-to-l from-transparent via-gold-deep/30 to-gold-true/50" />
    </div>
  )
}
