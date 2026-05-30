import Image from 'next/image'

interface ImageFrameProps {
  src: string
  alt: string
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'wide'
  className?: string
  priority?: boolean
  sizes?: string
}

export default function ImageFrame({
  src,
  alt,
  aspectRatio = 'portrait',
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: ImageFrameProps) {
  const aspectClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    square: 'aspect-square',
    wide: 'aspect-[16/9]',
  }

  return (
    <div className={`relative overflow-hidden border border-dust bg-chamber group rounded-[2px] transition-all duration-500 hover:border-gold-deep ${aspectClasses[aspectRatio]} ${className}`}>
      {/* Stone vignette effect overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-void/90 via-transparent to-transparent opacity-60 z-10 pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />

      {/* Mineral texture paper shimmer */}
      <div className="absolute inset-0 bg-void/5 mix-blend-overlay z-20 pointer-events-none" />

      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
      />
    </div>
  )
}
