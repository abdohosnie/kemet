import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { pharaohs } from '../../../data/pharaohs'
import { eras } from '../../../data/eras'
import { dynasties } from '../../../data/dynasties'
import PharaohHero from '../../../components/pharaoh/PharaohHero'
import PharaohStats from '../../../components/pharaoh/PharaohStats'
import CartoucheDisplay from '../../../components/pharaoh/CartoucheDisplay'
import PharaohGallery from '../../../components/pharaoh/PharaohGallery'
import SectionReveal from '../../../components/ui/SectionReveal'
import GoldDivider from '../../../components/ui/GoldDivider'

export const unstable_instant = {
  prefetch: 'static',
  samples: [{ params: { slug: 'ramesses-ii' } }]
}

export async function generateStaticParams() {
  return pharaohs.map((pharaoh) => ({
    slug: pharaoh.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function PharaohPage({ params }: PageProps) {
  return (
    <Suspense fallback={<PharaohPageFallback />}>
      {params.then(({ slug }) => (
        <PharaohPageContent slug={slug} />
      ))}
    </Suspense>
  )
}

function PharaohPageFallback() {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center bg-void text-gold-mist/40 select-none">
      <div className="flex flex-col items-center gap-3">
        <span className="w-6 h-6 rounded-full border border-gold-deep border-t-gold-true animate-spin" />
        <span className="font-sc text-xs tracking-widest uppercase">Opening Pharaoh Archives...</span>
      </div>
    </div>
  )
}

async function PharaohPageContent({ slug }: { slug: string }) {
  const pharaoh = pharaohs.find((p) => p.slug === slug)

  if (!pharaoh) {
    notFound()
  }

  const dynasty = dynasties.find((d) => d.id === pharaoh.dynastyId)
  const era = eras.find((e) => e.id === dynasty?.eraId)
  const paragraphs = pharaoh.biography.split('\n\n').filter(Boolean)

  return (
    <div className="flex flex-col w-full min-h-screen bg-void pb-24">
      {/* 1. Full-Bleed Split Hero */}
      <PharaohHero pharaoh={pharaoh} era={era} dynasty={dynasty} />

      {/* 2. Main Page Grid Content (Biography & Stats Sidebar) */}
      <section className="max-w-6xl mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20">
        {/* Left Side: Editorial Biography & Cartouche (col-span-8) */}
        <div className="lg:col-span-8 flex flex-col gap-10">

          {/* Biography Column (centered max-width: 680px) */}
          <div className="max-w-[680px] w-full flex flex-col gap-8">
            <SectionReveal>
              <span className="font-sc-custom text-xs text-bronze-light tracking-[0.2em] block mb-2">
                ROYAL LIFE CHRONICLE
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-gold-pale font-medium">
                The Narrative Account
              </h2>
              <div className="w-12 h-px bg-gold-true/50 mt-3" />
            </SectionReveal>

            {/* Paragraphs flow with generous line height */}
            <div className="flex flex-col gap-6 font-body text-lg text-gold-mist/85 leading-[1.8] tracking-wide antialiased">
              {paragraphs.map((p, idx) => (
                <SectionReveal key={idx} delay={idx * 0.05}>
                  <p>{p}</p>
                </SectionReveal>
              ))}
            </div>

            {/* Cartouche Callout & Pull Quote */}
            <SectionReveal className="my-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 border border-dust/50 bg-chamber/40 rounded-[2px]">
              <div className="md:col-span-4 flex justify-center">
                <CartoucheDisplay prenomen={pharaoh.prenomen} name={pharaoh.name} />
              </div>
              <div className="md:col-span-8 border-l border-dust/35 pl-0 md:pl-6 flex flex-col gap-3">
                <span className="font-sc-custom text-[10px] text-text-muted tracking-wider">
                  ROYAL SIGNATURE
                </span>
                <p className="font-display text-xl italic text-gold-pale/90 leading-relaxed">
                  &quot;{pharaoh.legacyQuote || 'He ruled with absolute divine authority, building stone giants to safeguard cosmic order.'}&quot;
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Key Achievements Grid */}
          {pharaoh.keyAchievements && pharaoh.keyAchievements.length > 0 && (
            <div className="max-w-[680px] w-full flex flex-col gap-6 mt-6">
              <SectionReveal>
                <span className="font-sc-custom text-xs text-bronze-light tracking-[0.2em] block mb-1">
                  LANDMARK MILESTONES
                </span>
                <h3 className="font-display text-2xl text-gold-pale font-medium">
                  Key Accomplishments
                </h3>
              </SectionReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                {pharaoh.keyAchievements.map((achievement, idx) => (
                  <SectionReveal key={idx} delay={idx * 0.05} className="bg-chamber/50 border border-dust p-5 rounded-[2px] hover:border-gold-deep/50 transition-colors duration-300">
                    <span className="font-sc-custom text-[10px] text-gold-true/70 tracking-widest font-semibold block mb-2">
                      ACHIEVEMENT 0{idx + 1}
                    </span>
                    <p className="font-body text-sm text-gold-mist/80 leading-relaxed">
                      {achievement}
                    </p>
                  </SectionReveal>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Side: Sticky Statistics Sidebar (col-span-4) */}
        <div className="lg:col-span-4">
          <SectionReveal delay={0.1}>
            <PharaohStats pharaoh={pharaoh} era={era} dynasty={dynasty} />
          </SectionReveal>
        </div>
      </section>

      {/* 3. Archaeological Gallery Section (Lightbox Dynamic Grid) */}
      {pharaoh.galleryImages && pharaoh.galleryImages.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-12 w-full border-t border-dust/35 relative z-20">
          <SectionReveal className="mb-12 text-center flex flex-col items-center">
            <span className="font-sc-custom text-xs text-bronze-light tracking-[0.2em] block mb-1">
              VISUAL LEGACY
            </span>
            <h2 className="font-display text-3xl text-gold-pale font-medium">
              Archaeological Archive
            </h2>
            <GoldDivider className="max-w-xs mt-4" />
          </SectionReveal>

          <PharaohGallery images={pharaoh.galleryImages} />
        </section>
      )}
    </div>
  )
}
