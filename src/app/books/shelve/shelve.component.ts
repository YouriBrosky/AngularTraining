import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Book } from "../models/book.interface";

@Component({
  selector: "ibs-shelve-component",
  templateUrl: "./shelve.component.html",
  styleUrls: ["./shelve.component.css"],
})
export class ShelveComponent implements OnInit {
  @Input() books: Book[];

  @Output() select = new EventEmitter<Book>();

  onSelect(book: Book) {
    this.select.emit(book);
  }

  constructor() {}

  ngOnInit(): void {}
}
