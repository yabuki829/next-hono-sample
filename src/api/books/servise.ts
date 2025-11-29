import { BooksRepository } from './repository'

export class BooksService {
  static getBooks() {
    const books = BooksRepository.getBooks()
    return books
  }

  static getBookById(id: string) {
    const book = BooksRepository.getBookById(id)
    return book
  }
}