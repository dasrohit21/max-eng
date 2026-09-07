import type { MetadataRoute } from 'next'
import { staticPosts } from '@/lib/blog-data'
import pool from '@/lib/db'
import { canonicalUrl } from '@/lib/seo'

const staticRoutes = ['/', '/about', '/services', '/projects', '/gallery', '/blog', '/contact']
const projectRoutes = ['/projects/industrial-electrical-panel', '/projects/substation-grid-modernization']

async function getPublishedBlogSlugs() {
  try {
    const result = await pool.query('SELECT slug FROM posts WHERE published = true')
    return result.rows.map((row: { slug: string }) => row.slug)
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dbSlugs = await getPublishedBlogSlugs()
  const blogSlugs = Array.from(new Set([...dbSlugs, ...staticPosts.map((post) => post.slug)]))
  const routes = [
    ...staticRoutes,
    ...projectRoutes,
    ...blogSlugs.map((slug) => `/blog/${slug}`),
  ]

  return routes.map((route) => ({
    url: canonicalUrl(route),
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }))
}
