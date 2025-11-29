# Next.js + Hono Application


## プロジェクトを作成
```
npx create-next-app hono-next --typescript 
```

## Honoをインストール
```
npm install hono
```

## route.tsを作成
```
src/app/api/[...route]/route.ts
```

```
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

// Next.js に最適化されたランタイムを利用
export const runtime = 'edge'

const app = new Hono()

// ルート例
app.get('/', (c) => {
  return c.json({ message: 'Hello from Hono + Next.js API Route!' })
})

// パラメータ例
app.get('/hello/:name', (c) => {
  const name = c.req.param('name')
  return c.json({ message: `Hello, ${name}!` })
})

// POST例
app.post('/echo', async (c) => {
  const body = await c.req.json()
  return c.json({ youSent: body })
})

// ルーティングを Next.js にブリッジ
export const GET = handle(app)
export const POST = handle(app)

```