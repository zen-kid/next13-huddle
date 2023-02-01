import type { NextApiRequest, NextApiResponse } from 'next'
import { feed } from '@/common/feed-data'
import { Article } from '@/@types/article'

type Data = {
  feed: Article[]
}

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await new Promise<void>((resolve) =>
    setTimeout(() => {
      res.status(200).json({ feed })
      resolve()
    }, 2000 + Math.random() * 500)
  )
}
