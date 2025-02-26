import { NextResponse } from 'next/server'
import { signIn } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    const result = await signIn(email, password)

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 400 })
    }

    return NextResponse.json({ user: result.user })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}