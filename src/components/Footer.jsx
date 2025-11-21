import React from 'react'

export default function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-200/80 text-sm">
        <div>© {new Date().getFullYear()} Flowessa. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a className="hover:text-white transition" href="https://flowessa.com/policies/shipping-policy" target="_blank" rel="noreferrer">Shipping</a>
          <a className="hover:text-white transition" href="https://flowessa.com/policies/refund-policy" target="_blank" rel="noreferrer">Returns</a>
          <a className="hover:text-white transition" href="https://flowessa.com/pages/contact" target="_blank" rel="noreferrer">Contact</a>
        </div>
      </div>
    </footer>
  )
}
