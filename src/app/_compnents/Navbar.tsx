'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'For sale', href: '/sale' },
  { name: 'Commercial', href: '/commercial' },
  { name: 'For rent', href: '/rent' },
  { name: 'Contact us', href: '/contact' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed z-10 w-full bg-white shadow-sm"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          AmrRealtors24
        </Link>
        <nav className="hidden space-x-4 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 transition-colors hover:text-orange-500"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button className="rounded bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600">
          Login
        </button>
      </div>
    </motion.header>
  )
}
