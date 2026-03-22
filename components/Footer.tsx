import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 w-full py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Max Engineering Logo" className="h-12 w-12 rounded-full object-cover" />
            <span className="text-xl font-bold text-white font-headline">Max Engineering</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-body">
            Instrumentation Service Provider and Solution for Industrial Excellence. Established 2005 — delivering Calibration, Erection & Commissioning for Process & Control Equipment.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-amber-500 font-headline font-semibold mb-6 uppercase text-xs tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-4">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-slate-400 hover:text-white transition-colors text-sm font-body"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-amber-500 font-headline font-semibold mb-6 uppercase text-xs tracking-widest">
            Contact Info
          </h4>
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-amber-500 text-xl mt-1">location_on</span>
            <span className="text-slate-400 text-sm leading-relaxed font-body">
              Bank Colony, Road No. 1, Manjhi Tola, Adityapur-13, Jamshedpur, JH
            </span>
          </div>
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-amber-500 text-xl mt-1">phone</span>
            <span className="text-slate-400 text-sm leading-relaxed font-body">9431755791 / 9431163433</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-amber-500 text-xl mt-1">mail</span>
            <span className="text-slate-400 text-sm leading-relaxed font-body">
              max.engg2016@gmail.com
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-800 text-center text-slate-500 text-sm">
        © 2025 Max Engineering. All rights reserved. | www.maxenggjsr.in
      </div>
    </footer>
  )
}
