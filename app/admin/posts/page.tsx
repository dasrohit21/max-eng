'use client'

import { useEffect, useState } from 'react'

interface Post {
  id: number
  title: string
  slug: string
  content: string
  excerpt: string
  cover_image: string
  published: boolean
  created_at: string
  updated_at: string
}

const emptyForm = { title: '', content: '', excerpt: '', cover_image: '', published: false }

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<'list' | 'new' | 'edit'>('list')
  const [form, setForm] = useState(emptyForm)
  const [editId, setEditId] = useState<number | null>(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [uploading, setUploading] = useState(false)

  const load = () => {
    setLoading(true)
    fetch('/api/admin/posts')
      .then((r) => r.json())
      .then((d) => { setPosts(d.posts ?? []); setLoading(false) })
      .catch(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const openNew = () => {
    setForm(emptyForm)
    setEditId(null)
    setError('')
    setView('new')
  }

  const openEdit = (post: Post) => {
    setForm({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      cover_image: post.cover_image,
      published: post.published,
    })
    setEditId(post.id)
    setError('')
    setView('edit')
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    const isEdit = view === 'edit' && editId !== null
    const res = await fetch('/api/admin/posts', {
      method: isEdit ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(isEdit ? { id: editId, ...form } : form),
    })
    const data = await res.json()
    if (!res.ok) { setError(data.error); setSaving(false); return }
    setSaving(false)
    setView('list')
    load()
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this post? This cannot be undone.')) return
    await fetch('/api/admin/posts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    load()
  }

  const handleTogglePublish = async (post: Post) => {
    await fetch('/api/admin/posts', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...post, published: !post.published }),
    })
    load()
  }

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    const fd = new FormData()
    fd.append('file', file)
    fd.append('folder', 'uploads')
    const res = await fetch('/api/upload', { method: 'POST', body: fd })
    const data = await res.json()
    if (res.ok) setForm((f) => ({ ...f, cover_image: data.src }))
    else setError(data.error)
    setUploading(false)
  }

  // ── Editor view ──
  if (view === 'new' || view === 'edit') {
    return (
      <div className="max-w-3xl">
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={() => setView('list')}
            className="flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors text-sm font-medium"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to Posts
          </button>
          <h1 className="text-2xl font-black text-slate-900 font-headline">
            {view === 'edit' ? 'Edit Post' : 'New Post'}
          </h1>
        </div>

        {error && <p className="text-red-600 text-sm mb-4 bg-red-50 px-4 py-3 rounded-xl">{error}</p>}

        <form onSubmit={handleSave} className="space-y-5">
          {/* Title */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Title *</label>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Post title..."
              className="w-full text-xl font-bold text-slate-900 border-none outline-none placeholder:text-slate-300"
            />
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Excerpt</label>
            <input
              type="text"
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              placeholder="Short summary shown in post listings..."
              className="w-full text-sm text-slate-700 border-none outline-none placeholder:text-slate-300"
            />
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Content</label>
            <textarea
              rows={18}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="Write your post content here...&#10;&#10;Separate paragraphs with a blank line.&#10;&#10;Use # for heading, ## for subheading, **bold**, *italic*, - for bullet list."
              className="w-full text-sm text-slate-700 border-none outline-none resize-none placeholder:text-slate-300 font-mono leading-relaxed"
            />
          </div>

          {/* Cover Image */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Cover Image</label>
            <div className="flex gap-3 items-start">
              <div className="flex-1">
                <input
                  type="text"
                  value={form.cover_image}
                  onChange={(e) => setForm({ ...form, cover_image: e.target.value })}
                  placeholder="/uploads/photo.jpg or external URL"
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <label className="cursor-pointer flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap">
                <span className="material-symbols-outlined text-base">upload</span>
                {uploading ? 'Uploading...' : 'Upload'}
                <input type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} disabled={uploading} />
              </label>
            </div>
            {form.cover_image && (
              <img src={form.cover_image} alt="Cover preview" className="mt-3 h-32 w-full object-cover rounded-xl" />
            )}
          </div>

          {/* Publish toggle + actions */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm flex items-center justify-between flex-wrap gap-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => setForm({ ...form, published: !form.published })}
                className={`w-11 h-6 rounded-full transition-colors relative ${form.published ? 'bg-green-500' : 'bg-slate-200'}`}
              >
                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${form.published ? 'left-6' : 'left-1'}`} />
              </div>
              <span className="text-sm font-medium text-slate-700">
                {form.published ? 'Published — visible on website' : 'Draft — hidden from website'}
              </span>
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setView('list')}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 text-sm"
              >
                {saving ? 'Saving...' : view === 'edit' ? 'Save Changes' : 'Create Post'}
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  // ── List view ──
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 font-headline">Posts</h1>
          <p className="text-slate-500 mt-1">
            {posts.filter((p) => p.published).length} published · {posts.filter((p) => !p.published).length} drafts
          </p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors"
        >
          <span className="material-symbols-outlined text-base">add</span>
          New Post
        </button>
      </div>

      {loading ? (
        <div className="p-8 text-center text-slate-400">Loading...</div>
      ) : posts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-16 text-center shadow-sm">
          <span className="material-symbols-outlined text-slate-300 text-5xl">article</span>
          <p className="text-slate-400 mt-3">No posts yet. Create your first post.</p>
          <button onClick={openNew} className="mt-4 text-blue-600 font-bold text-sm hover:underline">+ New Post</button>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
              {post.cover_image && (
                <img src={post.cover_image} alt="" className="w-20 h-16 object-cover rounded-xl flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${post.published ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                  <span className="text-xs text-slate-400">{new Date(post.updated_at).toLocaleDateString()}</span>
                </div>
                <h3 className="font-bold text-slate-900 truncate">{post.title}</h3>
                {post.excerpt && <p className="text-slate-500 text-sm mt-0.5 truncate">{post.excerpt}</p>}
                <p className="text-slate-400 text-xs mt-1">/{post.slug}</p>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={() => handleTogglePublish(post)}
                  title={post.published ? 'Unpublish' : 'Publish'}
                  className={`p-2 rounded-xl transition-colors ${post.published ? 'text-green-500 hover:bg-green-50' : 'text-slate-400 hover:bg-slate-50'}`}
                >
                  <span className="material-symbols-outlined text-base">{post.published ? 'visibility' : 'visibility_off'}</span>
                </button>
                <button
                  onClick={() => openEdit(post)}
                  className="p-2 rounded-xl text-blue-400 hover:bg-blue-50 transition-colors"
                  title="Edit"
                >
                  <span className="material-symbols-outlined text-base">edit</span>
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="p-2 rounded-xl text-red-400 hover:bg-red-50 transition-colors"
                  title="Delete"
                >
                  <span className="material-symbols-outlined text-base">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
