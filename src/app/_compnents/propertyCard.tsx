import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Property {
  image: string
  title: string
  price: number
  bedrooms: number
  bathrooms: number
  area: number
}

interface PropertyCardProps {
  property: Property
  index: number
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  return (
    <Link href="/rent/2">
      <motion.div
        className="overflow-hidden rounded-lg bg-white shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="relative h-48">
          <Image
            src={property.image}
            alt={property.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute left-2 top-2 rounded bg-orange-500 px-2 py-1 text-white">
            For Sale
          </div>
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-xl font-semibold">{property.title}</h3>
          <p className="mb-2 font-bold text-blue-600">
            AED {property.price.toLocaleString()}
          </p>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{property.bedrooms} beds</span>
            <span>{property.bathrooms} baths</span>
            <span>{property.area} sqft</span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
