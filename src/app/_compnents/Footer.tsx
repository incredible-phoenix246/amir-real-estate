import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Property for sale</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Property for sale in Abu Dhabi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Property for sale in Ajman
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Property for sale in Al Ain
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Property for sale in Dubai
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <p>123 Real Estate Street</p>
            <p>Dubai, UAE</p>
            <p>Phone: +971 123 456 789</p>
            <p>Email: info@amrrealtors24.com</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-orange-500">
                <Instagram />
              </Link>
              <Link href="#" className="hover:text-orange-500">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-orange-500">
                <Twitter />
              </Link>
              <Link href="#" className="hover:text-orange-500">
                <Youtube />
              </Link>
              <Link href="#" className="hover:text-orange-500">
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {currentYear} AmrRealtors24. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
