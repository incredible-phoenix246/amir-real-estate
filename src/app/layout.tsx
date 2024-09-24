import type { Metadata } from 'next'
import { cn } from '@/utils'
import { opensans, oran } from '@/fonts'
import '../styles/globals.scss'
import { Providers } from './provider'

export const metadata: Metadata = {
  title: 'AmirRealtors24',
  description:
    'Discover Luxury, Living in the UAE',
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
          <div className="mx-auto min-h-dvh w-full max-w-[1500px]">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
