import bcrypt from 'bcrypt'

import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const [email, name, password] = body

    if (!email || !name || !password) {
      return new NextResponse('Missing info', { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await db.user.create({
      data: { email, name, hashedPassword },
    })

    return NextResponse.json(user)
  } catch (error: any) {
    return new NextResponse('Internal error', { status: 500 })
  }
}
