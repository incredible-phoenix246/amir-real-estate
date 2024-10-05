/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function UnderHouse() {
  return (
    <div className="px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className="mb-2 text-xl text-orange-400">
          Exclusive Homes Near the Palace
        </h2>
        <h1 className="text-navy-900 mb-4 text-4xl font-bold">
          Where Luxury and Royalty Converge
        </h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          Discover stunning homes located in close proximity to Dubai&apos;s
          most prestigious landmarks, offering unparalleled access to royal
          neighborhoods and world-class amenities.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative mb-8 overflow-hidden"
      >
        <motion.img
          src="/forall.png?height=400&width=600"
          alt="Estate agents with client"
          className="h-full w-full rounded-lg object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <Button className="rounded-full bg-blue-600 px-6 py-2 font-semibold text-white transition duration-300 hover:bg-blue-700">
          Explore Homes Near the Palace
        </Button>
      </motion.div>
    </div>
  )
}
