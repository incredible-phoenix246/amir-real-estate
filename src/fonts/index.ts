import { Oranienbaum, Open_Sans } from 'next/font/google'

export const opensans = Open_Sans({
  subsets: [
    'latin',
    'cyrillic-ext',
    'latin-ext',
    'vietnamese',
    'greek',
    'cyrillic',
  ],
  display: 'swap',
  variable: '--font-open',
})

export const oran = Oranienbaum({
  subsets: ['latin', 'cyrillic-ext', 'latin-ext', 'cyrillic'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-oran',
})
