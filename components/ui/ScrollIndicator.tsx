'use client'

import { motion } from 'framer-motion'

export default function ScrollIndicator({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center select-none gap-2 ${className}`}>
      <span className="font-sc-custom text-[10px] text-gold-mist/40 tracking-[0.2em] uppercase">
        Scroll
      </span>
      {/* 48px vertical rail */}
      <div className="w-px h-12 bg-linear-to-b from-gold-deep via-gold-deep/20 to-transparent relative overflow-hidden">
        {/* Animated dot */}
        <motion.div
          animate={{
            y: [0, 48],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-true shadow-[0_0_8px_var(--color-gold-true)]"
        />
      </div>
    </div>
  )
}
