# Next.js + Hono Application


## プロジェクトを作成
```
npx create-next-app hono-next --typescript 
```

## Honoをインストール
```
npm install hono
```

## APIを作成
### 1. handerの作成
```
src/api/status/hander.ts
```
```
import { Context } from 'hono'
export class StatusHandler {
  static getStatus(c: Context) {
    return c.json({ message: "ok" });
  }
}
```

### 2. routersの作成

```
src/api/routers.ts
```
```
import { Hono } from 'hono'
import { StatusHandler, BooksHandler } from './handers'

export const routers = new Hono()
/**
 * [Status]
 */
// helth check
routers.get('/status', (c) => StatusHandler.getStatus(c))

/**
 * [Books]
 */
routers.get('/books', (c) => BooksHandler.getBooks(c))
routers.get('/books/:id', (c) => BooksHandler.getBookById(c))
```


```
src/app/api/[...route]/route.ts
```

```
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { routers } from '@/api/routers'

const app = new Hono().basePath('/api')

app.route('/', routers)


export const GET = handle(app)
export const POST = handle(app)
```