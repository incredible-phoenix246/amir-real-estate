/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
  Bed,
  Bath,
  Maximize,
  Camera,
  MapPin,
  MessageCircle,
  Mail,
  Phone,
  Heart,
  MoreHorizontal,
} from 'lucide-react'
import Link from 'next/link'

interface Property {
  id: number
  type: string
  price: string
  description: string
  bedrooms: number
  bathrooms: number
  area: number
  location: string
  image: string
  imageCount: number
  listedTime: string
}

const PropertyCard = ({ property }: { property: Property }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card className="mx-auto mb-4 w-full max-w-2xl">
      <CardHeader className="relative p-0">
        <img
          src={property.image}
          alt={property.type}
          className="h-64 w-full rounded-t-lg object-cover"
        />
        <div className="absolute left-2 top-2 flex gap-2"></div>
        <div className="absolute bottom-2 left-2 rounded bg-gray-900 bg-opacity-75 px-2 py-1 text-white">
          <Camera className="mr-1 inline-block" size={16} />
          {property.imageCount}
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{property.type}</h3>
            <p className="text-2xl font-bold">{property.price} AED</p>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={isFavorite ? 'fill-red-500 text-red-500' : ''} />
          </Button>
        </div>
        <p className="mb-4 text-sm text-gray-600">{property.description}</p>
        <div className="mb-4 flex gap-4">
          <span className="flex items-center">
            <Bed className="mr-1" size={16} /> {property.bedrooms}
          </span>
          <span className="flex items-center">
            <Bath className="mr-1" size={16} /> {property.bathrooms}
          </span>
          <span className="flex items-center">
            <Maximize className="mr-1" size={16} /> {property.area} sq
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin size={16} className="mr-1" />
          {property.location}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-between border-t pt-4 sm:flex-row">
        <p className="mb-2 text-sm text-gray-600 sm:mb-0">
          Listed {property.listedTime} Ago
        </p>
        <div className="flex gap-2">
          {/* <Button variant="outline" size="sm">
            <MessageCircle size={16} /> Chat
          </Button> */}
          <Link href="mailto:amirrealto@amirestate.com" target="_blank">
            <Button variant="outline" size="sm">
              <Mail size={16} /> Email
            </Button>
          </Link>

          <Link href="https://wa.me/2349022795937" target="_blank">
            <Button variant="outline" size="sm">
              <Phone size={16} /> WhatsApp
            </Button>
          </Link>
          <Button variant="outline" size="icon">
            <MoreHorizontal size={16} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default function PropertyListings() {
  const properties = [
    {
      id: 1,
      type: 'Apartment',
      price: '2,500,000',
      description:
        'This Property Offers 2 Bedrooms Either Side Both Comprising Of En Suites With The Master Bedroom Offering Access To The Balcony. The Property Also Offers A Private Landscaped Garden, Study Room And Downstairs Guest WC.',
      bedrooms: 2,
      bathrooms: 2,
      area: 1099,
      location:
        'Villa Residences Creek Beach, Creek Beach, Dubai Creek Harbour (The Lagoons), Dubai',
      image: 'Link.png',
      imageCount: 12,
      listedTime: '2 Hours',
    },
    {
      id: 2,
      type: 'Villa',
      price: '5,000,000',
      description:
        'Stunning 4-bedroom villa with a spacious layout and luxurious finishes. Located in a serene neighborhood with a private pool and garden.',
      bedrooms: 4,
      bathrooms: 4,
      area: 2500,
      location: 'Jumeirah Village Circle, Dubai',
      image: 'prop12.png',
      imageCount: 10,
      listedTime: '1 Day',
    },
    {
      id: 3,
      type: 'Townhouse',
      price: '3,200,000',
      description:
        'Modern 3-bedroom townhouse with an open-plan living area and access to community amenities including a pool and gym.',
      bedrooms: 3,
      bathrooms: 3,
      area: 2000,
      location: 'Dubai Hills Estate, Dubai',
      image: 'prop23.png',
      imageCount: 8,
      listedTime: '3 Days',
    },
    {
      id: 4,
      type: 'Penthouse',
      price: '12,000,000',
      description:
        'Luxurious penthouse with panoramic views of the city skyline. Featuring 5 bedrooms, a private terrace, and high-end appliances.',
      bedrooms: 5,
      bathrooms: 6,
      area: 4000,
      location: 'Downtown Dubai, Dubai',
      image: 'gea.png',
      imageCount: 15,
      listedTime: '5 Days',
    },
    {
      id: 5,
      type: 'Apartment',
      price: '1,800,000',
      description:
        'Charming 1-bedroom apartment located in a vibrant community, featuring modern finishes and a balcony with a view.',
      bedrooms: 1,
      bathrooms: 1,
      area: 800,
      location: 'Dubai Marina, Dubai',
      image: 'aa.png',
      imageCount: 5,
      listedTime: '10 Hours',
    },
    {
      id: 6,
      type: 'Villa',
      price: '8,500,000',
      description:
        'Exquisite 5-bedroom villa with premium finishes, a large garden, and access to exclusive community facilities.',
      bedrooms: 5,
      bathrooms: 5,
      area: 3500,
      location: 'Arabian Ranches, Dubai',
      image: 'as.png',
      imageCount: 7,
      listedTime: '1 Week',
    },
    {
      id: 7,
      type: 'Apartment',
      price: '3,000,000',
      description:
        'Stylish 2-bedroom apartment with modern design and luxury amenities in a prime location close to shopping and entertainment.',
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      location: 'Business Bay, Dubai',
      image: 'ada.png',
      imageCount: 6,
      listedTime: '4 Days',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}
