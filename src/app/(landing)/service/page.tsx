/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

// export default function Home() {
//   return (
//     <main className="flex-grow pt-14">
//       <section className="relative h-[60vh] md:h-[80vh]">
//         <Image
//           src="/bg-gen.png"
//           alt="Dubai Skyline"
//           layout="fill"
//           objectFit="cover"
//           className="brightness-50"
//         />
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
//         >
//           <h1 className="mb-4 text-4xl font-bold md:text-6xl">
//             Expert Solutions for All Your Real
//           </h1>
//           <h2 className="mb-8 text-3xl font-bold md:text-5xl">Estate Needs</h2>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center rounded-full bg-orange-500 px-6 py-3 text-white"
//           >
//             <svg
//               className="mr-2 h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
//               />
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             Watch Video
//           </motion.button>
//         </motion.div>
//       </section>

//       {/* <section className="px-4 py-16 md:px-0">
//         <div className="container mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mb-8 text-center text-3xl font-bold"
//           >
//             Our Services
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mb-12 text-center text-gray-600"
//           >
//             At AmrRealtors24, we offer a full suite of real estate services
//             designed to make your property journey smooth and hassle-free.
//             Whether you&apos;re buying, selling, renting, or investing, our team
//             of experienced professionals is here to provide personalized
//             guidance every step of the way.
//           </motion.p>
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="rounded-lg bg-white p-6 shadow-md"
//               >
//                 <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section> */}
//     </main>
//   )
// }

// import Image from 'next/image'
import Link from 'next/link'

export default function OurServices() {
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
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">Our Services</h1>
        <p className="mb-12 text-lg text-gray-600">
          At{' '}
          <span className="font-semibold text-orange-500">AmirRealtors24</span>,
          we offer a full suite of real estate services designed to make your
          property journey smooth and hassle-free. Whether you're buying,
          selling, renting, or investing, our team of experienced professionals
          is here to provide personalized guidance every step of the way.
        </p>

        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-2/3">
            <div className="grid gap-8 md:grid-cols-2">
              <ServiceItem
                number="1"
                title="Property Buying"
                subtitle="Find the Perfect Home or Investment"
                description="We help you navigate the UAE's competitive property market to find a home or investment that suits your needs and budget. From initial search to closing, we provide comprehensive support and expert advice to ensure a seamless buying experience."
              />
              <ServiceItem
                number="2"
                title="Property Selling"
                subtitle="Maximize the Value of Your Property"
                description="Selling your property has never been easier. Our expert agents provide accurate market valuations, strategic marketing, and negotiation support to get you the best possible price for your home or investment property."
                link={{ text: 'Explore our listings', href: '/listings' }}
              />
              <ServiceItem
                number="3"
                title="Rental Services"
                subtitle="Find the Ideal Rental or Rent Out Your Property"
                description="Whether you're searching for a place to rent or looking to lease out your property, we handle all aspects of the rental process. For tenants, we find the right home to match your lifestyle. For landlords, we secure reliable tenants quickly and efficiently."
                link={{ text: 'Explore our listings', href: '/listings' }}
              />
              <ServiceItem
                number="4"
                title="Property Management"
                subtitle="Stress-Free Management for Your Property"
                description="Our property management services take the hassle out of being a landlord. We handle everything from tenant relations and rent collection to maintenance and repairs, ensuring your property is well-maintained and profitable."
                link={{ text: 'Contact Us', href: '/contact' }}
              />
              <ServiceItem
                number="5"
                title="Real Estate Investment"
                subtitle="Unlock Profitable Investment Opportunities"
                description="Looking to grow your wealth through real estate? Our investment advisory services offer in-depth market analysis and investment strategies tailored to your financial goals. We help you make informed decisions for long-term returns."
                link={{ text: 'Contact Us', href: '/contact' }}
              />
              <ServiceItem
                number="6"
                title="Commercial Real Estate"
                subtitle="Find the Perfect Space for Your Business"
                description="From offices to retail spaces, we provide comprehensive commercial real estate services to meet your business needs. Our team helps you find, negotiate, and secure the ideal commercial property to support your business growth."
                link={{ text: 'Speak with our advisory', href: '/advisory' }}
              />
              <ServiceItem
                number="7"
                title="Relocation Assistance"
                subtitle="Seamless Relocation Support"
                description="Relocating to the UAE or moving within the country? Our relocation services ensure a smooth transition. We help you find a new home, complete the necessary paperwork, and settle into your new community with ease."
                link={{ text: 'Contact Us', href: '/contact' }}
              />
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/3">
            <div className="sticky top-8">
              <Image
                src="/slakda.png?height=600&width=400"
                alt="Real estate professionals in a meeting"
                width={400}
                height={600}
                className="h-auto w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-lg text-gray-600">
            Our goal is to provide exceptional service, no matter where you are
            in your real estate journey. Let us help you find the perfect
            property or make the most of your investment.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-orange-500 px-6 py-3 font-bold text-white transition duration-300 hover:bg-orange-600"
          >
            Contact us today!
          </Link>
        </div>
      </div>
    </main>
  )
}

function ServiceItem({ number, title, subtitle, description, link }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-2 text-2xl font-semibold text-gray-900">
        {number}. {title}
      </h2>
      <h3 className="mb-3 text-lg font-medium text-gray-600">{subtitle}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      {link && (
        <Link
          href={link.href}
          className="font-medium text-blue-500 hover:text-blue-600"
        >
          {link.text}
        </Link>
      )}
    </div>
  )
}
