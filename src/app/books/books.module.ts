import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { BooksComponent } from "./books.component";
import { ShelveComponent } from './shelve/shelve.component';
import { BookComponent } from './book/book.component';
import { BookReservedDirective } from './book-reserved.directive';

@NgModule({
  imports: [CommonModule],
  exports: [BooksComponent],
  declarations: [BooksComponent, ShelveComponent, BookComponent, BookReservedDirective],
  providers: [],
})
export class BooksModule {}
