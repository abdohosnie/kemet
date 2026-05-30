import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import { eras } from '../../../data/eras'
import { dynasties } from '../../../data/dynasties'
import { formatYearRange } from '../../../lib/utils'
import SectionReveal from '../../../components/ui/SectionReveal'
import GoldDivider from '../../../components/ui/GoldDivider'
import EraChip from '../../../components/ui/EraChip'
import ImageFrame from '../../../components/ui/ImageFrame'

export const unstable_instant = {
  prefetch: 'static',
  samples: [{ params: { slug: 'old-kingdom' } }]
}

export async function generateStaticParams() {
  return eras.map((era) => ({
    slug: era.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function EraPage({ params }: PageProps) {
  return (
    <Suspense fallback={<EraPageFallback />}>
      {params.then(({ slug }) => (
        <EraPageContent slug={slug} />
      ))}
    </Suspense>
  )
}

function EraPageFallback() {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center bg-void text-gold-mist/40 select-none">
      <div className="flex flex-col items-center gap-3">
        <span className="w-6 h-6 rounded-full border border-gold-deep border-t-gold-true animate-spin" />
        <span className="font-sc text-xs tracking-widest uppercase">Opening Era Archives...</span>
      </div>
    </div>
  )
}

async function EraPageContent({ slug }: { slug: string }) {
  const era = eras.find((e) => e.slug === slug)

  if (!era) {
    notFound()
  }

  const eraDynasties = dynasties.filter((d) => d.eraId === era.id)
  const datesLabel = formatYearRange(era.startYear, era.endYear)

  return (
    <div className="flex flex-col w-full min-h-screen bg-void pb-24">
      {/* Editorial Era Hero Header */}
      <section className="relative w-full py-20 px-6 border-b border-dust/50 bg-tomb flex flex-col items-center select-none text-center">
        <span className="font-sc-custom text-xs text-bronze-light tracking-[0.25em] block mb-3">
          HISTORICAL ERA
        </span>
        <h1 className="text-display-xl font-medium text-gold-pale">
          {era.name}
        </h1>

        <span className="font-display text-lg italic text-gold-mist mt-1 block">
          {era.arabicName}
        </span>

        <GoldDivider className="max-w-[200px] mt-4" />

        <span className="font-sc-custom text-sm text-gold-mist/80 tracking-widest mt-2 block">
          {datesLabel}
        </span>
      </section>

      {/* Description & Narrative */}
      <section className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <SectionReveal>
          <span className="font-sc-custom text-[11px] text-gold-true tracking-[0.2em] uppercase block mb-3">
            The Historical Narrative
          </span>
          <p className="font-body text-lead text-gold-mist/80 leading-relaxed max-w-3xl">
            &quot;{era.description}&quot;
          </p>
        </SectionReveal>
      </section>

      {/* Dynasties Showcase */}
      {eraDynasties.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-8 w-full">
          <SectionReveal className="mb-10 text-center md:text-left">
            <span className="font-sc-custom text-xs text-bronze-light tracking-[0.2em] mb-1 block">
              CHRONICLE FLOW
            </span>
            <h2 className="font-display text-3xl text-gold-pale font-medium">
              Dynasties of the Era
            </h2>
            <div className="w-12 h-px bg-gold-true/50 mt-3 mx-auto md:mx-0" />
          </SectionReveal>

          {/* Dynasties card list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {eraDynasties.map((dynasty, index) => {
              const dynDates = formatYearRange(dynasty.startYear, dynasty.endYear)
              return (
                <SectionReveal key={dynasty.id} delay={index * 0.08}>
                  <div className="flex flex-col md:flex-row bg-chamber border border-dust rounded-[2px] overflow-hidden group hover:border-gold-deep transition-all duration-300">

                    {/* Left side: Image */}
                    <div className="w-full md:w-[40%] h-[200px] md:h-auto relative overflow-hidden shrink-0">
                      <ImageFrame
                        src={dynasty.featuredImageUrl}
                        alt={dynasty.name}
                        aspectRatio="square"
                        className="w-full h-full border-none"
                      />
                    </div>

                    {/* Right side: Inward description */}
                    <div className="p-6 flex flex-col justify-between grow gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-sc-custom text-[10px] text-bronze-light font-semibold tracking-wider">
                            DYNASTY {dynasty.romanNumeral}
                          </span>
                          <EraChip kingdom={dynasty.kingdom} className="scale-75 origin-right" />
                        </div>

                        <h3 className="font-display text-xl text-gold-pale group-hover:text-gold-true transition-colors duration-300">
                          {dynasty.name}
                        </h3>

                        <p className="font-body text-xs text-gold-mist/60 mt-2 leading-relaxed">
                          {dynasty.summary}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-2 border-t border-dust/30">
                        <span className="font-sc-custom text-[9px] text-text-muted">
                          {dynDates}
                        </span>

                        <Link href={`/dynasty/${dynasty.slug}`} className="font-sc-custom text-[10px] text-gold-true tracking-wider hover:underline">
                          Explore Dynasty &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}
