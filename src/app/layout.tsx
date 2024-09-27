import type { Metadata } from 'next'
import { cn } from '@/utils'
import { opensans, oran } from '@/fonts'
import '../styles/globals.scss'
import { Providers } from './provider'
import Footer from './_compnents/Footer'
import Navbar from './_compnents/Navbar'

export const metadata: Metadata = {
  title: 'AmirRealtors24',
  description: 'Discover Luxury, Living in the UAE',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('antialiased', opensans.className, oran.variable)}
    >
      <body>
        <Providers>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
