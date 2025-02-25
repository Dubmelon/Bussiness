import { motion } from 'framer-motion'
import { Form } from '@remix-run/react'
import { PlayCircleIcon } from '@heroicons/react/24/outline'

export default function Ps5Controller() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 flex items-center justify-center gap-4"
        >
          <PlayCircleIcon className="w-12 h-12 text-primary" />
          <h2 className="text-4xl font-bold">PS5 Controller Customization</h2>
        </motion.div>

        <Form className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Design Options</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-4">Shell Color</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Midnight Black', 'Cosmic Red', 'Galactic Purple'].map(color => (
                    <label key={color} className="flex flex-col items-center">
                      <input
                        type="radio"
                        name="color"
                        value={color}
                        className="accent-primary"
                      />
                      <span className="mt-2 text-sm">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-4">Button Style</label>
                <select className="w-full p-3 rounded-lg border border-slate-200">
                  <option>Standard</option>
                  <option>Transparent</option>
                  <option>Metallic</option>
                </select>
              </div>
            </div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary px-8 py-4 rounded-full text-lg font-semibold text-white"
              type="submit"
            >
              Add to Cart - $89.99
            </motion.button>
          </div>
        </Form>
      </div>
    </div>
  )
}
