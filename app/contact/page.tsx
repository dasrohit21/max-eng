'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
      } else {
        setStatus('success')
        setForm({ fullName: '', phone: '', subject: '', message: '' })
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-12 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-8 bg-surface-container">
        <div className="max-w-7xl mx-auto">
          <span className="uppercase tracking-widest text-secondary font-bold text-xs">
            Project Inquiry
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-headline text-primary-container mt-4 mb-6 sm:mb-8 tracking-tighter leading-none">
            Contact Us
          </h1>
          <p className="max-w-2xl text-lg text-on-surface-variant leading-relaxed">
            Connecting precision engineering with architectural vision. Reach out to our team in
            Jamshedpur for high-scale industrial solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-8 -mt-12 mb-12 sm:mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-8 pt-12">
            <div className="bg-surface-container-lowest p-5 sm:p-8 rounded-xl shadow-[0_12px_32px_rgba(7,28,54,0.08)] border-l-4 border-secondary-container">
              <div className="flex items-start gap-4 mb-8">
                <span className="material-symbols-outlined text-secondary text-3xl">location_on</span>
                <div>
                  <h3 className="font-headline font-bold text-primary-container text-xl mb-2">Our Office</h3>
                  <p className="text-on-surface-variant">
                    Bank Colony, Road No. 1, Manjhi Tola,<br />Adityapur-1, Jamshedpur, Jharkhand
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-8">
                <span className="material-symbols-outlined text-secondary text-3xl">call</span>
                <div>
                  <h3 className="font-headline font-bold text-primary-container text-xl mb-2">Phone</h3>
                  <p className="text-on-surface-variant">Rajkumar Das: 9431755791</p>
                  <p className="text-on-surface-variant">Subhash Sharma: 9431163433</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary text-3xl">mail</span>
                <div>
                  <h3 className="font-headline font-bold text-primary-container text-xl mb-2">Email</h3>
                  <p className="text-on-surface-variant">max.engg2016@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Meta Card */}
            <div className="bg-primary-container p-5 sm:p-8 rounded-xl text-white">
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 block mb-4">
                ESTABLISHED 2005 · WWW.MAXENGGJSR.IN
              </span>
              <p className="text-sm font-medium leading-relaxed opacity-90">
                &quot;Instrumentation Service Provider and Solution for Industrial Excellence. Operating with industrial precision since 2005. Available Monday through Saturday.&quot;
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_12px_32px_rgba(7,28,54,0.08)] mt-12">
            <h2 className="text-3xl font-headline font-extrabold text-primary-container mb-8">
              Send Inquiry
            </h2>

            {/* Success Banner */}
            {status === 'success' && (
              <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl">
                <span className="material-symbols-outlined text-green-600">check_circle</span>
                <p className="font-bold">Inquiry submitted successfully! We&apos;ll be in touch soon.</p>
              </div>
            )}

            {/* Error Banner */}
            {status === 'error' && (
              <div className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl">
                <span className="material-symbols-outlined text-red-600">error</span>
                <p className="font-bold">{errorMsg}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Full Name <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-container transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-container transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Industrial Project Proposal"
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-container transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Message <span className="text-error">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your engineering requirements..."
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-container transition-all outline-none resize-none"
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-secondary-container text-on-secondary-container w-full md:w-auto px-12 py-4 rounded-xl font-headline font-bold text-lg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-500/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-3"
                >
                  {status === 'loading' && (
                    <span className="material-symbols-outlined animate-spin text-lg">autorenew</span>
                  )}
                  {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[300px] sm:h-[500px] bg-surface-container-highest relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary-container/10 z-10 pointer-events-none group-hover:bg-primary-container/0 transition-colors duration-500" />
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuByI4y77kkE2l0rKFMzqiACnZU_2LVJHsNiZQXXl3-clOEUa_vd4XfUS8z3q_4RRkr2sh4bz62QsVgO_gWNXYGrjn3E1JQWSdtBlf-WtTFmpcWBHM3_92A8R-tFxDoN1yA2F0YPb9yJArq2Y8y_IbnihAMPTH5F5wvU3KgEKnqptOtugFHrv2W3u-ZfnyPvrrK9xfqL2Prk3SGsfRiFMBpULPH_yl7vu2fZEu81lSv_lL6F-Ambh2s9Po5Z3q4dtBoRJQCpbiYmxo-i"
          alt="Map of Jamshedpur"
          className="w-full h-full object-cover grayscale brightness-75 contrast-125"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl flex flex-col items-center">
            <span
              className="material-symbols-outlined text-secondary text-5xl mb-2"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
            <h4 className="font-headline font-black text-primary-container text-lg">
              Max Engineering Base
            </h4>
            <p className="text-sm text-on-surface-variant">Adityapur, Jamshedpur</p>
            <a
              href="https://maps.google.com/?q=Adityapur,Jamshedpur"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs font-bold uppercase tracking-widest text-secondary hover:underline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  )
}
