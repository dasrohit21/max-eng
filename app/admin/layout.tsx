'use client'

import { SessionProvider, useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: 'dashboard' },
  { href: '/admin/posts', label: 'Posts', icon: 'article' },
  { href: '/admin/projects', label: 'Projects', icon: 'engineering' },
  { href: '/admin/gallery', label: 'Gallery', icon: 'photo_library' },
  { href: '/admin/contacts', label: 'Contacts', icon: 'mail' },
]

function AdminNav() {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-black font-headline">Max Engineering</h1>
        <p className="text-slate-400 text-sm mt-1">Admin Panel</p>
      </div>

      <nav className="flex-1 p-4 flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
              pathname === item.href
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-xl">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold">
            {session?.user?.name?.[0] ?? 'A'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{session?.user?.name}</p>
            <p className="text-xs text-slate-400 truncate">{session?.user?.email}</p>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="w-full flex items-center gap-2 px-4 py-2 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all text-sm"
        >
          <span className="material-symbols-outlined text-base">logout</span>
          Sign out
        </button>
      </div>
    </aside>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="flex min-h-screen bg-slate-50">
        <AdminNav />
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    </SessionProvider>
  )
}
