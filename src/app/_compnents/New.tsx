'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function UnderMap() {
  return (
    <div className="px-4 py-8">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="mb-6 text-4xl font-bold">
          We&apos;re UAE number one property website
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4">
              We offer a range of services designed to make your property search
              seamless. Our team is equipped to assist with property sales,
              rentals, property management, and investment advice. No matter
              what stage of the real estate process you are in, we have the
              expertise to guide you.
            </p>
            <ul className="mb-6 list-inside list-disc">
              <li>Property Sales</li>
              <li>Property Rentals</li>
              <li>Investment Consultation</li>
              <li>Property Management</li>
            </ul>
            <Link href="/about">
              <Button variant="outline">More about AmirRealtors24</Button>
            </Link>
          </div>
          <div className="grid gap-4">
            <motion.img
              src="/new2.png?height=200&width=200"
              alt="Person using smartphone"
              className="h-full w-full rounded-lg object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid items-center gap-8 md:grid-cols-2"
      >
        <motion.img
          src="/about_2.jpg.png?height=400&width=600"
          alt="Estate agents with client"
          className="h-full w-full rounded-lg object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        <div>
          <h2 className="mb-4 text-3xl font-bold">
            Find a trusted Estate Agent in your area
          </h2>
          <p className="mb-6">
            Looking for a reliable estate agent who understands your needs and
            can help you find the perfect home in Dubai? Our network of trusted
            agents is here to guide you through every step of the real estate
            process, from finding the right property to securing the best deal.
          </p>
          <Link href="https://wa.me/2347081203681" target="_blank">
            <Button>Find an Agent Now</Button>
          </Link>
        </div>
      </motion.section>
    </div>
  )
}
