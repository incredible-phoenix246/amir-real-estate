import { motion } from 'framer-motion'
import Image from 'next/image'

const newsItems = [
  { title: 'Dubai Property Market Trends', image: '/con.png' },
  { title: 'Top 5 Areas to Invest in UAE', image: '/Link.png' },
  { title: 'New Regulations for Real Estate', image: '/Link.png' },
]

export default function NewsSection({ className = '' }) {
  return (
    <motion.div
      className={`rounded-lg bg-white p-6 shadow-md ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4 text-2xl font-bold">Latest News</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {newsItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
              className="rounded-lg"
            />
            <h3 className="font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
