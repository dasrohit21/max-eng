<!-- Design System -->
<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Max Engineering | Reliable Electrical &amp; Instrumentation Solutions</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "on-primary-container": "#7587a7",
                        "background": "#f7f9fc",
                        "surface-container-low": "#f2f4f7",
                        "on-tertiary-fixed": "#0d1c2e",
                        "tertiary-container": "#112032",
                        "on-primary-fixed-variant": "#364764",
                        "surface": "#f7f9fc",
                        "surface-container-highest": "#e0e3e6",
                        "surface-container": "#eceef1",
                        "error-container": "#ffdad6",
                        "secondary-container": "#fea619",
                        "surface-container-lowest": "#ffffff",
                        "secondary-fixed-dim": "#ffb95f",
                        "on-error": "#ffffff",
                        "on-surface-variant": "#44474d",
                        "primary-container": "#0b1f3a",
                        "on-tertiary": "#ffffff",
                        "tertiary-fixed": "#d5e3fc",
                        "outline-variant": "#c4c6ce",
                        "inverse-on-surface": "#eff1f4",
                        "on-error-container": "#93000a",
                        "tertiary": "#000714",
                        "error": "#ba1a1a",
                        "outline": "#75777e",
                        "on-primary-fixed": "#071c36",
                        "secondary": "#855300",
                        "on-secondary": "#ffffff",
                        "primary": "#000615",
                        "surface-variant": "#e0e3e6",
                        "on-secondary-fixed-variant": "#653e00",
                        "primary-fixed-dim": "#b5c7ea",
                        "primary-fixed": "#d6e3ff",
                        "tertiary-fixed-dim": "#b9c7df",
                        "inverse-primary": "#b5c7ea",
                        "on-surface": "#191c1e",
                        "on-secondary-container": "#684000",
                        "surface-dim": "#d8dadd",
                        "inverse-surface": "#2d3133",
                        "secondary-fixed": "#ffddb8",
                        "on-tertiary-fixed-variant": "#3a485b",
                        "on-secondary-fixed": "#2a1700",
                        "on-background": "#191c1e",
                        "surface-container-high": "#e6e8eb",
                        "on-primary": "#ffffff",
                        "on-tertiary-container": "#79889e",
                        "surface-bright": "#f7f9fc",
                        "surface-tint": "#4d5f7d"
                    },
                    fontFamily: {
                        "headline": ["Plus Jakarta Sans"],
                        "body": ["Inter"],
                        "label": ["Inter"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24
    }
.bg-industrial-hero {
    background-image: linear-gradient(rgba(11, 31, 58, 0.8), rgba(0, 6, 21, 0.95)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuDzwvQ7cDGejjXwrEp1OfhXSdiAVCv_JJ6WvfnUJNDZbEsSwqGDbwa0VXE2nY1nuFsju1jKOEVCma9qwESZfP9KlcCnYhpQOnzXImJ-3ZTRAoVU1ZPnu0MuMZiyECcZsTpzXHiaZG0cZuagKYgKi6wXeHuZ9yRS4IDyflZ9yluGjQUGSVlMUOTFCrHTxHMprGcyEpSTj7pRIrH_xhn6PTXUdkk2s95cvWyPaarqELShPbzG3PPw29SwZe7uL0gNRGFXNSDcgSJwNlVi);
    background-size: cover;
    background-position: center
    }</style>
</head>
<body class="bg-surface text-on-background font-body">
<!-- TopNavBar (Shared Component) -->
<nav class="sticky top-0 w-full z-50 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-[0_12px_32px_rgba(7,28,54,0.08)]">
<div class="flex justify-between items-center h-20 px-8 max-w-full mx-auto">
<div class="text-2xl font-black text-slate-900 dark:text-slate-50 font-headline tracking-tight">
                Max Engineering
            </div>
<div class="hidden md:flex items-center space-x-8">
<a class="text-blue-900 dark:text-amber-500 border-b-2 border-amber-500 pb-1 font-headline font-bold tracking-tight" href="#">Home</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-amber-400 transition-colors font-headline font-bold tracking-tight" href="#">About</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-amber-400 transition-colors font-headline font-bold tracking-tight" href="#">Services</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-amber-400 transition-colors font-headline font-bold tracking-tight" href="#">Projects</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-amber-400 transition-colors font-headline font-bold tracking-tight" href="#">Contact</a>
</div>
<button class="bg-primary-container text-on-primary px-6 py-2.5 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all duration-150">
                Get Quote
            </button>
</div>
</nav>
<!-- Hero Section -->
<section class="bg-industrial-hero min-h-[870px] flex items-center justify-center text-center px-4 relative overflow-hidden" data-alt="High-tech industrial manufacturing facility background">
<div class="max-w-5xl mx-auto py-20 relative z-10">
<span class="text-secondary-container font-headline font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Industrial Excellence</span>
<h1 class="text-5xl md:text-7xl font-headline font-extrabold text-white leading-tight mb-8 tracking-tighter">
                Reliable Electrical &amp; <br/><span class="text-secondary-container">Instrumentation</span> Solutions
            </h1>
<p class="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
                High-precision engineering services for complex industrial environments. We deliver safety, efficiency, and modern infrastructure.
            </p>
<div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
<button class="w-full sm:w-auto px-10 py-4 bg-secondary-container text-primary-container font-bold rounded-xl text-lg hover:scale-105 active:scale-95 transition-all shadow-xl">
                    Get Free Quote
                </button>
<button class="w-full sm:w-auto px-10 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 font-bold rounded-xl text-lg hover:bg-white/20 transition-all">
                    Call Now
                </button>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-10 border-t border-white/10">
<div class="flex items-center justify-center gap-3 text-white">
<span class="material-symbols-outlined text-secondary-container text-3xl">verified</span>
<span class="font-headline font-bold uppercase text-xs tracking-widest">Professional Service</span>
</div>
<div class="flex items-center justify-center gap-3 text-white">
<span class="material-symbols-outlined text-secondary-container text-3xl">bolt</span>
<span class="font-headline font-bold uppercase text-xs tracking-widest">Fast Response</span>
</div>
<div class="flex items-center justify-center gap-3 text-white">
<span class="material-symbols-outlined text-secondary-container text-3xl">payments</span>
<span class="font-headline font-bold uppercase text-xs tracking-widest">Affordable Pricing</span>
</div>
</div>
</div>
</section>
<!-- About Preview Section -->
<section class="py-24 px-8 bg-surface">
<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div class="lg:col-span-5 relative group">
<div class="absolute -inset-4 bg-secondary-container/10 rounded-xl transform -rotate-3 transition-transform group-hover:rotate-0"></div>
<img alt="Detailed view of an industrial electrical control panel" class="relative z-10 w-full aspect-square object-cover rounded-xl shadow-2xl" data-alt="Industrial electrical control panel with intricate wiring" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVb13lPwi8jyagNpdXCPEVVdiGVtMviXPvsOQ61uS0J4Idkqz3jgtY1cUgSBdsV7O76aRsb04WkcPcxdYvLLh1O_WUJf2-E_mVQ94-Xi2gDTtlE_EZrHXG5nl1JzncozUaPH4sr9YqbsP_dCbrPi3ge8p38r35ZNI6x0ZDCrNf6s1wblqM0qGCqt08eg9LF-70KuskfQQFmLE7ZQdo7Rqw7-NUb3pBIzaBzcNgs-NvTqIs9Yvr3_EyyYbUjQovHENw4tavqfUcUEyn"/>
</div>
<div class="lg:col-span-7">
<h2 class="text-4xl md:text-5xl font-headline font-extrabold text-primary-container mb-8 leading-tight">
                    Engineering Excellence <br/>Through Precision
                </h2>
<div class="space-y-6 text-on-surface-variant text-lg">
<p>
                        Max Engineering has been a cornerstone of industrial solutions in Jamshedpur, providing top-tier electrical and instrumentation services for over a decade.
                    </p>
<p>
                        Our mission is simple: to bridge the gap between complex engineering challenges and practical, high-performance results. From small-scale setups to massive industrial plant instrumentation, we handle every wire with extreme precision.
                    </p>
<div class="grid grid-cols-2 gap-8 pt-4">
<div>
<span class="text-4xl font-headline font-black text-primary-container block">150+</span>
<span class="text-sm font-bold uppercase text-on-primary-container tracking-tighter">Projects Completed</span>
</div>
<div>
<span class="text-4xl font-headline font-black text-primary-container block">12+</span>
<span class="text-sm font-bold uppercase text-on-primary-container tracking-tighter">Years Experience</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Services Section -->
<section class="py-24 px-8 bg-surface-container-low">
<div class="max-w-7xl mx-auto">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div class="max-w-2xl">
<h2 class="text-4xl font-headline font-extrabold text-primary-container mb-4">Specialized Services</h2>
<p class="text-on-surface-variant text-lg">We offer comprehensive engineering solutions designed to keep your infrastructure running safely and efficiently.</p>
</div>
<a class="text-primary-container font-bold border-b-2 border-primary-container pb-1 hover:text-secondary-container hover:border-secondary-container transition-colors" href="#">View All Services</a>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Card 1 -->
<div class="bg-surface-container-lowest p-8 rounded-xl group hover:bg-primary-container transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-2">
<div class="w-14 h-14 bg-surface-container flex items-center justify-center rounded-lg mb-6 group-hover:bg-secondary-container/20">
<span class="material-symbols-outlined text-secondary-container text-3xl">electric_bolt</span>
</div>
<h3 class="text-xl font-headline font-bold mb-3 text-primary-container group-hover:text-white">Electrical Installation</h3>
<p class="text-on-surface-variant text-sm mb-6 group-hover:text-slate-300">Complete heavy-duty wiring and panel boards for industrial plants.</p>
<a class="inline-flex items-center gap-2 text-secondary-container font-bold text-sm" href="#">
                        Learn More <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<!-- Card 2 -->
<div class="bg-surface-container-lowest p-8 rounded-xl group hover:bg-primary-container transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-2">
<div class="w-14 h-14 bg-surface-container flex items-center justify-center rounded-lg mb-6 group-hover:bg-secondary-container/20">
<span class="material-symbols-outlined text-secondary-container text-3xl">settings_input_component</span>
</div>
<h3 class="text-xl font-headline font-bold mb-3 text-primary-container group-hover:text-white">Instrumentation Setup</h3>
<p class="text-on-surface-variant text-sm mb-6 group-hover:text-slate-300">Precision sensor and control system calibration and installation.</p>
<a class="inline-flex items-center gap-2 text-secondary-container font-bold text-sm" href="#">
                        Learn More <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<!-- Card 3 -->
<div class="bg-surface-container-lowest p-8 rounded-xl group hover:bg-primary-container transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-2">
<div class="w-14 h-14 bg-surface-container flex items-center justify-center rounded-lg mb-6 group-hover:bg-secondary-container/20">
<span class="material-symbols-outlined text-secondary-container text-3xl">videocam</span>
</div>
<h3 class="text-xl font-headline font-bold mb-3 text-primary-container group-hover:text-white">CCTV Systems</h3>
<p class="text-on-surface-variant text-sm mb-6 group-hover:text-slate-300">Advanced surveillance solutions with remote monitoring capabilities.</p>
<a class="inline-flex items-center gap-2 text-secondary-container font-bold text-sm" href="#">
                        Learn More <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<!-- Card 4 -->
<div class="bg-surface-container-lowest p-8 rounded-xl group hover:bg-primary-container transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-2">
<div class="w-14 h-14 bg-surface-container flex items-center justify-center rounded-lg mb-6 group-hover:bg-secondary-container/20">
<span class="material-symbols-outlined text-secondary-container text-3xl">fire_extinguisher</span>
</div>
<h3 class="text-xl font-headline font-bold mb-3 text-primary-container group-hover:text-white">Fire Alarm Systems</h3>
<p class="text-on-surface-variant text-sm mb-6 group-hover:text-slate-300">Reliable detection and safety notification systems for factories.</p>
<a class="inline-flex items-center gap-2 text-secondary-container font-bold text-sm" href="#">
                        Learn More <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
<!-- Why Choose Us -->
<section class="py-24 px-8 bg-surface">
<div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div class="w-full lg:w-1/2">
<span class="text-secondary-container font-headline font-bold text-sm tracking-widest block mb-4 uppercase">Reliability First</span>
<h2 class="text-4xl font-headline font-extrabold text-primary-container mb-8">Why Industry Leaders Trust Max Engineering</h2>
<div class="space-y-8">
<div class="flex gap-6">
<div class="flex-shrink-0 w-12 h-12 bg-primary-container text-white flex items-center justify-center rounded-full">
<span class="material-symbols-outlined">engineering</span>
</div>
<div>
<h4 class="text-lg font-headline font-bold text-primary-container mb-1">Industrial Expertise</h4>
<p class="text-on-surface-variant">Decades of combined team experience in high-voltage and instrumentation work.</p>
</div>
</div>
<div class="flex gap-6">
<div class="flex-shrink-0 w-12 h-12 bg-primary-container text-white flex items-center justify-center rounded-full">
<span class="material-symbols-outlined">history</span>
</div>
<div>
<h4 class="text-lg font-headline font-bold text-primary-container mb-1">Response Time</h4>
<p class="text-on-surface-variant">We understand that downtime is expensive. Our teams are always ready to move.</p>
</div>
</div>
<div class="flex gap-6">
<div class="flex-shrink-0 w-12 h-12 bg-primary-container text-white flex items-center justify-center rounded-full">
<span class="material-symbols-outlined">verified_user</span>
</div>
<div>
<h4 class="text-lg font-headline font-bold text-primary-container mb-1">Certified Quality</h4>
<p class="text-on-surface-variant">All components and installations follow the strictest national safety standards.</p>
</div>
</div>
</div>
</div>
<div class="w-full lg:w-1/2">
<div class="grid grid-cols-2 gap-4">
<img alt="Electrician working on wiring" class="w-full rounded-xl" data-alt="Technical worker installing industrial components" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Lpwb3VZ0_dK8enWcfKFWwPlYv-7b8rjleTCuqK5xX_m1i5l_zUOjLnEI7KykwNMd9c4BN1nTVuO1GaPomPS7wnLdXc8XTGws7Pt7O1O527v1cJbAk9gmTW3UIcRErcgRppkmUegPNkGhfSVsex_jq7I9lZaYYKbzwaduMRn2MYGpfNBfMck5iykvp9oVH8quQVW-pWxQk-BoMhGthpdCt4ojAMEq__UObl4VDt82HsMLgs9ZTXUxIpx4wswF5SRAdbmObW6pnsbX"/>
<div class="flex flex-col gap-4">
<div class="bg-secondary-container p-8 rounded-xl flex flex-col justify-center h-full text-primary-container">
<h4 class="text-3xl font-headline font-black mb-1">24/7</h4>
<p class="font-bold uppercase text-xs">Emergency Support</p>
</div>
<img alt="Instrumentation cluster" class="w-full rounded-xl" data-alt="Complex instrumentation cluster in a factory" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB03Hx8jxMYl6-7R5GAgrWD8GFeFnYOfaqNxWxaHMLmpvH6ETi_2xpOWujqUkviKcSou53IAD2FzFoVEsDYmbzLwHeyDdP3DW5yZcEnVJSGV2JDIHr3ki6WrDODconzg-yCjPoZRsf0V3xsTJZqbxsc5kVC8z4Qu6ipQdb6li_E7S6VV61AV4ofRkdg73uOGKsfUoMfwQ6V1ahqYugkREaHnqAZyBLXKmzgQAMLQwN0-r7Nehk_RlLbONHaDpHWzOcv94FIIFoJJXX"/>
</div>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="py-20 px-8 bg-primary-container relative overflow-hidden">
<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary-container/20 via-transparent to-transparent"></div>
<div class="max-w-4xl mx-auto text-center relative z-10">
<h2 class="text-3xl md:text-5xl font-headline font-extrabold text-white mb-6">Need Professional Engineering Services?</h2>
<p class="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Get in touch with our expert team today for a free consultation and project estimate.</p>
<div class="flex flex-col sm:flex-row gap-6 justify-center">
<button class="bg-secondary-container text-primary-container px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all">
<span class="material-symbols-outlined">call</span> Call Now
                </button>
<button class="bg-white/10 text-white backdrop-blur-md border border-white/20 px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
<span class="material-symbols-outlined">chat</span> WhatsApp
                </button>
</div>
</div>
</section>
<!-- Footer (Shared Component) -->
<footer class="bg-slate-900 dark:bg-black w-full py-12 px-8">
<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
<div class="space-y-6">
<div class="text-xl font-bold text-white font-headline">Max Engineering</div>
<p class="text-slate-400 text-sm leading-relaxed max-w-sm font-body">
                    Providing top-tier electrical, instrumentation, and security engineering services since 2012. Built on precision and reliability.
                </p>
</div>
<div>
<h4 class="text-amber-500 font-headline font-semibold mb-6 uppercase text-xs tracking-widest">Navigation</h4>
<ul class="space-y-4">
<li><a class="text-slate-400 hover:text-white transition-colors text-sm font-body" href="#">Home</a></li>
<li><a class="text-slate-400 hover:text-white transition-colors text-sm font-body" href="#">About</a></li>
<li><a class="text-slate-400 hover:text-white transition-colors text-sm font-body" href="#">Services</a></li>
<li><a class="text-slate-400 hover:text-white transition-colors text-sm font-body" href="#">Projects</a></li>
<li><a class="text-slate-400 hover:text-white transition-colors text-sm font-body" href="#">Contact</a></li>
</ul>
</div>
<div class="space-y-6">
<h4 class="text-amber-500 font-headline font-semibold mb-6 uppercase text-xs tracking-widest">Contact Info</h4>
<div class="flex items-start gap-4">
<span class="material-symbols-outlined text-amber-500 text-xl mt-1">location_on</span>
<span class="text-slate-400 text-sm leading-relaxed font-body">Address: Hari Om Nagar Road-5, Adityapur-13, Jamshedpur</span>
</div>
<div class="flex items-start gap-4">
<span class="material-symbols-outlined text-amber-500 text-xl mt-1">phone</span>
<span class="text-slate-400 text-sm leading-relaxed font-body">Phone: 9431755791</span>
</div>
<div class="flex items-start gap-4">
<span class="material-symbols-outlined text-amber-500 text-xl mt-1">mail</span>
<span class="text-slate-400 text-sm leading-relaxed font-body">Email: dasrajkumar878@gmail.com</span>
</div>
</div>
</div>
<div class="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-800 text-center text-slate-500 text-sm">
            © 2024 Max Engineering. All rights reserved.
        </div>
</footer>
<!-- SideNavBar / Floating Actions (Shared Component) -->
<div class="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
<a class="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full p-4 shadow-[0_12px_32px_rgba(7,28,54,0.15)] hover:scale-110 active:scale-90 transition-all duration-200 backdrop-blur-xl flex items-center justify-center group relative" href="https://wa.me/919431755791">
<span class="material-symbols-outlined text-green-500">chat</span>
<span class="absolute right-full mr-4 bg-white px-3 py-1 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
</a>
<a class="bg-amber-500 text-white rounded-full p-4 shadow-[0_12px_32px_rgba(7,28,54,0.15)] hover:scale-110 active:scale-90 transition-all duration-200 flex items-center justify-center group relative" href="tel:9431755791">
<span class="material-symbols-outlined">call</span>
<span class="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Call Us</span>
</a>
</div>
</body></html>

<!-- Home - Max Engineering -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>About Max Engineering | Precision Industrial Solutions</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "on-primary-container": "#7587a7",
                "background": "#f7f9fc",
                "surface-container-low": "#f2f4f7",
                "on-tertiary-fixed": "#0d1c2e",
                "tertiary-container": "#112032",
                "on-primary-fixed-variant": "#364764",
                "surface": "#f7f9fc",
                "surface-container-highest": "#e0e3e6",
                "surface-container": "#eceef1",
                "error-container": "#ffdad6",
                "secondary-container": "#fea619",
                "surface-container-lowest": "#ffffff",
                "secondary-fixed-dim": "#ffb95f",
                "on-error": "#ffffff",
                "on-surface-variant": "#44474d",
                "primary-container": "#0b1f3a",
                "on-tertiary": "#ffffff",
                "tertiary-fixed": "#d5e3fc",
                "outline-variant": "#c4c6ce",
                "inverse-on-surface": "#eff1f4",
                "on-error-container": "#93000a",
                "tertiary": "#000714",
                "error": "#ba1a1a",
                "outline": "#75777e",
                "on-primary-fixed": "#071c36",
                "secondary": "#855300",
                "on-secondary": "#ffffff",
                "primary": "#000615",
                "surface-variant": "#e0e3e6",
                "on-secondary-fixed-variant": "#653e00",
                "primary-fixed-dim": "#b5c7ea",
                "primary-fixed": "#d6e3ff",
                "tertiary-fixed-dim": "#b9c7df",
                "inverse-primary": "#b5c7ea",
                "on-surface": "#191c1e",
                "on-secondary-container": "#684000",
                "surface-dim": "#d8dadd",
                "inverse-surface": "#2d3133",
                "secondary-fixed": "#ffddb8",
                "on-tertiary-fixed-variant": "#3a485b",
                "on-secondary-fixed": "#2a1700",
                "on-background": "#191c1e",
                "surface-container-high": "#e6e8eb",
                "on-primary": "#ffffff",
                "on-tertiary-container": "#79889e",
                "surface-bright": "#f7f9fc",
                "surface-tint": "#4d5f7d"
              },
              fontFamily: {
                "headline": ["Plus Jakarta Sans"],
                "body": ["Inter"],
                "label": ["Inter"]
              },
              borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
            },
          },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .machined-gradient {
            background: linear-gradient(135deg, #000615 0%, #0b1f3a 100%);
        }
    </style>
</head>
<body class="bg-surface font-body text-on-surface">
<!-- TopNavBar -->
<nav class="sticky top-0 w-full z-50 bg-white/85 backdrop-blur-md shadow-[0_12px_32px_rgba(7,28,54,0.08)]">
<div class="flex justify-between items-center h-20 px-8 max-w-full mx-auto">
<div class="text-2xl font-black text-slate-900 font-headline tracking-tight">Max Engineering</div>
<div class="hidden md:flex items-center gap-8">
<a class="text-slate-600 font-headline font-bold hover:text-blue-900 transition-colors" href="#">Home</a>
<a class="text-blue-900 border-b-2 border-amber-500 pb-1 font-headline font-bold" href="#">About</a>
<a class="text-slate-600 font-headline font-bold hover:text-blue-900 transition-colors" href="#">Services</a>
<a class="text-slate-600 font-headline font-bold hover:text-blue-900 transition-colors" href="#">Projects</a>
<a class="text-slate-600 font-headline font-bold hover:text-blue-900 transition-colors" href="#">Contact</a>
</div>
<button class="machined-gradient text-on-primary px-6 py-2.5 rounded-xl font-headline font-bold active:scale-95 duration-150 shadow-lg">
                Get Quote
            </button>
</div>
</nav>
<main>
<!-- Hero Section -->
<section class="relative py-24 px-8 overflow-hidden bg-surface-container">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div class="w-full md:w-1/2">
<span class="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-6 font-label">ESTABLISHED EXCELLENCE</span>
<h1 class="text-6xl md:text-7xl font-headline font-extrabold text-primary-container leading-tight mb-8">
                        About Max Engineering
                    </h1>
<p class="text-lg text-on-surface-variant leading-relaxed max-w-xl">
                        A powerhouse of industrial precision, Max Engineering is dedicated to delivering safe, efficient, and highly reliable electrical and instrumentation services to the most demanding industrial sectors.
                    </p>
</div>
<div class="w-full md:w-1/2 relative">
<div class="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-secondary-container"></div>
<img alt="Industrial Engineering Detail" class="rounded-xl shadow-2xl object-cover w-full h-[450px]" data-alt="Close up of high precision electrical components" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPtKtCJnc7YOr-MeKz1VX9nbHLYI0SxGiCiGOJqSxiNuPvhMpU3Mm584nUiFVv3v18lrv9wxqAmie3tchh4C-l9UppwZZnjv1szvK5XoGe2hsXZeB5skXSanNwJaI5Xe7KRoYSzFWvI5aSpxsdeWxJAfl-PiBR220xR-9TV89IuPDIX-XyoE0E0PJcOdfUZFpAlZIuEe3pfMFKX13yxd52PmtxVcF8KTV8-dGa1E7BmMXzE5l2FU86SFdolAdtlud8dR2uFKTgKY7m"/>
</div>
</div>
</section>
<!-- Company Overview & Founder Bento Grid -->
<section class="py-24 px-8 bg-surface">
<div class="max-w-7xl mx-auto">
<div class="grid grid-cols-1 md:grid-cols-12 gap-8">
<!-- Overview Card -->
<div class="md:col-span-8 bg-surface-container-lowest p-12 rounded-xl shadow-sm border-l-8 border-primary-container">
<h2 class="text-3xl font-headline font-bold text-primary-container mb-6 tracking-tight">Technical Proficiency. Uncompromising Safety.</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-on-surface-variant leading-relaxed">
<p>
                                At Max Engineering, we understand that industrial infrastructure is the backbone of modern productivity. Our core focus centers on complex electrical systems and instrumentation services that power the future. 
                            </p>
<p>
                                We specialize in end-to-end solutions, from meticulous installation to proactive maintenance, ensuring that every circuit and sensor operates with 100% reliability and safety.
                            </p>
</div>
<div class="mt-10 flex gap-12">
<div>
<span class="block text-4xl font-headline font-black text-secondary">15+</span>
<span class="text-xs font-bold font-label uppercase tracking-tighter text-on-surface-variant">Years Experience</span>
</div>
<div>
<span class="block text-4xl font-headline font-black text-secondary">250+</span>
<span class="text-xs font-bold font-label uppercase tracking-tighter text-on-surface-variant">Projects Completed</span>
</div>
</div>
</div>
<!-- Owner Section -->
<div class="md:col-span-4 bg-primary-container text-on-primary p-8 rounded-xl flex flex-col items-center text-center">
<img alt="Rajkumar Das" class="w-40 h-40 rounded-full border-4 border-secondary-container object-cover mb-6" data-alt="Professional portrait of engineer Rajkumar Das" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9huxT7kbJYPda327iHvs4AZ_mmKNpWVMkMa2aPbgm--vsuLzoV78hJOf3qPNQtBXcZDAR7F-eJ28aAywX73ArhkcDMQcsefOi-tsSJ9JdZ8joXuY9dyz7IcMeZWEwaqL4EMsvZdU_MKi-k33UFg-Nr1cVOsWk2VIzSpE-59JS4KzJQHz3aJAM7Uqahb5TiaDucRdY5HFXwNYAIsAcQHcopoo10yjaTnimG8eVZ1FtNiqpHXTNnbf5q3cT0c-hiusuxTIOhlbH1awe"/>
<h3 class="text-2xl font-headline font-bold">Rajkumar Das</h3>
<p class="text-secondary-fixed-dim font-medium mb-4">Founder &amp; Lead Engineer</p>
<p class="text-on-primary-container text-sm leading-relaxed italic">
                            "Engineering is not just about connecting wires; it's about building systems that society can trust implicitly. Quality is our only metric."
                        </p>
</div>
</div>
</div>
</section>
<!-- Mission & Vision -->
<section class="py-24 px-8 bg-surface-container-low">
<div class="max-w-7xl mx-auto">
<div class="flex flex-col md:flex-row gap-12">
<!-- Mission -->
<div class="flex-1 group">
<div class="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl machined-gradient text-secondary-container">
<span class="material-symbols-outlined text-4xl" data-icon="rocket_launch">rocket_launch</span>
</div>
<h2 class="text-4xl font-headline font-extrabold text-primary-container mb-6">Our Mission</h2>
<div class="h-1 w-24 bg-secondary-container mb-8 transition-all group-hover:w-full"></div>
<p class="text-xl text-on-surface-variant leading-relaxed">
                            To deliver reliable and efficient engineering solutions that empower our clients' industrial growth while maintaining the highest global standards of safety and technical excellence.
                        </p>
</div>
<!-- Vision -->
<div class="flex-1 group">
<div class="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl machined-gradient text-secondary-container">
<span class="material-symbols-outlined text-4xl" data-icon="visibility">visibility</span>
</div>
<h2 class="text-4xl font-headline font-extrabold text-primary-container mb-6">Our Vision</h2>
<div class="h-1 w-24 bg-secondary-container mb-8 transition-all group-hover:w-full"></div>
<p class="text-xl text-on-surface-variant leading-relaxed">
                            To become a trusted global name in electrical and instrumentation services, recognized for our innovative technical prowess and unwavering commitment to engineering integrity.
                        </p>
</div>
</div>
</div>
</section>
</main>
<!-- SideNavBar (Floating Contact) -->
<div class="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
<a class="bg-white dark:bg-slate-800 text-slate-700 rounded-full p-4 shadow-[0_12px_32px_rgba(7,28,54,0.15)] hover:scale-110 transition-transform active:scale-90 flex items-center justify-center group relative" href="https://wa.me/9431755791">
<span class="material-symbols-outlined text-2xl" data-icon="chat">chat</span>
<span class="absolute right-full mr-4 bg-primary-container text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">WhatsApp</span>
</a>
<a class="bg-amber-500 text-white rounded-full p-4 shadow-[0_12px_32px_rgba(7,28,54,0.15)] hover:scale-110 transition-transform active:scale-90 flex items-center justify-center group relative" href="tel:9431755791">
<span class="material-symbols-outlined text-2xl" data-icon="call">call</span>
<span class="absolute right-full mr-4 bg-primary-container text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Call Now</span>
</a>
</div>
<!-- Footer -->
<footer class="bg-slate-900 text-slate-400 font-body py-12 px-8">
<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
<div>
<div class="text-xl font-bold text-white font-headline mb-6">Max Engineering</div>
<p class="text-sm leading-relaxed mb-6">
                    Professional Electrical &amp; Instrumentation solutions for heavy industry and infrastructure projects.
                </p>
<p class="text-sm font-label text-amber-500 font-bold">© 2024 Max Engineering. All rights reserved.</p>
</div>
<div class="flex flex-col gap-3">
<h4 class="text-white font-headline font-bold mb-3">Quick Links</h4>
<a class="hover:text-white transition-colors" href="#">Home</a>
<a class="text-amber-500" href="#">About</a>
<a class="hover:text-white transition-colors" href="#">Services</a>
<a class="hover:text-white transition-colors" href="#">Projects</a>
<a class="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div class="flex flex-col gap-3">
<h4 class="text-white font-headline font-bold mb-3">Contact Details</h4>
<div class="flex items-start gap-2">
<span class="material-symbols-outlined text-amber-500 text-sm mt-1" data-icon="location_on">location_on</span>
<span class="text-sm">Address: Hari Om Nagar Road-5, Adityapur-13, Jamshedpur</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-amber-500 text-sm" data-icon="call">call</span>
<span class="text-sm">Phone: 9431755791</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-amber-500 text-sm" data-icon="email">email</span>
<span class="text-sm">Email: dasrajkumar878@gmail.com</span>
</div>
</div>
</div>
</footer>
</body></html>

<!-- About - Max Engineering -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Our Services | Max Engineering</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<!-- Icons -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "on-primary-container": "#7587a7",
              "background": "#f7f9fc",
              "surface-container-low": "#f2f4f7",
              "on-tertiary-fixed": "#0d1c2e",
              "tertiary-container": "#112032",
              "on-primary-fixed-variant": "#364764",
              "surface": "#f7f9fc",
              "surface-container-highest": "#e0e3e6",
              "surface-container": "#eceef1",
              "error-container": "#ffdad6",
              "secondary-container": "#fea619",
              "surface-container-lowest": "#ffffff",
              "secondary-fixed-dim": "#ffb95f",
              "on-error": "#ffffff",
              "on-surface-variant": "#44474d",
              "primary-container": "#0b1f3a",
              "on-tertiary": "#ffffff",
              "tertiary-fixed": "#d5e3fc",
              "outline-variant": "#c4c6ce",
              "inverse-on-surface": "#eff1f4",
              "on-error-container": "#93000a",
              "tertiary": "#000714",
              "error": "#ba1a1a",
              "outline": "#75777e",
              "on-primary-fixed": "#071c36",
              "secondary": "#855300",
              "on-secondary": "#ffffff",
              "primary": "#000615",
              "surface-variant": "#e0e3e6",
              "on-secondary-fixed-variant": "#653e00",
              "primary-fixed-dim": "#b5c7ea",
              "primary-fixed": "#d6e3ff",
              "tertiary-fixed-dim": "#b9c7df",
              "inverse-primary": "#b5c7ea",
              "on-surface": "#191c1e",
              "on-secondary-container": "#684000",
              "surface-dim": "#d8dadd",
              "inverse-surface": "#2d3133",
              "secondary-fixed": "#ffddb8",
              "on-tertiary-fixed-variant": "#3a485b",
              "on-secondary-fixed": "#2a1700",
              "on-background": "#191c1e",
              "surface-container-high": "#e6e8eb",
              "on-primary": "#ffffff",
              "on-tertiary-container": "#79889e",
              "surface-bright": "#f7f9fc",
              "surface-tint": "#4d5f7d"
            },
            fontFamily: {
              "headline": ["Plus Jakarta Sans"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      }
      .glass-header {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(12px);
      }
      .machined-metal {
        background: linear-gradient(135deg, #000615 0%, #0b1f3a 100%);
      }
    </style>
</head>
<body class="bg-surface font-body text-on-surface">
<!-- TopNavBar -->
<header class="sticky top-0 w-full z-50 glass-header shadow-[0_12px_32px_rgba(7,28,54,0.08)]">
<nav class="flex justify-between items-center h-20 px-8 max-w-full mx-auto">
<div class="text-2xl font-black text-slate-900 font-headline tracking-tight">
                Max Engineering
            </div>
<div class="hidden md:flex items-center gap-8">
<a class="text-slate-600 font-bold font-headline transition-colors hover:text-blue-900" href="#">Home</a>
<a class="text-slate-600 font-bold font-headline transition-colors hover:text-blue-900" href="#">About</a>
<a class="text-blue-900 border-b-2 border-amber-500 pb-1 font-bold font-headline" href="#">Services</a>
<a class="text-slate-600 font-bold font-headline transition-colors hover:text-blue-900" href="#">Projects</a>
<a class="text-slate-600 font-bold font-headline transition-colors hover:text-blue-900" href="#">Contact</a>
</div>
<button class="machined-metal text-on-primary px-6 py-3 rounded-xl font-bold font-headline shadow-lg hover:scale-95 transition-transform duration-150">
                Get Quote
            </button>
</nav>
</header>
<main>
<!-- Page Header -->
<section class="relative h-[409px] flex items-center bg-primary-container overflow-hidden">
<div class="absolute inset-0 opacity-20">
<img alt="Engineering services background" class="w-full h-full object-cover" data-alt="Technical engineering blueprints and circuit boards background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrOa9wlRyRlFxbYDQ1hDQv7lieSlpXXB0I3yAoaP0oiIitDxx5gkiax4UxtvEJ_BtO1CciDqcP8Vgf9rplnTqQREMgQmVgfCqZranTd4pAjmta71uNPG16BI12ZhWvVOwLBOsu3t8PYr38veYnSTXOLqsWsVxurxJsYRG3GNyVt3UGu93PwpGgiHRVpfJZ2HTZepHB2FqEbxZGjMxHUDeI5SNBao3UFJ_iCLjcmJHZe5F4Csit7QnuvyBAiNyeRAgZeRt_qnl7TTav"/>
</div>
<div class="relative z-10 px-8 md:px-20 max-w-7xl">
<span class="text-secondary-container font-bold tracking-[0.2em] text-sm uppercase mb-4 block">PRECISE SOLUTIONS</span>
<h1 class="text-5xl md:text-7xl font-black text-white font-headline leading-tight tracking-tighter">
                    Our Services
                </h1>
</div>
</section>
<!-- Detailed Services Section -->
<section class="py-24 px-8 md:px-20 bg-surface">
<div class="max-w-7xl mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<!-- Electrical Services -->
<div class="group bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_32px_rgba(7,28,54,0.05)] border border-outline-variant/10 hover:border-secondary-container/50 transition-all">
<div class="w-14 h-14 bg-surface-container flex items-center justify-center rounded-xl mb-6 group-hover:bg-secondary-container transition-colors">
<span class="material-symbols-outlined text-primary-container group-hover:text-white" style="font-size: 32px;">electrical_services</span>
</div>
<h3 class="text-xl font-bold font-headline text-primary-container mb-4">Electrical Services</h3>
<ul class="space-y-3 text-on-surface-variant">
<li class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary-container text-sm">check_circle</span>
<span>Wiring &amp; installation</span>
</li>
<li class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary-container text-sm">check_circle</span>
<span>Panel setup</span>
</li>
<li class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary-container text-sm">check_circle</span>
<span>Maintenance</span>
</li>
</ul>
</div>
<!-- Instrumentation Services -->
<div class="group bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_32px_rgba(7,28,54,0.05)] border border-outline-variant/10 hover:border-secondary-container/50 transition-all">
<div class="w-14 h-14 bg-surface-container flex items-center justify-center rounded-xl mb-6 group-hover:bg-secondary-container transition-colors">
<span class="material-symbols-outlined text-primary-container group-hover:text-white" style="font-size: 32px;">settings_input_component</span>
</div>
<h3 class="text-xl font-bold font-headline text-primary-container mb-4">Instrumentation</h3>
<ul class="space-y-3 text-on-surface-variant">
<li class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary-container text-sm">check_circle</span>
<span>Process control systems</span>
</li>
<li class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary-container text-sm">check_circle</span>
<span>Calibration</span>
</li>
<li class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary-container text-sm">check_circle</span>
<span>Installation</span>
</li>
</ul>
</div>
<!-- CCTV Installation -->
<div class="group bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_32px_rgba(7,28,54,0.05)] border border-outline-variant/10 hover:border-secondary-container/50 transition-all">
<div class="w-14 h-14 bg-surface-container flex items-center justify-center rounded-xl mb-6 group-hover:bg-secondary-container transition-colors">
<span class="material-symbols-outlined text-primary-container group-hover:text-white" style="font-size: 32px;">videocam</span>
</div>
<h3 class="text-xl font-bold font-headline text-primary-container mb-4">CCTV Installation</h3>
<ul class="space-y-3 text-on-surface-variant">
<li class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary-container text-sm">check_circle</span>
<span>Camera setup</span>
</li>
<li class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary-container text-sm">check_circle</span>
<span>Monitoring systems</span>
</li>
<li class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary-container text-sm">check_circle</span>
<span>Maintenance</span>
</li>
</ul>
</div>
<!-- Fire Alarm Systems -->
<div class="group bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_32px_rgba(7,28,54,0.05)] border border-outline-variant/10 hover:border-secondary-container/50 transition-all">
<div class="w-14 h-14 bg-surface-container flex items-center justify-center rounded-xl mb-6 group-hover:bg-secondary-container transition-colors">
<span class="material-symbols-outlined text-primary-container group-hover:text-white" style="font-size: 32px;">fire_extinguisher</span>
</div>
<h3 class="text-xl font-bold font-headline text-primary-container mb-4">Fire Alarm Systems</h3>
<ul class="space-y-3 text-on-surface-variant">
<li class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary-container text-sm">check_circle</span>
<span>Installation</span>
</li>
<li class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary-container text-sm">check_circle</span>
<span>Testing</span>
</li>
<li class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary-container text-sm">check_circle</span>
<span>Maintenance</span>
</li>
</ul>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="py-24 px-8 md:px-20 bg-surface-container">
<div class="max-w-4xl mx-auto text-center">
<h2 class="text-4xl font-black font-headline text-primary-container mb-6">Get a Custom Quote Today</h2>
<p class="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
                    From complex industrial instrumentation to standard electrical maintenance, our engineering team delivers precision at scale.
                </p>
<div class="flex flex-col sm:flex-row justify-center gap-6">
<button class="bg-secondary-container text-on-secondary-fixed font-bold font-headline px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
                        Request Quote
                    </button>
<button class="bg-primary-container text-white font-bold font-headline px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
                        Our Projects
                    </button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-slate-900 text-slate-400 py-16 px-8 md:px-20 w-full">
<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<div class="text-xl font-bold text-white mb-6 font-headline">Max Engineering</div>
<p class="text-sm leading-relaxed mb-4">Delivering industrial precision and architectural excellence since 2024.</p>
<p class="text-xs">© 2024 Max Engineering. All rights reserved.</p>
</div>
<div>
<h4 class="text-white font-bold mb-6 font-headline">Contact Information</h4>
<ul class="space-y-3 text-sm">
<li>Address: Hari Om Nagar Road-5, Adityapur-13, Jamshedpur</li>
<li class="text-amber-500">Phone: 9431755791</li>
<li>Email: dasrajkumar878@gmail.com</li>
</ul>
</div>
<div>
<h4 class="text-white font-bold mb-6 font-headline">Quick Links</h4>
<div class="grid grid-cols-2 gap-4 text-sm">
<a class="hover:text-white transition-colors" href="#">Home</a>
<a class="hover:text-white transition-colors" href="#">About</a>
<a class="text-amber-500 transition-colors" href="#">Services</a>
<a class="hover:text-white transition-colors" href="#">Projects</a>
<a class="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</footer>
<!-- SideNavBar (Quick Contact) -->
<div class="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
<div class="group flex items-center gap-4">
<span class="bg-white px-4 py-2 rounded-lg shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
<div class="bg-amber-500 text-white rounded-full p-4 shadow-[0_12px_32px_rgba(7,28,54,0.15)] cursor-pointer hover:scale-110 active:scale-90 transition-all">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">chat</span>
</div>
</div>
<div class="group flex items-center gap-4">
<span class="bg-white px-4 py-2 rounded-lg shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Call</span>
<div class="bg-white text-slate-700 rounded-full p-4 shadow-[0_12px_32px_rgba(7,28,54,0.15)] cursor-pointer hover:scale-110 active:scale-90 transition-all">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">call</span>
</div>
</div>
</div>
</body></html>

<!-- Services - Max Engineering -->
<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Projects | Max Engineering</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "on-primary-container": "#7587a7",
                        "background": "#f7f9fc",
                        "surface-container-low": "#f2f4f7",
                        "on-tertiary-fixed": "#0d1c2e",
                        "tertiary-container": "#112032",
                        "on-primary-fixed-variant": "#364764",
                        "surface": "#f7f9fc",
                        "surface-container-highest": "#e0e3e6",
                        "surface-container": "#eceef1",
                        "error-container": "#ffdad6",
                        "secondary-container": "#fea619",
                        "surface-container-lowest": "#ffffff",
                        "secondary-fixed-dim": "#ffb95f",
                        "on-error": "#ffffff",
                        "on-surface-variant": "#44474d",
                        "primary-container": "#0b1f3a",
                        "on-tertiary": "#ffffff",
                        "tertiary-fixed": "#d5e3fc",
                        "outline-variant": "#c4c6ce",
                        "inverse-on-surface": "#eff1f4",
                        "on-error-container": "#93000a",
                        "tertiary": "#000714",
                        "error": "#ba1a1a",
                        "outline": "#75777e",
                        "on-primary-fixed": "#071c36",
                        "secondary": "#855300",
                        "on-secondary": "#ffffff",
                        "primary": "#000615",
                        "surface-variant": "#e0e3e6",
                        "on-secondary-fixed-variant": "#653e00",
                        "primary-fixed-dim": "#b5c7ea",
                        "primary-fixed": "#d6e3ff",
                        "tertiary-fixed-dim": "#b9c7df",
                        "inverse-primary": "#b5c7ea",
                        "on-surface": "#191c1e",
                        "on-secondary-container": "#684000",
                        "surface-dim": "#d8dadd",
                        "inverse-surface": "#2d3133",
                        "secondary-fixed": "#ffddb8",
                        "on-tertiary-fixed-variant": "#3a485b",
                        "on-secondary-fixed": "#2a1700",
                        "on-background": "#191c1e",
                        "surface-container-high": "#e6e8eb",
                        "on-primary": "#ffffff",
                        "on-tertiary-container": "#79889e",
                        "surface-bright": "#f7f9fc",
                        "surface-tint": "#4d5f7d"
                    },
                    fontFamily: {
                        "headline": ["Plus Jakarta Sans"],
                        "body": ["Inter"],
                        "label": ["Inter"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-nav {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(12px);
        }
    </style>
</head>
<body class="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
<!-- TopNavBar -->
<nav class="sticky top-0 w-full z-50 bg-white/85 backdrop-blur-md border-none shadow-[0_12px_32px_rgba(7,28,54,0.08)] flex justify-between items-center h-20 px-8 max-w-full mx-auto">
<div class="text-2xl font-black text-slate-900 font-headline tracking-tight">Max Engineering</div>
<div class="hidden md:flex items-center gap-8">
<a class="text-slate-600 font-bold tracking-tight hover:text-blue-900 transition-colors" href="#">Home</a>
<a class="text-slate-600 font-bold tracking-tight hover:text-blue-900 transition-colors" href="#">About</a>
<a class="text-slate-600 font-bold tracking-tight hover:text-blue-900 transition-colors" href="#">Services</a>
<a class="text-blue-900 border-b-2 border-amber-500 pb-1 font-bold tracking-tight" href="#">Projects</a>
<a class="text-slate-600 font-bold tracking-tight hover:text-blue-900 transition-colors" href="#">Contact</a>
</div>
<button class="bg-primary-container text-on-primary px-6 py-3 rounded-xl font-headline font-bold text-sm tracking-tight hover:opacity-90 transition-all active:scale-95 shadow-sm">
            Get Quote
        </button>
</nav>
<main>
<!-- Page Header -->
<header class="relative overflow-hidden bg-primary-container py-24 px-8">
<div class="max-w-7xl mx-auto relative z-10">
<div class="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase mb-6">Portfolio</div>
<h1 class="text-white font-headline text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                    Our <span class="text-secondary-container">Work</span>
</h1>
<p class="text-on-primary-container max-w-2xl text-lg leading-relaxed">
                    A legacy of precision and technical excellence across industrial electrical setups, advanced security systems, and fire safety infrastructure. Explore our completed large-scale engineering projects.
                </p>
</div>
<!-- Decorative Architectural Element -->
<div class="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
<span class="material-symbols-outlined text-[400px]" style="font-variation-settings: 'wght' 100;">precision_manufacturing</span>
</div>
</header>
<!-- Project Filter & Grid -->
<section class="py-20 px-8 bg-surface">
<div class="max-w-7xl mx-auto">
<!-- Filters -->
<div class="flex flex-wrap items-center gap-4 mb-16">
<button class="bg-primary-container text-on-primary px-6 py-2 rounded-full text-sm font-bold tracking-tight">All Projects</button>
<button class="bg-surface-container text-on-surface-variant px-6 py-2 rounded-full text-sm font-semibold hover:bg-surface-container-highest transition-colors">Electrical</button>
<button class="bg-surface-container text-on-surface-variant px-6 py-2 rounded-full text-sm font-semibold hover:bg-surface-container-highest transition-colors">CCTV</button>
<button class="bg-surface-container text-on-surface-variant px-6 py-2 rounded-full text-sm font-semibold hover:bg-surface-container-highest transition-colors">Fire Safety</button>
</div>
<!-- Projects Bento-ish Grid -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-8">
<!-- Featured Project -->
<div class="md:col-span-8 group cursor-pointer">
<div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_12px_32px_rgba(7,28,54,0.05)] transition-all hover:shadow-[0_20px_48px_rgba(7,28,54,0.12)]">
<div class="aspect-[16/9] bg-surface-container relative overflow-hidden">
<img alt="Industrial electrical control panel" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Modern high voltage industrial electrical control panel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv3tozWXWvvcz2y-i4Xn-tR7Jw9T5PY4qgDn5oJEuDwGXBQPsFOYoVAyNu6gF_nWH9n3kjTByXGTdkhQZgt0cZ9c6eJFuA3gjxySvYNnVgzmISpoV7GgU57lGGCTktGrnkcvxiTwbAaUYQR6wILkS_GgFUToyWoa-x81j5jHlfnb9p0iBcPUcS4NPzPkMSscodZajEtDD21rdf4RoRw0o7bPbiKBmNfvgARCLbgWKn5PcSXtwo_7KlH6te9c2Kv66W91vL2QH1D4BA"/>
<div class="absolute top-6 left-6 bg-secondary-container text-on-secondary-container px-4 py-1 rounded-sm text-xs font-bold tracking-tight">
                                    ELECTRICAL
                                </div>
</div>
<div class="p-8">
<div class="flex items-center gap-2 text-on-surface-variant text-xs font-bold mb-3 tracking-widest uppercase">
<span class="material-symbols-outlined text-sm">location_on</span> Jamshedpur, JH
                                </div>
<h3 class="font-headline text-3xl font-extrabold text-primary-container mb-4 group-hover:text-secondary transition-colors">Industrial Electrical Panel Setup – Adityapur</h3>
<p class="text-on-surface-variant max-w-2xl leading-relaxed">
                                    Complete design, manufacturing, and commissioning of high-tension electrical panels for a major automotive manufacturing unit. Engineered for 24/7 heavy industrial load requirements.
                                </p>
</div>
</div>
</div>
<!-- Side Project 1 -->
<div class="md:col-span-4 group cursor-pointer">
<div class="bg-surface-container-lowest rounded-xl overflow-hidden h-full shadow-[0_12px_32px_rgba(7,28,54,0.05)] transition-all hover:shadow-[0_20px_48px_rgba(7,28,54,0.12)]">
<div class="aspect-square bg-surface-container relative overflow-hidden">
<img alt="CCTV Surveillance system" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Professional security cameras installed in industrial hallway" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFlRxcncHIpcDpvC-f6P5MyRJy2kxHqx_7ANo2L02t8zgovpHmSEZsGzQj-SB3VR2Efh_ifSVI20uJjtaNcAsF1BQeLgJIucZxuJvkfGRgevDyCsDpZdvPKkfnnIRVVk_Im4L6qbgxEkqo9cccKtq2i3tgQAm4kM1EHbGAL3wsDN-3hb2z78coEqL6x7fOzfDkwwQi0Zg_AanpGXc-_gAovok8i9mLGi5TrZBVvHrKyzmFNgdLGxAQC0KWNVA5wWfqJdwJ1eAbsbBl"/>
<div class="absolute top-6 left-6 bg-primary-container text-white px-4 py-1 rounded-sm text-xs font-bold tracking-tight">
                                    CCTV
                                </div>
</div>
<div class="p-8">
<div class="flex items-center gap-2 text-on-surface-variant text-xs font-bold mb-3 tracking-widest uppercase">
<span class="material-symbols-outlined text-sm">location_on</span> Ranchi, JH
                                </div>
<h3 class="font-headline text-xl font-extrabold text-primary-container mb-3">Enterprise IP Surveillance</h3>
<p class="text-on-surface-variant text-sm leading-relaxed">
                                    Networked 4K surveillance system with remote monitoring capabilities for a 50,000 sq ft warehouse.
                                </p>
</div>
</div>
</div>
<!-- Row 2 - Small Project -->
<div class="md:col-span-4 group cursor-pointer">
<div class="bg-surface-container-lowest rounded-xl overflow-hidden h-full shadow-[0_12px_32px_rgba(7,28,54,0.05)] transition-all hover:shadow-[0_20px_48px_rgba(7,28,54,0.12)]">
<div class="aspect-square bg-surface-container relative overflow-hidden">
<img alt="Fire safety hydrant system" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Industrial fire hydrant system with red piping" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF9XRbG52y-nZgIEyauWkOC1arDNUIPW7LS4xnOmbZ0L6PCLnQPVln4p6vSFbUMw5skP3JVNkcQk6md41VcXKOBsJRilYJVPN4im4LJX75oEtGMDYOhOx3vEldm2f3mjPqXjOiMVGKzM-1Iqinp3jhgOjLieUjHHOiN5-TOg5-ocrUQiiGBE58ytbc-XLU70KFa4xO1DAt8mlJroVGSbd9I4odzm6NOgqsQITT0Z9eQwr4c_KPkfOS4eR-HgYx71_KhwFgBYDYX6gx"/>
<div class="absolute top-6 left-6 bg-primary-container text-white px-4 py-1 rounded-sm text-xs font-bold tracking-tight">
                                    FIRE SAFETY
                                </div>
</div>
<div class="p-8">
<div class="flex items-center gap-2 text-on-surface-variant text-xs font-bold mb-3 tracking-widest uppercase">
<span class="material-symbols-outlined text-sm">location_on</span> Jamshedpur
                                </div>
<h3 class="font-headline text-xl font-extrabold text-primary-container mb-3">Automated Fire Suppression</h3>
<p class="text-on-surface-variant text-sm leading-relaxed">
                                    Installation of smoke detectors and automated sprinkler systems in a commercial complex.
                                </p>
</div>
</div>
</div>
<!-- Row 2 - Large Project -->
<div class="md:col-span-8 group cursor-pointer">
<div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_12px_32px_rgba(7,28,54,0.05)] transition-all hover:shadow-[0_20px_48px_rgba(7,28,54,0.12)] h-full flex flex-col">
<div class="flex-grow bg-surface-container relative overflow-hidden min-h-[300px]">
<img alt="Grid substation engineering" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Power substation transformers and grid infrastructure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtFSp0-_HKLj24tEKp06By48uJRox5KHjCcBBfNeETE4B4IQ8ZB-Q4woSWt-WCyVqR5ZtexdyVO7UeTXqPOWZwjmIoSsv2rVhwdHwiJtxn84bFmtOMPwmTvc3bc5zsZCu8ugszz7sS3gf3-opQoaxN08aa4kqc8XhIl7meSi2EPBkUwgTzfZvsKRbbqee9aqRMPwr6a7vy9QB8D5KydnTrkd36GMt7pIYEnhTcQ1XIp9jJCTXs0dd2SzdlPF3tHw7U4y8BSDGGMYkM"/>
<div class="absolute top-6 left-6 bg-secondary-container text-on-secondary-container px-4 py-1 rounded-sm text-xs font-bold tracking-tight">
                                    ELECTRICAL
                                </div>
</div>
<div class="p-8">
<div class="flex items-center gap-2 text-on-surface-variant text-xs font-bold mb-3 tracking-widest uppercase">
<span class="material-symbols-outlined text-sm">location_on</span> Ghatshila, JH
                                </div>
<h3 class="font-headline text-3xl font-extrabold text-primary-container mb-4 group-hover:text-secondary transition-colors">Substation Grid Modernization</h3>
<p class="text-on-surface-variant leading-relaxed">
                                    Overhaul of legacy switchgear and installation of new transformer units to improve power efficiency for a suburban industrial zone. Includes complete testing and certification.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="py-24 px-8 bg-surface-container text-center">
<div class="max-w-3xl mx-auto">
<h2 class="font-headline text-4xl font-black text-primary-container mb-6 tracking-tight">Start Your Engineering Journey</h2>
<p class="text-on-surface-variant mb-10 text-lg">Have a project in mind? Let our team of expert engineers provide you with a high-precision blueprint and execution plan.</p>
<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
<button class="w-full sm:w-auto bg-primary-container text-on-primary px-10 py-4 rounded-xl font-headline font-bold text-lg hover:opacity-90 active:scale-95 transition-all">
                        Request Quote
                    </button>
<button class="w-full sm:w-auto border-2 border-primary-container text-primary-container px-10 py-4 rounded-xl font-headline font-bold text-lg hover:bg-primary-container hover:text-white transition-all">
                        View Services
                    </button>
</div>
</div>
</section>
</main>
<!-- SideNavBar (Floating Quick Contact) -->
<div class="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
<!-- WhatsApp -->
<a class="group flex items-center gap-4" href="https://wa.me/919431755791">
<span class="bg-white dark:bg-slate-800 text-slate-700 font-semibold px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
<div class="bg-white dark:bg-slate-800 text-slate-700 rounded-full p-4 shadow-[0_12px_32px_rgba(7,28,54,0.15)] hover:scale-110 active:scale-90 transition-all">
<span class="material-symbols-outlined block text-amber-500">chat</span>
</div>
</a>
<!-- Call -->
<a class="group flex items-center gap-4" href="tel:9431755791">
<span class="bg-white dark:bg-slate-800 text-slate-700 font-semibold px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">Call Now</span>
<div class="bg-amber-500 text-white rounded-full p-4 shadow-[0_12px_32px_rgba(7,28,54,0.15)] hover:scale-110 active:scale-90 transition-all">
<span class="material-symbols-outlined block">call</span>
</div>
</a>
</div>
<!-- Footer -->
<footer class="bg-slate-900 text-slate-400 py-16 px-8 w-full border-t border-slate-800">
<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<div class="text-2xl font-black text-white font-headline mb-6 tracking-tight">Max Engineering</div>
<p class="text-sm leading-relaxed mb-8">
                    Precision-driven engineering solutions for the modern industrial landscape. We specialize in electrical, security, and fire safety systems.
                </p>
<div class="flex gap-4">
<span class="material-symbols-outlined text-amber-500 cursor-pointer hover:text-white">social_leaderboard</span>
<span class="material-symbols-outlined text-amber-500 cursor-pointer hover:text-white">alternate_email</span>
</div>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="flex flex-col gap-3">
<h4 class="text-white font-bold mb-2">Company</h4>
<a class="hover:text-amber-500 transition-colors" href="#">Home</a>
<a class="hover:text-amber-500 transition-colors" href="#">About</a>
<a class="hover:text-amber-500 transition-colors" href="#">Services</a>
<a class="text-amber-500" href="#">Projects</a>
</div>
<div class="flex flex-col gap-3">
<h4 class="text-white font-bold mb-2">Connect</h4>
<a class="hover:text-amber-500 transition-colors" href="#">Contact</a>
<a class="hover:text-amber-500 transition-colors" href="#">LinkedIn</a>
<a class="hover:text-amber-500 transition-colors" href="#">Privacy</a>
</div>
</div>
<div>
<h4 class="text-white font-bold mb-6 uppercase tracking-widest text-xs">Technical Office</h4>
<div class="space-y-4">
<div class="flex gap-4">
<span class="material-symbols-outlined text-amber-500">location_on</span>
<p class="text-sm">Hari Om Nagar Road-5, Adityapur-13, Jamshedpur</p>
</div>
<div class="flex gap-4">
<span class="material-symbols-outlined text-amber-500">call</span>
<p class="text-sm">9431755791</p>
</div>
<div class="flex gap-4">
<span class="material-symbols-outlined text-amber-500">mail</span>
<p class="text-sm">dasrajkumar878@gmail.com</p>
</div>
</div>
</div>
</div>
<div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-xs text-center">
            © 2024 Max Engineering. All rights reserved.
        </div>
</footer>
</body></html>

<!-- Projects - Max Engineering -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Contact Us - Max Engineering</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<!-- Icons -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "on-primary-container": "#7587a7",
              "background": "#f7f9fc",
              "surface-container-low": "#f2f4f7",
              "on-tertiary-fixed": "#0d1c2e",
              "tertiary-container": "#112032",
              "on-primary-fixed-variant": "#364764",
              "surface": "#f7f9fc",
              "surface-container-highest": "#e0e3e6",
              "surface-container": "#eceef1",
              "error-container": "#ffdad6",
              "secondary-container": "#fea619",
              "surface-container-lowest": "#ffffff",
              "secondary-fixed-dim": "#ffb95f",
              "on-error": "#ffffff",
              "on-surface-variant": "#44474d",
              "primary-container": "#0b1f3a",
              "on-tertiary": "#ffffff",
              "tertiary-fixed": "#d5e3fc",
              "outline-variant": "#c4c6ce",
              "inverse-on-surface": "#eff1f4",
              "on-error-container": "#93000a",
              "tertiary": "#000714",
              "error": "#ba1a1a",
              "outline": "#75777e",
              "on-primary-fixed": "#071c36",
              "secondary": "#855300",
              "on-secondary": "#ffffff",
              "primary": "#000615",
              "surface-variant": "#e0e3e6",
              "on-secondary-fixed-variant": "#653e00",
              "primary-fixed-dim": "#b5c7ea",
              "primary-fixed": "#d6e3ff",
              "tertiary-fixed-dim": "#b9c7df",
              "inverse-primary": "#b5c7ea",
              "on-surface": "#191c1e",
              "on-secondary-container": "#684000",
              "surface-dim": "#d8dadd",
              "inverse-surface": "#2d3133",
              "secondary-fixed": "#ffddb8",
              "on-tertiary-fixed-variant": "#3a485b",
              "on-secondary-fixed": "#2a1700",
              "on-background": "#191c1e",
              "surface-container-high": "#e6e8eb",
              "on-primary": "#ffffff",
              "on-tertiary-container": "#79889e",
              "surface-bright": "#f7f9fc",
              "surface-tint": "#4d5f7d"
            },
            fontFamily: {
              "headline": ["Plus Jakarta Sans"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      }
      .glass-header {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(12px);
      }
      .machined-metal {
        background: linear-gradient(135deg, #000615 0%, #0b1f3a 100%);
      }
    </style>
</head>
<body class="bg-surface font-body text-on-surface">
<!-- TopAppBar -->
<header class="sticky top-0 w-full z-50 glass-header shadow-[0_12px_32px_rgba(7,28,54,0.08)]">
<nav class="flex justify-between items-center h-20 px-8 max-w-full mx-auto">
<div class="text-2xl font-black text-slate-900 tracking-tight font-headline">
                Max Engineering
            </div>
<div class="hidden md:flex items-center gap-8">
<a class="text-slate-600 hover:text-blue-900 transition-colors font-headline font-bold text-sm" href="#">Home</a>
<a class="text-slate-600 hover:text-blue-900 transition-colors font-headline font-bold text-sm" href="#">About</a>
<a class="text-slate-600 hover:text-blue-900 transition-colors font-headline font-bold text-sm" href="#">Services</a>
<a class="text-slate-600 hover:text-blue-900 transition-colors font-headline font-bold text-sm" href="#">Projects</a>
<a class="text-blue-900 border-b-2 border-amber-500 pb-1 font-headline font-bold text-sm" href="#">Contact</a>
</div>
<button class="machined-metal text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-transform active:scale-95 duration-150">
                Get Quote
            </button>
</nav>
</header>
<main class="min-h-screen">
<!-- Hero Section / Header -->
<section class="relative pt-20 pb-16 px-8 bg-surface-container">
<div class="max-w-7xl mx-auto">
<span class="label-sm uppercase tracking-widest text-secondary font-bold text-xs">Project Inquiry</span>
<h1 class="text-6xl md:text-8xl font-black font-headline text-primary-container mt-4 mb-8 tracking-tighter leading-none">
                    Contact Us
                </h1>
<p class="max-w-2xl text-lg text-on-surface-variant leading-relaxed">
                    Connecting precision engineering with architectural vision. Reach out to our team in Jamshedpur for high-scale industrial solutions.
                </p>
</div>
</section>
<!-- Main Content Canvas -->
<section class="px-8 -mt-12 mb-24">
<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
<!-- Contact Details Column (Asymmetric Layout) -->
<div class="lg:col-span-4 space-y-8">
<div class="bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_32px_rgba(7,28,54,0.08)] border-l-4 border-secondary-container">
<div class="flex items-start gap-4 mb-8">
<span class="material-symbols-outlined text-secondary text-3xl">location_on</span>
<div>
<h3 class="font-headline font-bold text-primary-container text-xl mb-2">Our Office</h3>
<p class="text-on-surface-variant">Hari Om Nagar Road-5, Adityapur-13,<br/>Jamshedpur</p>
</div>
</div>
<div class="flex items-start gap-4 mb-8">
<span class="material-symbols-outlined text-secondary text-3xl">call</span>
<div>
<h3 class="font-headline font-bold text-primary-container text-xl mb-2">Phone</h3>
<p class="text-on-surface-variant">9431755791</p>
<p class="text-on-surface-variant">8985420909</p>
</div>
</div>
<div class="flex items-start gap-4">
<span class="material-symbols-outlined text-secondary text-3xl">mail</span>
<div>
<h3 class="font-headline font-bold text-primary-container text-xl mb-2">Email</h3>
<p class="text-on-surface-variant">dasrajkumar878@gmail.com</p>
<p class="text-on-surface-variant">max.engg2016@gmail.com</p>
</div>
</div>
</div>
<!-- Technical ID / Meta Card -->
<div class="bg-primary-container p-8 rounded-xl text-white">
<span class="text-[10px] uppercase tracking-[0.2em] opacity-60 block mb-4">ENGINEERING HUB ID: 8820-MAX</span>
<p class="text-sm font-medium leading-relaxed opacity-90">
                            "Operating with industrial precision since 2016. Our technical team is available for on-site consultations Monday through Saturday."
                        </p>
</div>
</div>
<!-- Contact Form Column -->
<div class="lg:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_12px_32px_rgba(7,28,54,0.08)]">
<h2 class="text-3xl font-headline font-extrabold text-primary-container mb-8">Send Inquiry</h2>
<form class="space-y-6">
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="space-y-2">
<label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Full Name</label>
<input class="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-container transition-all" placeholder="John Doe" type="text"/>
</div>
<div class="space-y-2">
<label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Phone Number</label>
<input class="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-container transition-all" placeholder="+91 00000 00000" type="tel"/>
</div>
</div>
<div class="space-y-2">
<label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Subject</label>
<input class="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-container transition-all" placeholder="Industrial Project Proposal" type="text"/>
</div>
<div class="space-y-2">
<label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Message</label>
<textarea class="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-container transition-all" placeholder="Describe your engineering requirements..." rows="5"></textarea>
</div>
<div class="pt-4">
<button class="bg-secondary-container text-on-secondary-container w-full md:w-auto px-12 py-4 rounded-xl font-headline font-bold text-lg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-500/20" type="submit">
                                Send Inquiry
                            </button>
</div>
</form>
</div>
</div>
</section>
<!-- Map Section (Monolithic Block) -->
<section class="w-full h-[500px] bg-surface-container-highest relative overflow-hidden group">
<div class="absolute inset-0 bg-primary-container/10 z-10 pointer-events-none group-hover:bg-primary-container/0 transition-colors duration-500"></div>
<img class="w-full h-full object-cover grayscale brightness-75 contrast-125" data-alt="Technical map view of Jamshedpur industrial area" data-location="Jamshedpur" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByI4y77kkE2l0rKFMzqiACnZU_2LVJHsNiZQXXl3-clOEUa_vd4XfUS8z3q_4RRkr2sh4bz62QsVgO_gWNXYGrjn3E1JQWSdtBlf-WtTFmpcWBHM3_92A8R-tFxDoN1yA2F0YPb9yJArq2Y8y_IbnihAMPTH5F5wvU3KgEKnqptOtugFHrv2W3u-ZfnyPvrrK9xfqL2Prk3SGsfRiFMBpULPH_yl7vu2fZEu81lSv_lL6F-Ambh2s9Po5Z3q4dtBoRJQCpbiYmxo-i"/>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
<div class="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl flex flex-col items-center">
<span class="material-symbols-outlined text-secondary text-5xl mb-2" style="font-variation-settings: 'FILL' 1;">location_on</span>
<h4 class="font-headline font-black text-primary-container text-lg">Max Engineering Base</h4>
<p class="text-sm text-on-surface-variant">Adityapur, Jamshedpur</p>
<button class="mt-4 text-xs font-bold uppercase tracking-widest text-secondary hover:underline">Get Directions</button>
</div>
</div>
</section>
</main>
<!-- SideNavBar (Floating Quick Contact) -->
<aside class="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
<!-- WhatsApp -->
<a class="bg-white dark:bg-slate-800 text-slate-700 rounded-full p-4 shadow-[0_12px_32px_rgba(7,28,54,0.15)] backdrop-blur-xl hover:scale-110 active:scale-90 transition-all group flex items-center justify-center" href="#">
<span class="material-symbols-outlined text-amber-500" data-icon="chat">chat</span>
</a>
<!-- Call -->
<a class="bg-amber-500 text-white rounded-full p-4 shadow-[0_12px_32_rgba(7,28,54,0.15)] hover:scale-110 active:scale-90 transition-all flex items-center justify-center" href="#">
<span class="material-symbols-outlined" data-icon="call">call</span>
</a>
</aside>
<!-- Footer -->
<footer class="bg-slate-900 w-full py-16 px-8">
<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
<div>
<div class="text-xl font-bold text-white font-headline mb-6">Max Engineering</div>
<p class="text-slate-400 text-sm leading-relaxed max-w-xs">
                    Leading industrial solutions and engineering excellence in Jamshedpur since 2016. Building the infrastructure of tomorrow.
                </p>
</div>
<div class="space-y-4">
<h4 class="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
<div class="grid grid-cols-1 gap-2">
<a class="text-slate-400 text-sm hover:text-white transition-colors" href="#">Home</a>
<a class="text-slate-400 text-sm hover:text-white transition-colors" href="#">About</a>
<a class="text-slate-400 text-sm hover:text-white transition-colors" href="#">Services</a>
<a class="text-slate-400 text-sm hover:text-white transition-colors" href="#">Projects</a>
</div>
</div>
<div class="space-y-4">
<h4 class="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4">Contact Info</h4>
<div class="space-y-3">
<p class="text-slate-400 text-sm flex items-start gap-2">
<span class="material-symbols-outlined text-xs mt-1">location_on</span>
                        Hari Om Nagar Road-5, Adityapur-13, Jamshedpur
                    </p>
<p class="text-slate-400 text-sm flex items-center gap-2">
<span class="material-symbols-outlined text-xs">call</span>
                        9431755791
                    </p>
<p class="text-slate-400 text-sm flex items-center gap-2">
<span class="material-symbols-outlined text-xs">mail</span>
                        dasrajkumar878@gmail.com
                    </p>
</div>
</div>
</div>
<div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-slate-500 text-xs">© 2024 Max Engineering. All rights reserved.</p>
<div class="flex gap-6">
<a class="text-slate-500 hover:text-white text-xs" href="#">Privacy Policy</a>
<a class="text-slate-500 hover:text-white text-xs" href="#">Terms of Service</a>
</div>
</div>
</footer>
</body></html>

<!-- Contact - Max Engineering -->
<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Project Gallery | MAX ENGINEERING</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "surface-tint": "#4d5f7d",
              "on-error-container": "#93000a",
              "error-container": "#ffdad6",
              "on-tertiary-fixed": "#0d1c2e",
              "primary": "#000615",
              "surface-dim": "#d8dadd",
              "surface-container-highest": "#e0e3e6",
              "secondary-fixed": "#ffddb8",
              "tertiary-container": "#112032",
              "surface-container-lowest": "#ffffff",
              "on-primary-fixed": "#071c36",
              "tertiary-fixed": "#d5e3fc",
              "secondary-container": "#fea619",
              "outline-variant": "#c4c6ce",
              "inverse-primary": "#b5c7ea",
              "on-primary-container": "#7587a7",
              "tertiary-fixed-dim": "#b9c7df",
              "on-background": "#191c1e",
              "surface-bright": "#f7f9fc",
              "secondary": "#855300",
              "tertiary": "#000714",
              "primary-fixed": "#d6e3ff",
              "on-tertiary-container": "#79889e",
              "on-primary-fixed-variant": "#364764",
              "background": "#f7f9fc",
              "on-tertiary": "#ffffff",
              "on-error": "#ffffff",
              "primary-fixed-dim": "#b5c7ea",
              "on-surface-variant": "#44474d",
              "error": "#ba1a1a",
              "surface-container": "#eceef1",
              "on-tertiary-fixed-variant": "#3a485b",
              "on-secondary-fixed": "#2a1700",
              "inverse-surface": "#2d3133",
              "on-secondary-fixed-variant": "#653e00",
              "inverse-on-surface": "#eff1f4",
              "surface-container-low": "#f2f4f7",
              "on-secondary": "#ffffff",
              "surface-variant": "#e0e3e6",
              "on-primary": "#ffffff",
              "secondary-fixed-dim": "#ffb95f",
              "on-surface": "#191c1e",
              "surface-container-high": "#e6e8eb",
              "surface": "#f7f9fc",
              "outline": "#75777e",
              "primary-container": "#0b1f3a",
              "on-secondary-container": "#684000"
            },
            fontFamily: {
              "headline": ["Plus Jakarta Sans"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .industrial-gradient {
            background: linear-gradient(135deg, #000615 0%, #0b1f3a 100%);
        }
    </style>
</head>
<body class="bg-surface font-body text-on-background antialiased">
<!-- Top Navigation Bar -->
<header class="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-xl shadow-[0_12px_32px_rgba(7,28,54,0.08)]">
<nav class="flex items-center justify-between px-8 h-20 w-full max-w-none">
<div class="text-xl font-black tracking-tighter text-slate-900">
                MAX ENGINEERING
            </div>
<div class="hidden md:flex items-center space-x-10 font-plus-jakarta font-bold tracking-tight">
<a class="text-slate-600 hover:text-slate-900 transition-colors" href="#">Projects</a>
<a class="text-slate-600 hover:text-slate-900 transition-colors" href="#">Services</a>
<a class="text-slate-600 hover:text-slate-900 transition-colors" href="#">About</a>
<a class="text-slate-600 hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
<div class="flex items-center gap-4">
<button class="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-sm">
                    Request Quote
                </button>
</div>
</nav>
</header>
<main class="pt-20">
<!-- Hero Section -->
<section class="relative py-24 px-8 overflow-hidden bg-primary-container industrial-gradient">
<div class="absolute inset-0 opacity-10">
<div class="absolute inset-0" data-alt="Technical engineering blueprints overlaying dark background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkW6J3cY-tDNbcOt8mShc_zMWrM__0pSNsuc99l1o7wBzdgAjrJ6GFvXtQLJaVXbYwPYwMZH6EceH9E_LRI4NlfgUxAe9qLKbf2AU9w-0jaxWAGmGTn2T3R7kCiG4pH4fGe0aSYq1vJXzo4O_1XYaSW1EXp2dYvx1VNB7cEUoiOPNGBBbkhEvNJhaNlkgDHaQ7Gly8gM_ypM5iZT6QZj-YYGfvi3B4tYND6Qi7uKZVr_lT4MV3P3tvoEQqLsRchoLHwyUA8Xkli3ZL'); background-size: cover; background-position: center;"></div>
</div>
<div class="relative z-10 max-w-7xl mx-auto">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
<div class="max-w-2xl">
<span class="text-secondary-container font-label uppercase tracking-[0.2em] text-sm font-bold block mb-4">Excellence in Execution</span>
<h1 class="text-5xl md:text-7xl font-headline font-extrabold text-white tracking-tighter leading-tight">
                            Project Gallery
                        </h1>
<p class="mt-6 text-slate-400 text-lg md:text-xl font-body leading-relaxed max-w-xl">
                            Visualizing precision and excellence in every project we undertake. From heavy industrial electrical panels to complex fire safety systems.
                        </p>
</div>
</div>
</div>
</section>
<!-- Gallery Controls -->
<section class="bg-surface-container-low py-8 sticky top-20 z-40 backdrop-blur-md">
<div class="max-w-7xl mx-auto px-8">
<div class="flex flex-wrap items-center justify-center md:justify-start gap-4">
<button class="px-6 py-2 rounded-full font-bold text-sm tracking-tight transition-all bg-secondary-container text-on-secondary-container">All</button>
<button class="px-6 py-2 rounded-full font-bold text-sm tracking-tight transition-all text-slate-600 hover:bg-slate-200">Electrical</button>
<button class="px-6 py-2 rounded-full font-bold text-sm tracking-tight transition-all text-slate-600 hover:bg-slate-200">Instrumentation</button>
<button class="px-6 py-2 rounded-full font-bold text-sm tracking-tight transition-all text-slate-600 hover:bg-slate-200">CCTV</button>
<button class="px-6 py-2 rounded-full font-bold text-sm tracking-tight transition-all text-slate-600 hover:bg-slate-200">Fire Safety</button>
</div>
</div>
</section>
<!-- Bento Masonry Gallery -->
<section class="py-16 px-8 bg-surface">
<div class="max-w-7xl mx-auto">
<div class="grid grid-cols-1 md:grid-cols-12 gap-6">
<!-- Large Feature Item -->
<div class="md:col-span-8 group relative rounded-xl overflow-hidden bg-surface-container aspect-[16/9] md:aspect-auto md:h-[500px]">
<img alt="Main Power Distribution" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="High voltage electrical distribution panel in factory" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiR3ONOfRGxsIOpFcLuQSl8ohg6MtiuTKSua1wcJSiGk5T8Q10Fq4gYLm-O-102Hk372yIzhGk1T98Yn6AlBlqLCP-ZUd9LgDOL56TqcPuz49ewxDvxj92aLmI359chuxRbSJ5nFMX5Q0vWKehV1ejTAHyQ_0ZU-dSKpFa58CCb1suBnV0pI9D-dmRWd760ekjVEWK-tM0zPqS_lOygXSyNKdTqozDvEvgKuRONZZiMryB0jtxZ8xeEnQnRKhlywvb6RUcz4fsvmHO"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent opacity-60"></div>
<div class="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span class="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm mb-3 inline-block">Electrical</span>
<h3 class="text-white text-2xl font-headline font-bold">Industrial Grid Main Control</h3>
<p class="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Full-scale power management system for automotive manufacturing plant.</p>
</div>
<div class="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
<span class="material-symbols-outlined">fullscreen</span>
</div>
</div>
</div>
<!-- Vertical Item -->
<div class="md:col-span-4 group relative rounded-xl overflow-hidden bg-surface-container h-[500px]">
<img alt="Control Room" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Modern technical control room with multiple monitors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFqE1RUQLkr7Hx2o9OTwzNpCitXO8tQGJCLibt_S3xuE9i1E0wFUTKokivO_Ef2oRQXtDHuhShnv8xFyUQXfm4Pnkb2c5Upsx8iLnCQDxdycdE5Trg6hdKu9HDp0dEwNkXxlMSaZDPplJhGBFxxMkLtcJ4uvzZJBkc4L7wXnNTX14C4G9ABP6oJYgBDNYAdq96uzzlr4yC_SMqrShdgzWl-WTSuyfNeT06tGQY0xaDSE65ZeMUHrMfuX-QotUuZJA0AS2CnBk2D4X6"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent opacity-60"></div>
<div class="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span class="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm mb-3 inline-block">Instrumentation</span>
<h3 class="text-white text-2xl font-headline font-bold">SCADA Monitoring Hub</h3>
</div>
<div class="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
<span class="material-symbols-outlined">fullscreen</span>
</div>
</div>
</div>
<!-- Grid Items -->
<div class="md:col-span-4 group relative rounded-xl overflow-hidden bg-surface-container aspect-square">
<img alt="CCTV Installation" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Industrial surveillance camera installation on exterior wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUidf7EpxukoItzxR61e4eKAtgl1CXD7pmoHXRYhiJMqeCnZuyeLUVhMVMSM-s94yiU_VsbElmYvJNflmxEfc_3DkddfldsHEpERa3std3Fw1e29NpQAyKqjQ_23oidvawtrwxY-SOpdmhqCjRhcYJon5JJNHmB0UhJLNTBCvgTHqBOxi16O9w4bssYzuQJjTBtK8ujOsdBeeUY7oewu9EvPNkHgv1vgOClOPiX1Ls41UqXhjrjnGo0dw4dOwackiyijzW_TuQA18j"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent opacity-60"></div>
<div class="absolute bottom-0 left-0 p-6">
<span class="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm mb-2 inline-block">CCTV</span>
<h3 class="text-white text-lg font-headline font-bold">Smart Surveillance Perimeter</h3>
</div>
</div>
<div class="md:col-span-4 group relative rounded-xl overflow-hidden bg-surface-container aspect-square">
<img alt="Fire Alarm System" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Red fire alarm control panel in hallway" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbrmo0Bi0hAIdzT102141TnitiOjlHJtjR_PwBZNr1pD5AmeFrPnVDUJYBxw0aT8r7whgTR3KfnEb_DAIqBDfuwKQ1CPqnOF0HxL7EcOxagbbZvsvXFSt7QWoqvsH_vYYkyaF78xCBy1m6IgMguu0LxPZr4yGWD_4Qlo3eYeTokPFQp4rDtUZ4URMz6Uir9gtz74JkzQqb3pZo8pp-2ZFhGxbvcjUEfDnwi9nj8aFGOASbRakaqsxjMN2FMDhi8d3pKLKUMET3IiTr"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent opacity-60"></div>
<div class="absolute bottom-0 left-0 p-6">
<span class="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm mb-2 inline-block">Fire Safety</span>
<h3 class="text-white text-lg font-headline font-bold">Precision Smoke Detection</h3>
</div>
</div>
<div class="md:col-span-4 group relative rounded-xl overflow-hidden bg-surface-container aspect-square">
<img alt="Technician" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Electrical technician working with complex wiring" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUUL9oE0-dFryoLXXyXBIZ8irJMtsso9VtDcFaXYNpzsFu0PLRFSB2GuTEcmDcwEJ-Ufi7Ctbv2-3Jv13vyogNQJIOxiH-fjxQTMiwpxTyqBZ0bEHLwsCXBiUFxEcdYm-lPW6XiYrPIP9Ju5ih2LzYjRcMNnm_NMCjWN4r_SLmWlE_vctG_0pL4FnbQlsk3ovEEagJ6Pz6qyKcTFWon-5RzwHdKFcrsPeC_G3-cO8E554I9cdaRJL5062Mi-FzhT2mXUZBXSoA6tKe"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent opacity-60"></div>
<div class="absolute bottom-0 left-0 p-6">
<span class="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm mb-2 inline-block">Electrical</span>
<h3 class="text-white text-lg font-headline font-bold">Wiring Optimization</h3>
</div>
</div>
<!-- Wide Item -->
<div class="md:col-span-12 group relative rounded-xl overflow-hidden bg-surface-container h-[400px]">
<img alt="Solar Infrastructure" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Large scale industrial solar farm installation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz-RnH53XPx2CCFx6zQOdODm-67xX0lqX4nilevwCsaLyFF1Dwe--BPoJES_ycAU0tdUiliQ0k90kmHxhO3cTMpger1dp4rnyhVwfzl4_w6CTSDBBnsdb7puVHIeZxe8TlOpmOBZsMT7sKKuw02Qmi5O0bD8SNQK3WFkC7DnJewkGZtbiZNaoOIwHC4VQ46H38E5dbhmjub0blAh5kuYDByTOzLKHNZCBnks3m3F0Lh2VT-veBUJ_uBw73Gi-yoguMP47trNgRqPtc"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent opacity-60"></div>
<div class="absolute bottom-0 left-0 p-10 flex flex-col md:flex-row md:items-end justify-between w-full">
<div>
<span class="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm mb-3 inline-block">Sustainability</span>
<h3 class="text-white text-3xl font-headline font-bold">Renewable Energy Grid Integration</h3>
<p class="text-slate-300 mt-2 max-w-lg">Advanced PV instrumentation and power distribution for 50MW solar array.</p>
</div>
<button class="mt-6 md:mt-0 px-8 py-3 bg-white text-primary-container font-bold rounded-xl hover:bg-secondary-container transition-colors">
                                View Case Study
                            </button>
</div>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="py-24 px-8 bg-surface-container">
<div class="max-w-4xl mx-auto text-center">
<h2 class="text-4xl font-headline font-extrabold text-primary tracking-tight mb-6">Need a quote for your next major project?</h2>
<p class="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Our team of engineers and technicians is ready to bring high-precision solutions to your facility. Let's build something lasting together.</p>
<div class="flex flex-col sm:flex-row gap-4 justify-center">
<button class="px-10 py-4 bg-primary-container text-white rounded-xl font-bold shadow-xl hover:scale-105 transition-all">Request a Quote</button>
<button class="px-10 py-4 bg-white text-primary-container border-2 border-primary-container/10 rounded-xl font-bold hover:bg-slate-50 transition-all">Download Portfolio</button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-[#0b1f3a] w-full py-16">
<div class="flex flex-col md:flex-row justify-between items-center px-12 w-full max-w-7xl mx-auto">
<div class="mb-8 md:mb-0">
<div class="text-lg font-bold text-amber-500 mb-2">MAX ENGINEERING</div>
<div class="font-inter text-[10px] uppercase tracking-widest text-slate-400">© 2024 MAX ENGINEERING. ALL RIGHTS RESERVED.</div>
</div>
<div class="flex flex-wrap justify-center gap-8 font-inter text-sm uppercase tracking-widest text-slate-400">
<a class="hover:text-white hover:underline decoration-amber-500 decoration-2 underline-offset-4 transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-white hover:underline decoration-amber-500 decoration-2 underline-offset-4 transition-colors" href="#">Terms of Service</a>
<a class="hover:text-white hover:underline decoration-amber-500 decoration-2 underline-offset-4 transition-colors" href="#">Project ID Lookup</a>
<a class="hover:text-white hover:underline decoration-amber-500 decoration-2 underline-offset-4 transition-colors" href="#">Safety Standards</a>
</div>
</div>
</footer>
<!-- FAB -->
<div class="fixed bottom-8 right-8 z-50">
<button class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_12px_32px_rgba(7,28,54,0.08)] backdrop-blur-md border border-slate-100 transition-transform hover:scale-110 group">
<span class="material-symbols-outlined text-secondary text-3xl" data-weight="fill">chat_bubble</span>
</button>
</div>
</body></html>

<!-- Gallery - Max Engineering -->
<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "surface-tint": "#4d5f7d",
              "on-error-container": "#93000a",
              "error-container": "#ffdad6",
              "on-tertiary-fixed": "#0d1c2e",
              "primary": "#000615",
              "surface-dim": "#d8dadd",
              "surface-container-highest": "#e0e3e6",
              "secondary-fixed": "#ffddb8",
              "tertiary-container": "#112032",
              "surface-container-lowest": "#ffffff",
              "on-primary-fixed": "#071c36",
              "tertiary-fixed": "#d5e3fc",
              "secondary-container": "#fea619",
              "outline-variant": "#c4c6ce",
              "inverse-primary": "#b5c7ea",
              "on-primary-container": "#7587a7",
              "tertiary-fixed-dim": "#b9c7df",
              "on-background": "#191c1e",
              "surface-bright": "#f7f9fc",
              "secondary": "#855300",
              "tertiary": "#000714",
              "primary-fixed": "#d6e3ff",
              "on-tertiary-container": "#79889e",
              "on-primary-fixed-variant": "#364764",
              "background": "#f7f9fc",
              "on-tertiary": "#ffffff",
              "on-error": "#ffffff",
              "primary-fixed-dim": "#b5c7ea",
              "on-surface-variant": "#44474d",
              "error": "#ba1a1a",
              "surface-container": "#eceef1",
              "on-tertiary-fixed-variant": "#3a485b",
              "on-secondary-fixed": "#2a1700",
              "inverse-surface": "#2d3133",
              "on-secondary-fixed-variant": "#653e00",
              "inverse-on-surface": "#eff1f4",
              "surface-container-low": "#f2f4f7",
              "on-secondary": "#ffffff",
              "surface-variant": "#e0e3e6",
              "on-primary": "#ffffff",
              "secondary-fixed-dim": "#ffb95f",
              "on-surface": "#191c1e",
              "surface-container-high": "#e6e8eb",
              "surface": "#f7f9fc",
              "outline": "#75777e",
              "primary-container": "#0b1f3a",
              "on-secondary-container": "#684000"
            },
            fontFamily: {
              "headline": ["Plus Jakarta Sans"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      }
      .glass-header {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(12px);
      }
      .industrial-gradient {
        background: linear-gradient(135deg, #000615 0%, #0b1f3a 100%);
      }
    </style>
</head>
<body class="bg-surface font-body text-on-surface">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 glass-header shadow-[0_12px_32px_rgba(7,28,54,0.08)] flex items-center justify-between px-8 h-20">
<div class="text-xl font-black tracking-tighter text-slate-900 font-headline">MAX ENGINEERING</div>
<div class="hidden md:flex items-center space-x-8">
<a class="text-slate-600 hover:text-slate-900 transition-colors font-headline font-bold" href="#">Projects</a>
<a class="text-slate-600 hover:text-slate-900 transition-colors font-headline font-bold" href="#">Services</a>
<a class="text-slate-600 hover:text-slate-900 transition-colors font-headline font-bold" href="#">About</a>
<a class="text-slate-600 hover:text-slate-900 transition-colors font-headline font-bold" href="#">Contact</a>
</div>
<div class="flex items-center gap-6">
<button class="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-xl font-headline font-bold text-sm hover:scale-95 duration-200 ease-in-out">
                Request Quote
            </button>
</div>
</nav>
<main class="pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
<!-- Breadcrumbs -->
<nav class="flex items-center space-x-2 text-xs font-label uppercase tracking-widest text-on-surface-variant mb-8">
<a class="hover:text-secondary transition-colors" href="#">Home</a>
<span class="material-symbols-outlined text-[14px]">chevron_right</span>
<a class="hover:text-secondary transition-colors" href="#">Projects</a>
<span class="material-symbols-outlined text-[14px]">chevron_right</span>
<span class="text-on-surface font-semibold">Industrial Electrical Panel Setup</span>
</nav>
<!-- Hero Header -->
<header class="mb-12 border-l-8 border-secondary-container pl-6">
<p class="text-secondary font-headline font-extrabold tracking-tighter text-sm uppercase mb-2">Project Case Study</p>
<h1 class="text-4xl md:text-6xl font-headline font-extrabold text-primary-container tracking-tight leading-tight max-w-4xl">
                Industrial Electrical Panel Setup – Adityapur
            </h1>
</header>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
<!-- Left Column: Main Content -->
<div class="lg:col-span-8 space-y-12">
<!-- Large Project Image -->
<div class="relative aspect-video rounded-xl overflow-hidden shadow-2xl group">
<img alt="Main Project Image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="High-precision industrial electrical control panel with complex wiring" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOokEcWhT2UxeCf23Nd4Z4QnPiwz7KOQWPPpPCc-r4Q5OPdnA85SZl9MUqtp2mhir76xXPjLk9sChWp9-J9QlTst2SJ0FMS5LQRb-tdNKlbqIHMExEnjBHyxTAb8GkcRfp2YisWLAAkNgksZ8hyMaavT8GPzB2tRTv50IMmgj4bq00d34wWk-m3qr7eNFQqV1_2B-zRpYDojAM0QwwfyVYemX31GSentVT2NWbM7QFw3RjP10ODKCRPniWyQ-vp-GVwbSnWUwXJFVd"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<!-- Overview -->
<section class="space-y-6">
<div class="flex items-center gap-4">
<span class="h-[2px] w-12 bg-secondary-container"></span>
<h2 class="text-2xl font-headline font-bold text-primary-container uppercase tracking-tight">Project Overview</h2>
</div>
<p class="text-lg text-on-surface-variant leading-relaxed">
                        The Adityapur Industrial Hub required a robust, high-capacity electrical panel infrastructure for a newly commissioned manufacturing unit. Max Engineering was tasked with designing, assembling, and installing a centralized control system capable of handling peak loads while ensuring 99.9% uptime for critical assembly lines.
                    </p>
</section>
<!-- Challenges & Solutions -->
<section class="bg-surface-container-low rounded-xl p-8 md:p-12 space-y-8">
<div class="grid md:grid-cols-2 gap-12">
<div class="space-y-4">
<h3 class="text-xl font-headline font-bold text-primary-container flex items-center gap-2">
<span class="material-symbols-outlined text-error">warning</span>
                                Challenges
                            </h3>
<ul class="space-y-3 text-on-surface-variant">
<li class="flex gap-3"><span class="text-secondary-container font-bold">•</span> Limited spatial footprint for massive power distribution units.</li>
<li class="flex gap-3"><span class="text-secondary-container font-bold">•</span> Integration with legacy machinery using outdated communication protocols.</li>
<li class="flex gap-3"><span class="text-secondary-container font-bold">•</span> Strict 14-day timeline to avoid manufacturing delays.</li>
</ul>
</div>
<div class="space-y-4">
<h3 class="text-xl font-headline font-bold text-primary-container flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">build</span>
                                Solutions
                            </h3>
<ul class="space-y-3 text-on-surface-variant">
<li class="flex gap-3"><span class="text-secondary-container font-bold">•</span> Modular vertical panel stacking to save 40% floor space.</li>
<li class="flex gap-3"><span class="text-secondary-container font-bold">•</span> Custom PLC bridge implementation for seamless data relay.</li>
<li class="flex gap-3"><span class="text-secondary-container font-bold">•</span> 24/7 dual-shift engineering team deployment for rapid setup.</li>
</ul>
</div>
</div>
</section>
<!-- Outcome -->
<section class="space-y-6">
<div class="flex items-center gap-4">
<span class="h-[2px] w-12 bg-secondary-container"></span>
<h2 class="text-2xl font-headline font-bold text-primary-container uppercase tracking-tight">Outcome/Results</h2>
</div>
<div class="grid grid-cols-2 md:grid-cols-3 gap-6">
<div class="p-6 bg-surface-container-lowest border-l-4 border-secondary-container shadow-sm">
<div class="text-3xl font-headline font-extrabold text-primary">15%</div>
<div class="text-xs font-label uppercase text-on-surface-variant mt-1">Efficiency Gain</div>
</div>
<div class="p-6 bg-surface-container-lowest border-l-4 border-secondary-container shadow-sm">
<div class="text-3xl font-headline font-extrabold text-primary">0</div>
<div class="text-xs font-label uppercase text-on-surface-variant mt-1">Safety Incidents</div>
</div>
<div class="p-6 bg-surface-container-lowest border-l-4 border-secondary-container shadow-sm">
<div class="text-3xl font-headline font-extrabold text-primary">10yr</div>
<div class="text-xs font-label uppercase text-on-surface-variant mt-1">Warranty Period</div>
</div>
</div>
<p class="text-on-surface-variant leading-relaxed">
                        The final installation exceeded all safety benchmarks and was delivered 2 days ahead of schedule. The facility now operates at maximum capacity with zero power-related interruptions reported in the first quarter of operations.
                    </p>
</section>
</div>
<!-- Right Column: Sidebar -->
<aside class="lg:col-span-4">
<div class="sticky top-28 space-y-8">
<div class="industrial-gradient rounded-xl p-8 text-white shadow-2xl relative overflow-hidden">
<!-- Technical Overlay Pattern -->
<div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 20px 20px;"></div>
<h3 class="text-xl font-headline font-bold mb-8 flex items-center gap-3">
<span class="material-symbols-outlined text-secondary-container">analytics</span>
                            Project Specs
                        </h3>
<div class="space-y-6 relative z-10">
<div>
<label class="text-[10px] uppercase tracking-[0.2em] text-on-primary-container font-bold">Client Name</label>
<p class="text-lg font-headline font-semibold">Tata Steel Ancillary Unit</p>
</div>
<div>
<label class="text-[10px] uppercase tracking-[0.2em] text-on-primary-container font-bold">Location</label>
<p class="text-lg font-headline font-semibold">Adityapur, Jharkhand</p>
</div>
<div>
<label class="text-[10px] uppercase tracking-[0.2em] text-on-primary-container font-bold">Duration</label>
<p class="text-lg font-headline font-semibold">12 Days (Fast-Tracked)</p>
</div>
<div>
<label class="text-[10px] uppercase tracking-[0.2em] text-on-primary-container font-bold">Services Provided</label>
<div class="flex flex-wrap gap-2 mt-2">
<span class="px-3 py-1 bg-white/10 rounded-full text-[11px] font-label font-medium">Panel Design</span>
<span class="px-3 py-1 bg-white/10 rounded-full text-[11px] font-label font-medium">PLC Integration</span>
<span class="px-3 py-1 bg-white/10 rounded-full text-[11px] font-label font-medium">On-site Setup</span>
</div>
</div>
</div>
<button class="w-full mt-10 bg-secondary-container text-on-secondary-container py-4 rounded-xl font-headline font-extrabold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-lg active:scale-95 duration-200">
                            Request Similar Project
                        </button>
</div>
<!-- Trust Badge -->
<div class="bg-surface-container rounded-xl p-6 flex items-center gap-4">
<div class="bg-primary-container p-3 rounded-lg">
<span class="material-symbols-outlined text-secondary-container" data-weight="fill">verified</span>
</div>
<div>
<p class="text-xs font-label uppercase tracking-widest text-on-surface-variant">Quality Standard</p>
<p class="font-headline font-bold text-primary-container">ISO 9001:2015 Certified</p>
</div>
</div>
</div>
</aside>
</div>
<!-- Related Projects -->
<section class="mt-24 pt-16 border-t border-surface-container-high">
<h2 class="text-3xl font-headline font-extrabold text-primary-container mb-10 tracking-tight">More Engineering Marvels</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Related 1 -->
<a class="group block" href="#">
<div class="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-surface-container-highest">
<img alt="Related Project" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Modern high-tech data center server racks with blue lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQiBxpFeMpI32IFpBLxKXs-TQzLKB1Q-esvOjuqW5Qi5vbwibcQyKU3VRdrjsoGWxZkfqmbSFnY5B9anqWJB7jLUQrMyoUYB4S_PyjStPRx_ZnCwhj-4GINwSXgAnN82KkqVEsBonLC3RKjbLEWfr8PRmZoI_VHddwz5cKSZW-Nrlrf2FR2n9wZFmeN9NtJUE9wDR33hi_OnX3ahA3sZ3nz6QjEcR27kzujlz85mKgcuqr9vREXJ2LM6wxl9azwH7-zV9gXnlrAjJ3"/>
</div>
<p class="text-[10px] font-label uppercase tracking-widest text-secondary font-bold mb-1">Infrastructure</p>
<h3 class="text-lg font-headline font-bold text-primary-container group-hover:text-secondary transition-colors">Smart Grid Integration – Ranchi</h3>
</a>
<!-- Related 2 -->
<a class="group block" href="#">
<div class="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-surface-container-highest">
<img alt="Related Project" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Aerial view of a complex construction site with heavy machinery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDViDEGLbYX45Ov4vavSuSMDra5EHpfUuliduSW5Cb80g7_YyxiW52Pw3TSOX_282bktgYUIpKcMStpJu00cJnAXPtXUX0e4a1BsrbVWd2jr-EzuOC4VJOVRLBWLVOTVWJjeAdvAqojT0ioDwIqPHBfE7nN32yUiIGxE0Avmw3LYqfyB_fBNGS_4w9psRYYXAI9Lpvd4MtvzdL-UY4evSyN1GD4N2jYrfCilO38FZ9e7KB2fwhC4ohTsly8oSDuW1ZgVYtVK8Exbb8T"/>
</div>
<p class="text-[10px] font-label uppercase tracking-widest text-secondary font-bold mb-1">Civil &amp; Foundation</p>
<h3 class="text-lg font-headline font-bold text-primary-container group-hover:text-secondary transition-colors">Sub-station Civil Works</h3>
</a>
<!-- Related 3 -->
<a class="group block" href="#">
<div class="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-surface-container-highest">
<img alt="Related Project" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Mechanical industrial components including high-precision gears" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNP7FpW1-tfIU76ozBAgT8g9Qcjgmph-TOCpb0X8nOgyPdjcWA1gzMPzFDeJBHgyjKu6gcsQdtNr0f1yO8iOE-AwkvcHz2BFsB0NK7PtzUm-awgJw7KZUCMWqFvMXG4w8QJZkBTQTVuOHwaWmWg70BsL_b-bSGS4CpI9tZimbUAqjD0z_PDaEECeeQy99JkzxcfhRxfWmoXOsRxHeTKofnYpFj4RVoz_SnbkG5H0I-97Dv0HuPvQTX7Wk3F7ruVIdETLhlxWI83upE"/>
</div>
<p class="text-[10px] font-label uppercase tracking-widest text-secondary font-bold mb-1">Manufacturing</p>
<h3 class="text-lg font-headline font-bold text-primary-container group-hover:text-secondary transition-colors">Automated Conveyor Line</h3>
</a>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-16 bg-[#0b1f3a] dark:bg-[#050b14] flex flex-col items-center">
<div class="flex flex-col md:flex-row justify-between items-center px-12 w-full max-w-7xl mx-auto gap-8">
<div class="text-lg font-bold text-amber-500 font-headline">MAX ENGINEERING</div>
<div class="flex flex-wrap justify-center gap-8">
<a class="text-slate-400 hover:text-white transition-colors font-inter text-sm uppercase tracking-widest hover:underline decoration-amber-500 decoration-2 underline-offset-4" href="#">Privacy Policy</a>
<a class="text-slate-400 hover:text-white transition-colors font-inter text-sm uppercase tracking-widest hover:underline decoration-amber-500 decoration-2 underline-offset-4" href="#">Terms of Service</a>
<a class="text-slate-400 hover:text-white transition-colors font-inter text-sm uppercase tracking-widest hover:underline decoration-amber-500 decoration-2 underline-offset-4" href="#">Project ID Lookup</a>
<a class="text-slate-400 hover:text-white transition-colors font-inter text-sm uppercase tracking-widest hover:underline decoration-amber-500 decoration-2 underline-offset-4" href="#">Safety Standards</a>
</div>
</div>
<div class="mt-12 text-slate-500 text-[10px] font-label tracking-[0.3em] text-center">
            © 2024 MAX ENGINEERING. ALL RIGHTS RESERVED.
        </div>
</footer>
</body></html>