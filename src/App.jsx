import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import BuyButton from './components/BuyButton'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative">
        <Hero />
        <Features />
        <section className="relative max-w-3xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-slate-800/40 p-6">
            <h2 className="text-2xl font-semibold mb-2">Buy now</h2>
            <p className="text-blue-200/80 mb-4">Secure checkout powered by Shopify.</p>
            <BuyButton />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default App
