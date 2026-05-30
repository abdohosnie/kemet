import { Cormorant_Garamond, Cormorant_SC, Source_Serif_4 } from 'next/font/google'

export const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

export const scFont = Cormorant_SC({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sc',
})

export const bodyFont = Source_Serif_4({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-body',
})
