import { motion } from 'framer-motion'
import { Form } from '@remix-run/react'
import { ComputerDesktopIcon, CpuChipIcon, PaintBrushIcon } from '@heroicons/react/24/outline'

export default function PcBuilds() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-24">
      <section className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Custom PC Builder</h2>
          <p className="text-slate-600 text-lg">
            Collaborate with our experts to create your perfect system
          </p>
        </motion.div>

        <Form method="post" className="space-y-8">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <ComputerDesktopIcon className="w-6 h-6 text-primary" />
              Performance Requirements
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Target Games/Software</label>
                <input
                  name="software"
                  className="w-full p-3 rounded-lg border border-slate-200"
                  placeholder="e.g., Cyberpunk 2077, 4K Video Editing"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Desired Resolution</label>
                  <select name="resolution" className="w-full p-3 rounded-lg border border-slate-200">
                    <option>1080p</option>
                    <option>1440p</option>
                    <option>4K</option>
                    <option>Ultrawide</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Frame Rate Target</label>
                  <select name="fps" className="w-full p-3 rounded-lg border border-slate-200">
                    <option>60 FPS</option>
                    <option>120 FPS</option>
                    <option>144+ FPS</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Aesthetic Preferences Section */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <PaintBrushIcon className="w-6 h-6 text-primary" />
              Design Preferences
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Theme Colors</label>
                <div className="flex gap-2">
                  {['RGB Lighting', 'Minimal White', 'Stealth Black', 'Custom'].map((color) => (
                    <label key={color} className="flex items-center gap-2">
                      <input type="radio" name="theme" value={color} className="accent-primary" />
                      {color}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  className="w-full p-3 rounded-lg border border-slate-200 h-32"
                  placeholder="Special requests or specific component preferences"
                />
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary px-8 py-4 rounded-full text-lg font-semibold text-white"
              type="submit"
            >
              Get Custom Quote
            </motion.button>
          </div>
        </Form>
      </section>
    </div>
  )
}
