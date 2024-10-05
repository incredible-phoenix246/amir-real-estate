import React from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Home,
  //   Balcony,
  BedDouble,
  Ruler,
  Bath,
  MapPin,
  Building2,
  Dumbbell,
  Car,
  Shirt,
  Trees,
  //   Pool,
} from 'lucide-react'

export default function PropertyListing() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Tabs defaultValue="gallery" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-4">
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="info">Apartment Info & Price</TabsTrigger>
          <TabsTrigger value="amenities">Amenities</TabsTrigger>
          <TabsTrigger value="insights">Price Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="gallery" className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <Image
                src="/new.png"
                alt="Living Room"
                width={600}
                height={400}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/new.png"
                alt="Bedroom"
                width={280}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/new.png"
                alt="Bathroom"
                width={280}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/new.png"
                alt="Kitchen"
                width={280}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <Image
                src="/new.png"
                alt="View"
                width={280}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="relative">
              <Image
                src="/new.png"
                alt="More photos"
                width={280}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50">
                <span className="font-semibold text-white">+37 photos</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Home className="mr-2 h-5 w-5" />
              <span>Townhouse</span>
            </div>
            <div className="flex items-center">
              {/* <Balcony className="mr-2 h-5 w-5" /> */}
              <span>Balcony</span>
            </div>
            <div className="flex items-center">
              <BedDouble className="mr-2 h-5 w-5" />
              <span>Bedrooms: 3 + Maid</span>
            </div>
            <div className="flex items-center">
              <Ruler className="mr-2 h-5 w-5" />
              <span>Property Size: 1,990 sqft / 185 sqm</span>
            </div>
            <div className="flex items-center">
              <Bath className="mr-2 h-5 w-5" />
              <span>Bathrooms: 4</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="mb-4 text-3xl font-bold">AED 2,400,000</h2>
          <p className="mb-2 text-blue-600">See upfront costs</p>
          <p className="mb-4 text-gray-600">
            Own this from just 100,071 AED/month
          </p>
          <Button className="mb-8 w-full">Contact Agent</Button>

          <h3 className="mb-4 text-xl font-semibold">Property details</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              Parkside 2 in Emaar South is a beautiful residential development
              that offers a luxurious and peaceful living experience. The
              development is surrounded by lush green parks and stunning
              landscaped gardens, providing residents with a serene and tranquil
              environment to call home.
            </p>
            <p>
              The homes in Parkside 2 are thoughtfully designed with modern
              interiors and high-end finishes, providing residents with a
              comfortable and stylish living space. The development also
              features a wide range of amenities, including swimming pools,
              fitness centers, and outdoor recreational areas, ensuring that
              residents have everything they need to live a healthy and active
              lifestyle.
            </p>
            <p>
              Furthermore, Parkside 2 is conveniently located close to key areas
              in Dubai, including the Expo 2020 site, Al Maktoum International
              Airport, and Dubai South Business Park, making it an ideal choice
              for professionals and families looking for a centrally located
              home.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold">Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Shirt className="mr-2 h-5 w-5" />
                <span>Maids Room</span>
              </div>
              <div className="flex items-center">
                {/* <Balcony className="mr-2 h-5 w-5" /> */}
                <span>Balcony</span>
              </div>
              <div className="flex items-center">
                <Trees className="mr-2 h-5 w-5" />
                <span>Private Garden</span>
              </div>
              <div className="flex items-center">
                {/* <Pool className="mr-2 h-5 w-5" /> */}
                <span>Shared Pool</span>
              </div>
              <div className="flex items-center">
                <Car className="mr-2 h-5 w-5" />
                <span>Covered Parking</span>
              </div>
              <div className="flex items-center">
                <Building2 className="mr-2 h-5 w-5" />
                <span>Built in Wardrobes</span>
              </div>
              <div className="flex items-center">
                <Dumbbell className="mr-2 h-5 w-5" />
                <span>Shared Gym</span>
              </div>
              <div className="flex items-center">
                {/* <Pool className="mr-2 h-5 w-5" /> */}
                <span>Children&apos;s Pool</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold">Location</h3>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>
                    Parkside 2, EMAAR South, Dubai South (Dubai World Central),
                    Dubai
                  </span>
                </div>
                <Button variant="link" className="mt-2 p-0">
                  View on map →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-4">
              <div className="mb-4 flex items-center space-x-4">
                <Image
                  src="/new.png"
                  alt="Bertie Hampton"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">Managed by Bertie Hampton</h4>
                  <p className="text-sm text-gray-600">
                    Company review score: 4.9
                  </p>
                  <p className="text-sm text-gray-600">
                    Based on 147 reviews from 793 properties
                  </p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Building2 className="mr-2 h-5 w-5" />
                <span>793 managed properties</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
