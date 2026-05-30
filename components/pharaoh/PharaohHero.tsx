import Image from 'next/image'
import Link from 'next/link'
import { Pharaoh, Era, Dynasty } from '../../lib/types'
import { formatYear } from '../../lib/utils'
import EraChip from '../ui/EraChip'
import DynastyBadge from '../dynasty/DynastyBadge'
import ScrollIndicator from '../ui/ScrollIndicator'

interface HeroProps {
  pharaoh: Pharaoh
  era?: Era
  dynasty?: Dynasty
}

export default function PharaohHero({ pharaoh, era, dynasty }: HeroProps) {
  return (
    <section className="relative w-full min-h-[90svh] bg-void flex flex-col md:grid md:grid-cols-12 border-b border-dust z-10 overflow-hidden select-none">
      {/* 1. Left Content Column (45% on desktop) */}
      <div className="md:col-span-5 flex flex-col justify-between p-8 md:p-12 lg:p-16 bg-linear-to-r from-void via-void to-tomb/90 relative z-20">
        {/* Breadcrumb Navigation */}
        <div className="font-sc-custom text-[10px] text-text-muted/70 tracking-widest flex flex-wrap items-center gap-1.5 pt-4">
          <Link href="/" className="hover:text-gold-true transition-colors duration-300">KEMET</Link>
          <span>&rarr;</span>
          {era && (
            <Link href={`/era/${era.slug}`} className="hover:text-gold-true transition-colors duration-300 uppercase">
              {era.kingdom.replace('-', ' ')}
            </Link>
          )}
          <span>&rarr;</span>
          {dynasty && (
            <Link href={`/dynasty/${dynasty.slug}`} className="hover:text-gold-true transition-colors duration-300">
              DYNASTY {dynasty.romanNumeral}
            </Link>
          )}
          <span>&rarr;</span>
          <span className="text-gold-mist font-semibold">{pharaoh.name}</span>
        </div>

        {/* Mid section: Names, badges, epithet, reign */}
        <div className="my-auto py-12 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            {era && <EraChip kingdom={era.kingdom} />}
            {dynasty && <DynastyBadge romanNumeral={dynasty.romanNumeral} />}
          </div>

          <div className="flex flex-col gap-2">
            {/* Pharaoh Name */}
            <h1 className="text-display-xl font-light text-gold-pale leading-none tracking-tight">
              {pharaoh.name}
            </h1>

            {/* Epithet (italic display font) */}
            <p className="font-display text-2xl italic text-gold-mist tracking-wide pl-1 mt-1">
              &quot;{pharaoh.epithet}&quot;
            </p>
          </div>

          {/* Reign dates and duration */}
          <div className="flex items-center gap-4 font-sc-custom text-sm text-gold-mist/80 py-3 border-y border-dust/35 self-start pr-6">
            <span>r. {formatYear(pharaoh.reignStart)} – {formatYear(pharaoh.reignEnd)}</span>
            <span className="text-gold-deep/50">|</span>
            <span className="text-bronze-light font-semibold">{pharaoh.reignDurationYears} Years</span>
          </div>

          {/* Prenomen and Nomen display */}
          <div className="flex flex-col gap-1.5 pl-1.5 border-l-2 border-gold-true/50">
            <span className="font-sc-custom text-[10px] text-text-muted tracking-widest uppercase">
              Throne Name (Prenomen)
            </span>
            <span className="font-sc-custom text-xs text-gold-pale/90 tracking-widest italic">
              {pharaoh.prenomen}
            </span>
          </div>
        </div>

        {/* Scroll indicator prompt */}
        <div className="hidden md:block self-start">
          <ScrollIndicator className="scale-75 origin-left" />
        </div>
      </div>

      {/* 2. Right Cover Image Column (55% on desktop) */}
      <div className="md:col-span-7 h-[350px] md:h-full relative overflow-hidden shrink-0 z-10 border-t md:border-t-0 md:border-l border-dust">
        {/* Soft dark visual overlay facing the left text */}
        <div className="absolute inset-0 bg-linear-to-r from-void via-transparent to-transparent z-10 pointer-events-none hidden md:block" />
        <div className="absolute inset-0 bg-linear-to-t from-void via-transparent to-transparent z-10 pointer-events-none md:hidden" />

        <Image
          src={pharaoh.portraitImageUrl}
          alt={pharaoh.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover object-top transition-transform duration-1200 scale-102 hover:scale-[1.05]"
        />
      </div>
    </section>
  )
}
