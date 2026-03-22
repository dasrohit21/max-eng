'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'
import Link from 'next/link'
import { projects as staticProjects } from '@/lib/data'

type Project = {
  id: number
  client: string
  location: string
  category: string
  work: string
  detail: string
}

const filters = ['All Projects', 'Electrical', 'Instrumentation']

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-[fadeUp_0.25s_ease_both]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary-container px-8 pt-8 pb-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-white text-xl">close</span>
          </button>
          <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block ${
            project.category === 'Electrical'
              ? 'bg-amber-400 text-amber-900'
              : 'bg-blue-400 text-blue-900'
          }`}>
            {project.category}
          </span>
          <h2 className="text-2xl font-headline font-extrabold text-white leading-tight">
            {project.client}
          </h2>
          <div className="flex items-center gap-1 mt-3 text-on-primary-container text-sm">
            <span className="material-symbols-outlined text-secondary-container text-base">location_on</span>
            {project.location}
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-6 space-y-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Scope of Work</p>
            <p className="text-on-surface-variant leading-relaxed">{project.work}</p>
          </div>

          {project.detail && (
            <div className="bg-surface-container-low rounded-xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Project Details</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">{project.detail}</p>
            </div>
          )}

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={onClose}
              className="w-full block text-center bg-primary-container text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
            >
              Request Similar Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [active, setActive] = useState('All Projects')
  const [selected, setSelected] = useState<Project | null>(null)
  const [projects, setProjects] = useState<Project[]>(staticProjects)

  useEffect(() => {
    fetch('/api/admin/projects')
      .then((r) => r.json())
      .then((d) => { if (d.projects?.length) setProjects(d.projects) })
      .catch(() => {})
  }, [])

  const filtered =
    active === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <>
      <Navbar />

      {/* Modal */}
      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}

      {/* Page Header */}
      <header className="relative overflow-hidden bg-primary-container py-24 px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase mb-6 fade-up">
            Portfolio
          </div>
          <h1 className="text-white font-headline text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
            Our <span className="text-secondary-container">Work</span>
          </h1>
          <p className="text-on-primary-container max-w-2xl text-lg leading-relaxed">
            A legacy of precision and technical excellence — 19+ reputed clients across India including Tata Steel, SMC Power Generation, KIC Metaliks and more.
          </p>
          <div className="flex gap-8 mt-10">
            <div>
              <p className="text-3xl font-headline font-black text-secondary-container">19+</p>
              <p className="text-on-primary-container text-xs uppercase tracking-widest font-bold">Major Clients</p>
            </div>
            <div>
              <p className="text-3xl font-headline font-black text-secondary-container">200+</p>
              <p className="text-on-primary-container text-xs uppercase tracking-widest font-bold">Projects Done</p>
            </div>
            <div>
              <p className="text-3xl font-headline font-black text-secondary-container">20+</p>
              <p className="text-on-primary-container text-xs uppercase tracking-widest font-bold">Years Experience</p>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
          <span className="material-symbols-outlined" style={{ fontSize: '400px', fontVariationSettings: "'wght' 100" }}>
            precision_manufacturing
          </span>
        </div>
      </header>

      {/* Filter & Grid */}
      <section className="py-20 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-tight transition-colors ${
                  active === f
                    ? 'bg-primary-container text-on-primary'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-highest'
                }`}
              >
                {f}
              </button>
            ))}
            <span className="text-on-surface-variant text-sm ml-2">{filtered.length} projects</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelected(project)}
                className="text-left bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10 card-hover flex flex-col gap-4 w-full cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    project.category === 'Electrical'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.category}
                  </span>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-secondary-container transition-colors">open_in_full</span>
                </div>

                <div>
                  <h3 className="font-headline font-extrabold text-primary-container text-lg leading-tight group-hover:text-secondary transition-colors">
                    {project.client}
                  </h3>
                  <div className="flex items-center gap-1 mt-1 text-on-surface-variant text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {project.location}
                  </div>
                </div>

                <div className="border-t border-outline-variant/10 pt-4 flex-1">
                  <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">{project.work}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-surface-container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl font-black text-primary-container mb-6 tracking-tight">
            Start Your Engineering Journey
          </h2>
          <p className="text-on-surface-variant mb-10 text-lg">
            Have a project in mind? Let our team of expert engineers provide you with a high-precision blueprint and execution plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-primary-container text-on-primary px-10 py-4 rounded-xl font-headline font-bold text-lg hover:opacity-90 active:scale-95 transition-all"
            >
              Request Quote
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto border-2 border-primary-container text-primary-container px-10 py-4 rounded-xl font-headline font-bold text-lg hover:bg-primary-container hover:text-white transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  )
}
