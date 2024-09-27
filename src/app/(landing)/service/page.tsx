'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Property Buying',
    description: 'Find the Perfect Home or Investment',
  },
  {
    title: 'Property Selling',
    description: 'Maximize the Value of Your Property',
  },
  {
    title: 'Rental Services',
    description: 'Find the Ideal Rental or Rent Out Your Property',
  },
  {
    title: 'Property Management',
    description: 'Stress-Free Management for Your Property',
  },
  {
    title: 'Real Estate Investment',
    description: 'Unlock Profitable Investment Opportunities',
  },
  {
    title: 'Commercial Real Estate',
    description: 'Find the Ideal Space for Your Business',
  },
  {
    title: 'Relocation Assistance',
    description: 'Seamless Relocation Support',
  },
]

export default function Home() {
  return (
    <main className="flex-grow pt-14">
      <section className="relative h-[60vh] md:h-[80vh]">
        <Image
          src="/bg-gen.png"
          alt="Dubai Skyline"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Expert Solutions for All Your Real
          </h1>
          <h2 className="mb-8 text-3xl font-bold md:text-5xl">Estate Needs</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center rounded-full bg-orange-500 px-6 py-3 text-white"
          >
            <svg
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Watch Video
          </motion.button>
        </motion.div>
      </section>

      <section className="px-4 py-16 md:px-0">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center text-3xl font-bold"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 text-center text-gray-600"
          >
            At AmrRealtors24, we offer a full suite of real estate services
            designed to make your property journey smooth and hassle-free.
            Whether you&apos;re buying, selling, renting, or investing, our team
            of experienced professionals is here to provide personalized
            guidance every step of the way.
          </motion.p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg bg-white p-6 shadow-md"
              >
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
