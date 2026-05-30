'use client'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { eras } from '../../data/eras'
import { pharaohs } from '../../data/pharaohs'
import { useStore } from '../../lib/store'
import TimelineFilter from './TimelineFilter'
import TimelineEra from './TimelineEra'
import TimelineMarker from './TimelineMarker'

export default function TimelineRail() {
  const railContainerRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const { activeEra, setActiveEra } = useStore()

  // Timeline chronology range: 6000 BCE to 30 CE (approx 6030 years span)
  const timelineStart = -6000
  const timelineEnd = 30
  const timelineSpan = timelineEnd - timelineStart

  const calculatePercent = (year: number) => {
    return ((year - timelineStart) / timelineSpan) * 100
  }

  // Scroll controls
  const handleScroll = (direction: 'left' | 'right') => {
    if (railContainerRef.current) {
      const scrollAmount = 500
      const currentScroll = railContainerRef.current.scrollLeft
      railContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  // Filter markers based on active period selection
  const filteredPharaohs = pharaohs.filter((p) => {
    if (activeFilter === 'all') return true

    // Find the era of the pharaoh's dynasty
    const pharaohEra = eras.find((e) => {
      // Find matching era
      const matchesDynasty = e.dynastyIds.includes(p.dynastyId)
      return matchesDynasty || e.kingdom === activeFilter
    })

    return pharaohEra?.kingdom === activeFilter
  })

  return (
    <div className="w-full flex flex-col gap-8 py-12 bg-void relative">
      {/* 1. Header Filter Controls */}
      <TimelineFilter
        activeFilter={activeFilter}
        onFilterChange={(filter) => {
          setActiveFilter(filter)
          if (filter !== 'all') {
            setActiveEra(filter)
          }
        }}
      />

      {/* 2. Horizontal Scrollable Container */}
      <div className="relative w-full">
        {/* Navigation Arrows */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-4 top-[65%] -translate-y-1/2 z-40 w-11 h-11 rounded-full flex items-center justify-center border border-dust bg-chamber/90 text-gold-true hover:border-gold-true transition-all duration-300 shadow-lg hover:scale-105"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-4 top-[65%] -translate-y-1/2 z-40 w-11 h-11 rounded-full flex items-center justify-center border border-dust bg-chamber/90 text-gold-true hover:border-gold-true transition-all duration-300 shadow-lg hover:scale-105"
          aria-label="Scroll Right"
        >
          <ChevronRight size={20} />
        </button>

        {/* Scrollable Track Wrapper */}
        <div
          ref={railContainerRef}
          className="w-full overflow-x-auto no-scrollbar scroll-smooth px-12 md:px-24"
        >
          {/* Timeline canvas width: 2800px for generous spacing */}
          <div className="w-[2800px] h-[340px] relative mt-4">

            {/* Visual background guide lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,32,24,0.1)_1px,transparent_1px)] bg-size-[100px_100%] pointer-events-none" />

            {/* Eras Track Area (Top portion) */}
            <div className="absolute top-0 left-0 w-full h-[180px] border-b border-dust/35">
              {eras.map((era) => {
                const left = calculatePercent(era.startYear)
                const right = calculatePercent(era.endYear)
                const width = right - left
                const isActive = activeEra === era.id

                return (
                  <TimelineEra
                    key={era.id}
                    era={era}
                    leftPercent={left}
                    widthPercent={width}
                    isActive={isActive}
                    onClick={() => setActiveEra(era.id)}
                  />
                )
              })}
            </div>

            {/* Core Timeline Rail Line (Center indicator) */}
            <div className="absolute top-[220px] left-0 w-full h-px bg-linear-to-r from-gold-deep/20 via-dust to-gold-deep/20 z-10" />

            {/* Year coordinate labels */}
            <div className="absolute top-[195px] left-0 w-full flex justify-between px-2 pointer-events-none select-none text-[10px] font-sc text-text-muted/50 tracking-widest">
              <span className="absolute left-[0%]">6000 BCE</span>
              <span className="absolute left-[15%]">4000 BCE</span>
              <span className="absolute left-[30%]">3000 BCE</span>
              <span className="absolute left-[45%]">2000 BCE</span>
              <span className="absolute left-[65%]">1500 BCE</span>
              <span className="absolute left-[80%]">1000 BCE</span>
              <span className="absolute left-[92%]">500 BCE</span>
              <span className="absolute left-[99%]">30 BCE</span>
            </div>

            {/* Pharaoh Markers on the Rail */}
            <div className="absolute top-[220px] left-0 w-full h-12">
              {filteredPharaohs.map((pharaoh) => {
                const midReign = (pharaoh.reignStart + pharaoh.reignEnd) / 2
                const left = calculatePercent(midReign)

                // Determine opacity based on whether it matches the active filters
                const matchesFilter = activeFilter === 'all' || (() => {
                  const era = eras.find((e) => e.dynastyIds.includes(pharaoh.dynastyId))
                  return era?.kingdom === activeFilter
                })()

                return (
                  <TimelineMarker
                    key={pharaoh.id}
                    pharaoh={pharaoh}
                    leftPercent={left}
                    opacity={matchesFilter ? 1 : 0.25}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Narrative introduction beneath active era */}
      <div className="max-w-3xl mx-auto text-center px-6 mt-4">
        {activeEra && (() => {
          const currentEra = eras.find((e) => e.id === activeEra)
          if (!currentEra) return null
          return (
            <div className="flex flex-col gap-2 animate-fadeIn">
              <span className="font-sc-custom text-xs text-bronze-light tracking-widest">
                Currently Exploring
              </span>
              <h2 className="font-display text-3xl text-gold-pale font-medium">
                {currentEra.name}
              </h2>
              <p className="font-body text-gold-mist/80 text-base leading-relaxed mt-2 italic">
                &quot;{currentEra.description}&quot;
              </p>
            </div>
          )
        })()}
      </div>
    </div>
  )
}
