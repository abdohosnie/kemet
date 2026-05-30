import Link from 'next/link'
import { Pharaoh } from '../../lib/types'
import { formatYear } from '../../lib/utils'
import ImageFrame from '../ui/ImageFrame'

interface CardProps {
  pharaoh: Pharaoh
}

export default function PharaohCard({ pharaoh }: CardProps) {
  return (
    <Link href={`/pharaoh/${pharaoh.slug}`} className="block group">
      <div className="bg-chamber border border-dust rounded-[2px] p-5 flex flex-col gap-4 hover:border-gold-deep transition-all duration-300 shadow-lg hover:-translate-y-1">
        {/* Portrait frame */}
        <ImageFrame
          src={pharaoh.portraitImageUrl}
          alt={pharaoh.name}
          aspectRatio="square"
          className="w-full"
        />

        <div className="flex flex-col">
          {/* Epithet badge */}
          <span className="font-sc-custom text-[10px] text-bronze-light font-semibold tracking-wider mb-1 truncate block">
            {pharaoh.epithet}
          </span>
          
          {/* Royal Name */}
          <h3 className="font-display text-2xl text-gold-pale group-hover:text-gold-true transition-colors duration-300">
            {pharaoh.name}
          </h3>
          
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-dust/35">
            {/* Chronology reign */}
            <span className="font-sc-custom text-[9px] text-text-muted">
              r. {formatYear(pharaoh.reignStart)} – {formatYear(pharaoh.reignEnd)}
            </span>
            
            <span className="font-sc-custom text-[10px] text-gold-true group-hover:underline">
              Enter Profile &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
