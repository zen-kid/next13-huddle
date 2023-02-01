import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

interface ArticleProps {
  params: { id: string }
}

export default async function Article({ params: { id = '1' } }: ArticleProps) {
  const {
    article: { title, content },
  } = await getData(id)

  return (
    <>
      <article>
        <ReactMarkdown>{`# ${title}\n${content}`}</ReactMarkdown>
      </article>
    </>
  )
}
