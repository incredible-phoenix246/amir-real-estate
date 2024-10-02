'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'For sale', href: '/sale' },
  { name: 'Commercial', href: '/commercial' },
  { name: 'For rent', href: '/rent' },
  { name: 'Contact us', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed z-10 w-full bg-white shadow-sm"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          AmirRealtors24
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
        <button className="hidden rounded bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600 md:block">
          Login
        </button>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <nav className="flex flex-col space-y-4 bg-white px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 transition-colors hover:text-orange-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full rounded bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600">
                Login
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
