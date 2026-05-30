'use client'

import Link from 'next/link'
import { Pharaoh, Era, Dynasty } from '../../lib/types'
import { pharaohs } from '../../data/pharaohs'
import { slugify } from '../../lib/utils'

interface StatsProps {
  pharaoh: Pharaoh
  era?: Era
  dynasty?: Dynasty
}

export default function PharaohStats({ pharaoh, era, dynasty }: StatsProps) {
  // Check if a relative is profiled in our database
  const getRelationLink = (relationName: string) => {
    const slug = slugify(relationName)
    const match = pharaohs.find((p) => p.slug === slug || p.name.toLowerCase() === relationName.toLowerCase())
    if (match) {
      return `/pharaoh/${match.slug}`
    }
    return null
  }

  return (
    <aside className="w-full flex flex-col gap-8 bg-chamber border border-dust p-6 md:p-8 rounded-[2px] h-fit md:sticky md:top-24 shadow-[0_4px_25px_rgba(0,0,0,0.3)]">
      {/* 1. Core Profile Details */}
      <div className="flex flex-col gap-4">
        <h3 className="font-sc-custom text-xs text-gold-true tracking-[0.2em] border-b border-dust pb-3">
          Royal Inscriptions
        </h3>

        {/* Dynasty */}
        {dynasty && (
          <div className="flex flex-col gap-1">
            <span className="font-sc-custom text-[10px] text-text-muted">Ruling Dynasty</span>
            <Link href={`/dynasty/${dynasty.slug}`} className="font-display text-lg text-gold-pale hover:text-gold-true hover:underline transition-colors duration-300">
              {dynasty.name}
            </Link>
          </div>
        )}

        {/* Kingdom */}
        {era && (
          <div className="flex flex-col gap-1 mt-1">
            <span className="font-sc-custom text-[10px] text-text-muted">Kingdom Era</span>
            <Link href={`/era/${era.slug}`} className="font-display text-lg text-gold-pale hover:text-gold-true hover:underline transition-colors duration-300">
              {era.name}
            </Link>
          </div>
        )}

        {/* Capital */}
        {dynasty && (
          <div className="flex flex-col gap-1 mt-1">
            <span className="font-sc-custom text-[10px] text-text-muted">Capital City</span>
            <span className="font-display text-lg text-gold-pale">{dynasty.capital}</span>
          </div>
        )}

        {/* Burial Site */}
        <div className="flex flex-col gap-1 mt-1">
          <span className="font-sc-custom text-[10px] text-text-muted">Eternal Resting Place</span>
          <span className="font-display text-lg text-gold-pale italic">{pharaoh.burialSite}</span>
        </div>
      </div>

      {/* 2. Divine Royal Titles */}
      <div className="flex flex-col gap-4">
        <h3 className="font-sc-custom text-xs text-bronze-light tracking-[0.2em] border-b border-dust pb-3">
          Divine Titles
        </h3>
        <ul className="flex flex-col gap-2">
          {pharaoh.titles.map((title, idx) => (
            <li key={idx} className="flex gap-2.5 items-center text-sm font-body text-gold-mist/80">
              <span className="w-1.5 h-1.5 rotate-45 bg-gold-true/50 shrink-0" />
              <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Family Tree Relations */}
      {pharaoh.familyRelations && pharaoh.familyRelations.length > 0 && (
        <div className="flex flex-col gap-4">
          <h3 className="font-sc-custom text-xs text-gold-true tracking-[0.2em] border-b border-dust pb-3">
            Royal Kinship
          </h3>
          <div className="flex flex-col gap-3">
            {pharaoh.familyRelations.map((relation, idx) => {
              const link = getRelationLink(relation.name)
              return (
                <div key={idx} className="flex justify-between items-center text-sm font-body border-b border-dust/20 pb-2 last:border-0 last:pb-0">
                  <span className="text-text-muted text-xs">{relation.relationship}</span>
                  {link ? (
                    <Link href={link} className="text-gold-pale font-medium hover:text-gold-true hover:underline transition-colors duration-300">
                      {relation.name}
                    </Link>
                  ) : (
                    <span className="text-gold-pale/75 font-medium">{relation.name}</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </aside>
  )
}
