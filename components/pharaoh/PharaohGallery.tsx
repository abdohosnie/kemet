'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { GalleryImage } from '../../lib/types'
import ImageFrame from '../ui/ImageFrame'
import SectionReveal from '../ui/SectionReveal'

interface GalleryProps {
  images: GalleryImage[]
}

export default function PharaohGallery({ images }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // 1. Moved above useEffect and wrapped in useCallback to stabilize references
  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  // 2. Keyboard navigation for lightbox with full dependency safety
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, handlePrev, handleNext]) // Included handlePrev and handleNext safely here

  if (!images || images.length === 0) return null

  return (
    <div className="w-full">
      {/* Masonry Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <SectionReveal key={index} delay={index * 0.05}>
            <div
              className="flex flex-col gap-3 group cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              {/* Picture Frame */}
              <ImageFrame
                src={image.url}
                alt={image.alt}
                aspectRatio="square"
                className="hover:scale-[1.01] transition-transform duration-300 shadow-md"
              />

              {/* Styled Caption */}
              <div className="px-1 flex flex-col gap-0.5">
                <span className="font-sc-custom text-[10px] text-bronze-light font-semibold tracking-widest uppercase">
                  {image.type}
                </span>
                <p className="font-sc-custom text-xs text-text-muted group-hover:text-gold-mist transition-colors duration-300 truncate">
                  {image.caption}
                </p>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-void/98 z-50 flex flex-col items-center justify-center p-6 md:p-12 select-none animate-fadeIn">
          {/* Top Panel (Actions & Caption) */}
          <div className="absolute top-0 left-0 w-full p-6 flex items-center justify-between z-50 bg-linear-to-b from-void via-void/80 to-transparent">
            {/* Title / Description */}
            <div className="flex flex-col gap-0.5 max-w-xl">
              <span className="font-sc-custom text-[10px] text-bronze-light tracking-[0.2em]">
                ARCHAEOLOGICAL ARCHIVE &bull; {images[lightboxIndex].type.toUpperCase()}
              </span>
              <p className="font-sc-custom text-sm text-gold-pale truncate">
                {images[lightboxIndex].caption}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="w-10 h-10 rounded-full border border-dust bg-chamber text-gold-true hover:border-gold-true flex items-center justify-center transition-all duration-300"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-6 md:left-12 z-50 w-12 h-12 rounded-full border border-dust bg-chamber/80 text-gold-true hover:border-gold-true flex items-center justify-center transition-all duration-300"
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Core Image Display Area */}
          <div className="relative w-full h-full max-w-4xl max-h-[70vh] flex items-center justify-center">
            <Image
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-6 md:right-12 z-50 w-12 h-12 rounded-full border border-dust bg-chamber/80 text-gold-true hover:border-gold-true flex items-center justify-center transition-all duration-300"
            aria-label="Next Image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Bottom indicator count */}
          <div className="absolute bottom-6 font-sc-custom text-xs text-text-muted tracking-widest">
            IMAGE {lightboxIndex + 1} OF {images.length}
          </div>
        </div>
      )}
    </div>
  )
}
