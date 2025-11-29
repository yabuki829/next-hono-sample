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