'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dynasty } from '../../lib/types'
import DynastyCard from './DynastyCard'

interface CarouselProps {
  dynasties: Dynasty[]
}

export default function DynastyCarousel({ dynasties }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 310 // 280px width + 30px gap
      const currentScroll = carouselRef.current.scrollLeft
      carouselRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="w-full relative flex flex-col group/carousel">
      {/* Scrollable container wrapper */}
      <div className="relative w-full flex items-center">
        {/* Left Arrow Button */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute -left-6 z-30 w-12 h-12 rounded-full flex items-center justify-center border border-dust bg-chamber text-gold-true hover:border-gold-true transition-all duration-300 shadow-xl opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 hover:scale-105"
          aria-label="Scroll Carousel Left"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Horizontal Container */}
        <div
          ref={carouselRef}
          className="w-full overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-[30px] py-6 px-1 md:px-4"
        >
          {dynasties.map((dynasty) => (
            <DynastyCard key={dynasty.id} dynasty={dynasty} />
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => handleScroll('right')}
          className="absolute -right-6 z-30 w-12 h-12 rounded-full flex items-center justify-center border border-dust bg-chamber text-gold-true hover:border-gold-true transition-all duration-300 shadow-xl opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 hover:scale-105"
          aria-label="Scroll Carousel Right"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  )
}
