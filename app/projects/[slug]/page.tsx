import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'
import Link from 'next/link'

const projectData: Record<
  string,
  {
    title: string
    category: string
    location: string
    client: string
    duration: string
    services: string[]
    img: string
    overview: string
    challenges: string[]
    solutions: string[]
    stats: { value: string; label: string }[]
    outcome: string
  }
> = {
  'industrial-electrical-panel': {
    title: 'Industrial Electrical Panel Setup – Adityapur',
    category: 'ELECTRICAL',
    location: 'Adityapur, Jharkhand',
    client: 'Tata Steel Ancillary Unit',
    duration: '12 Days (Fast-Tracked)',
    services: ['Panel Design', 'PLC Integration', 'On-site Setup'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOokEcWhT2UxeCf23Nd4Z4QnPiwz7KOQWPPpPCc-r4Q5OPdnA85SZl9MUqtp2mhir76xXPjLk9sChWp9-J9QlTst2SJ0FMS5LQRb-tdNKlbqIHMExEnjBHyxTAb8GkcRfp2YisWLAAkNgksZ8hyMaavT8GPzB2tRTv50IMmgj4bq00d34wWk-m3qr7eNFQqV1_2B-zRpYDojAM0QwwfyVYemX31GSentVT2NWbM7QFw3RjP10ODKCRPniWyQ-vp-GVwbSnWUwXJFVd',
    overview:
      'The Adityapur Industrial Hub required a robust, high-capacity electrical panel infrastructure for a newly commissioned manufacturing unit. Max Engineering was tasked with designing, assembling, and installing a centralized control system capable of handling peak loads while ensuring 99.9% uptime for critical assembly lines.',
    challenges: [
      'Limited spatial footprint for massive power distribution units.',
      'Integration with legacy machinery using outdated communication protocols.',
      'Strict 14-day timeline to avoid manufacturing delays.',
    ],
    solutions: [
      'Modular vertical panel stacking to save 40% floor space.',
      'Custom PLC bridge implementation for seamless data relay.',
      '24/7 dual-shift engineering team deployment for rapid setup.',
    ],
    stats: [
      { value: '15%', label: 'Efficiency Gain' },
      { value: '0', label: 'Safety Incidents' },
      { value: '10yr', label: 'Warranty Period' },
    ],
    outcome:
      'The final installation exceeded all safety benchmarks and was delivered 2 days ahead of schedule. The facility now operates at maximum capacity with zero power-related interruptions reported in the first quarter of operations.',
  },
  'substation-grid-modernization': {
    title: 'Substation Grid Modernization',
    category: 'ELECTRICAL',
    location: 'Ghatshila, Jharkhand',
    client: 'Suburban Industrial Zone',
    duration: '21 Days',
    services: ['Switchgear Overhaul', 'Transformer Install', 'Testing & Certification'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtFSp0-_HKLj24tEKp06By48uJRox5KHjCcBBfNeETE4B4IQ8ZB-Q4woSWt-WCyVqR5ZtexdyVO7UeTXqPOWZwjmIoSsv2rVhwdHwiJtxn84bFmtOMPwmTvc3bc5zsZCu8ugszz7sS3gf3-opQoaxN08aa4kqc8XhIl7meSi2EPBkUwgTzfZvsKRbbqee9aqRMPwr6a7vy9QB8D5KydnTrkd36GMt7pIYEnhTcQ1XIp9jJCTXs0dd2SzdlPF3tHw7U4y8BSDGGMYkM',
    overview:
      'Legacy switchgear infrastructure at a suburban industrial substation required a complete overhaul and modernization to improve power efficiency and reliability for the growing industrial zone.',
    challenges: [
      'Aging equipment with no standardized replacement parts.',
      'Minimal allowed downtime for connected industrial clients.',
      'High-voltage safety constraints during live switchover.',
    ],
    solutions: [
      'Custom-fabricated replacement components with modern equivalents.',
      'Phased switching strategy to maintain partial power at all times.',
      'Certified high-voltage team with specialized live-line equipment.',
    ],
    stats: [
      { value: '22%', label: 'Power Efficiency Gain' },
      { value: '4hrs', label: 'Max Downtime' },
      { value: '20yr', label: 'System Lifespan' },
    ],
    outcome:
      'The modernized substation now serves the industrial zone at 22% higher efficiency. All transformers passed certification and the project was delivered within budget.',
  },
}

const relatedProjects = [
  {
    href: '/projects/enterprise-ip-surveillance',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQiBxpFeMpI32IFpBLxKXs-TQzLKB1Q-esvOjuqW5Qi5vbwibcQyKU3VRdrjsoGWxZkfqmbSFnY5B9anqWJB7jLUQrMyoUYB4S_PyjStPRx_ZnCwhj-4GINwSXgAnN82KkqVEsBonLC3RKjbLEWfr8PRmZoI_VHddwz5cKSZW-Nrlrf2FR2n9wZFmeN9NtJUE9wDR33hi_OnX3ahA3sZ3nz6QjEcR27kzujlz85mKgcuqr9vREXJ2LM6wxl9azwH7-zV9gXnlrAjJ3',
    category: 'Infrastructure',
    title: 'Smart Grid Integration – Ranchi',
  },
  {
    href: '/projects/substation-grid-modernization',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDViDEGLbYX45Ov4vavSuSMDra5EHpfUuliduSW5Cb80g7_YyxiW52Pw3TSOX_282bktgYUIpKcMStpJu00cJnAXPtXUX0e4a1BsrbVWd2jr-EzuOC4VJOVRLBWLVOTVWJjeAdvAqojT0ioDwIqPHBfE7nN32yUiIGxE0Avmw3LYqfyB_fBNGS_4w9psRYYXAI9Lpvd4MtvzdL-UY4evSyN1GD4N2jYrfCilO38FZ9e7KB2fwhC4ohTsly8oSDuW1ZgVYtVK8Exbb8T',
    category: 'Civil & Foundation',
    title: 'Sub-station Civil Works',
  },
]

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }))
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug]

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-headline font-bold text-primary-container mb-4">
              Project Not Found
            </h1>
            <Link href="/projects" className="text-secondary-container font-bold underline">
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="pt-8 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs font-label uppercase tracking-widest text-on-surface-variant mb-8">
          <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link href="/projects" className="hover:text-secondary transition-colors">Projects</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-on-surface font-semibold">{project.title}</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-12 border-l-8 border-secondary-container pl-6">
          <p className="text-secondary font-headline font-extrabold tracking-tighter text-sm uppercase mb-2">
            Project Case Study
          </p>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-primary-container tracking-tight leading-tight max-w-4xl">
            {project.title}
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Large Project Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Overview */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-12 bg-secondary-container" />
                <h2 className="text-2xl font-headline font-bold text-primary-container uppercase tracking-tight">
                  Project Overview
                </h2>
              </div>
              <p className="text-lg text-on-surface-variant leading-relaxed">{project.overview}</p>
            </section>

            {/* Challenges & Solutions */}
            <section className="bg-surface-container-low rounded-xl p-8 md:p-12 space-y-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-headline font-bold text-primary-container flex items-center gap-2">
                    <span className="material-symbols-outlined text-error">warning</span>
                    Challenges
                  </h3>
                  <ul className="space-y-3 text-on-surface-variant">
                    {project.challenges.map((c) => (
                      <li key={c} className="flex gap-3">
                        <span className="text-secondary-container font-bold">•</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-headline font-bold text-primary-container flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">build</span>
                    Solutions
                  </h3>
                  <ul className="space-y-3 text-on-surface-variant">
                    {project.solutions.map((s) => (
                      <li key={s} className="flex gap-3">
                        <span className="text-secondary-container font-bold">•</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Outcome */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-12 bg-secondary-container" />
                <h2 className="text-2xl font-headline font-bold text-primary-container uppercase tracking-tight">
                  Outcome / Results
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="p-6 bg-surface-container-lowest border-l-4 border-secondary-container shadow-sm">
                    <div className="text-3xl font-headline font-extrabold text-primary">{stat.value}</div>
                    <div className="text-xs font-label uppercase text-on-surface-variant mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-on-surface-variant leading-relaxed">{project.outcome}</p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <div className="machined-gradient rounded-xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                <h3 className="text-xl font-headline font-bold mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container">analytics</span>
                  Project Specs
                </h3>
                <div className="space-y-6 relative z-10">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-on-primary-container font-bold">Client Name</label>
                    <p className="text-lg font-headline font-semibold">{project.client}</p>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-on-primary-container font-bold">Location</label>
                    <p className="text-lg font-headline font-semibold">{project.location}</p>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-on-primary-container font-bold">Duration</label>
                    <p className="text-lg font-headline font-semibold">{project.duration}</p>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-on-primary-container font-bold">Services Provided</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.services.map((s) => (
                        <span key={s} className="px-3 py-1 bg-white/10 rounded-full text-[11px] font-label font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="w-full mt-10 block bg-secondary-container text-on-secondary-container py-4 rounded-xl font-headline font-extrabold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-lg active:scale-95 text-center"
                >
                  Request Similar Project
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="bg-surface-container rounded-xl p-6 flex items-center gap-4">
                <div className="bg-primary-container p-3 rounded-lg">
                  <span className="material-symbols-outlined text-secondary-container">verified</span>
                </div>
                <div>
                  <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Quality Standard</p>
                  <p className="font-headline font-bold text-primary-container">ISO 9001:2015 Certified</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Projects */}
        <section className="mt-24 pt-16 border-t border-surface-container-high">
          <h2 className="text-3xl font-headline font-extrabold text-primary-container mb-10 tracking-tight">
            More Engineering Marvels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((rp) => (
              <Link key={rp.href} href={rp.href} className="group block">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-surface-container-highest">
                  <img
                    src={rp.img}
                    alt={rp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-[10px] font-label uppercase tracking-widest text-secondary font-bold mb-1">
                  {rp.category}
                </p>
                <h3 className="text-lg font-headline font-bold text-primary-container group-hover:text-secondary transition-colors">
                  {rp.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </>
  )
}
