import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { routers } from '@/api/routers'

const app = new Hono().basePath('/api')

app.route('/', routers)


export const GET = handle(app)
export const POST = handle(app)
