
import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    const type = formData.get('type') as string

    if (!file || !type) {
      return NextResponse.json({ error: 'Missing file or type' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    let fileName = ''
    if (type === 'avatar') {
      fileName = 'avatar.png'
    } else if (type === 'cv') {
      fileName = 'cv.pdf'
    } else {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    const uploadPath = path.join(process.cwd(), 'public', 'uploads', fileName)
    await writeFile(uploadPath, buffer)

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
