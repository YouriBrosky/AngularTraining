import {browser, by, element} from "protractor";

export class BookPage {

  navigateTo() {
    browser.get("/");
  }

  getBooksFromShelve() {
    return element.all(by.css("button"));
  }

}
