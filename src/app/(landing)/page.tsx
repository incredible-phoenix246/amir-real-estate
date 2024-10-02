/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ForSaleSection from '../_compnents/sales'
import FeaturedPropertiesSlider from '../_compnents/Explore'
import FeaturedHomesCarousel from '../_compnents/FeaturedSales'

const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.5 },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <section className="relative h-[60vh] md:h-[80vh]">
          <Image
            src="/bg-gen.png"
            alt="Dubai Skyline"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white lg:top-1/4">
            <h1 className="mb-4 max-w-3xl text-4xl font-bold md:text-6xl">
              Discover Luxury, Living in Dubai
            </h1>
          </div>
        </section>
        <motion.div
          className="container mx-auto space-y-12 px-4 py-8"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <ForSaleSection />
          <FeaturedPropertiesSlider />
          <FeaturedHomesCarousel />
          {/* Hero Section */}
          <motion.section
            className="grid items-center gap-8 md:grid-cols-2"
            variants={fadeInUp}
          >
            <div>
              <motion.h1
                className="mb-4 text-3xl font-bold"
                variants={fadeInUp}
              >
                Find Your Dream Home with Our Exclusive Listings
              </motion.h1>
              <motion.p className="mb-4" variants={fadeInUp}>
                Discover a wide range of properties tailored to your
                preferences. Our extensive database includes everything from
                cozy apartments to luxurious villas.
              </motion.p>
              <motion.form className="space-y-4" variants={fadeInUp}>
                <Input placeholder="Enter location" />
                <Input placeholder="Property type" />
                <Input placeholder="Price range" />
                <Button className="w-full">Search Properties</Button>
              </motion.form>
            </div>
            <motion.div className="grid grid-cols-2 gap-4" variants={fadeInUp}>
              <motion.img
                src="/prop2.png?height=200&width=200"
                alt="Property 1"
                className="h-auto w-full rounded-lg"
                variants={fadeInUp}
              />
              <motion.img
                src="/prop2.png?height=200&width=200"
                alt="Property 2"
                className="h-auto w-full rounded-lg"
                variants={fadeInUp}
              />
              <motion.img
                src="/prop2.png?height=200&width=200"
                alt="Property 3"
                className="h-auto w-full rounded-lg"
                variants={fadeInUp}
              />
            </motion.div>
          </motion.section>

          {/* Affordable Homes Section */}
          <motion.section variants={fadeInUp}>
            <motion.h2 className="mb-4 text-2xl font-bold" variants={fadeInUp}>
              Explore Affordable Homes Across the UAE
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Family-Friendly Townhouses in Al Furjan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="/prop2.png?height=200&width=400"
                      alt="Al Furjan Townhouses"
                      className="mb-4 w-full rounded-lg"
                    />
                    <p>Starting from AED 1,200,000</p>
                  </CardContent>
                  <CardFooter>
                    <Button>View Details</Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Spacious 1 & 2 BHK Apartments in Sharjah
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="/prop2.png?height=200&width=400"
                      alt="Sharjah Apartments"
                      className="mb-4 w-full rounded-lg"
                    />
                    <p>Starting from AED 450,000</p>
                  </CardContent>
                  <CardFooter>
                    <Button>View Details</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* Dubai's Desirable Communities Section */}
          <motion.section variants={fadeInUp}>
            <motion.h2 className="mb-4 text-2xl font-bold" variants={fadeInUp}>
              Affordable Homes in Dubai&apos;s Most Desirable Communities
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-0">
                      <img
                        src="/prop2.png?height=200&width=300"
                        alt={`Community ${i}`}
                        className="w-full rounded-t-lg"
                      />
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <span className="font-bold">1,500,000 AED</span>
                      <Button variant="outline">Details</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Luxury Properties Section */}
          <motion.section variants={fadeInUp}>
            <motion.h2 className="mb-4 text-2xl font-bold" variants={fadeInUp}>
              Where Luxury and Royalty Converge
            </motion.h2>
            <motion.p className="mb-4" variants={fadeInUp}>
              Discover stunning homes located in Dubai&apos;s most prestigious
              communities, offering unparalleled luxury and world-class
              amenities.
            </motion.p>
            <div className="grid gap-4 md:grid-cols-3">
              <motion.img
                src="/prop2.png?height=200&width=200"
                alt="Luxury Property 1"
                className="h-auto w-full rounded-lg"
                variants={fadeInUp}
              />
              <motion.img
                src="/prop2.png?height=200&width=200"
                alt="Luxury Property 2"
                className="h-auto w-full rounded-lg"
                variants={fadeInUp}
              />
              <motion.img
                src="/prop2.png?height=200&width=200"
                alt="Luxury Property 3"
                className="h-auto w-full rounded-lg"
                variants={fadeInUp}
              />
            </div>
            <motion.div variants={fadeInUp}>
              <Button className="mt-4">Explore Homes Near the Palace</Button>
            </motion.div>
          </motion.section>

          {/* UAE Market Section */}
          <motion.section variants={fadeInUp}>
            <motion.h2 className="mb-4 text-2xl font-bold" variants={fadeInUp}>
              Explore the UAE market
            </motion.h2>
            <Tabs defaultValue="dubai">
              <TabsList>
                <TabsTrigger value="dubai">Dubai</TabsTrigger>
                <TabsTrigger value="abudhabi">Abu Dhabi</TabsTrigger>
                <TabsTrigger value="sharjah">Sharjah</TabsTrigger>
              </TabsList>
              <TabsContent value="dubai">
                <motion.img
                  src="/prop2.png?height=300&width=600"
                  alt="Dubai Skyline"
                  className="mb-4 w-full rounded-lg"
                  variants={fadeInUp}
                />
                <motion.p variants={fadeInUp}>
                  Dubai&apos;s real estate market continues to thrive with new
                  developments and increasing property values.
                </motion.p>
              </TabsContent>
              <TabsContent value="abudhabi">
                <motion.img
                  src="/prop2.png?height=300&width=600"
                  alt="Abu Dhabi Skyline"
                  className="mb-4 w-full rounded-lg"
                  variants={fadeInUp}
                />
                <motion.p variants={fadeInUp}>
                  Abu Dhabi offers a stable real estate market with a focus on
                  sustainable urban development.
                </motion.p>
              </TabsContent>
              <TabsContent value="sharjah">
                <motion.img
                  src="/prop2.png?height=300&width=600"
                  alt="Sharjah Cityscape"
                  className="mb-4 w-full rounded-lg"
                  variants={fadeInUp}
                />
                <motion.p variants={fadeInUp}>
                  Sharjah&apos;s property market is growing, with new projects
                  aimed at attracting investors and residents.
                </motion.p>
              </TabsContent>
            </Tabs>
          </motion.section>

          {/* Company Info Section */}
          <motion.section
            className="grid items-center gap-8 md:grid-cols-2"
            variants={fadeInUp}
          >
            <div>
              <motion.h2
                className="mb-4 text-2xl font-bold"
                variants={fadeInUp}
              >
                We&apos;re UAE&apos;s number one property website
              </motion.h2>
              <motion.ul
                className="list-inside list-disc space-y-2"
                variants={fadeInUp}
              >
                <li>Largest property portal in the UAE</li>
                <li>Trusted by millions of users</li>
                <li>Comprehensive database of properties</li>
                <li>Expert market insights and advice</li>
              </motion.ul>
              <motion.div variants={fadeInUp}>
                <Button className="mt-4">Read more about us</Button>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                src="/prop2.png?height=150&width=150"
                alt="Office"
                className="h-auto w-full rounded-lg"
                variants={fadeInUp}
              />
              <motion.img
                src="/prop2.png?height=150&width=150"
                alt="Team"
                className="h-auto w-full rounded-lg"
                variants={fadeInUp}
              />
            </div>
          </motion.section>

          {/* Find Agent Section */}
          <motion.section
            className="rounded-lg bg-gray-100 p-8"
            variants={fadeInUp}
          >
            <motion.h2 className="mb-4 text-2xl font-bold" variants={fadeInUp}>
              Find a trusted Estate Agent in your area
            </motion.h2>
            <motion.p className="mb-4" variants={fadeInUp}>
              Connect with experienced real estate professionals who can guide
              you through your property journey.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button>Find an agent</Button>
            </motion.div>
          </motion.section>

          {/* Neighborhood Finder Section */}
          <motion.section variants={fadeInUp}>
            <motion.h2 className="mb-4 text-2xl font-bold" variants={fadeInUp}>
              Find Your Perfect Neighborhood
            </motion.h2>
            <div className="grid gap-4 md:grid-cols-3">
              <motion.div className="relative" variants={fadeInUp}>
                <img
                  src="/prop2.png?height=200&width=200"
                  alt="Downtown Dubai"
                  className="h-auto w-full rounded-lg"
                />
                <span className="absolute bottom-2 left-2 rounded bg-white px-2 py-1">
                  Downtown Dubai
                </span>
              </motion.div>
              <motion.div className="relative" variants={fadeInUp}>
                <img
                  src="/prop2.png?height=200&width=200"
                  alt="Palm Jumeirah"
                  className="h-auto w-full rounded-lg"
                />
                <span className="absolute bottom-2 left-2 rounded bg-white px-2 py-1">
                  Palm Jumeirah
                </span>
              </motion.div>
              <motion.div className="relative" variants={fadeInUp}>
                <img
                  src="/prop2.png?height=200&width=200"
                  alt="Dubai Marina"
                  className="h-auto w-full rounded-lg"
                />
                <span className="absolute bottom-2 left-2 rounded bg-white px-2 py-1">
                  Dubai Marina
                </span>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
}
