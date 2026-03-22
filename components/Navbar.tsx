'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 w-full z-50 glass-header shadow-[0_12px_32px_rgba(7,28,54,0.08)]">
      <div className="flex justify-between items-center h-16 sm:h-20 px-4 sm:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <img src="/logo.png" alt="Max Engineering Logo" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" />
          <span className="text-lg sm:text-2xl font-black text-on-surface font-headline tracking-tight">Max Engineering</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? 'text-secondary-container border-b-2 border-secondary-container pb-1 font-headline font-bold tracking-tight'
                  : 'text-on-surface-variant hover:text-on-surface transition-colors font-headline font-bold tracking-tight'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:block machined-gradient text-white px-6 py-2.5 rounded-xl font-bold font-headline hover:scale-105 active:scale-95 transition-all duration-150 shadow-lg"
          >
            Get Quote
          </Link>

          <button
            className="md:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-outline-variant px-4 sm:px-8 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                isActive(link.href)
                  ? 'text-secondary-container font-headline font-bold border-l-4 border-secondary-container pl-3'
                  : 'text-on-surface-variant hover:text-on-surface transition-colors font-headline font-bold pl-3'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
