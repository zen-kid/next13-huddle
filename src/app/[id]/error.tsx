'use client'
import Image from 'next/image'
import { relative } from 'path'

export default function Error() {
  return (
    <div className='error'>
      <div
        style={{
          width: 240,
          height: 240,
          margin: 'auto',
          position: 'relative',
        }}
      >
        <Image src='/sleeping-server.gif' alt='Sleeping server' fill={true} />
      </div>
      <p>Yikes. Server felt asleep.</p>
    </div>
  )
}
