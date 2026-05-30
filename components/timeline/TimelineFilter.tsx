'use client'

import { Kingdom } from '../../lib/types'

interface FilterProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const filters = [
  { label: 'All Era', value: 'all' },
  { label: 'Old Kingdom', value: 'old-kingdom' },
  { label: 'Middle Kingdom', value: 'middle-kingdom' },
  { label: 'New Kingdom', value: 'new-kingdom' },
  { label: 'Late Period', value: 'late-period' },
  { label: 'Ptolemaic', value: 'ptolemaic' },
]

export default function TimelineFilter({ activeFilter, onFilterChange }: FilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 px-6 select-none z-20 relative">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value
        return (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`px-5 py-2 font-sc-custom text-xs tracking-wider border rounded-full transition-all duration-300 ${isActive
              ? 'bg-gold-true border-gold-true text-void shadow-[0_0_15px_rgba(201,148,58,0.4)]'
              : 'border-dust text-gold-mist/70 hover:border-gold-deep hover:text-gold-true bg-chamber'
              }`}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
