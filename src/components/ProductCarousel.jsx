import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const items = [
  {
    id: 1,
    title: 'Multivitamin+',
    subtitle: 'Balanced daily formula',
    scene: 'https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode'
  },
  {
    id: 2,
    title: 'HydraClean',
    subtitle: 'Germ-safe handwash',
    scene: 'https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode'
  },
  {
    id: 3,
    title: 'BreatheEase',
    subtitle: 'Compact nebulizer',
    scene: 'https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode'
  }
]

const Card = ({ item, index }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -50 : 50])

  return (
    <motion.div
      style={{ y }}
      className="group relative h-[420px] w-full overflow-hidden rounded-3xl border border-slate-100 bg-white/80 p-4 shadow-lg shadow-slate-200/40 backdrop-blur-sm sm:w-[360px]"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div className="absolute inset-0">
        <Spline scene={item.scene} style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />
      <div className="relative z-10 mt-auto flex h-full flex-col justify-end">
        <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
        <p className="mt-1 text-slate-600">{item.subtitle}</p>
      </div>
    </motion.div>
  )
}

const ProductCarousel = () => {
  return (
    <section id="essentials" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">Daily Health Essentials</h2>
          <p className="mt-2 text-slate-600">Explore our core range designed for everyday wellness at home.</p>
        </div>
        <div className="hidden gap-3 sm:flex">
          <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50">Prev</button>
          <button className="rounded-full bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600">Next</button>
        </div>
      </div>
      <div className="no-scrollbar -mx-2 flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 pb-4">
        {items.map((item, i) => (
          <div key={item.id} className="snap-start">
            <Card item={item} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductCarousel
