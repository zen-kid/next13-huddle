export const feed = [
  {
    id: 'react-server-components',
    title:
      'React Server Components: The Future of Server-Side Rendering in React',
    content: `

> The following content was written by ChatGPT 🤷‍♂️ using prompt:
> "Write an article about React Server components aimed at skilled developers. And please, don't use buzzwords."

React Server Components is a new feature in React that enables developers 
to write server-side components with the same syntax as client-side 
components. 

This feature provides the benefits of server-side rendering (SSR) while 
maintaining the simplicity and performance of client-side rendering.

- **Improved performance** React Server Components are designed to be fast and efficient, utilizing the same reconciliation algorithm as client-side React components. This allows for fast server-side rendering, providing a better user experience for the end-user.
- **Reduced time to first paint** React Server Components enable developers to deliver the first paint of a page to the user faster than traditional SSR methods. This is achieved by rendering the component on the server, and then re-using the same component on the client, reducing the time it takes to fetch and render the component.
- **Better SEO** With traditional SSR, search engines may struggle to index dynamic content generated by the server. React Server Components provide a solution to this problem, as they can be pre-rendered on the server and delivered to the client, providing a fully-rendered HTML document that is easily indexed by search engines.

In conclusion, React Server Components offer a powerful and efficient solution for server-side rendering in React, providing benefits such as improved performance, better SEO, and reduced time to first paint. This feature is a game-changer for React developers, enabling them to create high-performing, SEO-friendly, and fast-loading web applications.

> 🧐 "Not bad, ChatGPT. We will have to dig deeper..."

## What is CSR aka client-side rendering?
CSR is used for client-side apps that run soleyly in the user's browser.
Most React projects do this.

1. Server serves bundled assets, often gzipped to save bandwidth (i.e. 100ms TTFB)
2. Browser downloads assets and parses scripts (i.e. 800ms OnLoad-Event)
3. React starts and builds a *Shadow DOM* with current state (i.e. 200ms)
4. Browser renders DOM and starts app (TTI 600ms)

Overall this scenario takes ~1,5+ secs to be interactive.


### Advantages
- Can easily be served via CDN worldwide
- No real frontend servers needed as the workload happens in users' browsers
- Easy to implement
- Cheap

### Disadvantages
- Maybe insecure or complex securing API access
- Slow, bad time to interactive
- Bad for conversion and user experience
- Worst-case for SEO


## What is SSG aka server-side generation?
SSG renders static content at build time. It is widely used i.e.
for Online-Shops/ Blogs with hundreds or thousands of products with static 
content.

1. Server serves all-ready assets, mostly HTML, CSS, minor JS (TTFB 100ms)
2. Browser downloads assets and parses scripts (i.e. 100ms OnLoad-Event)
3. Browser renders HTML and CSS (TTFP and OnLoad-Event 50ms)
4. React starts and performs hydration (200ms) 
5. Browser rerenders DOM and starts app (TTI 600ms)

Overall this scenario takes ~1 secs to be interactive.

### Advantages
- Can easily be served via CDN worldwide
- Extremely fast
- SEO pleasing
- It is possible to pollute the non SEO-relevant below-the-fold sections dynamically/ lazy-load

### Disadvantages
- Slow build times especially if you have thousands of pages
- Content is only generated at build time
- Updating i.e. prices requires a new deployment
- Dynamically loaded content may not hit SEO

You can consider SSG a static website with some dynamic benefits.

## What is ISR aka Incremental Static Regeneration?
ISR renders static content at build-time like SSR but with the benefits of a
\`revalidate\` directive causing it to rebuild after a certain amount of
time. This widely used for i.e. Online Shops with thousands of products and 
often changing pricings (i.e. Amazon does exactly this).

1. Server builds all-ready assets, mostly HTML, CSS, minor JS (TTFB 500ms) on first visit
2. Browser downloads assets and parses scripts (i.e. 100ms OnLoad-Event)
3. Browser renders HTML and CSS (TTFP and OnLoad-Event 50ms)
4. React starts and performs hydration (200ms) 
5. Browser rerenders DOM and starts app (TTI 600ms)
  - [ if within i.e. 60s another user hits that page it get's served from the CDN ]
  - [ if i.e. after 60s another user hits that page it get's regenerated updated prices)

Overall this scenario takes less than 1 sec to be interactive.

### Advantages
- Extremely fast on highly frequented websites with thousands of pages and only minor frequent changes
- SEO pleasing

### Disadvantages
- Slow build times especially if you have thousands of pages (this can be delayed to first access - which may harm UX)
- Every new deployment/ invalidate/ regenerate user session will likely to have a worser conversion rate due to worser TTI
- Needs a "real" server - but still a $5 instance will do the job for thousands of pages

## What is SSR aka Server-Side Rendering?
SSR renders everything on-demand on the server - which in most cases is faster
than the users' browser.

1. Server builds all-ready assets, mostly HTML, CSS, minor JS (TTFB 100ms) on first visit
2. Browser downloads assets and parses scripts (i.e. 100ms OnLoad-Event)
3. Browser renders HTML and CSS (TTFP and OnLoad-Event 50ms)

Overall this scenario takes less than 250msecs to be interactive.

### Advantages
- Extremely fast for suspect users (top-funnel)
- High conversion rate because of ad-hoc personalisation
- SEO pleasing
- Highly scalable world-wide and cost-effective when launched on Edge-Instances on Vercel/ AWS
- Servers and caches are **always** faster than users' bandwidth

### Disadvantages
- TTFP relays on dynamic data
- Can be more costly than a CDN approach depending on usage

## Finally what are those Server Components (everyone brags about)?
Basically Server Components are server-side rendered - but on a hybrid component level.

1. Build system decides which components can be served as static HTML and combines SSR, SSG, ISG and CSR techniques
2. Server builds chunks of assets, component-wise
3. Browser downloads assets and parses scripts (i.e. 100ms OnLoad-Event)
4. Browser renders HTML and CSS (TTFP, TTI and OnLoad-Event 50ms)
5. Browser streams dynamic components in paralell while already being interactive

This scenario takes about 150msecs to be interactive.

### Advantages
- Extremely fast
- High conversion rate because of ad-hoc personalisation and nearly instant TTI
- SEO pleasing because of streaming components
- Highly scalable world-wide and cost-effective when launched on Edge-Instances on Vercel/ AWS
- Cheaper than SSR

### Disadvantages
- Not easy to understand
- Still in beta
- Buggy
  `,
  },
  {
    id: 'the-app-folder',
    title: 'The app folder (beta)',
    content: `
Alongside React Server Components Next.js introduced the app
folder as future replacement for the pages directory.

This structure reduces boilerplate, is easy to understand and ships less code
to the client.


## Features
- **React Server Components** Every component is now a server component by default
- **Nested layouts** Share and derive layouts by route while preserving state and avoiding rerenders
- **Streaming** Instant loading states and stream in units of components
- **Fetching data** Support for async components and node-18 native fetch plus caching like in TanStack/ React Query
- **Partial Rendering** Routing between sibling pages does not rerender parent route

## React Server Component
No more \`getServerSideProps\` or \`useEffect\`.

\`\`\`
export default async function ServerComponent() {
  const data = await getDataFromApi()

  return (
    <>
      Data from API: {data}
    </>
  )
}
\`\`\`


## Nested layouts
![](https://assets.vercel.com/image/upload/f_auto,q_100,w_1600/v1671641894/nextjs-docs/darkmode/nested-layouts.png)

## Streaming
Controlling loading states can be handled with special file \`loading.ts\` or with React Suspense. Next.js then uses selective hydration and decides which components get hydrated first.

![](https://assets.vercel.com/image/upload/f_auto,q_100,w_1600/v1666631081/nextjs-docs/darkmode/server-rendering-with-streaming.png)

\`\`\`
<Suspense fallback={<p>Loading feed...</p>}>
  <Feed />
</Suspense>
\`\`\`


## Fetching data
- Looks like before but improved under the hood
- Fetch with Native Node 18 \`fetch\` plus caching enhancements like in TanStack/ React Query
- Deduping/ caching of fetches especially when streaming

\`\`\`
fetch(URL, { next: { revalidate: 10 } });
\`\`\`


## Partial rendering
Routing between sibling pages does not rerender parent route.

![](https://assets.vercel.com/image/upload/f_auto,q_100,w_1600/v1671641891/nextjs-docs/darkmode/partial-rendering.png)
    `,
  },

  {
    id: 'the-edge-runtime',
    title: 'The Edge runtime (experimental)',
    content: `
Next.js allows page- and api-routes to be run on different runtimes:
- Node
- Serverless
- Edge Runtime (currently limited to pages)

Depending of the deployment infrastructure and environment Next.js decides 
whether to choose Node or Serverless runtimes.
If deployed to Vercel/ AWS one can opt-in to the Edge Runtime.

## Running on Node
- Costly - pay for uptime
- Not easily scalable
- Average performance
- Traffic spikes can bring service down

## Running on Serverless
- Cheap - pay for usage
- Highly scalable
- Average performance as it is still just Node
- Latency
- Costly cold starts of several hundreds of msecs

## Running on Edge
- Cheap - pay for usage
- Globally highly scalable
- Peak performance running on Chrome's V8
- Instant cold-starts
- Low latency
- Limited in size (4M)
    `,
  },

  {
    id: 'turbopack',
    title: 'TurboPack (alpha)',
    content: `
    
Guess what: Tobias Koppers, the creator of WebPack now works at Vercel.

TurboPack is the successor to WebPack, written in Rust, up to 700 times
faster that WebPack.

- 700x faster updates than Webpack
- 10x faster updates than Vite with SWC
- 4x faster cold starts than Webpack/ SWC

Turbopack has out-of-the-box support for Server Components, TypeScript, JSX, 
CSS, Jest and more. No more babel.

    `,
  },
]
