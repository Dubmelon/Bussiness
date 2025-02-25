import { motion } from 'framer-motion'
import { Form } from '@remix-run/react'
import { TruckIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline'

const benefits = [
  {
    title: 'Free Shipping',
    icon: <TruckIcon className="w-8 h-8 text-primary" />,
    description: 'Priority shipping on all orders'
  },
  {
    title: 'Premium Service',
    icon: <SparklesIcon className="w-8 h-8 text-primary" />,
    description: 'Dedicated support team'
  },
  {
    title: 'Device Refurbishing',
    icon: <ShieldCheckIcon className="w-8 h-8 text-primary" />,
    description: 'Monthly maintenance included'
  }
]

export default function Membership() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Premium Membership</h2>
          <p className="text-xl text-slate-600">
            $11.99/month - Cancel anytime
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl text-center"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <Form method="post" action="/create-subscription">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto"
            whileHover={{ y: -5 }}
          >
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg"
            >
              Start Membership
            </button>
            <p className="text-sm text-slate-500 mt-4 text-center">
              7-day free trial included
            </p>
          </motion.div>
        </Form>
      </div>
    </div>
  )
}
