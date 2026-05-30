interface BadgeProps {
  romanNumeral: string
  className?: string
}

export default function DynastyBadge({ romanNumeral, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 border border-gold-deep/30 bg-chamber text-gold-mist text-meta rounded-sm select-none tracking-widest uppercase font-semibold text-[10px] ${className}`}
    >
      Dynasty {romanNumeral}
    </span>
  )
}
