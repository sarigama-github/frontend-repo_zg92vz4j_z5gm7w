import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      {/* floating pastel orbs */}
      <motion.div
        className="pointer-events-none absolute -top-10 left-10 h-56 w-56 rounded-full bg-gradient-to-br from-emerald-200/60 to-cyan-200/40 blur-2xl"
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="pointer-events-none absolute right-10 bottom-20 h-64 w-64 rounded-full bg-gradient-to-br from-sky-200/60 to-blue-200/40 blur-2xl"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="pointer-events-none text-4xl font-extrabold tracking-tight text-slate-800 sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Clean, Daily Health Essentials
        </motion.h1>
        <motion.p
          className="pointer-events-none mt-4 max-w-2xl text-balance text-slate-600 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Wellness supplements, hygiene care, and family health devices crafted to elevate your everyday routine.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="#shop"
            className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
          >
            Shop Now
          </a>
          <a
            href="#essentials"
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow"
          >
            Daily Essentials
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
