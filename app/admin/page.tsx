
'use client'

import { useState } from 'react'

export default function AdminPage() {
  const [status, setStatus] = useState('')

  const handleUpload = async (e: any, type: string) => {
    const file = e.target.files[0]
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)
    formData.append('type', type)

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    if (res.ok) {
      setStatus(`${type} uploaded successfully`)
    } else {
      setStatus(`Upload failed`)
    }
  }

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-2xl font-bold">Admin Upload</h1>

      <div>
        <label className="block mb-2">Upload Avatar</label>
        <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'avatar')} />
      </div>

      <div>
        <label className="block mb-2">Upload CV (PDF)</label>
        <input type="file" accept="application/pdf" onChange={(e) => handleUpload(e, 'cv')} />
      </div>

      {status && <p className="mt-4">{status}</p>}
    </div>
  )
}
