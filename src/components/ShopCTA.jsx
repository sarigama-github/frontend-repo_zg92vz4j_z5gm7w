import React from 'react'
import { motion } from 'framer-motion'

const ShopCTA = () => {
  return (
    <section id="shop" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-10 shadow-xl shadow-emerald-100/60">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-50 via-sky-50 to-white" />
          <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold text-slate-800">Your daily kit, simplified</h3>
              <p className="mt-3 text-slate-600">Build your bundle of essentials and save up to 20% every month.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600">
                  Shop Now
                </a>
                <a href="#" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-slate-700 hover:border-slate-300">
                  Learn More
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative h-56 rounded-2xl bg-gradient-to-br from-emerald-100 to-sky-100"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,219,169,0.25),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.25),transparent_40%)]" />
              <div className="absolute inset-6 rounded-xl border border-white/60 bg-white/50 backdrop-blur-sm" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopCTA
