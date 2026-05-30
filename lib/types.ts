export interface Era {
  id: string
  slug: string
  name: string
  arabicName: string
  startYear: number   // negative = BCE
  endYear: number
  kingdom: Kingdom
  description: string
  dynastyIds: string[]
  atmosphereColor: string  // accent color override for this era section
}

export type Kingdom =
  | 'predynastic'
  | 'early-dynastic'
  | 'old-kingdom'
  | 'first-intermediate'
  | 'middle-kingdom'
  | 'second-intermediate'
  | 'new-kingdom'
  | 'third-intermediate'
  | 'late-period'
  | 'ptolemaic'

export interface Dynasty {
  id: string
  slug: string
  number: number        // 1–33
  romanNumeral: string  // "I", "II", "XXXII"
  name: string          // "The First Dynasty"
  arabicName: string
  eraId: string
  kingdom: Kingdom
  startYear: number
  endYear: number
  capital: string
  summary: string       // 2–3 sentence editorial overview
  pharaohIds: string[]
  notableAchievements: string[]
  featuredImageUrl: string
}

export interface Pharaoh {
  id: string
  slug: string
  name: string
  arabicName?: string
  prenomen: string      // Throne name (cartouche name)
  nomen: string         // Birth name
  dynastyId: string
  reignStart: number
  reignEnd: number
  reignDurationYears: number
  titles: string[]      // e.g. ["Horus", "Nebty", "Golden Horus", "Son of Ra"]
  epithet: string       // e.g. "The Great" / "Builder of Pyramids"
  biography: string     // Full narrative — 4–8 paragraphs
  keyAchievements: string[]
  majorProjects: Monument[]
  artifacts: Artifact[]
  portraitImageUrl: string
  galleryImages: GalleryImage[]
  burialSite: string
  familyRelations: FamilyRelation[]
  legacyQuote?: string  // A short powerful line about their legacy
}

export interface Monument {
  name: string
  location: string
  description: string
  imageUrl?: string
}

export interface Artifact {
  id: string
  name: string
  currentLocation: string  // e.g. "Egyptian Museum, Cairo"
  period: string
  material: string
  imageUrl: string
  description: string
}

export interface GalleryImage {
  url: string
  alt: string
  caption: string
  type: 'statue' | 'relief' | 'tomb' | 'artifact' | 'monument' | 'portrait'
}

export interface FamilyRelation {
  name: string
  relationship: string  // "Father", "Mother", "Consort", "Son", "Daughter"
  pharaohId?: string    // If also a pharaoh in our system
}
