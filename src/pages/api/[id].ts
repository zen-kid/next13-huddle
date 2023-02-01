import type { NextApiRequest, NextApiResponse } from 'next'
import { feed } from '@/common/feed-data'
import { Article } from '@/@types/article'

type Data = {
  article: Article
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | null>
) {
  await new Promise<void>((resolve) =>
    setTimeout(() => {
      const article = feed.find(({ id }) => id === req.query.id)
      if (article) {
        res.status(200).json({ article })
      } else {
        res.status(404).json(null)
      }
      resolve()
    }, 1000 + Math.random() * 500)
  )
}
