import { createMetadata, pageSeo } from '@/lib/seo'
import ServicesPage from './ServicesPageClient'

export const metadata = createMetadata(pageSeo.services)

export default ServicesPage
