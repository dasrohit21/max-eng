'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Inquiry {
  id: number
  full_name: string
  phone: string
  subject: string
  message: string
  created_at: string
}

interface Stats {
  contacts: number
  projects: number
  gallery: number
  posts: number
  publishedPosts: number
}

function StatCard({ label, value, icon, href, color = 'blue' }: {
  label: string; value: number | string; icon: string; href?: string; color?: string
}) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    amber: 'bg-amber-50 text-amber-600',
    purple: 'bg-purple-50 text-purple-600',
    slate: 'bg-slate-50 text-slate-600',
  }
  const card = (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorMap[color]}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="text-3xl font-black text-slate-900">{value}</p>
        <p className="text-slate-500 text-sm">{label}</p>
      </div>
    </div>
  )
  return href ? <Link href={href}>{card}</Link> : card
}

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [stats, setStats] = useState<Stats>({ contacts: 0, projects: 0, gallery: 0, posts: 0, publishedPosts: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/api/contact').then((r) => r.json()),
      fetch('/api/admin/projects').then((r) => r.json()),
      fetch('/api/admin/gallery').then((r) => r.json()),
      fetch('/api/admin/posts').then((r) => r.json()),
    ])
      .then(([contacts, projects, gallery, posts]) => {
        const inquiryList = contacts.inquiries ?? []
        setInquiries(inquiryList)
        setStats({
          contacts: inquiryList.length,
          projects: (projects.projects ?? []).length,
          gallery: (gallery.images ?? []).length,
          posts: (posts.posts ?? []).length,
          publishedPosts: (posts.posts ?? []).filter((p: { published: boolean }) => p.published).length,
        })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const recent = inquiries.slice(0, 5)
  const thisMonth = inquiries.filter((i) => new Date(i.created_at).getMonth() === new Date().getMonth()).length
  const today = inquiries.filter((i) => new Date(i.created_at).toDateString() === new Date().toDateString()).length

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 font-headline">Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back — here&apos;s an overview</p>
      </div>

      {/* Content Stats */}
      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Website Content</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <StatCard label="Posts" value={`${stats.publishedPosts} / ${stats.posts}`} icon="article" href="/admin/posts" color="purple" />
        <StatCard label="Projects" value={stats.projects} icon="engineering" href="/admin/projects" color="blue" />
        <StatCard label="Gallery Photos" value={stats.gallery} icon="photo_library" href="/admin/gallery" color="amber" />
        <StatCard label="Total Inquiries" value={stats.contacts} icon="mail" href="/admin/contacts" color="green" />
      </div>

      {/* Inquiry Stats */}
      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Inquiries</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard label="Total" value={stats.contacts} icon="inbox" color="slate" />
        <StatCard label="This Month" value={thisMonth} icon="calendar_month" color="slate" />
        <StatCard label="Today" value={today} icon="today" color="slate" />
      </div>

      {/* Recent Inquiries */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Recent Inquiries</h2>
          <Link href="/admin/contacts" className="text-blue-600 text-sm font-medium hover:underline">View all</Link>
        </div>
        {loading ? (
          <div className="p-8 text-center text-slate-400">Loading...</div>
        ) : recent.length === 0 ? (
          <div className="p-8 text-center text-slate-400">No inquiries yet.</div>
        ) : (
          <div className="divide-y divide-slate-100">
            {recent.map((inquiry) => (
              <div key={inquiry.id} className="p-5 hover:bg-slate-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-900">{inquiry.full_name}</p>
                    <p className="text-slate-500 text-sm">{inquiry.phone}</p>
                    {inquiry.subject && <p className="text-slate-600 text-sm mt-1 font-medium">{inquiry.subject}</p>}
                    <p className="text-slate-500 text-sm mt-1 line-clamp-2">{inquiry.message}</p>
                  </div>
                  <p className="text-xs text-slate-400 whitespace-nowrap">{new Date(inquiry.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
