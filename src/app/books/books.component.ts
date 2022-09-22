import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BooksService } from "./books.service";
import { Book } from "./models/book.interface";

@Component({
  selector: "ibs-books-component",
  templateUrl: "books.component.html",
})
export class BooksComponent implements OnInit {
  books: Observable<Book[]>;
  selectedBook: Book;

  selectBook = (book: Book) => {
    this.selectedBook = book;
  };

  deselectBook = () => {
    this.selectedBook = null;
  };

  constructor(private bookService: BooksService) {}

  // ngOnInit() {
  //   this.bookService.getBooks().subscribe((result: Book[]) => {
  //     this.books = result;
  //   });
  // }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
}
