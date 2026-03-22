import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import { projects as seedData } from '@/lib/data'

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS projects (
      id SERIAL PRIMARY KEY,
      client VARCHAR(500) NOT NULL,
      location VARCHAR(255),
      category VARCHAR(100),
      work TEXT,
      detail TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `)
  const count = await pool.query('SELECT COUNT(*) FROM projects')
  if (parseInt(count.rows[0].count) === 0) {
    for (const p of seedData) {
      await pool.query(
        'INSERT INTO projects (client, location, category, work, detail) VALUES ($1,$2,$3,$4,$5)',
        [p.client, p.location, p.category, p.work, p.detail]
      )
    }
  }
}

export async function GET() {
  try {
    await ensureTable()
    const result = await pool.query('SELECT * FROM projects ORDER BY id ASC')
    return NextResponse.json({ projects: result.rows })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to fetch projects.' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await ensureTable()
    const { client, location, category, work, detail } = await req.json()
    if (!client) return NextResponse.json({ error: 'Client name is required.' }, { status: 400 })
    const result = await pool.query(
      'INSERT INTO projects (client, location, category, work, detail) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [client, location ?? '', category ?? 'Instrumentation', work ?? '', detail ?? '']
    )
    return NextResponse.json({ project: result.rows[0] }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to create project.' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    await ensureTable()
    const { id, client, location, category, work, detail } = await req.json()
    if (!id) return NextResponse.json({ error: 'ID is required.' }, { status: 400 })
    const result = await pool.query(
      `UPDATE projects SET client=$1, location=$2, category=$3, work=$4, detail=$5, updated_at=NOW()
       WHERE id=$6 RETURNING *`,
      [client, location ?? '', category ?? 'Instrumentation', work ?? '', detail ?? '', id]
    )
    return NextResponse.json({ project: result.rows[0] })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to update project.' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json()
    await pool.query('DELETE FROM projects WHERE id = $1', [id])
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to delete project.' }, { status: 500 })
  }
}
