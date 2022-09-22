import { Injectable } from "@angular/core";
import { Book } from "./models/book.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

let mockBooks: Book[] = [
  {
    id: 100001,
    title: "Application Design",
    author: "O'Rly?",
    genre: "programming",
    img: "assets/app-head.jpg",
    price: 14.95,
    reserved: false,
  },
  {
    id: 100002,
    title: "Remote Programming",
    author: "O'Rly?",
    genre: "misc",
    img: "assets/coding.jpg",
    price: 25.95,
    reserved: true,
  },
  {
    id: 100003,
    title: "Deadline programming",
    author: "O'Rly?",
    genre: "motivation",
    img: "assets/coffee-code.jpg",
    price: 14.95,
    reserved: false,
  },
];

@Injectable({ providedIn: "root" })
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks = (): Observable<Book[]> => {
    return this.http.get<Book[]>("http://localhost:3004/overview");
  };
}
