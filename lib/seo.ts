import type { Metadata } from 'next'

export const siteUrl = 'https://maxenggjsr.in'
export const siteName = 'Max Engineering'

type SeoInput = {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}

export function canonicalUrl(path = '/') {
  const cleanPath = path.split('?')[0].split('#')[0] || '/'
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`
  return new URL(normalizedPath, siteUrl).toString()
}

export function createMetadata({
  title,
  description,
  path,
  image = '/logo.png',
  type = 'website',
}: SeoInput): Metadata {
  const url = canonicalUrl(path)
  const canonical = path === '/' ? '/' : url

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      images: [
        {
          url: image,
          alt: siteName,
        },
      ],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export const pageSeo = {
  home: {
    title: 'Industrial Electrical & Instrumentation Services in Jamshedpur | Max Engineering',
    description:
      'Max Engineering provides industrial electrical, instrumentation, process automation, calibration, erection, and commissioning services from Jamshedpur.',
    path: '/',
  },
  about: {
    title: 'About Max Engineering | Industrial Instrumentation Company in Jamshedpur',
    description:
      'Learn about Max Engineering, established in 2005 as a Jamshedpur process automation, electrical, and instrumentation service provider for industrial plants.',
    path: '/about',
  },
  services: {
    title: 'Electrical & Instrumentation Services | Max Engineering Jamshedpur',
    description:
      'Explore Max Engineering services including electrical installation, industrial instrumentation, calibration, panel erection, cable tray work, and manpower support.',
    path: '/services',
  },
  projects: {
    title: 'Industrial Electrical & Instrumentation Projects | Max Engineering',
    description:
      'View Max Engineering project experience across steel, power, and industrial plants for clients including Tata Steel, SMC Power Generation, and KIC Metaliks.',
    path: '/projects',
  },
  gallery: {
    title: 'Project Gallery | Max Engineering Industrial Site Work',
    description:
      'See photos of Max Engineering electrical panels, instrumentation systems, cable trays, and on-site industrial installations across project locations.',
    path: '/gallery',
  },
  blog: {
    title: 'Industrial Instrumentation Blog | Max Engineering',
    description:
      'Read Max Engineering updates and insights about industrial instrumentation, cable tray installation, process automation, and safe project execution.',
    path: '/blog',
  },
  contact: {
    title: 'Contact Max Engineering | Electrical & Instrumentation Services',
    description:
      'Contact Max Engineering in Jamshedpur for industrial electrical, instrumentation, automation, calibration, erection, and commissioning project inquiries.',
    path: '/contact',
  },
} satisfies Record<string, SeoInput>
