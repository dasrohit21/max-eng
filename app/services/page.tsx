'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'
import Link from 'next/link'

const services = [
  {
    icon: 'electrical_services',
    title: 'Electrical Services',
    items: ['Wiring & installation', 'Panel setup', 'Maintenance'],
    description:
      'Max Engineering provides end-to-end electrical solutions for industrial plants. From high-voltage wiring to complex panel installations, our certified electricians ensure safe, reliable, and code-compliant work across all project sites.',
    details: [
      {
        heading: 'Heavy-Duty Wiring & Installation',
        text: 'Complete electrical wiring for industrial facilities including power cable laying (LT), cable glanding & termination, and cable schedule making with ferrule printing. We handle signal, control, and power cables with proper separation to avoid electromagnetic interference.',
      },
      {
        heading: 'Panel Erection & Setup',
        text: 'Professional erection and commissioning of DCS, MCC, PCC, RIO, and Drive Panels. We ensure proper mounting, wiring, earthing, and integration with existing plant control systems.',
      },
      {
        heading: 'Electrical Maintenance',
        text: 'Preventive and corrective maintenance services for industrial electrical systems. Our 24/7 emergency support ensures minimum downtime for your critical operations.',
      },
      {
        heading: 'Cable Tray Systems',
        text: 'Design and installation of ladder-type and perforated cable trays. We handle route planning, fabrication, mounting with proper supports, and complete documentation for easy future maintenance.',
      },
    ],
    clients: 'Tata Steel, Chandrakanta Electricals, Swastik Electricals, SMC Power Generation, Bengal Energy Ltd.',
  },
  {
    icon: 'settings_input_component',
    title: 'Instrumentation',
    items: ['Process control systems', 'Calibration', 'Installation'],
    description:
      'Our core expertise lies in industrial instrumentation — designing, installing, and commissioning precision measurement and control systems for steel plants, power plants, and manufacturing facilities across India.',
    details: [
      {
        heading: 'Process Control Systems',
        text: 'Complete instrumentation for Blast Furnaces, Sinter Plants, PCI systems, and Power Plants. We install and configure transmitters, sensors, analyzers, and control valves for temperature, pressure, flow, and level measurement.',
      },
      {
        heading: 'Calibration Services',
        text: 'Total process control instruments calibration using industry-standard references. Every sensor and transmitter is calibrated to meet your plant\'s specifications, with full documentation and traceability.',
      },
      {
        heading: 'Erection & Commissioning',
        text: 'End-to-end E&C services from field instrument installation to loop checking and plant startup support. We handle everything from cable laying to final commissioning, ensuring seamless integration with your DCS/SCADA systems.',
      },
      {
        heading: 'Sox/NOx Analyzer Systems',
        text: 'Specialized installation and commissioning of emissions monitoring systems including Sox and NOx analyzers for power plants and industrial units, ensuring environmental compliance.',
      },
    ],
    clients: 'Tata Steel Limited, KIC Metaliks, Prowess International, Chemtrols Industries, MSP Metallics Ltd.',
  },
  {
    icon: 'bolt',
    title: 'Power Plant Instrumentation',
    items: ['WHRB instrumentation', 'Captive Power Plants', 'Turbine monitoring'],
    description:
      'Specialized instrumentation services for power generation facilities including Waste Heat Recovery Boilers (WHRB), Captive Power Plants (CPP), and CFBC boilers.',
    details: [
      {
        heading: 'WHRB Instrumentation',
        text: 'Complete instrumentation for Waste Heat Recovery Boilers — steam pressure monitoring, temperature profiling, flow measurement, and safety interlock systems for efficient heat recovery.',
      },
      {
        heading: 'Captive Power Plant (CPP)',
        text: 'End-to-end C&I works for captive power plants including turbine speed monitoring, generator output measurement, and integrated control systems.',
      },
      {
        heading: 'Safety & Interlock Systems',
        text: 'Design and implementation of safety instrumented systems (SIS) and emergency shutdown systems to protect critical power generation equipment and personnel.',
      },
    ],
    clients: 'SMC Power Generation Ltd., Shri Mahavir Ferro Alloys, Envirocare Infrasolution Pvt. Ltd.',
  },
  {
    icon: 'factory',
    title: 'Blast Furnace & PCI',
    items: ['BF instrumentation', 'PCI systems', 'Sinter plant controls'],
    description:
      'Deep expertise in instrumentation for iron-making facilities. We have successfully completed multiple Blast Furnace, PCI, and Sinter Plant instrumentation projects for major steel producers.',
    details: [
      {
        heading: 'Blast Furnace Instrumentation',
        text: 'Temperature monitoring, pressure control, gas flow measurement, burden distribution systems, and cooling water monitoring for optimal iron production.',
      },
      {
        heading: 'Pulverized Coal Injection (PCI)',
        text: 'Precise measurement of coal flow rates, injection pressures, and carrier gas systems to reduce coke consumption and optimize furnace efficiency.',
      },
      {
        heading: 'Sinter Plant Controls',
        text: 'Instrumentation for sintering process control — bed temperature monitoring, exhaust gas composition analysis, fan speed control, and material handling systems.',
      },
    ],
    clients: 'Tata Steel (Kalinga Nagar), KIC Metaliks (Durgapur), Shyam Sel and Power Ltd., Circle Resources Pvt. Ltd.',
  },
  {
    icon: 'groups',
    title: 'Manpower Services',
    items: ['Skilled technicians', 'Project-based deployment', 'On-site support'],
    description:
      'We provide skilled manpower for industrial projects — experienced instrumentation technicians, electricians, and supervisors who can integrate seamlessly with your project teams.',
    details: [
      {
        heading: 'Skilled Technician Deployment',
        text: 'Trained and certified instrumentation and electrical technicians available for short-term and long-term project deployments across India.',
      },
      {
        heading: 'On-Site Commissioning Support',
        text: 'Dedicated engineers and technicians for plant startup and commissioning support, ensuring smooth handover from installation to operations.',
      },
      {
        heading: 'Project Team Augmentation',
        text: 'Flexible team scaling for large projects — supervisors, quality inspectors, safety officers, and skilled workers to supplement your existing workforce.',
      },
    ],
    clients: 'Tenova India Pvt. Ltd., Tata Steel KPO, and various industrial clients.',
  },
  {
    icon: 'build',
    title: 'Fabrication & Erection',
    items: ['Instrument stands', 'Canopy fabrication', 'Custom structures'],
    description:
      'On-site and off-site fabrication of instrument stands, canopies, brackets, and custom support structures for industrial instrumentation and electrical installations.',
    details: [
      {
        heading: 'Instrument Stand Fabrication',
        text: 'Custom-designed and fabricated instrument stands and mounting structures for field instruments, ensuring proper height, accessibility, and vibration isolation.',
      },
      {
        heading: 'Canopy & Weather Protection',
        text: 'Fabrication and erection of protective canopies for sensitive instruments and junction boxes exposed to harsh industrial environments.',
      },
      {
        heading: 'Cable Tray Fabrication',
        text: 'Custom cable tray sizes and configurations — ladder type and perforated type — fabricated to match specific plant requirements and routing plans.',
      },
    ],
    clients: 'Various industrial clients across Jharkhand, Odisha, and West Bengal.',
  },
]

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`bg-surface-container-lowest rounded-xl shadow-[0_12px_32px_rgba(7,28,54,0.05)] border transition-all duration-300 cursor-pointer ${
        expanded ? 'border-secondary-container/50 shadow-xl' : 'border-outline-variant/10 hover:border-secondary-container/30'
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 flex items-center justify-center rounded-xl flex-shrink-0 transition-colors ${
              expanded ? 'bg-secondary-container' : 'bg-surface-container'
            }`}>
              <span
                className={`material-symbols-outlined transition-colors ${
                  expanded ? 'text-white' : 'text-primary-container'
                }`}
                style={{ fontSize: '32px' }}
              >
                {service.icon}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold font-headline text-primary-container">
                {service.title}
              </h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-1 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-secondary-container text-sm">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 flex-shrink-0 mt-1 ${
            expanded ? 'rotate-180' : ''
          }`}>
            expand_more
          </span>
        </div>
      </div>

      {/* Expanded Content */}
      <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-outline-variant/10">
          <p className="text-on-surface-variant leading-relaxed mt-6 mb-6">
            {service.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {service.details.map((detail) => (
              <div key={detail.heading} className="bg-surface-container-low p-4 rounded-xl">
                <h4 className="font-headline font-bold text-primary-container text-sm mb-2">{detail.heading}</h4>
                <p className="text-on-surface-variant text-xs leading-relaxed">{detail.text}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-4 border-t border-outline-variant/10">
            <span className="material-symbols-outlined text-secondary-container text-base">business</span>
            <p className="text-xs text-on-surface-variant">
              <span className="font-bold text-primary-container">Key Clients: </span>
              {service.clients}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="relative min-h-[280px] sm:min-h-[409px] flex items-center bg-primary-container overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrOa9wlRyRlFxbYDQ1hDQv7lieSlpXXB0I3yAoaP0oiIitDxx5gkiax4UxtvEJ_BtO1CciDqcP8Vgf9rplnTqQREMgQmVgfCqZranTd4pAjmta71uNPG16BI12ZhWvVOwLBOsu3t8PYr38veYnSTXOLqsWsVxurxJsYRG3GNyVt3UGu93PwpGgiHRVpfJZ2HTZepHB2FqEbxZGjMxHUDeI5SNBao3UFJ_iCLjcmJHZe5F4Csit7QnuvyBAiNyeRAgZeRt_qnl7TTav"
            alt="Engineering services background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 px-4 sm:px-8 md:px-20 max-w-7xl fade-up">
          <span className="text-secondary-container font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            PRECISE SOLUTIONS
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white font-headline leading-tight tracking-tighter">
            Our Services
          </h1>
          <p className="mt-4 text-on-primary-container text-lg max-w-xl">
            Comprehensive electrical and instrumentation solutions for industrial plants across India.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 md:px-20 bg-surface">
        <div className="max-w-5xl mx-auto">
          <p className="text-on-surface-variant text-center mb-10 max-w-2xl mx-auto">
            Click on any service to learn more about our capabilities, process, and key clients.
          </p>
          <div className="flex flex-col gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 md:px-20 bg-surface-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-black font-headline text-primary-container mb-6">
            Get a Custom Quote Today
          </h2>
          <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            From complex industrial instrumentation to standard electrical maintenance, our
            engineering team delivers precision at scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-secondary-container text-on-secondary-fixed font-bold font-headline px-6 sm:px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Request Quote
            </Link>
            <Link
              href="/projects"
              className="bg-primary-container text-white font-bold font-headline px-6 sm:px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
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
