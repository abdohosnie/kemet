import Link from 'next/link'
import SectionReveal from '../components/ui/SectionReveal'
import GoldDivider from '../components/ui/GoldDivider'
import ScrollIndicator from '../components/ui/ScrollIndicator'
import EraChip from '../components/ui/EraChip'
import ImageFrame from '../components/ui/ImageFrame'

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-void relative">
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full h-[92svh] flex flex-col items-center justify-between py-12 px-6 hero-glow z-10 select-none">
        {/* Spacer to push content down */}
        <div />

        {/* Central Brand Composition */}
        <div className="flex flex-col items-center text-center max-w-4xl">
          <h1 className="text-display-2xl font-light text-gold-pale drop-shadow-[0_0_20px_rgba(245,230,200,0.15)] animate-fadeIn">
            KEMET
          </h1>

          <GoldDivider className="max-w-[240px] my-4" />

          <span className="text-display-sm font-light italic text-gold-mist tracking-wide">
            The Black Land
          </span>

          <span className="text-meta text-xs text-text-muted tracking-[0.25em] uppercase block mt-8 mb-2">
            A Journey Through
          </span>

          <h2 className="text-display-xl font-normal text-gold-pale leading-none tracking-tight">
            ANCIENT EGYPT
          </h2>

          {/* Core Ghost CTA Button */}
          <Link href="/timeline" className="mt-12 group">
            <button className="px-10 py-4 font-sc-custom text-sm tracking-[0.15em] text-gold-true border border-gold-deep/60 bg-transparent rounded-sm transition-all duration-500 ease-out hover:border-gold-true hover:bg-gold-true/8 hover:text-gold-pale hover:shadow-[0_0_25px_rgba(201,148,58,0.2)]">
              Begin the Journey &rarr;
            </button>
          </Link>
        </div>

        {/* Bottom scroll prompt */}
        <ScrollIndicator className="animate-bounce" />
      </section>

      {/* 2. Editorial Kingdom Overview Grid */}
      <section className="w-full py-24 px-6 md:px-12 bg-tomb relative z-20 border-t border-dust">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <SectionReveal className="text-center flex flex-col items-center mb-16">
            <span className="font-sc-custom text-xs text-bronze-light tracking-[0.2em] mb-2 block">
              HISTORICAL HORIZONS
            </span>
            <h2 className="text-display-lg font-medium text-gold-pale">
              The Three Great Kingdoms
            </h2>
            <GoldDivider className="max-w-[200px] mt-4" />
            <p className="font-body text-gold-mist/70 text-base max-w-xl mt-4 leading-relaxed">
              While history covers ten distinct periods, three golden peaks of centralized stability built the monuments that stand today.
            </p>
          </SectionReveal>

          {/* Period Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

            {/* 1. Old Kingdom */}
            <SectionReveal delay={0.1}>
              <div className="flex flex-col bg-chamber border border-dust p-6 rounded-[2px] h-full group hover:border-gold-deep transition-all duration-300">
                {/* FIXED: Swapped for verified Great Pyramid of Giza archive photo */}
                <ImageFrame
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Saqqara_pyramid_ver_2.jpg/1280px-Saqqara_pyramid_ver_2.jpg"
                  alt="The Great Pyramid of Giza"
                  aspectRatio="landscape"
                  className="mb-6"
                />
                <EraChip kingdom="old-kingdom" className="self-start mb-4" />
                <h3 className="font-display text-2xl text-gold-pale font-medium group-hover:text-gold-true transition-colors duration-300">
                  The Pyramid Age
                </h3>
                <p className="font-body text-sm text-gold-mist/60 mt-3 leading-relaxed grow">
                  An epoch of absolute royal divinity. Kings mobilized an entire nation to lift geometric mountains of stone to mirror the stars.
                </p>
                <Link href="/era/old-kingdom" className="font-sc-custom text-[11px] text-gold-true tracking-wider mt-6 group-hover:underline flex items-center gap-1.5 self-start">
                  Enter Kingdom &rarr;
                </Link>
              </div>
            </SectionReveal>

            {/* 2. Middle Kingdom */}
            <SectionReveal delay={0.2}>
              <div className="flex flex-col bg-chamber border border-dust p-6 rounded-[2px] h-full group hover:border-gold-deep transition-all duration-300">
                {/* FIXED: Swapped for authentic careworn obsidian portrait statue of Senusret III */}
                <ImageFrame
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Portrait_head_of_pharaoh_Sesostris-Senusret_III_from_a_sphinx_statue_02_%28cropped%29.jpg/960px-Portrait_head_of_pharaoh_Sesostris-Senusret_III_from_a_sphinx_statue_02_%28cropped%29.jpg"
                  alt="Obsidian Statue Head of Senusret III"
                  aspectRatio="landscape"
                  className="mb-6"
                />
                <EraChip kingdom="middle-kingdom" className="self-start mb-4" />
                <h3 className="font-display text-2xl text-gold-pale font-medium group-hover:text-gold-true transition-colors duration-300">
                  The Renaissance
                </h3>
                <p className="font-body text-sm text-gold-mist/60 mt-3 leading-relaxed grow">
                  A sophisticated era of classical literature, hydraulic works, and balanced governors who ruled with a weary realism.
                </p>
                <Link href="/era/middle-kingdom" className="font-sc-custom text-[11px] text-gold-true tracking-wider mt-6 group-hover:underline flex items-center gap-1.5 self-start">
                  Enter Kingdom &rarr;
                </Link>
              </div>
            </SectionReveal>

            {/* 3. New Kingdom */}
            <SectionReveal delay={0.3}>
              <div className="flex flex-col bg-chamber border border-dust p-6 rounded-[2px] h-full group hover:border-gold-deep transition-all duration-300">
                {/* FIXED: Swapped for authoritative architectural capture of Abu Simbel */}
                <ImageFrame
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Abu_Simbel_main_temple.jpg/1280px-Abu_Simbel_main_temple.jpg"
                  alt="Abu Simbel Great Rock Cut Temple Portal"
                  aspectRatio="landscape"
                  className="mb-6"
                />
                <EraChip kingdom="new-kingdom" className="self-start mb-4" />
                <h3 className="font-display text-2xl text-gold-pale font-medium group-hover:text-gold-true transition-colors duration-300">
                  The Golden Empire
                </h3>
                <p className="font-body text-sm text-gold-mist/60 mt-3 leading-relaxed grow">
                  Superpower expansionism. Gold flooded from southern mines, funding colossal rock temples and the Valley of the Kings.
                </p>
                <Link href="/era/new-kingdom" className="font-sc-custom text-[11px] text-gold-true tracking-wider mt-6 group-hover:underline flex items-center gap-1.5 self-start">
                  Enter Kingdom &rarr;
                </Link>
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>

      {/* 3. Quick Callout section for timeline */}
      <section className="w-full py-20 px-6 md:px-12 bg-void border-t border-dust relative z-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <SectionReveal className="flex flex-col items-center">
            <span className="font-sc-custom text-xs text-gold-true tracking-[0.2em] mb-3">
              INTERACTIVE CHRONOLOGY
            </span>
            <h2 className="text-display-md text-gold-pale font-light">
              Unroll the Scroll of Centuries
            </h2>
            <p className="font-body text-base text-gold-mist/60 max-w-xl mt-4 leading-relaxed">
              Every pharaoh, dynasty, and monument mapped across a proportionate river of time. Trace the unifiers, builders, and heretics who walked the banks of Nile.
            </p>
            <Link href="/timeline" className="mt-8">
              <button className="px-8 py-3.5 bg-gold-true text-void font-sc-custom text-xs tracking-wider rounded-sm hover:bg-gold-rich hover:shadow-[0_0_15px_rgba(201,148,58,0.4)] transition-all duration-300">
                Explore the Timeline Rail
              </button>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
