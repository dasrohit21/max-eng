'use client'

import { useEffect, useState } from 'react'

interface Inquiry {
  id: number
  full_name: string
  phone: string
  subject: string
  message: string
  created_at: string
}

export default function ContactsPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/contact')
      .then((r) => r.json())
      .then((data) => {
        setInquiries(data.inquiries ?? [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const filtered = inquiries.filter(
    (i) =>
      i.full_name.toLowerCase().includes(search.toLowerCase()) ||
      i.phone?.includes(search) ||
      i.subject?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 font-headline">Contacts</h1>
          <p className="text-slate-500 mt-1">{inquiries.length} total inquiries</p>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-slate-400">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="p-8 text-center text-slate-400">No inquiries found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-slate-600">Name</th>
                <th className="text-left px-6 py-4 font-semibold text-slate-600">Phone</th>
                <th className="text-left px-6 py-4 font-semibold text-slate-600">Subject</th>
                <th className="text-left px-6 py-4 font-semibold text-slate-600">Message</th>
                <th className="text-left px-6 py-4 font-semibold text-slate-600">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{inquiry.full_name}</td>
                  <td className="px-6 py-4 text-slate-600">{inquiry.phone || '—'}</td>
                  <td className="px-6 py-4 text-slate-600">{inquiry.subject || '—'}</td>
                  <td className="px-6 py-4 text-slate-500 max-w-xs">
                    <p className="line-clamp-2">{inquiry.message}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-400 whitespace-nowrap">
                    {new Date(inquiry.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
