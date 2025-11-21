import React from 'react'

const features = [
  { title: 'Heat Therapy', desc: 'Adjustable warmth to relax stiff joints and improve comfort.' },
  { title: 'Compression Massage', desc: 'Air compression cycles to reduce swelling and improve circulation.' },
  { title: 'Vibration Modes', desc: 'Three soothing modes to target soreness after workouts or long days.' },
  { title: 'Ergonomic Fit', desc: 'Wraps securely around the knee with breathable, washable fabric.' },
]

export default function Features() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]"/>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
