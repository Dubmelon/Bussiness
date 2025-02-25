import { motion, useScroll, useTransform } from 'framer-motion'
import { BeakerIcon, CpuChipIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { Link } from '@remix-run/react'

const services = [
  {
    title: 'Gaming Console Repair',
    icon: <CpuChipIcon className="w-12 h-12 text-primary" />,
    description: 'Expert repair for all major consoles with 90-day warranty',
    link: '/controllers/ps5'
  },
  {
    title: 'PC Hardware Restoration',
    icon: <BeakerIcon className="w-12 h-12 text-primary" />,
    description: 'Component-level repairs using certified parts',
    link: '/pc-builds'
  },
  {
    title: 'Device Refurbishing',
    icon: <ShieldCheckIcon className="w-12 h-12 text-primary" />,
    description: 'Professional cleaning and component replacement',
    link: '/membership'
  }
]

const MotionLink = motion(Link)

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center"
          style={{ scale }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white space-y-8 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Precision Tech Repairs
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Expert care for your cherished devices with certified warranties
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary px-8 py-4 rounded-full text-lg font-semibold"
            >
              Schedule Repair
            </motion.button>
            <MotionLink
              to="/pc-builds"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary"
            >
              Custom Builds
            </MotionLink>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-12"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <MotionLink
                to={service.link}
                className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </MotionLink>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
