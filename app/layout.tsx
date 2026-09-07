import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import ChatWidget from '@/components/ChatWidget'
import { canonicalUrl, createMetadata, pageSeo, siteUrl } from '@/lib/seo'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-headline',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...createMetadata(pageSeo.home),
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': `${siteUrl}/#organization`,
  name: 'Max Engineering',
  url: canonicalUrl('/'),
  logo: canonicalUrl('/logo.png'),
  description:
    'Industrial electrical, instrumentation, process automation, calibration, erection, and commissioning services based in Jamshedpur.',
  foundingDate: '2005',
  email: 'max.engg2016@gmail.com',
  telephone: ['+91 9431755791', '+91 9431163433'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bank Colony, Road No. 1, Manjhi Tola, Adityapur-1',
    addressLocality: 'Jamshedpur',
    addressRegion: 'Jharkhand',
    addressCountry: 'IN',
  },
  areaServed: 'India',
  sameAs: [siteUrl],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} bg-surface text-on-background font-body`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
