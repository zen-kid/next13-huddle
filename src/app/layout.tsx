import '@/common/globals.css'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <header>
          <Link href='/'>Home</Link> | I am a 100% server-component header
          <hr />
        </header>
        <main>{children}</main>
        <footer>
          <hr />
          I am a 100% server-component footer
          <br />
          Sources:{' '}
          <Link href='https://nextjs.org/blog/next-13'>Next.js Blog</Link>
        </footer>
      </body>
    </html>
  )
}
