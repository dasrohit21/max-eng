import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File | null
    const folder = (formData.get('folder') as string) ?? 'Gallery'

    if (!file) return NextResponse.json({ error: 'No file provided.' }, { status: 400 })

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Only JPG, PNG, WEBP, GIF images are allowed.' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uploadDir = join(process.cwd(), 'public', folder)
    await mkdir(uploadDir, { recursive: true })

    // Unique filename to avoid collisions
    const ext = file.name.split('.').pop()
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`
    const filePath = join(uploadDir, filename)
    await writeFile(filePath, buffer)

    const src = `/${folder}/${filename}`

    // If uploading to Gallery, also register in DB
    if (folder === 'Gallery') {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS gallery (
          id SERIAL PRIMARY KEY,
          src TEXT UNIQUE NOT NULL,
          created_at TIMESTAMPTZ DEFAULT NOW()
        )
      `)
      await pool.query('INSERT INTO gallery (src) VALUES ($1) ON CONFLICT DO NOTHING', [src])
    }

    return NextResponse.json({ src }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Upload failed.' }, { status: 500 })
  }
}
