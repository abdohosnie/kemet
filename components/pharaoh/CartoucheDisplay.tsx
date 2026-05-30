interface CartoucheProps {
  prenomen: string
  name: string
}

export default function CartoucheDisplay({ prenomen, name }: CartoucheProps) {
  return (
    <div className="flex flex-col items-center gap-4 select-none p-6 border border-dust/50 bg-chamber rounded-[2px] w-full max-w-[240px] mx-auto shadow-md">
      <span className="font-sc-custom text-[9px] text-text-muted tracking-widest uppercase">
        Royal Cartouche
      </span>

      {/* SVG Royal Cartouche */}
      <svg className="w-20 h-48 text-gold-true drop-shadow-[0_0_12px_rgba(201,148,58,0.2)]" viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main cartouche oval border */}
        <rect x="15" y="10" width="70" height="200" rx="35" stroke="currentColor" strokeWidth="2.5" />
        
        {/* Cartouche bottom tied rope bar (Shenu ring knot) */}
        <rect x="25" y="210" width="50" height="8" rx="2" fill="currentColor" />
        <line x1="35" y1="218" x2="35" y2="228" stroke="currentColor" strokeWidth="2.5" />
        <line x1="65" y1="218" x2="65" y2="228" stroke="currentColor" strokeWidth="2.5" />
        <line x1="50" y1="218" x2="50" y2="228" stroke="currentColor" strokeWidth="2.5" />

        {/* Hieroglyphic shapes grouped vertically inside */}
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* 1. Ra Sun Disc (top) */}
          <circle cx="50" cy="55" r="14" />
          <circle cx="50" cy="55" r="3" fill="currentColor" />

          {/* 2. Beetle/Scarab (Kheper) (middle) */}
          <rect x="42" y="95" width="16" height="24" rx="8" />
          <line x1="38" y1="100" x2="42" y2="102" />
          <line x1="38" y1="114" x2="42" y2="112" />
          <line x1="62" y1="102" x2="66" y2="100" />
          <line x1="62" y1="112" x2="66" y2="114" />
          <circle cx="50" cy="101" r="1.5" fill="currentColor" />

          {/* 3. Water wave (Mu) / Gold sign (Neb) (bottom) */}
          <path d="M35 155 L40 150 L45 155 L50 150 L55 155 L60 150 L65 155" />
          
          {/* 4. Reed Leaf (Yod) */}
          <path d="M44 192 L44 172 C44 168, 56 168, 56 172 L56 192 Z" fill="currentColor" fillOpacity="0.1" />
          <line x1="50" y1="170" x2="50" y2="192" />
        </g>
      </svg>

      {/* Cartouche reading label */}
      <div className="text-center">
        <span className="font-sc-custom text-xs text-gold-pale block truncate max-w-[200px]">
          {name}
        </span>
        <span className="font-sc-custom text-[10px] text-gold-mist/60 block mt-1">
          Prenomen: {prenomen}
        </span>
      </div>
    </div>
  )
}
