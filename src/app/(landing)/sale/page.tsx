'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Sidebar from '@/app/_compnents/saleSidebar'
import PropertyCard from '@/app/_compnents/propertyCard'
import AdBanner from '@/app/_compnents/AdBanner'
import NewsSection from '@/app/_compnents/NewsLetter'
import Pagination from '@/app/_compnents/pagination'

const properties = Array(20)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    title: `Luxury Villa ${index + 1}`,
    price: 1500000 + index * 100000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2500 + index * 100,
    image: '/prop.png',
  }))

export default function PropertiesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 6
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
        {currentPage === 2 && <AdBanner className="my-8" />}
        {currentPage === 3 && <NewsSection className="my-8" />}
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
