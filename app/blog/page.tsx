import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'
import pool from '@/lib/db'

async function getPosts() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        content TEXT,
        excerpt TEXT,
        cover_image TEXT,
        published BOOLEAN DEFAULT false,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `)
    const result = await pool.query(
      'SELECT id, title, slug, excerpt, cover_image, created_at FROM posts WHERE published = true ORDER BY created_at DESC'
    )
    return result.rows
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative py-12 sm:py-24 px-4 sm:px-8 machined-gradient">
        <div className="max-w-7xl mx-auto">
          <span className="text-secondary-container font-label uppercase tracking-[0.2em] text-sm font-bold block mb-4">
            News & Insights
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-headline font-extrabold text-white tracking-tighter leading-tight">
            Blog
          </h1>
          <p className="mt-6 text-slate-400 text-lg max-w-xl">
            Updates, industry insights, and news from Max Engineering.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-24">
              <span className="material-symbols-outlined text-slate-300 text-6xl">article</span>
              <p className="text-slate-400 mt-4 text-lg">No posts published yet.</p>
              <p className="text-slate-400 text-sm mt-1">Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 card-hover flex flex-col"
                >
                  {post.cover_image ? (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-surface-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-300 text-5xl">article</span>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                      {new Date(post.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                    <h2 className="font-headline font-extrabold text-primary-container text-xl leading-tight group-hover:text-secondary transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-on-surface-variant text-sm mt-3 leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-1 mt-4 text-secondary text-sm font-bold">
                      Read more
                      <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  )
}
