// // import { Play } from 'lucide-react'
// import Image from 'next/image'

// export default function Home() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <main className="flex-grow">
//         <section className="relative h-[60vh] md:h-[80vh]">
//           <Image
//             src="/bg-gen.png"
//             alt="Dubai Skyline"
//             layout="fill"
//             objectFit="cover"
//             className="brightness-50"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
//             <h1 className="mb-4 text-4xl font-bold md:text-6xl">
//               Your Trusted Real Estate Partner
//             </h1>
//             <p className="mb-8 text-xl md:text-2xl">in the UAE</p>
//             {/* <button className="flex items-center rounded-full bg-orange-500 px-6 py-3 text-white">
//               <Play className="mr-2" /> Watch Video
//             </button> */}
//           </div>
//         </section>

//         <section className="px-4 py-16 md:px-0">
//           <div className="container mx-auto">
//             <div className="md:flex md:space-x-8">
//               <div className="md:w-1/2">
//                 <h2 className="mb-4 text-3xl font-bold">About Us</h2>
//                 <p className="mb-4 text-gray-600">
//                   At AmrRealtors24, we are dedicated to delivering exceptional
//                   real estate services in the UAE. Whether you&apos;re buying,
//                   selling, or renting a property, looking for a rental, or
//                   investing in real estate, our team of experts is here to guide
//                   you through every step of the process. With years of
//                   experience and an in-depth understanding of the local market,
//                   we pride ourselves on providing personalized, professional,
//                   and results-driven solutions.
//                 </p>
//                 <h3 className="mb-4 text-2xl font-bold">What We Do</h3>
//                 <p className="mb-4 text-gray-600">
//                   We offer a wide range of services, including property buying,
//                   selling, rentals, property management, commercial real estate,
//                   and investment advisory. Our mission is to connect people with
//                   the perfect property that meets their needs and desires, while
//                   maximizing the value for sellers and investors.
//                 </p>
//               </div>
//               <div className="mt-8 md:mt-0 md:w-1/2">
//                 <Image
//                   src="/about-im.png"
//                   alt="Modern Building"
//                   width={600}
//                   height={400}
//                   className="rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="bg-gray-100 px-4 py-16 md:px-0">
//           <div className="container mx-auto">
//             <h2 className="mb-8 text-center text-3xl font-bold">
//               Our Approach
//             </h2>
//             <p className="mx-auto max-w-2xl text-center text-gray-600">
//               At AmrRealtors24, we believe that every client deserves tailored
//               services that go beyond the transaction. We focus on building
//               lasting relationships through integrity, transparency, and trust.
//               Our agents work closely with you to understand your goals and
//               offer expert guidance throughout the process.
//             </p>
//           </div>
//         </section>

//         <section className="px-4 py-16 md:px-0">
//           <div className="container mx-auto">
//             <h2 className="mb-8 text-center text-3xl font-bold">
//               Why Choose Us?
//             </h2>
//             <div className="md:flex md:space-x-8">
//               <div className="mb-8 md:mb-0 md:w-1/2">
//                 <h3 className="mb-4 text-xl font-bold">Local Expertise</h3>
//                 <p className="mb-4 text-gray-600">
//                   With a deep understanding of the UAE real estate market, we
//                   offer unparalleled insights and guidance to our clients.
//                 </p>
//                 <h3 className="mb-4 text-xl font-bold">
//                   Comprehensive Solutions
//                 </h3>
//                 <p className="mb-4 text-gray-600">
//                   From residential properties to commercial spaces, we cover a
//                   wide range of real estate needs.
//                 </p>
//               </div>
//               <div className="md:w-1/2">
//                 <h3 className="mb-4 text-xl font-bold">
//                   Client-Centered Service
//                 </h3>
//                 <p className="mb-4 text-gray-600">
//                   We prioritize your needs, ensuring a personalized approach and
//                   a stress-free experience throughout your real estate journey.
//                 </p>
//                 <h3 className="mb-4 text-xl font-bold">Professional Team</h3>
//                 <p className="mb-4 text-gray-600">
//                   Our team consists of highly skilled and knowledgeable
//                   professionals committed to delivering exceptional service.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="bg-gray-100 px-4 py-16 md:px-0">
//           <div className="container mx-auto">
//             <h2 className="mb-8 text-center text-3xl font-bold">Our Vision</h2>
//             <p className="mx-auto max-w-2xl text-center text-gray-600">
//               To be the leading real estate agency in the UAE, recognized for
//               our commitment to client satisfaction and excellence in property
//               services.
//             </p>
//             <h2 className="mb-8 mt-12 text-center text-3xl font-bold">
//               Our Mission
//             </h2>
//             <p className="mx-auto max-w-2xl text-center text-gray-600">
//               To provide innovative real estate solutions, while fostering
//               trust, transparency, and long-term client relationships.
//             </p>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }

import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">About Us</h1>
          <p className="mb-6 text-lg text-gray-600">
            At <span className="text-blue-500">AmirRealtors24</span>, we are
            dedicated to delivering exceptional real estate services across the
            UAE. Whether you&apos;re buying your dream home, selling a property,
            looking for a rental, or investing in real estate, our team of
            experts is here to guide you through every step of the process. With
            years of experience and an in-depth understanding of the local
            market, we pride ourselves on providing personalized, professional,
            and results-driven solutions.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">
            What We Do
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            We offer a wide range of services, including property buying,
            selling, rentals, property management, commercial real estate, and
            investment advisory. Our mission is to connect people with the
            perfect property that meets their needs and lifestyle, while
            maximizing the value for sellers and investors.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <Image
            src="/Rectanglesa19.png?height=600&width=400"
            alt="Modern buildings"
            width={400}
            height={600}
            className="h-auto w-full rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="mt-12 rounded-lg bg-gray-100 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">
          Our Approach
        </h2>
        <p className="text-lg text-gray-600">
          At <span className="font-semibold">AmirRealtors24</span>, we believe
          that every client deserves tailored services that go beyond the
          transaction. We focus on building lasting relationships through
          integrity, transparency, and trust. Our agents work closely with you
          to understand your goals and offer expert guidance throughout the
          process.
        </p>
      </div>

      <div className="mt-12 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Local Expertise:
              </h3>
              <p className="text-gray-600">
                With a deep understanding of the UAE real estate market, we
                offer unparalleled insights and access to exclusive listings.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Client-Centered Service:
              </h3>
              <p className="text-gray-600">
                We prioritize your needs, ensuring a personalized approach and a
                stress-free experience.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Comprehensive Solutions:
              </h3>
              <p className="text-gray-600">
                From residential properties to commercial spaces, we cover all
                aspects of real estate to meet diverse needs.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Professional Team:
              </h3>
              <p className="text-gray-600">
                Our team consists of highly skilled and knowledgeable agents who
                are committed to delivering exceptional service.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <Image
            src="/na.png?height=400&width=600"
            alt="Team of professionals"
            width={600}
            height={400}
            className="h-auto w-full rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Vision</h2>
        <p className="mb-8 text-lg text-gray-600">
          To be the leading real estate agency in the UAE, recognized for our
          commitment to client satisfaction and excellence in property services.
        </p>

        <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Mission</h2>
        <p className="mb-8 text-lg text-gray-600">
          To provide innovative real estate solutions, while fostering trust,
          transparency, and long-term client relationships.
        </p>
      </div>

      <div className="mt-12">
        <p className="mb-4 text-lg text-gray-600">
          Whether you&apos;re looking for a home, an investment opportunity, or
          professional property management,{' '}
          <span className="font-semibold">AmirRealtors24</span> is here to make
          your real estate journey a success. Let&apos;s find your perfect
          property together.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/service"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
          >
            Explore Our Services
          </Link>
          <Link
            href="/contact"
            className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
