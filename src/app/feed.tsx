import Link from 'next/link'
import { use } from 'react'
import { Article } from '@/@types/article'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/feed')
  if (!res.ok) {
    throw new Error('Failed to fetch feed')
  }
  return res.json() as unknown as { feed: Article[] }
}

const Feed = () => {
  const { feed } = use(getData())

  return (
    <>
      {feed.map((article, idx) => (
        <div key={idx} className='feed-item'>
          <Link href={`/${article.id}`}>
            <h2>{article.title}</h2>
            <p>Read more</p>
          </Link>
        </div>
      ))}
    </>
  )
}

export default Feed
