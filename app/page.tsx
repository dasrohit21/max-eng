import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-industrial-hero min-h-[870px] flex items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto py-20 relative z-10 fade-up">
          <span className="text-secondary-container font-headline font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
            Industrial Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-tight mb-8 tracking-tighter">
            Reliable Electrical &amp; <br />
            <span className="text-secondary-container">Instrumentation</span> Excellence
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
            High-precision engineering services for complex industrial environments. We deliver
            safety, efficiency, and modern infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-secondary-container text-primary-container font-bold rounded-xl text-lg shadow-xl btn-lift"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:9431755791"
              className="w-full sm:w-auto px-10 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 font-bold rounded-xl text-lg hover:bg-white/20 transition-all text-center"
            >
              Call Now
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-10 border-t border-white/10">
            <div className="flex items-center justify-center gap-3 text-white">
              <span className="material-symbols-outlined text-secondary-container text-3xl">verified</span>
              <span className="font-headline font-bold uppercase text-xs tracking-widest">Professional Service</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <span className="material-symbols-outlined text-secondary-container text-3xl">bolt</span>
              <span className="font-headline font-bold uppercase text-xs tracking-widest">Fast Response</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <span className="material-symbols-outlined text-secondary-container text-3xl">payments</span>
              <span className="font-headline font-bold uppercase text-xs tracking-widest">Affordable Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-secondary-container/10 rounded-xl transform -rotate-3 transition-transform group-hover:rotate-0" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVb13lPwi8jyagNpdXCPEVVdiGVtMviXPvsOQ61uS0J4Idkqz3jgtY1cUgSBdsV7O76aRsb04WkcPcxdYvLLh1O_WUJf2-E_mVQ94-Xi2gDTtlE_EZrHXG5nl1JzncozUaPH4sr9YqbsP_dCbrPi3ge8p38r35ZNI6x0ZDCrNf6s1wblqM0qGCqt08eg9LF-70KuskfQQFmLE7ZQdo7Rqw7-NUb3pBIzaBzcNgs-NvTqIs9Yvr3_EyyYbUjQovHENw4tavqfUcUEyn"
              alt="Industrial electrical control panel"
              className="relative z-10 w-full aspect-square object-cover rounded-xl shadow-2xl"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary-container mb-8 leading-tight">
              Engineering Excellence <br />Through Precision
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg">
              <p>
                Established in 2005, Max Engineering is a service provider company for Process Automation in Jamshedpur — specialising in system design, process instrumentation, and supply of all equipment required for industrial automation.
              </p>
              <p>
                We deliver Calibration, Erection & Commissioning for Process & Control Equipment, trusted by 19+ major industrial corporations including Tata Steel, SMC Power Generation, and KIC Metaliks across India.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <span className="text-4xl font-headline font-black text-primary-container block">200+</span>
                  <span className="text-sm font-bold uppercase text-on-primary-container tracking-tighter">Projects Completed</span>
                </div>
                <div>
                  <span className="text-4xl font-headline font-black text-primary-container block">20+</span>
                  <span className="text-sm font-bold uppercase text-on-primary-container tracking-tighter">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-headline font-extrabold text-primary-container mb-4">
                Specialized Services
              </h2>
              <p className="text-on-surface-variant text-lg">
                We offer comprehensive engineering solutions designed to keep your infrastructure
                running safely and efficiently.
              </p>
            </div>
            <Link
              href="/services"
              className="text-primary-container font-bold border-b-2 border-primary-container pb-1 hover:text-secondary-container hover:border-secondary-container transition-colors whitespace-nowrap"
            >
              View All Services
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: 'electric_bolt',
                title: 'Electrical Installation',
                desc: 'Complete heavy-duty wiring and panel boards for industrial plants.',
              },
              {
                icon: 'settings_input_component',
                title: 'Instrumentation Setup',
                desc: 'Precision sensor and control system calibration and installation.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-surface-container-lowest p-8 rounded-xl group hover:bg-primary-container transition-all duration-300 shadow-sm hover:shadow-2xl card-hover"
              >
                <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-lg mb-6 group-hover:bg-secondary-container/20">
                  <span className="material-symbols-outlined text-secondary-container text-3xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3 text-primary-container group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 group-hover:text-slate-300">
                  {service.desc}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-secondary-container font-bold text-sm"
                >
                  Learn More{' '}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-secondary-container font-headline font-bold text-sm tracking-widest block mb-4 uppercase">
              Reliability First
            </span>
            <h2 className="text-4xl font-headline font-extrabold text-primary-container mb-8">
              Why Industry Leaders Trust Max Engineering
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: 'engineering',
                  title: 'Industrial Expertise',
                  desc: 'Decades of combined team experience in high-voltage and instrumentation work.',
                },
                {
                  icon: 'history',
                  title: 'Response Time',
                  desc: 'We understand that downtime is expensive. Our teams are always ready to move.',
                },
                {
                  icon: 'verified_user',
                  title: 'Certified Quality',
                  desc: 'All components and installations follow the strictest national safety standards.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-container text-white flex items-center justify-center rounded-full">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-headline font-bold text-primary-container mb-1">
                      {item.title}
                    </h4>
                    <p className="text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Lpwb3VZ0_dK8enWcfKFWwPlYv-7b8rjleTCuqK5xX_m1i5l_zUOjLnEI7KykwNMd9c4BN1nTVuO1GaPomPS7wnLdXc8XTGws7Pt7O1O527v1cJbAk9gmTW3UIcRErcgRppkmUegPNkGhfSVsex_jq7I9lZaYYKbzwaduMRn2MYGpfNBfMck5iykvp9oVH8quQVW-pWxQk-BoMhGthpdCt4ojAMEq__UObl4VDt82HsMLgs9ZTXUxIpx4wswF5SRAdbmObW6pnsbX"
                alt="Electrician working on wiring"
                className="w-full rounded-xl object-cover"
              />
              <div className="flex flex-col gap-4">
                <div className="bg-secondary-container p-8 rounded-xl flex flex-col justify-center text-primary-container">
                  <h4 className="text-3xl font-headline font-black mb-1">24/7</h4>
                  <p className="font-bold uppercase text-xs">Emergency Support</p>
                </div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB03Hx8jxMYl6-7R5GAgrWD8GFeFnYOfaqNxWxaHMLmpvH6ETi_2xpOWujqUkviKcSou53IAD2FzFoVEsDYmbzLwHeyDdP3DW5yZcEnVJSGV2JDIHr3ki6WrDODconzg-yCjPoZRsf0V3xsTJZqbxsc5kVC8z4Qu6ipQdb6li_E7S6VV61AV4ofRkdg73uOGKsfUoMfwQ6V1ahqYugkREaHnqAZyBLXKmzgQAMLQwN0-r7Nehk_RlLbONHaDpHWzOcv94FIIFoJJXX"
                  alt="Instrumentation cluster"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-primary-container relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary-container/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-white mb-6">
            Need Professional Engineering Services?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Get in touch with our expert team today for a free consultation and project estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:9431755791"
              className="bg-secondary-container text-primary-container px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all"
            >
              <span className="material-symbols-outlined">call</span> Call Now
            </a>
            <a
              href="https://wa.me/919431755791"
              className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            >
              <span className="material-symbols-outlined">chat</span> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  )
}
