'use client'

import { motion } from 'framer-motion'
import { Era } from '../../lib/types'
import { useStore } from '../../lib/store'

interface EraProps {
  era: Era
  leftPercent: number
  widthPercent: number
  isActive: boolean
  onClick: () => void
}

export default function TimelineEra({ era, leftPercent, widthPercent, isActive, onClick }: EraProps) {
  useStore()

  return (
    <div
      style={{
        left: `${leftPercent}%`,
        width: `${widthPercent}%`,
      }}
      className="absolute top-0 bottom-0 select-none cursor-pointer group z-20 border-r border-dust/20 h-full flex flex-col justify-between"
      onClick={onClick}
    >
      {/* Top portion: Label and active gold line */}
      <div className="pt-2 px-2 flex flex-col gap-1 transition-all duration-300">
        {/* Active/Hover Top Indicator Line */}
        <div className="relative w-full h-[2px] overflow-hidden">
          <motion.div
            initial={false}
            animate={{
              width: isActive ? '100%' : '0%',
              backgroundColor: isActive ? 'var(--color-gold-true)' : 'transparent',
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 h-full bg-gold-true"
          />
          {/* Subtle hover line */}
          <div className="w-full h-full bg-gold-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Era Name text */}
        <span
          className={`font-sc-custom text-[10px] tracking-widest block truncate ${isActive
              ? 'text-gold-true font-bold drop-shadow-[0_0_8px_rgba(201,148,58,0.25)]'
              : 'text-gold-mist/40 group-hover:text-gold-mist transition-colors duration-300'
            }`}
        >
          {era.name}
        </span>
      </div>

      {/* Ambient background hover shimmer */}
      <div className="absolute inset-0 bg-gold-true/1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Bottom portion: Segment badge or dates */}
      <div className="pb-3 px-2 flex items-center justify-between">
        <span className="font-sc-custom text-[9px] text-text-muted">
          {Math.abs(era.startYear)} BCE
        </span>
      </div>
    </div>
  )
}
