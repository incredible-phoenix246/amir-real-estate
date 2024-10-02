import Image from 'next/image'
import { Button } from '@/components/ui/button'
import sales1 from '/public/sales1.png'
import sales2 from '/public/sales2.png'

export default function ForSaleSection() {
  return (
    <div className="mx-auto max-w-[1200px] place-content-center self-center px-4 py-12 lg:mb-32 lg:py-20">
      <h2 className="mb-2 text-xl text-orange-400">For Sale</h2>
      <h1 className="text-navy-900 mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
        Find Your Dream Home with Our Exclusive Listings
      </h1>
      <p className="mb-8 text-gray-600">
        Explore our collection of properties for sale or rent across the UAE.
        Whether you&apos;re looking for a modern apartment in the city, a luxury
        villa by the beach, or a spacious family home in a quiet neighborhood,
        we have a wide range of listings to suit every lifestyle and budget. Our
        expert agents are here to guide you through the buying process, ensuring
        you make the right investment in your future.
      </p>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="relative h-full w-full">
          <Image
            src={sales1}
            alt="Modern apartment buildings"
            className="h-full w-full xl:h-[376px] xl:w-[480px]"
          />

          <Image
            src={sales2}
            alt="illustration"
            className="absolute right-[200px] hidden h-[376px] w-[480px] xl:top-[230px] xl:block 2xl:top-[200px]"
          />
        </div>

        <div className="w-fitl">
          <h3 className="text-navy-900 mb-4 text-2xl font-bold">
            Why Buy with Us?
          </h3>
          <ul className="mb-8 space-y-4">
            <li className="flex items-start">
              <svg
                className="mr-2 h-6 w-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Access to exclusive listings</span>
            </li>
            <li className="flex items-start">
              <svg
                className="mr-2 h-6 w-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Expert advice and market insights</span>
            </li>
            <li className="flex items-start">
              <svg
                className="mr-2 h-6 w-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Tailored property search based on your preferences</span>
            </li>
            <li className="flex items-start">
              <svg
                className="mr-2 h-6 w-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Assistance with negotiations and paperwork</span>
            </li>
          </ul>
          <Button className="w-full rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">
            Browse Properties for Sale
          </Button>
        </div>
      </div>
    </div>
  )
}
