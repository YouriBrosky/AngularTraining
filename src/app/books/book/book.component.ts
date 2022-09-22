import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Book } from "../models/book.interface";

@Component({
  selector: "ibs-book-component",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  @Output() deselect = new EventEmitter<void>();


  constructor() {}

  ngOnInit(): void {}
}
