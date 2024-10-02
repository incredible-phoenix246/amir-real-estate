'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const properties = [
  {
    id: 1,
    title: 'Al Furjan - Family-Friendly Townhouses',
    price: '1,100,000 AED',
    image: '/home1.png?height=200&width=300',
  },
  {
    id: 2,
    title: 'Al Furjan - Family-Friendly Townhouses',
    price: '1,100,000 AED',
    image: '/home2.png?height=200&width=300',
  },
  {
    id: 3,
    title: 'Al Furjan - Family-Friendly Townhouses',
    price: '1,100,000 AED',
    image: '/home3.png?height=200&width=300',
  },
  {
    id: 4,
    title: 'Al Furjan - Family-Friendly Townhouses',
    price: '1,100,000 AED',
    image: '/home4.png?height=200&width=300',
  },
]

export default function FeaturedHomesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
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
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="mb-2 text-xl text-orange-400">Featured Homes</h2>
          <h1 className="text-navy-900 text-lg font-bold md:text-4xl lg:text-5xl">
            Affordable Homes in Dubai&apos;s Most Desirable Communities
          </h1>
        </div>
        <a href="#" className="text-blue-600 hover:underline">
          See all
        </a>
      </div>
      <div className="relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                handleNext()
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrevious()
              }
            }}
            className="flex gap-6"
          >
            {[...Array(3)].map((_, index) => {
              const propertyIndex = (currentIndex + index) % properties.length
              const property = properties[propertyIndex]
              return (
                <div
                  key={property.id}
                  className="w-full flex-shrink-0 overflow-hidden rounded-lg bg-white shadow-lg md:w-[calc(33.333%-1rem)]"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={property.image}
                      alt={property.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold">
                      {property.title}
                    </h3>
                    <p className="mb-4 text-xl font-bold">{property.price}</p>
                    <div className="flex items-center justify-between">
                      <Button variant="default">View property</Button>
                      <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200">
                        <Heart className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
          aria-label="Previous property"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
          aria-label="Next property"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  )
}
