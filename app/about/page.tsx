import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'

export const metadata = {
  title: 'About Max Engineering | Instrumentation Solution for Industrial Excellence',
}

const clients = [
  { name: 'Industrial Sales & Service', location: 'Jamshedpur, JH', work: 'E&C of Instrumentation System (MBF) — M/s Tayo Rolls Ltd.' },
  { name: 'Paradigm Engineers & Consultants Pvt. Ltd.', location: 'Adityapur, JH', work: 'E&C of Instrumentation System (MBF) — Neepaz Metalicks, Neo Metalicks' },
  { name: 'Prowess International Pvt. Ltd.', location: 'Adityapur, JH', work: 'Oxygen Management & Carbon Injection System — Mahindra Ugine Steel, Jindal Steel' },
  { name: 'Chemtrols Industries Ltd.', location: 'Jamshedpur, JH', work: 'Sox, NOx Analyzer — Tata Power Plant, Jojobera (all 5 units)' },
  { name: 'Orissa Manganese & Minerel Ltd.', location: 'Kandra, JH', work: 'E&C of Instrumentation System — Pellet Plant' },
  { name: 'Chandrakanta Electricals', location: 'Jamshedpur, JH', work: 'E&C of Instrumentation System — Tata Steel Re-Heating Furnace' },
  { name: 'Swastik Electricals', location: 'Jamshedpur, JH', work: 'E&C of Instrumentation — Tata Steel KPO Walking Beam Furnace 1 & 2 (2014)' },
  { name: 'Tata Steel Limited', location: 'Kalinga Nagar, Jajpur, Orissa', work: 'E&C of Instrumentation System — Blast Furnace & PCI (Vendor Code M553)' },
  { name: 'SMC Power Generation Ltd.', location: 'Odisha', work: '30 MW & 40 MW Power Plant, WHRB 1–9, MBF & Sinter Plant' },
  { name: 'Tenova India Private Ltd.', location: 'Jajpur, Odisha', work: 'Manpower Service Technician — Tata KPO' },
  { name: 'KIC Metaliks Limited', location: 'Durgapur, WB', work: 'E&C of Instrumentation — MBF, PCI, Sinter Plant, APH & BFGH' },
  { name: 'Tata Steel Long Products Ltd.', location: 'Seraikela-Kharsawan, JH', work: 'E&C of Instrumentation System — BF MSD (2020–2021)' },
  { name: 'Purulia Metal Casting (P) Ltd.', location: 'West Bengal', work: 'E&C of Instrumentation System — Sinter Plant' },
  { name: 'MSP Metallics Ltd.', location: 'Jharsuguda, Odisha', work: 'E&C of Instrumentation System — MBF & Oxygen Plant' },
  { name: 'Shri Mahavir Ferro Alloys (P) Ltd.', location: 'India', work: 'Erection of Electrical & Instrumentation — Captive Power Plant' },
  { name: 'Bengal Energy Ltd.', location: 'Kharagpur, WB', work: 'Erection of Electrical & Instrumentation — Sinter Plant' },
  { name: 'Circle Resources Pvt. Ltd.', location: 'Kharagpur, WB', work: 'Erection of Electrical & Instrumentation — Blast Furnace' },
  { name: 'Envirocare Infrasolution Pvt. Ltd.', location: 'India', work: 'C&I Works — 2X DRI & WH based CPP Project' },
  { name: 'Shyam Sel and Power Ltd.', location: 'Jamuria, Asansol, WB', work: 'Blast Furnace, PCI, Sinter Plant & TRT' },
]

const strengths = [
  'Total Process Control Instruments Calibration, Erection & Commissioning',
  'Cable Tray Laying (Ladder Type & Perforated Type)',
  'Cable Laying (Signal Cable, Control Cable & Power Cable LT)',
  'Cable Glanding & Termination (Signal, Control & Power Cable LT)',
  'Cable Schedule Making & Cable Ferrule Printing',
  'Erection of Panel (DCS, MCC, PCC, RIO, Drive Panel)',
  'Fabrication and Erection of Instrument Stand & Canopy',
]

const orgStructure = [
  { level: 0, label: 'Proprietor' },
  { level: 1, label: 'HR & AC Department' },
  { level: 2, label: 'Managers' },
  { level: 2, label: 'Project Coordinator' },
  { level: 3, label: 'Project Incharge' },
  { level: 4, label: 'Quality Incharge' },
  { level: 4, label: 'Safety Incharge' },
  { level: 5, label: 'Site Supervisor' },
  { level: 6, label: 'Highly Skilled' },
  { level: 7, label: 'Semi-Skilled' },
  { level: 7, label: 'Skilled' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative py-12 sm:py-24 px-4 sm:px-8 overflow-hidden bg-surface-container">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 fade-up">
            <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-6 font-label">
              ESTABLISHED 2005
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-headline font-extrabold text-primary-container leading-tight mb-6 sm:mb-8">
              About Max Engineering
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
              Instrumentation Service Provider and Solution for Industrial Excellence. A process automation company specialising in system design, instrumentation, and supply of all equipment and accessories required for industrial automation.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-secondary-container" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPtKtCJnc7YOr-MeKz1VX9nbHLYI0SxGiCiGOJqSxiNuPvhMpU3Mm584nUiFVv3v18lrv9wxqAmie3tchh4C-l9UppwZZnjv1szvK5XoGe2hsXZeB5skXSanNwJaI5Xe7KRoYSzFWvI5aSpxsdeWxJAfl-PiBR220xR-9TV89IuPDIX-XyoE0E0PJcOdfUZFpAlZIuEe3pfMFKX13yxd52PmtxVcF8KTV8-dGa1E7BmMXzE5l2FU86SFdolAdtlud8dR2uFKTgKY7m"
              alt="Industrial Engineering"
              className="rounded-xl shadow-2xl object-cover w-full h-[250px] sm:h-[350px] md:h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Overview & Founder */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-surface-container-lowest p-6 sm:p-12 rounded-xl shadow-sm border-l-8 border-primary-container">
              <h2 className="text-3xl font-headline font-bold text-primary-container mb-6 tracking-tight">
                Instrumentation Solution for Industrial Excellence
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-on-surface-variant leading-relaxed">
                <p>
                  Established in 2005, Max Engineering is a service provider company for Process Automation, which includes system design, process instrumentation and supply of all equipment and its related accessories required for process automation.
                </p>
                <p>
                  We deliver Calibration, Erection & Commissioning for Process & Control Equipment across major industrial plants in India, trusted by leading steel, power, and mining corporations.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 sm:gap-12">
                <div>
                  <span className="block text-4xl font-headline font-black text-secondary">20+</span>
                  <span className="text-xs font-bold font-label uppercase tracking-tighter text-on-surface-variant">Years Experience</span>
                </div>
                <div>
                  <span className="block text-4xl font-headline font-black text-secondary">19+</span>
                  <span className="text-xs font-bold font-label uppercase tracking-tighter text-on-surface-variant">Major Clients</span>
                </div>
                <div>
                  <span className="block text-4xl font-headline font-black text-secondary">200+</span>
                  <span className="text-xs font-bold font-label uppercase tracking-tighter text-on-surface-variant">Projects Completed</span>
                </div>
              </div>

              {/* Team & Site Work */}
              <div className="mt-10 pt-8 border-t border-outline-variant/20">
                <h3 className="text-xl font-headline font-bold text-primary-container mb-4">Our Team at Work</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Our dedicated team of skilled engineers, technicians, and supervisors work across industrial sites throughout India — from blast furnaces and sinter plants to power stations and instrumentation systems. Every project is backed by hands-on expertise and a commitment to zero-accident operations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <img
                    src="/Gallery/PHOTO-2025-02-03-09-55-30.jpg"
                    alt="Max Engineering team group photo"
                    className="w-full h-48 object-cover rounded-xl shadow-md"
                  />
                  <img
                    src="/Gallery/1000032940.jpg"
                    alt="Team working at industrial site"
                    className="w-full h-48 object-cover rounded-xl shadow-md"
                  />
                  <img
                    src="/Gallery/1000034747.jpg"
                    alt="Engineers at work"
                    className="w-full h-48 object-cover rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-6">
              {/* Subhash Sharma */}
              <div className="bg-primary-container text-on-primary p-6 sm:p-8 rounded-xl flex flex-col items-center text-center">
                <img
                  src="/Subhash Sharma.jpg"
                  alt="Subhash Sharma"
                  className="w-28 h-28 rounded-full object-cover border-4 border-secondary-container mb-4 shadow-lg"
                />
                <h3 className="text-xl font-headline font-bold">Subhash Sharma</h3>
                <p className="text-secondary-fixed-dim font-medium text-sm mb-2">Founder & Proprietor</p>
                <p className="text-on-primary-container text-xs opacity-80 mb-3">+91 9431163433</p>
                <p className="text-on-primary-container text-xs leading-relaxed opacity-80">
                  Subhash Sharma brings extensive hands-on experience in electrical erection and commissioning. He oversees project execution and site operations, ensuring every installation meets the highest quality and safety standards across all Max Engineering project sites.
                </p>
              </div>

              {/* Rajkumar Das */}
              <div className="bg-primary-container text-on-primary p-6 sm:p-8 rounded-xl flex flex-col items-center text-center">
                <img
                  src="/Rajkumar Das.jpg"
                  alt="Rajkumar Das"
                  className="w-28 h-28 rounded-full object-cover border-4 border-secondary-container mb-4 shadow-lg"
                />
                <h3 className="text-xl font-headline font-bold">Rajkumar Das</h3>
                <p className="text-secondary-fixed-dim font-medium text-sm mb-2">Co-Founder & Operations Head</p>
                <p className="text-on-primary-container text-xs opacity-80 mb-3">+91 9431755791</p>
                <p className="text-on-primary-container text-xs leading-relaxed opacity-80">
                  With over 20 years of experience in industrial instrumentation, Rajkumar Das founded Max Engineering in 2005. His deep expertise in process automation, control systems, and electrical instrumentation has driven the company to become a trusted partner for 19+ major industrial clients across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1 group">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl machined-gradient text-secondary-container">
                <span className="material-symbols-outlined text-4xl">rocket_launch</span>
              </div>
              <h2 className="text-4xl font-headline font-extrabold text-primary-container mb-6">Our Mission</h2>
              <div className="h-1 w-24 bg-secondary-container mb-8 transition-all group-hover:w-full" />
              <p className="text-xl text-on-surface-variant leading-relaxed">
                Continuous endeavors to deliver expert, innovative value-added technical services and solutions placing highest priority on excellence, efficiency and effectiveness.
              </p>
            </div>
            <div className="flex-1 group">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl machined-gradient text-secondary-container">
                <span className="material-symbols-outlined text-4xl">visibility</span>
              </div>
              <h2 className="text-4xl font-headline font-extrabold text-primary-container mb-6">Our Vision</h2>
              <div className="h-1 w-24 bg-secondary-container mb-8 transition-all group-hover:w-full" />
              <p className="text-xl text-on-surface-variant leading-relaxed">
                To be a renowned engineering corporation providing best-of-breed, end-to-end business solutions leveraging technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Strength */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-headline font-extrabold text-primary-container mb-4">Company Strength</h2>
          <p className="text-on-surface-variant mb-12">Our core technical capabilities and expertise areas.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strengths.map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10 card-hover">
                <span className="material-symbols-outlined text-secondary-container mt-0.5">check_circle</span>
                <p className="text-on-surface-variant font-medium">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Experience */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-primary-container">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-headline font-extrabold text-white mb-4">Team Experience in Following Projects</h2>
          <div className="flex flex-wrap gap-3 mt-6">
            {['Blast Furnace', 'SMS', 'DRI', 'HSM', 'Sinter Plant', 'Power Plant', 'PCI', 'WHRB', 'CFBC', 'Ash Handling System', 'TRT', 'Pellet Plant', 'LRF'].map((p) => (
              <span key={p} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Client List */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-headline font-extrabold text-primary-container mb-4">Our Reputed Client List</h2>
          <p className="text-on-surface-variant mb-12">Trusted by leading industrial corporations across India.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clients.map((client, i) => (
              <div key={i} className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 card-hover">
                <div className="flex items-start gap-4">
                  <span className="text-secondary-container font-headline font-black text-2xl w-8 flex-shrink-0">{i + 1}.</span>
                  <div>
                    <h3 className="font-headline font-bold text-primary-container">{client.name}</h3>
                    <p className="text-secondary text-xs font-bold uppercase tracking-wider mt-0.5 mb-2">{client.location}</p>
                    <p className="text-on-surface-variant text-sm">{client.work}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 machined-gradient">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-secondary-container font-label uppercase tracking-[0.2em] text-sm font-bold block mb-4">How We Operate</span>
          <h2 className="text-2xl sm:text-4xl font-headline font-extrabold text-white mb-10 sm:mb-16">Organizational Structure</h2>
          <div className="flex flex-col items-center gap-0">
            {[
              { roles: ['Proprietor'], icon: 'person', level: 'top' },
              { roles: ['HR & AC Department'], icon: 'groups', level: 'mid' },
              { roles: ['Managers', 'Project Coordinator'], icon: 'manage_accounts', level: 'mid' },
              { roles: ['Project Incharge'], icon: 'engineering', level: 'mid' },
              { roles: ['Quality Incharge', 'Safety Incharge'], icon: 'verified_user', level: 'mid' },
              { roles: ['Site Supervisor'], icon: 'supervisor_account', level: 'mid' },
              { roles: ['Highly Skilled'], icon: 'construction', level: 'base' },
              { roles: ['Semi-Skilled', 'Skilled'], icon: 'handyman', level: 'base' },
            ].map((row, i) => (
              <div key={i} className="flex flex-col items-center w-full">
                {i > 0 && (
                  <div className="flex flex-col items-center">
                    <div className="w-px h-5 bg-secondary-container/50" />
                    <span className="material-symbols-outlined text-secondary-container text-base">keyboard_arrow_down</span>
                  </div>
                )}
                <div className={`flex gap-3 sm:gap-4 justify-center ${row.roles.length > 1 ? 'w-full max-w-lg' : ''}`}>
                  {row.roles.map((label) => (
                    <div
                      key={label}
                      className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm shadow-lg flex-1 max-w-[180px] sm:max-w-[220px] text-center transition-all hover:scale-105 ${
                        row.level === 'top'
                          ? 'bg-secondary-container text-primary-container shadow-amber-500/20'
                          : row.level === 'base'
                          ? 'bg-white/10 text-white border border-white/20 backdrop-blur-sm'
                          : 'bg-white/5 text-white border border-white/10 backdrop-blur-sm'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-base hidden sm:inline ${
                        row.level === 'top' ? 'text-primary-container' : 'text-secondary-container'
                      }`}>{row.icon}</span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Policy */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-surface-container-low">
        <div className="max-w-4xl mx-auto text-center">
          <span className="material-symbols-outlined text-secondary-container text-4xl mb-4 block">shield</span>
          <h2 className="text-3xl font-headline font-extrabold text-primary-container mb-6">Safety Policy</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            The policy of the company is to provide a safe work place for employees in all their operations. The goal of the company is <strong className="text-primary-container">Zero Accident at all sites</strong>. Our company is committed to the safety & health of all employees.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  )
}
