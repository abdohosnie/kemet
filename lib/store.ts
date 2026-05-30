'use client'

import { create } from 'zustand'

interface KemetState {
  activeEra: string | null
  activeDynasty: string | null
  activePharaoh: string | null
  sidebarOpen: boolean
  
  setActiveEra: (eraId: string | null) => void
  setActiveDynasty: (dynastyId: string | null) => void
  setActivePharaoh: (pharaohId: string | null) => void
  setSidebarOpen: (open: boolean) => void
  resetState: () => void
}

export const useStore = create<KemetState>((set) => ({
  activeEra: 'old-kingdom', // Default starting era
  activeDynasty: null,
  activePharaoh: null,
  sidebarOpen: false,

  setActiveEra: (eraId) => set({ activeEra: eraId }),
  setActiveDynasty: (dynastyId) => set({ activeDynasty: dynastyId }),
  setActivePharaoh: (pharaohId) => set({ activePharaoh: pharaohId }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  resetState: () => set({ activeEra: 'old-kingdom', activeDynasty: null, activePharaoh: null, sidebarOpen: false }),
}))
