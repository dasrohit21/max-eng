export default function FloatingContact() {
  return (
    <div className="fixed bottom-20 right-4 sm:bottom-28 sm:right-8 z-50 flex flex-col gap-3 sm:gap-4">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919431755791"
        className="bg-white text-slate-700 rounded-full p-3 sm:p-4 shadow-[0_12px_32px_rgba(7,28,54,0.15)] hover:scale-110 active:scale-90 transition-all duration-200 backdrop-blur-xl flex items-center justify-center group relative"
        aria-label="WhatsApp"
      >
        <span className="material-symbols-outlined text-green-500">chat</span>
        <span className="hidden sm:block absolute right-full mr-4 bg-white px-3 py-1 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-slate-800">
          WhatsApp
        </span>
      </a>

      {/* Call */}
      <a
        href="tel:9431755791"
        className="bg-amber-500 text-white rounded-full p-3 sm:p-4 shadow-[0_12px_32px_rgba(7,28,54,0.15)] hover:scale-110 active:scale-90 transition-all duration-200 flex items-center justify-center group relative"
        aria-label="Call Us"
      >
        <span className="material-symbols-outlined">call</span>
        <span className="hidden sm:block absolute right-full mr-4 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Us
        </span>
      </a>
    </div>
  )
}
