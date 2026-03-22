import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

// Create table on first request if it doesn't exist
async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      subject VARCHAR(500),
      message TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `)
}

export async function POST(req: NextRequest) {
  try {
    const { fullName, phone, subject, message } = await req.json()

    if (!fullName || !message) {
      return NextResponse.json(
        { error: 'Full name and message are required.' },
        { status: 400 }
      )
    }

    await ensureTable()

    const result = await pool.query(
      `INSERT INTO inquiries (full_name, phone, subject, message)
       VALUES ($1, $2, $3, $4)
       RETURNING id, created_at`,
      [fullName, phone || null, subject || null, message]
    )

    return NextResponse.json(
      { success: true, id: result.rows[0].id },
      { status: 201 }
    )
  } catch (err) {
    console.error('DB error:', err)
    return NextResponse.json(
      { error: 'Failed to submit inquiry. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await ensureTable()
    const result = await pool.query(
      'SELECT * FROM inquiries ORDER BY created_at DESC'
    )
    return NextResponse.json({ inquiries: result.rows })
  } catch (err) {
    console.error('DB error:', err)
    return NextResponse.json({ error: 'Failed to fetch inquiries.' }, { status: 500 })
  }
}
