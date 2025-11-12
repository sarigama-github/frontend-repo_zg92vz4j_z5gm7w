import React from 'react'
import Hero from './components/Hero'
import ProductCarousel from './components/ProductCarousel'
import Benefits from './components/Benefits'
import ShopCTA from './components/ShopCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Hero />
      <ProductCarousel />
      <Benefits />
      <ShopCTA />
      <footer className="border-t border-slate-100 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} PurePath Health. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
