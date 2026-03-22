import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

function toSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

async function ensureTable() {
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
}

export async function GET() {
  try {
    await ensureTable()
    const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC')
    return NextResponse.json({ posts: result.rows })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to fetch posts.' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await ensureTable()
    const { title, content, excerpt, cover_image, published } = await req.json()
    if (!title) return NextResponse.json({ error: 'Title is required.' }, { status: 400 })

    const baseSlug = toSlug(title)
    // ensure unique slug
    const existing = await pool.query('SELECT slug FROM posts WHERE slug LIKE $1', [`${baseSlug}%`])
    const slug = existing.rows.length === 0 ? baseSlug : `${baseSlug}-${existing.rows.length + 1}`

    const result = await pool.query(
      `INSERT INTO posts (title, slug, content, excerpt, cover_image, published)
       VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [title, slug, content ?? '', excerpt ?? '', cover_image ?? '', published ?? false]
    )
    return NextResponse.json({ post: result.rows[0] }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to create post.' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    await ensureTable()
    const { id, title, content, excerpt, cover_image, published } = await req.json()
    if (!id) return NextResponse.json({ error: 'ID is required.' }, { status: 400 })

    const result = await pool.query(
      `UPDATE posts SET title=$1, content=$2, excerpt=$3, cover_image=$4, published=$5, updated_at=NOW()
       WHERE id=$6 RETURNING *`,
      [title, content ?? '', excerpt ?? '', cover_image ?? '', published ?? false, id]
    )
    return NextResponse.json({ post: result.rows[0] })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to update post.' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json()
    await pool.query('DELETE FROM posts WHERE id = $1', [id])
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to delete post.' }, { status: 500 })
  }
}
