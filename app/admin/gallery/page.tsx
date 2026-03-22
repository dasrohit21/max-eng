'use client'

import { useEffect, useRef, useState } from 'react'

interface GalleryImage {
  id: number
  src: string
}

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const load = () => {
    setLoading(true)
    fetch('/api/admin/gallery')
      .then((r) => r.json())
      .then((d) => { setImages(d.images ?? []); setLoading(false) })
      .catch(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const uploadFiles = async (files: FileList | File[]) => {
    setUploading(true)
    setUploadError('')
    const fileArray = Array.from(files)
    let failed = 0
    for (const file of fileArray) {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('folder', 'Gallery')
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      if (!res.ok) failed++
    }
    if (failed > 0) setUploadError(`${failed} file(s) failed to upload.`)
    setUploading(false)
    load()
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) uploadFiles(e.target.files)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    if (e.dataTransfer.files?.length) uploadFiles(e.dataTransfer.files)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Remove this image from the website gallery?')) return
    await fetch('/api/admin/gallery', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    load()
  }

  const filtered = images.filter((img) =>
    !search || img.src.toLowerCase().includes(search.toLowerCase())
  )

  const openLightbox = (img: GalleryImage, index: number) => {
    setLightbox(img)
    setLightboxIndex(index)
  }

  const prev = () => {
    const i = (lightboxIndex - 1 + filtered.length) % filtered.length
    setLightbox(filtered[i]); setLightboxIndex(i)
  }

  const next = () => {
    const i = (lightboxIndex + 1) % filtered.length
    setLightbox(filtered[i]); setLightboxIndex(i)
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 font-headline">Gallery</h1>
          <p className="text-slate-500 mt-1">{images.length} photos on website</p>
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          <span className="material-symbols-outlined text-base">upload</span>
          {uploading ? 'Uploading...' : 'Upload Photos'}
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" onChange={handleFileInput} />
      </div>

      {/* Drag & Drop Zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`mb-6 border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-colors ${
          dragOver ? 'border-blue-400 bg-blue-50' : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
        }`}
      >
        {uploading ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500 text-sm font-medium">Uploading images...</p>
          </div>
        ) : (
          <>
            <span className="material-symbols-outlined text-slate-300 text-4xl">add_photo_alternate</span>
            <p className="text-slate-500 text-sm mt-2 font-medium">Drag & drop photos here, or click to select</p>
            <p className="text-slate-400 text-xs mt-1">JPG, PNG, WEBP, GIF · Multiple files supported</p>
          </>
        )}
      </div>

      {uploadError && (
        <p className="text-red-600 text-sm mb-4 bg-red-50 px-4 py-3 rounded-xl">{uploadError}</p>
      )}

      {/* Search */}
      <div className="mb-6 flex items-center gap-3">
        <input
          type="text"
          placeholder="Search by filename..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {search && <span className="text-slate-500 text-sm">{filtered.length} results</span>}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="p-8 text-center text-slate-400">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {filtered.map((img, i) => (
            <div key={img.id} className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100">
              <img
                src={img.src}
                alt={img.src.split('/').pop()}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                loading="lazy"
                onClick={() => openLightbox(img, i)}
              />
              <button
                onClick={() => handleDelete(img.id)}
                className="absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-lg hover:bg-red-600"
                title="Remove from website"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
              <div
                className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => openLightbox(img, i)}
              >
                <p className="text-white text-[10px] truncate">{img.src.split('/').pop()}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && filtered.length === 0 && (
        <div className="text-center text-slate-400 py-16">
          {search ? 'No images match your search.' : 'No images in gallery.'}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white z-10" onClick={() => setLightbox(null)}>
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <button className="absolute left-4 text-white/70 hover:text-white z-10 p-2" onClick={(e) => { e.stopPropagation(); prev() }}>
            <span className="material-symbols-outlined text-4xl">chevron_left</span>
          </button>
          <div className="flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt="Enlarged" className="max-h-[80vh] max-w-[85vw] object-contain rounded-xl shadow-2xl" />
            <div className="flex items-center gap-4">
              <p className="text-white/50 text-xs">{lightbox.src.split('/').pop()}</p>
              <button
                onClick={() => { handleDelete(lightbox.id); setLightbox(null) }}
                className="flex items-center gap-1 text-red-400 hover:text-red-300 text-xs font-bold transition-colors"
              >
                <span className="material-symbols-outlined text-sm">delete</span>
                Remove from website
              </button>
            </div>
          </div>
          <button className="absolute right-4 text-white/70 hover:text-white z-10 p-2" onClick={(e) => { e.stopPropagation(); next() }}>
            <span className="material-symbols-outlined text-4xl">chevron_right</span>
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </div>
  )
}
