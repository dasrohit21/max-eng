import { createMetadata, pageSeo } from '@/lib/seo'
import GalleryPage from './GalleryPageClient'

export const metadata = createMetadata(pageSeo.gallery)

export default GalleryPage
