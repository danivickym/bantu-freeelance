import { NextResponse } from 'next/server'
import { signUp } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json()
    const result = await signUp(email, password, name)

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