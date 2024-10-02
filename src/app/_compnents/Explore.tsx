'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const properties = [
  {
    id: 1,
    title: 'Family-Friendly Townhouses - Al Furjan',
    description:
      'Spacious townhouses with modern amenities, perfect for families seeking a blend of privacy and community living. The community is well-connected with schools, parks, and retail outlets, making it perfect for families seeking a balance between urban life and a peaceful suburban feel.',
    image: '/feat3.png?height=300&width=400',
    price: 'AED 1.2 Million',
  },
  {
    id: 2,
    title: 'Jumeirah Village Circle (JVC) – Modern Apartments',
    description:
      'Spacious townhouses with modern amenities, perfect for families seeking a blend of privacy and community living. The community is well-connected with schools, parks, and retail outlets, making it perfect for families seeking a balance between urban life and a peaceful suburban feel.',
    image: '/feat2.png?height=300&width=400',
    price: 'AED 1.2 Million',
  },
  {
    id: 3,
    title: 'Dubai Marina - Luxury Apartments',
    description:
      'Stunning apartments with breathtaking views of the marina. These modern homes offer a perfect blend of luxury and convenience, with world-class amenities and easy access to shopping, dining, and entertainment options.',
    image: '/feat1.png?height=300&width=400',
    price: 'AED 2.5 Million',
  },
]

export default function FeaturedPropertiesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === properties.length ? 0 : prevIndex + 1
    )
  }

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? properties.length - 1 : prevIndex - 1
    )
  }

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      handleNext()
    }, 5000)

    return () => {
      resetTimeout()
    }
  }, [currentIndex])

  return (
    <div className="container mx-auto px-2 py-12">
      <h2 className="mb-2 text-xl text-orange-400">Featured Properties</h2>
      <h1 className="text-navy-900 mb-8 text-3xl font-bold md:text-4xl lg:text-5xl">
        Explore Affordable Homes Across the UAE
      </h1>
      <div className="relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial={direction > 0 ? 'hiddenRight' : 'hiddenLeft'}
            animate="visible"
            exit="exit"
            className="flex flex-col gap-6 md:flex-row"
          >
            {[
              properties[currentIndex],
              properties[(currentIndex + 1) % properties.length],
            ].map((property) => (
              <div
                key={property.id}
                className="flex-1 overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={property.image}
                    alt={property.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    {property.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{property.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">
                      Starting from {property.price}
                    </span>
                    <Button variant="default">View property</Button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 hidden -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md lg:left-4 lg:block"
          aria-label="Previous property"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md lg:block"
          aria-label="Next property"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  )
}
