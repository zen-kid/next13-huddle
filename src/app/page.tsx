import { Suspense } from 'react'
import Feed from './feed'

export default async function Home() {
  return (
    <>
      <h1>Next.js 13 going wild</h1>
      <Suspense
        fallback={<div className='loader'>Loading news and rumors...</div>}
      >
        <Feed />
      </Suspense>
    </>
  )
}
