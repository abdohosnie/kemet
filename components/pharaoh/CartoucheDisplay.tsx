interface CartoucheProps {
  prenomen: string
  nomen: string
  id: string // 👈 Matches your data property model
}

// 1. Destructure 'id' directly from the props, and give it a safe fallback string
export default function CartoucheDisplay({ prenomen, nomen, id = '' }: CartoucheProps) {

  // 2. Pass 'id' safely here
  const renderGlyphSequence = (pharaohId: string) => {
    // A quick check to safeguard against undefined values blowing up the layout engine
    if (!pharaohId) return renderPlaceholder()

    switch (pharaohId.toLowerCase()) {
      case 'narmer':
        return (
          <g stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M35 55 C35 40, 65 40, 65 55 C65 65, 55 65, 50 65 L35 65" />
            <path d="M60 52 L68 50 M60 56 L68 58" />
            <path d="M42 120 L58 120 L54 165 L46 165 Z" fill="currentColor" fillOpacity="0.1" />
            <rect x="44" y="165" width="12" height="18" rx="1" fill="currentColor" />
          </g>
        )

      case 'cleopatra-vii':
        return (
          <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M38 35 L62 42 L38 50 Z" />
            <path d="M35 72 C35 62, 45 62, 50 67 L65 67 C65 77, 45 77, 35 72 Z" />
            <path d="M46 95 L46 82 C46 79, 54 79, 54 82 L54 95 Z" fill="currentColor" fillOpacity="0.1" />
            <line x1="50" y1="80" x2="50" y2="95" />
            <rect x="40" y="104" width="20" height="12" rx="1" />
            <path d="M40 135 C40 122, 60 122, 60 135" />
            <line x1="50" y1="125" x2="50" y2="138" />
            <path d="M35 152 L65 152 M55 148 L65 152 L55 156" />
            <path d="M38 172 C38 166, 62 166, 62 172 C62 178, 38 178, 38 172 Z" />
            <circle cx="50" cy="192" r="5" fill="currentColor" fillOpacity="0.1" />
          </g>
        )

      case 'thutmose-iii':
        return (
          <g stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="50" cy="50" r="14" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
            <rect x="42" y="95" width="16" height="24" rx="8" />
            <line x1="36" y1="100" x2="42" y2="103" />
            <line x1="36" y1="114" x2="42" y2="111" />
            <line x1="58" y1="103" x2="64" y2="100" />
            <line x1="58" y1="111" x2="64" y2="114" />
            <path d="M32 155 L38 150 L44 155 L50 150 L56 155 L62 150 L68 155" />
            <path d="M45 192 L45 174 C45 170, 55 170, 55 174 L55 192 Z" fill="currentColor" fillOpacity="0.1" />
          </g>
        )

      default:
        return renderPlaceholder()
    }
  }

  // Extracted placeholder function to keep switch scopes perfectly clean
  const renderPlaceholder = () => (
    <g stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
      <circle cx="50" cy="60" r="12" />
      <line x1="35" y1="110" x2="65" y2="110" />
      <path d="M35 150 L42 142 L50 150 L58 142 L65 150" />
    </g>
  )

  return (
    <div className="flex flex-col items-center gap-4 select-none p-6 border border-dust/40 bg-chamber rounded-[2px] w-full max-w-[240px] mx-auto shadow-xl">
      <span className="font-sc-custom text-[9px] text-text-muted tracking-[0.2em] uppercase">
        Royal Cartouche
      </span>

      <svg
        className="w-20 h-48 text-gold-true drop-shadow-[0_0_15px_rgba(201,148,58,0.18)]"
        viewBox="0 0 100 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="15" y="10" width="70" height="200" rx="35" stroke="currentColor" strokeWidth="2.5" />
        <rect x="25" y="210" width="50" height="7" rx="1.5" fill="currentColor" stroke="currentColor" strokeWidth="1" />
        <line x1="36" y1="217" x2="36" y2="228" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="217" x2="50" y2="228" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="64" y1="217" x2="64" y2="228" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

        {/* 3. Pass 'id' directly to execution pipeline execution */}
        {renderGlyphSequence(id)}
      </svg>

      <div className="text-center w-full space-y-1 mt-1">
        <h3 className="font-sc-custom text-xs text-gold-pale truncate max-w-[190px] mx-auto">
          {nomen}
        </h3>
        <p className="font-sc-custom text-[10px] text-gold-mist/50 truncate max-w-[190px] mx-auto normal-case tracking-normal">
          <span className="text-[9px] uppercase tracking-wider text-text-muted mr-1">Throne:</span>
          {prenomen}
        </p>
      </div>
    </div>
  )
}
