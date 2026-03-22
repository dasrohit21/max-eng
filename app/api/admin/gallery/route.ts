import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import { galleryImages as seedData } from '@/lib/data'

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS gallery (
      id SERIAL PRIMARY KEY,
      src TEXT UNIQUE NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `)
  // Seed from static data if table is empty
  const count = await pool.query('SELECT COUNT(*) FROM gallery')
  if (parseInt(count.rows[0].count) === 0) {
    for (const src of seedData) {
      await pool.query('INSERT INTO gallery (src) VALUES ($1) ON CONFLICT DO NOTHING', [src])
    }
  }
}

export async function GET() {
  try {
    await ensureTable()
    const result = await pool.query('SELECT * FROM gallery ORDER BY id ASC')
    return NextResponse.json({ images: result.rows })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to fetch gallery.' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await ensureTable()
    const { src } = await req.json()
    if (!src) return NextResponse.json({ error: 'Image path is required.' }, { status: 400 })
    const result = await pool.query(
      'INSERT INTO gallery (src) VALUES ($1) ON CONFLICT (src) DO NOTHING RETURNING *',
      [src]
    )
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Image already exists in gallery.' }, { status: 409 })
    }
    return NextResponse.json({ image: result.rows[0] }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to add image.' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json()
    await pool.query('DELETE FROM gallery WHERE id = $1', [id])
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to delete image.' }, { status: 500 })
  }
}
