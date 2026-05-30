'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Pharaoh } from '../../lib/types'
import { formatYear } from '../../lib/utils'
import Tooltip from '../ui/Tooltip'

interface MarkerProps {
  pharaoh: Pharaoh
  leftPercent: number
  opacity: number
}

// Major rulers that get default large pulsing pins
const MAJOR_PHARAOHS = [
  'narmer',
  'djoser',
  'khufu',
  'hatshepsut',
  'thutmose-iii',
  'akhenaten',
  'tutankhamun',
  'ramesses-ii',
  'cleopatra-vii',
]

export default function TimelineMarker({ pharaoh, leftPercent, opacity }: MarkerProps) {
  const isMajor = MAJOR_PHARAOHS.includes(pharaoh.id)

  const tooltipContent = (
    <div className="flex flex-col gap-0.5 select-none">
      <span className="text-gold-pale text-[11px] font-semibold tracking-wider font-sc">
        {pharaoh.name}
      </span>
      <span className="text-gold-mist/70 text-[9px] font-medium tracking-widest font-sc">
        {pharaoh.epithet}
      </span>
      <span className="text-bronze-light/80 text-[10px] italic mt-1 font-body">
        r. {formatYear(pharaoh.reignStart)} – {formatYear(pharaoh.reignEnd)}
      </span>
    </div>
  )

  return (
    <div
      style={{ left: `${leftPercent}%` }}
      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30"
    >
      <Tooltip content={tooltipContent}>
        <Link href={`/pharaoh/${pharaoh.slug}`}>
          <div className="relative group p-3 cursor-pointer flex items-center justify-center">
            {/* Pulsing ring for major pharaohs */}
            {isMajor && (
              <span className="absolute w-6 h-6 rounded-full border border-gold-true/40 animate-ping opacity-60 pointer-events-none" />
            )}
            
            {/* The interactive pin circle */}
            <motion.div
              animate={{
                opacity: opacity,
                scale: isMajor ? 1.2 : 1,
              }}
              whileHover={{
                scale: 1.5,
                backgroundColor: 'var(--color-gold-true)',
                borderColor: 'var(--color-gold-pale)',
                boxShadow: '0 0 12px var(--color-gold-true)',
              }}
              className={`rounded-full border transition-all duration-300 ${
                isMajor
                  ? 'w-3 h-3 bg-gold-true border-gold-deep shadow-[0_0_8px_rgba(201,148,58,0.5)]'
                  : 'w-2 h-2 bg-bronze-mid border-dust'
              }`}
            />
          </div>
        </Link>
      </Tooltip>
    </div>
  )
}
