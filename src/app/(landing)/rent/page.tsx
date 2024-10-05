'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Sidebar from '@/app/_compnents/saleSidebar'
import PropertyCard from '@/app/_compnents/propertyCard'
import AdBanner from '@/app/_compnents/AdBanner'
import NewsSection from '@/app/_compnents/NewsLetter'
import Pagination from '@/app/_compnents/pagination'

const properties = [
  {
    id: 1,
    title: 'Modern Family Villa',
    price: 2500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3000,
    image: '/saaaaa.png',
    location: 'Arabian Ranches, Dubai',
    description:
      'A beautiful 4-bedroom villa with a spacious garden and modern amenities, perfect for family living.',
  },
  {
    id: 2,
    title: 'Stylish Townhouse',
    price: 2200000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    image: '/jhds.png',
    location: 'Dubai Hills Estate, Dubai',
    description:
      'Charming townhouse featuring an open plan layout and access to community parks and pools.',
  },
  {
    id: 3,
    title: 'Luxury Apartment',
    price: 3500000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    image: '/sfdsd.png',
    location: 'Downtown Dubai, Dubai',
    description:
      'Luxurious apartment with stunning views of the Burj Khalifa and premium finishes throughout.',
  },
  {
    id: 4,
    title: 'Spacious Penthouse',
    price: 7000000,
    bedrooms: 4,
    bathrooms: 4,
    area: 4000,
    image: '/asfa.png',
    location: 'Dubai Marina, Dubai',
    description:
      'A magnificent penthouse with a private terrace, perfect for entertaining guests and enjoying the skyline.',
  },
  {
    id: 5,
    title: 'Charming Villa',
    price: 2900000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    image: '/sdfsa.png',
    location: 'Jumeirah Village Circle, Dubai',
    description:
      'A charming 5-bedroom villa with a large garden and access to community amenities.',
  },
  {
    id: 6,
    title: 'Contemporary Studio',
    price: 900000,
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    image: '/asa.png',
    location: 'Dubai Marina, Dubai',
    description:
      'A modern studio apartment in the heart of Dubai Marina, ideal for young professionals.',
  },
  {
    id: 7,
    title: 'Elegant Mansion',
    price: 15000000,
    bedrooms: 6,
    bathrooms: 7,
    area: 7000,
    image: '/asaa.png',
    location: 'Emirates Hills, Dubai',
    description:
      'An opulent mansion featuring luxurious finishes, a private pool, and expansive living spaces.',
  },
  {
    id: 8,
    title: 'Cozy Apartment',
    price: 1200000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1000,
    image: '/asda.png',
    location: 'Bur Dubai, Dubai',
    description:
      'A cozy apartment with modern interiors and easy access to local amenities and public transport.',
  },
  {
    id: 9,
    title: 'Stylish Loft',
    price: 1800000,
    bedrooms: 1,
    bathrooms: 1,
    area: 1100,
    image: '/sasda.png',
    location: 'Downtown Dubai, Dubai',
    description:
      'A stylish loft with high ceilings and large windows, offering breathtaking views of the city.',
  },
  {
    id: 10,
    title: 'Luxe Duplex',
    price: 4500000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2500,
    image: '/asdfasa.png',
    location: 'Palm Jumeirah, Dubai',
    description:
      'A luxurious duplex with stunning sea views and high-end finishes, located on the iconic Palm Jumeirah.',
  },
  {
    id: 11,
    title: 'Family-Friendly Townhouse',
    price: 2000000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    image: '/asdfasa.pngsas.png',
    location: 'The Meadows, Dubai',
    description:
      'A family-friendly townhouse with a spacious layout and access to parks and schools.',
  },
  {
    id: 12,
    title: 'Bright and Airy Apartment',
    price: 1300000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: '/asad.png',
    location: 'Al Barsha, Dubai',
    description:
      'A bright and airy apartment with a modern design, close to shopping and dining options.',
  },
  {
    id: 13,
    title: 'Sumptuous Villa',
    price: 3800000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    image: '/asdafdasda.png',
    location: 'Arabian Ranches, Dubai',
    description:
      'A sumptuous villa with elegant interiors and a landscaped garden, ideal for entertaining guests.',
  },
  {
    id: 14,
    title: 'Quaint Cottage',
    price: 1700000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    image: '/asdafsda.png',
    location: 'Jumeirah, Dubai',
    description:
      'A quaint cottage with a charming garden and cozy interiors, perfect for a peaceful lifestyle.',
  },
  {
    id: 15,
    title: 'Luxury Seaside Apartment',
    price: 3000000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    image: '/asdaf.png',
    location: 'Dubai Marina, Dubai',
    description:
      'A luxury seaside apartment with spectacular views and premium amenities, ideal for beach lovers.',
  },
  {
    id: 16,
    title: 'Grand Villa',
    price: 5000000,
    bedrooms: 6,
    bathrooms: 5,
    area: 4000,
    image: '/asdafsda.png',
    location: 'Al Furjan, Dubai',
    description:
      'A grand villa with spacious rooms, a private pool, and lush gardens, perfect for large families.',
  },
  {
    id: 17,
    title: 'Sleek Urban Loft',
    price: 2300000,
    bedrooms: 1,
    bathrooms: 1,
    area: 950,
    image: '/asad.png',
    location: 'Business Bay, Dubai',
    description:
      'A sleek urban loft with a modern design, located in the heart of Dubai’s business district.',
  },
  {
    id: 18,
    title: 'Contemporary Beach House',
    price: 4200000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2700,
    image: '/asdasdfa.png',
    location: 'Jumeirah Beach, Dubai',
    description:
      'A contemporary beach house with direct access to the beach and stunning ocean views.',
  },
  {
    id: 19,
    title: 'Elegant Family Home',
    price: 2400000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: '/asdafa.png',
    location: 'The Springs, Dubai',
    description:
      'An elegant family home with spacious interiors and community facilities for family fun.',
  },
  {
    id: 20,
    title: 'Luxury Urban Apartment',
    price: 3100000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1300,
    image: '/sada.png',
    location: 'Dubai Creek Harbour, Dubai',
    description:
      'A luxury urban apartment with modern finishes and spectacular views of the creek and city skyline.',
  },
]

console.log(properties)

export default function PropertiesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 20
  const indexOfLastProperty = currentPage * propertiesPerPage
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  )

  return (
    <main className="container mx-auto flex flex-grow flex-col px-4 py-8 md:flex-row">
      {/* <Sidebar className="mb-8 w-full md:mb-0 md:mr-8 md:w-1/4" /> */}
      <div className="w-full md:w-3/4">
        <motion.h1
          className="mb-6 text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Properties for Sale in UAE
        </motion.h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {currentProperties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        <AdBanner className="my-8" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {currentProperties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        <NewsSection className="my-8" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {currentProperties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        {/* {currentPage === 2 && <AdBanner className="my-8" />}
        {currentPage === 3 && <NewsSection className="my-8" />} */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(properties.length / propertiesPerPage)}
          onPageChange={setCurrentPage}
          className="mt-8"
        />
      </div>
    </main>
  )
}
