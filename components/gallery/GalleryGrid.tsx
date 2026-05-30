'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { artifacts } from '../../data/artifacts'
import { dynasties } from '../../data/dynasties'
import GoldDivider from '../ui/GoldDivider'
import SectionReveal from '../ui/SectionReveal'

const categories = [
  { label: 'All Artifacts', value: 'all' },
  { label: 'Statues', value: 'statue' },
  { label: 'Reliefs & Carvings', value: 'relief' },
  { label: 'Tomb Treasures', value: 'tomb' },
  { label: 'Jewelry & Objects', value: 'artifact' },
  { label: 'Monuments', value: 'monument' },
]

export default function GalleryGrid() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDynasty, setSelectedDynasty] = useState('all')

  const getDynastyName = (dynastyId?: string) => {
    if (!dynastyId) return 'Ancient Egypt'
    const dyn = dynasties.find((d) => d.id === dynastyId)
    return dyn ? `Dynasty ${dyn.romanNumeral}` : 'Ancient Egypt'
  }

  const filteredArtifacts = artifacts.filter((art) => {
    if (selectedCategory !== 'all' && art.category !== selectedCategory) {
      return false
    }
    if (selectedDynasty !== 'all' && art.dynastyId !== selectedDynasty) {
      return false
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      const matchesName = art.name.toLowerCase().includes(query)
      const matchesDesc = art.description.toLowerCase().includes(query)
      const matchesMat = art.material.toLowerCase().includes(query)
      const matchesLoc = art.currentLocation.toLowerCase().includes(query)
      return matchesName || matchesDesc || matchesMat || matchesLoc
    }
    return true
  })

  return (
    <div className="flex flex-col w-full min-h-screen bg-void pb-24">
      {/* 1. Ornate Header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center flex flex-col items-center">
        <span className="font-sc-custom text-xs text-bronze-light tracking-[0.25em] block mb-2">
          ROYAL ARTIFACTS
        </span>
        <GoldDivider className="max-w-[280px]" />
        <h1 className="text-display-lg font-light text-gold-pale mt-2">
          Treasures Across the Millennia
        </h1>
        <p className="font-body text-gold-mist/70 text-base max-w-xl mt-4 leading-relaxed">
          Explore sacred items, divine statues, and timeless treasures recovered from tombs and temple complexes along the Nile Valley.
        </p>
      </section>

      {/* 2. Interactive Search & Filters Bar */}
      <section className="max-w-6xl mx-auto px-6 w-full py-8 z-30 relative flex flex-col gap-6 items-center">
        <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between bg-chamber border border-dust p-5 rounded-[2px] shadow-lg">
          {/* Search bar */}
          <div className="relative w-full lg:max-w-xs flex items-center">
            <span className="absolute left-3 text-text-muted">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search by name, material, museum..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-dust bg-void text-gold-pale rounded-sm text-sm tracking-wide focus:outline-none focus:border-gold-true transition-colors duration-300"
            />
          </div>

          {/* Categories Grid (Desktop) */}
          <div className="hidden lg:flex flex-wrap items-center gap-1">
            {categories.map((cat) => {
              const active = selectedCategory === cat.value
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3.5 py-1.5 font-sc-custom text-[11px] tracking-wider rounded-sm transition-all duration-300 ${active
                      ? 'text-gold-true bg-gold-true/5 border border-gold-true/30'
                      : 'text-gold-mist/60 hover:text-gold-true border border-transparent'
                    }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Categories select (Mobile) */}
          <div className="flex lg:hidden w-full gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-dust bg-void text-gold-pale rounded-sm text-sm focus:outline-none focus:border-gold-true"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value} className="bg-chamber text-gold-pale">
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Dynasty Select filter */}
          <div className="w-full lg:max-w-xs flex items-center gap-2">
            <span className="font-sc-custom text-[10px] text-text-muted tracking-widest hidden sm:inline whitespace-nowrap">
              FILTER ERA:
            </span>
            <select
              value={selectedDynasty}
              onChange={(e) => setSelectedDynasty(e.target.value)}
              className="w-full px-3 py-2 border border-dust bg-void text-gold-pale rounded-sm text-sm focus:outline-none focus:border-gold-true"
            >
              <option value="all" className="bg-chamber">All Dynasties</option>
              {dynasties.map((d) => (
                <option key={d.id} value={d.id} className="bg-chamber">
                  Dynasty {d.romanNumeral} ({d.capital})
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* 3. Float Canvas Grid */}
      <section className="max-w-6xl mx-auto px-6 w-full py-6 z-20 relative">
        {filteredArtifacts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredArtifacts.map((art, index) => (
              <SectionReveal key={art.id} delay={(index % 3) * 0.05} className="group relative overflow-hidden aspect-3/4 bg-chamber rounded-[2px]">
                <Image
                  src={art.imageUrl}
                  alt={art.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
                />

                <div className="absolute inset-0 bg-linear-to-t from-void via-void/30 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 left-4 z-20">
                  <span className="px-2.5 py-1 bg-void/90 backdrop-blur-sm border border-dust/60 text-[9px] font-sc-custom text-bronze-light font-medium tracking-widest rounded-sm">
                    {art.category.toUpperCase()}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 z-30 flex flex-col gap-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-linear-to-t from-void via-void/95 to-transparent">
                  <span className="font-sc-custom text-[10px] text-gold-true tracking-widest">
                    {getDynastyName(art.dynastyId)}
                  </span>

                  <h3 className="font-display text-xl text-gold-pale leading-tight font-medium">
                    {art.name}
                  </h3>

                  <p className="font-body text-xs text-gold-mist/70 leading-relaxed line-clamp-3">
                    {art.description}
                  </p>

                  <div className="flex flex-col gap-0.5 mt-2 pt-2 border-t border-dust/35 text-[10px] font-sc text-text-muted">
                    <span>Material: {art.material}</span>
                    <span className="truncate">Held at: {art.currentLocation}</span>
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex flex-col justify-end group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none">
                  <span className="font-sc-custom text-[9px] text-gold-true/70 tracking-widest">
                    {getDynastyName(art.dynastyId)}
                  </span>
                  <h3 className="font-display text-lg text-gold-pale font-medium truncate mt-1">
                    {art.name}
                  </h3>
                </div>
              </SectionReveal>
            ))}
          </div>
        ) : (
          <div className="w-full py-20 flex flex-col items-center justify-center border border-dust bg-chamber/50 rounded-sm">
            <span className="font-sc text-sm text-gold-mist/40 tracking-widest uppercase">
              No Royal Relics Match the Query
            </span>
          </div>
        )}
      </section>
    </div>
  )
}
