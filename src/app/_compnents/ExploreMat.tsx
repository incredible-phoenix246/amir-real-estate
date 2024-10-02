'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const cities = [
  {
    id: 1,
    name: 'Abu Dhabi',
    image: '/prop2.png?height=200&width=300',
  },
  {
    id: 2,
    name: 'Dubai',
    image: '/prop4.png?height=200&width=300',
  },
  {
    id: 3,
    name: 'Sharjah',
    image: '/prop3.png?height=200&width=300',
  },
]

const dubaiPrices = {
  highest: '22,000,000 AED',
  average: '1,343,860 AED',
  lowest: '219,800 AED',
}

const mapContainerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: 25.2048, // Dubai coordinates
  lng: 55.2708,
}

export default function ExploreUAEMarket() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  })

  const [, setMap] = useState<google.maps.Map | null>(null)

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

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
      prevIndex + 1 === cities.length ? 0 : prevIndex + 1
    )
  }

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? cities.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      handleNext()
    }, 5000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-navy-900 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
        Explore the UAE market
      </h1>
      <p className="mb-8 text-gray-600">
        Dive deep into the UAE&apos;s real estate market with prices,
        transaction histories and community insights to help you make an
        educated decision.
      </p>

      <div className="relative mb-12 overflow-hidden">
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
            {cities.map((city) => (
              <div key={city.id} className="w-full flex-shrink-0">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <Image
                    src={city.image}
                    alt={city.name}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-semibold text-white">
                      {city.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
          aria-label="Previous city"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
          aria-label="Next city"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      <h2 className="mb-4 text-2xl font-semibold">
        UAE property prices by area
      </h2>
      <div className="mb-4 flex gap-4">
        <Button variant="default">Buy</Button>
        <Button variant="outline">Rent</Button>
      </div>

      <div className="mb-4 rounded-lg bg-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-semibold">Dubai prices</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">Highest:</span>
            <span>{dubaiPrices.highest}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Average:</span>
            <span>{dubaiPrices.average}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Lowest:</span>
            <span>{dubaiPrices.lowest}</span>
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          * The data displayed is based on listing price in last 3 months
        </p>
      </div>

      <div className="relative h-[400px] overflow-hidden rounded-lg">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <div>Loading...</div>
        )}
        <button
          className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md"
          aria-label="See full map"
        >
          <Maximize2 className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  )
}
