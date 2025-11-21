import React from 'react'

export default function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-200/80 text-sm">
        <div>© {new Date().getFullYear()} Knee Relief. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a className="hover:text-white transition" href="#">Shipping</a>
          <a className="hover:text-white transition" href="#">Returns</a>
          <a className="hover:text-white transition" href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
