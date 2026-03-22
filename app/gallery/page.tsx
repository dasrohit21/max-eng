'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'
import Link from 'next/link'
import { galleryImages as staticImages } from '@/lib/data'

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState<string[]>(staticImages)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)

  useEffect(() => {
    fetch('/api/admin/gallery')
      .then((r) => r.json())
      .then((d) => { if (d.images?.length) setGalleryImages(d.images.map((i: { src: string }) => i.src)) })
      .catch(() => {})
  }, [])

  const openLightbox = (src: string, index: number) => {
    setLightbox(src)
    setLightboxIndex(index)
  }

  const prev = () => {
    const i = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
    setLightbox(galleryImages[i])
    setLightboxIndex(i)
  }

  const next = () => {
    const i = (lightboxIndex + 1) % galleryImages.length
    setLightbox(galleryImages[i])
    setLightboxIndex(i)
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative py-12 sm:py-24 px-4 sm:px-8 overflow-hidden machined-gradient">
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-secondary-container font-label uppercase tracking-[0.2em] text-sm font-bold block mb-4 fade-up">
            Excellence in Execution
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-headline font-extrabold text-white tracking-tighter leading-tight">
            Project Gallery
          </h1>
          <p className="mt-6 text-slate-400 text-lg md:text-xl font-body leading-relaxed max-w-xl">
            A visual record of our work across industrial sites — electrical panels, instrumentation
            systems, cable trays, and on-site installations.
          </p>
          <p className="mt-3 text-slate-500 text-sm font-body">
            {galleryImages.length} photos
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-8 sm:py-16 px-3 sm:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {galleryImages.map((src, i) => (
              <div
                key={src}
                className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => openLightbox(src, i)}
              >
                <img
                  src={src}
                  alt={`Site photo ${i + 1}`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary-container/0 group-hover:bg-primary-container/40 transition-all duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    zoom_in
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
            onClick={() => setLightbox(null)}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <button
            className="absolute left-4 text-white/70 hover:text-white z-10 p-2"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <span className="material-symbols-outlined text-4xl">chevron_left</span>
          </button>
          <img
            src={lightbox}
            alt="Enlarged view"
            className="max-h-[88vh] max-w-[85vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 text-white/70 hover:text-white z-10 p-2"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <span className="material-symbols-outlined text-4xl">chevron_right</span>
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 bg-surface-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight mb-6">
            Need a quote for your next major project?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Our team of engineers and technicians is ready to bring high-precision solutions to
            your facility. Let&apos;s build something lasting together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-primary-container text-white rounded-xl font-bold shadow-xl hover:scale-105 transition-all"
            >
              Request a Quote
            </Link>
            <Link
              href="/projects"
              className="px-10 py-4 bg-white text-primary-container border-2 border-primary-container/10 rounded-xl font-bold hover:bg-slate-50 transition-all"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  )
}
