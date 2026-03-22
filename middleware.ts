export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/admin', '/admin/posts', '/admin/contacts', '/admin/projects', '/admin/gallery', '/api/admin/:path*', '/api/upload'],
}
