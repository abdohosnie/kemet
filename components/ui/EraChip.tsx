import { Kingdom } from '../../lib/types'

const kingdomLabels: Record<Kingdom, string> = {
  'predynastic': 'Predynastic',
  'early-dynastic': 'Early Dynastic',
  'old-kingdom': 'Old Kingdom',
  'first-intermediate': '1st Intermediate',
  'middle-kingdom': 'Middle Kingdom',
  'second-intermediate': '2nd Intermediate',
  'new-kingdom': 'New Kingdom',
  'third-intermediate': '3rd Intermediate',
  'late-period': 'Late Period',
  'ptolemaic': 'Ptolemaic Period',
}

export default function EraChip({ kingdom, className = '' }: { kingdom: Kingdom; className?: string }) {
  const label = kingdomLabels[kingdom] || kingdom

  return (
    <span
      className={`inline-flex items-center px-3 py-1 border border-bronze-light/30 bg-tomb text-bronze-light text-meta rounded-sm select-none tracking-widest font-semibold uppercase text-[10px] ${className}`}
    >
      {label}
    </span>
  )
}
