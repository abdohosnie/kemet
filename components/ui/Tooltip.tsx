'use client'

import React, { useState } from 'react'

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  className?: string
}

export default function Tooltip({ content, children, className = '' }: TooltipProps) {
  const [active, setActive] = useState(false)

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      {children}
      {active && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3.5 px-4 py-2 text-center bg-alcove border border-gold-deep rounded shadow-xl min-w-[200px] pointer-events-none animate-fadeIn">
          {/* Tooltip text */}
          <div className="text-gold-pale text-xs font-sc-custom tracking-wider">
            {content}
          </div>
          {/* Ornate Arrow pointing down */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-gold-deep" />
        </div>
      )}
    </div>
  )
}
