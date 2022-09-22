import { Directive, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[ibsBookReserved]",
})
export class BookReservedDirective {
  @Input() reserved: boolean;

  @Input() htmlElement: HTMLElement;

  addBorder = () => {};

  constructor() {}

  ngOnInit(): void {
    if (this.reserved) {
      this.htmlElement.style.border = "2px solid #808080";
      this.htmlElement.style.background = "#000000";
      this.htmlElement.onmouseenter = () =>
        (this.htmlElement.style.background = "#133953");
      this.htmlElement.onmouseleave = () =>
        (this.htmlElement.style.background = "#000000");
    } else {
      this.htmlElement.style.border = "2px solid #000000";
    }
  }
}
