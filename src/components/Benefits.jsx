import React from 'react'
import { motion } from 'framer-motion'
import { Droplets, Leaf, HeartPulse, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    icon: Droplets,
    title: 'Hydration & Purity',
    desc: 'Clean ingredients and gentle care for sensitive skin.'
  },
  {
    icon: Leaf,
    title: 'Nature-Forward',
    desc: 'Plant-based actives with science-backed efficacy.'
  },
  {
    icon: HeartPulse,
    title: 'Family Wellness',
    desc: 'Daily routines that support energy, immunity, and rest.'
  },
  {
    icon: ShieldCheck,
    title: 'Trusted & Tested',
    desc: 'Clinically reviewed products with transparent sourcing.'
  }
]

const Benefits = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-sky-50/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">Benefits for Your Family</h2>
          <p className="mt-3 text-slate-600">Gentle motion scenes highlighting a healthy, balanced lifestyle.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/40"
            >
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-200/60 to-sky-200/60 blur-xl" />
              <b.icon className="h-8 w-8 text-emerald-600" />
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{b.title}</h3>
              <p className="mt-2 text-slate-600">{b.desc}</p>
              <motion.div
                className="mt-6 h-2 w-full overflow-hidden rounded-full bg-slate-100"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{ originX: 0 }}
              >
                <div className="h-full w-full bg-gradient-to-r from-emerald-400 to-sky-400" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
