import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'
import pool from '@/lib/db'

async function getPost(slug: string) {
  try {
    const result = await pool.query(
      'SELECT * FROM posts WHERE slug = $1 AND published = true',
      [slug]
    )
    return result.rows[0] ?? null
  } catch {
    return null
  }
}

function renderContent(content: string) {
  // Simple markdown-like renderer
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('# ')) {
      elements.push(<h2 key={i} className="text-3xl font-headline font-extrabold text-primary-container mt-10 mb-4">{line.slice(2)}</h2>)
    } else if (line.startsWith('## ')) {
      elements.push(<h3 key={i} className="text-2xl font-headline font-bold text-primary-container mt-8 mb-3">{line.slice(3)}</h3>)
    } else if (line.startsWith('### ')) {
      elements.push(<h4 key={i} className="text-xl font-headline font-bold text-on-surface mt-6 mb-2">{line.slice(4)}</h4>)
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      const listItems: string[] = []
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        listItems.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-outside ml-6 space-y-2 my-4 text-on-surface-variant">
          {listItems.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />)}
        </ul>
      )
      continue
    } else if (line === '') {
      // skip blank lines (paragraph breaks handled by spacing)
    } else {
      elements.push(
        <p key={i} className="text-on-surface-variant leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      )
    }
    i++
  }
  return elements
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-slate-100 px-1 rounded text-sm font-mono">$1</code>')
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  return (
    <>
      <Navbar />

      {/* Cover */}
      {post.cover_image && (
        <div className="w-full h-72 md:h-[420px] overflow-hidden">
          <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Article */}
      <article className="py-16 px-8 bg-surface">
        <div className="max-w-3xl mx-auto">
          {/* Back */}
          <Link href="/blog" className="inline-flex items-center gap-1 text-secondary text-sm font-bold mb-8 hover:opacity-75 transition-opacity">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to Blog
          </Link>

          {/* Meta */}
          <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">
            {new Date(post.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary-container tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 pb-10 border-b border-outline-variant/20">
              {post.excerpt}
            </p>
          )}

          {/* Content */}
          <div className="prose-custom">
            {renderContent(post.content ?? '')}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 pt-10 border-t border-outline-variant/20">
            <p className="text-on-surface-variant text-sm mb-4">Have a project in mind?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-container text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
            >
              Contact Us
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingContact />
    </>
  )
}
