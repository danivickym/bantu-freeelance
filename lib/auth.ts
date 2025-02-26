import { PrismaClient } from '@prisma/client'
import { compare, hash } from 'bcryptjs'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function signUp(email: string, password: string, name: string) {
  const hashedPassword = await hash(password, 10)
  
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })
    
    return { user }
  } catch (error) {
    return { error: 'Email already exists' }
  }
}

export async function signIn(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    return { error: 'User not found' }
  }

  const isValid = await compare(password, user.password)
  
  if (!isValid) {
    return { error: 'Invalid password' }
  }

  // Create JWT token
  const token = await new SignJWT({ userId: user.id })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(new TextEncoder().encode(JWT_SECRET))

  // Set cookie
  cookies().set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 86400 // 24 hours
  })

  return { user }
}

export async function signOut() {
  cookies().delete('auth-token')
}

export async function getUser() {
  const token = cookies().get('auth-token')

  if (!token) {
    return null
  }

  try {
    const verified = await jwtVerify(
      token.value,
      new TextEncoder().encode(JWT_SECRET)
    )

    const user = await prisma.user.findUnique({
      where: { id: verified.payload.userId as string },
    })

    return user
  } catch {
    return null
  }
}