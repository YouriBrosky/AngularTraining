import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksModule } from "./books/books.module";

@NgModule({
  imports: [BrowserModule, BooksModule, HttpClientModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}
