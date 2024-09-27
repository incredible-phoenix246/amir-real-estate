import { motion } from 'framer-motion'

export default function Sidebar({ className = '' }) {
  return (
    <motion.aside
      className={`rounded-lg bg-white p-6 shadow-md ${className}`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4 text-xl font-bold">Filters</h2>
      {/* Add filter components here */}
      <div className="mb-6">
        <h3 className="mb-2 font-semibold">Price Range</h3>
        {/* Add price range slider or input fields */}
      </div>
      <div className="mb-6">
        <h3 className="mb-2 font-semibold">Property Type</h3>
        {/* Add property type checkboxes */}
      </div>
      <div className="mb-6">
        <h3 className="mb-2 font-semibold">Bedrooms</h3>
        {/* Add bedroom options */}
      </div>
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold">Get Latest Properties</h2>
        <form>
          <input
            type="email"
            placeholder="Your email"
            className="mb-2 w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </motion.aside>
  )
}
