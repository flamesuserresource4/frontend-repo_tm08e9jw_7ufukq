import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.25),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.25),transparent_50%)]"/>
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-10 md:pt-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Flowessa Knee Relief Massager
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100/90">
              Soothe sore knees, boost circulation, and recover faster — anytime, anywhere.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#buy" className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 shadow-lg shadow-blue-500/30 transition">
                Buy Now — $90
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/20 to-emerald-400/10 rounded-3xl blur-2xl"/>
            <div className="relative rounded-3xl border border-white/10 bg-slate-800/40 p-3">
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="https://images.unsplash.com/photo-1667488371943-cb140e1b87f0?q=80&w=1600&auto=format&fit=crop"
                  alt="Knee massager on leg"
                  className="rounded-2xl object-cover w-full h-44 md:h-56"
                />
                <img
                  src="https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?q=80&w=1600&auto=format&fit=crop"
                  alt="Knee therapy closeup"
                  className="rounded-2xl object-cover w-full h-44 md:h-56"
                />
                <img
                  src="https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1600&auto=format&fit=crop"
                  alt="Compression heat wrap"
                  className="rounded-2xl object-cover w-full h-44 md:h-56 col-span-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
