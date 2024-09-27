import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AdBanner({ className = '' }) {
  return (
    <motion.div
      className={`rounded-lg bg-gray-100 p-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold">Special Offer!</h3>
          <p className="text-gray-600">
            Get 10% off on your first property purchase
          </p>
        </div>
        <Image
          src="/Container.png"
          alt="Special offer"
          width={100}
          height={100}
          className="rounded-lg"
        />
      </div>
    </motion.div>
  )
}
