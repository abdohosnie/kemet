import Link from 'next/link'
import Image from 'next/image'
import { Dynasty } from '../../lib/types'
import { formatYearRange } from '../../lib/utils'
import EraChip from '../ui/EraChip'

interface CardProps {
  dynasty: Dynasty
}

export default function DynastyCard({ dynasty }: CardProps) {
  const datesLabel = formatYearRange(dynasty.startYear, dynasty.endYear)

  return (
    <Link href={`/dynasty/${dynasty.slug}`} className="block shrink-0 select-none">
      <div className="w-[280px] h-[380px] bg-chamber border border-dust rounded-[2px] overflow-hidden flex flex-col relative group transition-all duration-300 hover:border-gold-deep hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(201,148,58,0.15)]">
        {/* Top 60%: Image Area with Zoom */}
        <div className="h-[60%] w-full relative overflow-hidden">
          {/* Subtle gradient vignette overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-chamber via-transparent to-transparent z-10 opacity-90" />

          <Image
            src={dynasty.featuredImageUrl}
            alt={dynasty.name}
            fill
            sizes="280px"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
        </div>

        {/* Bottom 40%: Content Area */}
        <div className="h-[40%] px-5 pb-5 pt-2 flex flex-col justify-between relative z-20">
          <div>
            {/* Dynasty Number */}
            <span className="font-sc-custom text-[11px] text-bronze-light font-medium tracking-widest block mb-1">
              DYNASTY {dynasty.romanNumeral}
            </span>

            {/* Dynasty Name */}
            <h3 className="font-display text-xl text-gold-pale leading-tight truncate group-hover:text-gold-true transition-colors duration-300">
              {dynasty.name}
            </h3>
          </div>

          <div className="flex items-center justify-between mt-auto">
            {/* Era Badge */}
            <EraChip kingdom={dynasty.kingdom} className="scale-90 origin-left" />

            {/* Dates range */}
            <span className="font-sc-custom text-[10px] text-text-muted">
              {datesLabel}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
