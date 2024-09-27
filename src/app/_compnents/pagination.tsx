import { motion } from 'framer-motion'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}: PaginationProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <motion.div
      className={`flex justify-center space-x-2 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {pageNumbers.map((number) => (
        <motion.button
          key={number}
          className={`rounded px-3 py-1 ${
            currentPage === number
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => onPageChange(number)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {number}
        </motion.button>
      ))}
    </motion.div>
  )
}
