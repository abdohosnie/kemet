import TimelineRail from '../../components/timeline/TimelineRail'
import SectionReveal from '../../components/ui/SectionReveal'
import GoldDivider from '../../components/ui/GoldDivider'

export default function TimelinePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-void pb-24">
      {/* Editorial Header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center flex flex-col items-center">
        <span className="font-sc-custom text-xs text-bronze-light tracking-[0.25em] block mb-2">
          CHRONOLOGY OF COGNITION
        </span>
        <h1 className="text-display-xl font-medium text-gold-pale">
          The River of Time
        </h1>
        <GoldDivider className="max-w-xs mt-4" />
        <p className="font-body text-lead text-gold-mist/75 max-w-2xl mt-4 leading-relaxed">
          Six thousand years of human history, preserved in stone and bronze. 
          Scrub through the dynasties below to explore the reigns that forged a cosmos in the Nile desert.
        </p>
      </section>

      {/* Centerpiece Horizontal Scrollable Timeline */}
      <SectionReveal className="w-full z-20">
        <TimelineRail />
      </SectionReveal>
    </div>
  )
}
