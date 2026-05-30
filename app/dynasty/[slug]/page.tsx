import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import { dynasties } from '../../../data/dynasties'
import { pharaohs } from '../../../data/pharaohs'
import { eras } from '../../../data/eras'
import { formatYearRange } from '../../../lib/utils'
import SectionReveal from '../../../components/ui/SectionReveal'
import GoldDivider from '../../../components/ui/GoldDivider'
import ImageFrame from '../../../components/ui/ImageFrame'

export const unstable_instant = {
  prefetch: 'static',
  samples: [{ params: { slug: 'dynasty-xviii' } }]
}

export async function generateStaticParams() {
  return dynasties.map((dynasty) => ({
    slug: dynasty.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function DynastyPage({ params }: PageProps) {
  return (
    <Suspense fallback={<DynastyPageFallback />}>
      {params.then(({ slug }) => (
        <DynastyPageContent slug={slug} />
      ))}
    </Suspense>
  )
}

function DynastyPageFallback() {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center bg-void text-gold-mist/40 select-none">
      <div className="flex flex-col items-center gap-3">
        <span className="w-6 h-6 rounded-full border border-gold-deep border-t-gold-true animate-spin" />
        <span className="font-sc text-xs tracking-widest uppercase">Opening Dynasty Archives...</span>
      </div>
    </div>
  )
}

async function DynastyPageContent({ slug }: { slug: string }) {
  const dynasty = dynasties.find((d) => d.slug === slug)

  if (!dynasty) {
    notFound()
  }

  const era = eras.find((e) => e.id === dynasty.eraId)
  const dynastyPharaohs = pharaohs.filter((p) => p.dynastyId === dynasty.id)
  const datesLabel = formatYearRange(dynasty.startYear, dynasty.endYear)

  return (
    <div className="flex flex-col w-full min-h-screen bg-void pb-24">
      {/* 1. Splendid Hero Block */}
      <section className="relative w-full py-20 px-6 border-b border-dust/50 bg-tomb flex flex-col items-center select-none text-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-sc-custom text-xs text-bronze-light tracking-[0.25em]">
            DYNASTY {dynasty.romanNumeral}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-true" />
          {era && (
            <Link href={`/era/${era.slug}`} className="font-sc-custom text-xs text-gold-mist hover:text-gold-true hover:underline tracking-[0.2em]">
              {era.name}
            </Link>
          )}
        </div>

        <h1 className="text-display-xl font-medium text-gold-pale leading-none">
          {dynasty.name}
        </h1>

        <span className="font-display text-lg italic text-gold-mist mt-1.5 block">
          {dynasty.arabicName}
        </span>

        <GoldDivider className="max-w-[200px] mt-4" />

        <span className="font-sc-custom text-sm text-gold-mist/80 tracking-widest mt-2 block">
          {datesLabel}
        </span>
      </section>

      {/* 2. Overview and Notable Achievements */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 w-full">
        {/* Left column: Summary */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <SectionReveal>
            <span className="font-sc-custom text-xs text-gold-true tracking-wider uppercase block mb-2">
              Dynastic Chronicle
            </span>
            <h2 className="font-display text-3xl text-gold-pale font-medium">
              Historical Summary
            </h2>
            <p className="font-body text-base text-gold-mist/80 mt-4 leading-relaxed">
              {dynasty.summary}
            </p>
          </SectionReveal>

          {/* Quickaffiliations panel */}
          <SectionReveal className="grid grid-cols-2 gap-4 mt-4 p-5 bg-chamber border border-dust rounded-[2px]">
            <div>
              <span className="font-sc-custom text-[10px] text-text-muted tracking-wider block">
                CAPITAL SEAT
              </span>
              <span className="font-display text-lg text-gold-pale">
                {dynasty.capital}
              </span>
            </div>
            <div>
              <span className="font-sc-custom text-[10px] text-text-muted tracking-wider block">
                RULERS PROFILED
              </span>
              <span className="font-display text-lg text-gold-pale">
                {dynastyPharaohs.length} Pharaohs
              </span>
            </div>
          </SectionReveal>
        </div>

        {/* Right column: Notable Achievements */}
        <div className="md:col-span-5 border-l border-dust/30 pl-0 md:pl-10 flex flex-col gap-6">
          <SectionReveal>
            <span className="font-sc-custom text-xs text-bronze-light tracking-wider uppercase block mb-2">
              Monumental Achievements
            </span>
            <h2 className="font-display text-2xl text-gold-pale font-medium">
              Cultural Milestones
            </h2>
            <ul className="flex flex-col gap-4 mt-6">
              {dynasty.notableAchievements.map((achievement, idx) => (
                <li key={idx} className="flex gap-3 text-sm font-body text-gold-mist/75">
                  <span className="text-gold-true font-bold select-none">&mdash;</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </section>

      {/* 3. Associated Pharaohs Gallery */}
      {dynastyPharaohs.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-10 w-full">
          <SectionReveal className="mb-10 text-center flex flex-col items-center">
            <span className="font-sc-custom text-xs text-gold-true tracking-wider uppercase block mb-1">
              DYNASTIC RULERS
            </span>
            <h2 className="font-display text-3xl text-gold-pale font-medium">
              Pharaohs of the Dynasty
            </h2>
            <div className="w-12 h-px bg-gold-true/50 mt-3" />
          </SectionReveal>

          {/* Pharaoh Cards list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {dynastyPharaohs.map((pharaoh, index) => (
              <SectionReveal key={pharaoh.id} delay={index * 0.06}>
                <Link href={`/pharaoh/${pharaoh.slug}`} className="block group">
                  <div className="bg-chamber border border-dust rounded-[2px] p-5 flex flex-col gap-5 hover:border-gold-deep transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:-translate-y-1">

                    {/* Portrait image */}
                    <ImageFrame
                      src={pharaoh.portraitImageUrl}
                      alt={pharaoh.name}
                      aspectRatio="square"
                      className="w-full"
                    />

                    {/* Meta */}
                    <div className="flex flex-col">
                      <span className="font-sc-custom text-[10px] text-bronze-light font-semibold tracking-wider mb-1">
                        {pharaoh.epithet}
                      </span>
                      <h3 className="font-display text-2xl text-gold-pale group-hover:text-gold-true transition-colors duration-300">
                        {pharaoh.name}
                      </h3>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-dust/30">
                        <span className="font-sc-custom text-[9px] text-text-muted">
                          r. {Math.abs(pharaoh.reignStart)} – {Math.abs(pharaoh.reignEnd)} BCE
                        </span>

                        <span className="text-[10px] font-sc-custom text-gold-true group-hover:underline">
                          View Profile &rarr;
                        </span>
                      </div>
                    </div>

                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
