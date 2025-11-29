import { Context } from 'hono'
import { BooksService } from './servise';
export class BooksHandler {
  static getBooks(c: Context) {
    const books = BooksService.getBooks()
    return c.json({ books })
  }
  static getBookById(c: Context) {
    const id = c.req.param('id')
    const book = BooksService.getBookById(id)
    return c.json({ book })
  }
}