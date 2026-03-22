import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'
import Link from 'next/link'

export const metadata = {
  title: 'Our Services | Max Engineering',
}

const services = [
  {
    icon: 'electrical_services',
    title: 'Electrical Services',
    items: ['Wiring & installation', 'Panel setup', 'Maintenance'],
  },
  {
    icon: 'settings_input_component',
    title: 'Instrumentation',
    items: ['Process control systems', 'Calibration', 'Installation'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="relative h-[409px] flex items-center bg-primary-container overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrOa9wlRyRlFxbYDQ1hDQv7lieSlpXXB0I3yAoaP0oiIitDxx5gkiax4UxtvEJ_BtO1CciDqcP8Vgf9rplnTqQREMgQmVgfCqZranTd4pAjmta71uNPG16BI12ZhWvVOwLBOsu3t8PYr38veYnSTXOLqsWsVxurxJsYRG3GNyVt3UGu93PwpGgiHRVpfJZ2HTZepHB2FqEbxZGjMxHUDeI5SNBao3UFJ_iCLjcmJHZe5F4Csit7QnuvyBAiNyeRAgZeRt_qnl7TTav"
            alt="Engineering services background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 px-8 md:px-20 max-w-7xl fade-up">
          <span className="text-secondary-container font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            PRECISE SOLUTIONS
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white font-headline leading-tight tracking-tighter">
            Our Services
          </h1>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 px-8 md:px-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_32px_rgba(7,28,54,0.05)] border border-outline-variant/10 hover:border-secondary-container/50 transition-all"
              >
                <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-xl mb-6 group-hover:bg-secondary-container transition-colors">
                  <span
                    className="material-symbols-outlined text-primary-container group-hover:text-white"
                    style={{ fontSize: '32px' }}
                  >
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-headline text-primary-container mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-3 text-on-surface-variant">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-container text-sm">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-20 bg-surface-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black font-headline text-primary-container mb-6">
            Get a Custom Quote Today
          </h2>
          <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            From complex industrial instrumentation to standard electrical maintenance, our
            engineering team delivers precision at scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-secondary-container text-on-secondary-fixed font-bold font-headline px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Request Quote
            </Link>
            <Link
              href="/projects"
              className="bg-primary-container text-white font-bold font-headline px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Our Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  )
}
