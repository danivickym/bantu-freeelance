import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'

export async function GET() {
  try {
    const user = await getUser()
    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}