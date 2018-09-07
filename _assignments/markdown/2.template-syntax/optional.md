## Optional

### [ngIf;else](https://medium.com/aviabird/ngif-else-lands-in-angular-2-0-a242940e54ff)

1. Show a message for the user when there is not yet a book selected.

### Deselect
Add the feature to deselect a selected book. Where do you handle the user interaction and where the deselection of the current book? 
Keep the responsibilities of `Business Components` and `Presentation components` in mind while adding this feature.

You can use the following template to show a cross.
```html
<p class="right deselect">X</p>
```

## @Directive
When you need to add functionality or styling to a Component or an HTML-element, but do not need to add anything to the DOM, a Directive is what you need.
Directives are TypeScript classes annotated with `@Directive` instead of `@Component`, and do not have a template.

In this assignment were are going to make a directive that adds a border around books that have been reserverd.
This directive is going to be used in the `Shelve` and in the `Book` component. 
The border is going around the books in the shelve, and around the title in the book detail.

1. Generate a directive called `BookReserved` using the Angular CLI.
```
// if you have the CLI installed globally:
ng g d books/book-reserved

// otherwise, you can run it locally:
npx ng g d books/book-reserved
```
or follow the steps below
1. Create a new file called `book-reserved.directive.ts` in the `books` folder.
2. Export a class called `BookReservedDirective` and decorate it with the `@Directive` annotation.
3. The `@Directive` decorator requires the property `selector`, which is how we reference it in the template. Give it a value that complies with the [StyleGuide](https://angular.io/guide/styleguide)
4. Declare the directive with the `BooksModule` so we can use the directive in the template of the components declared in this module.

The `BookReservedDirective` needs an input to know what book is reserved, and based on the value of that input it should add a border to the element.

1. Add a property called `reserved` and decorate it with the `@Input()` decorator.
2. Implement the `OnInit` interface from `@angular/core` and add the required method.
3. Create a method that will add the border, something like `addBorder` and call it from ngOnInit.
 Always try and keep the lifecycle methods clean from any logic.
4. Use the property binding `[]`-syntax to set the `reserved` property from the template of `ShelveComponent`. 

To interact with the DOM from a Directive, we need a reference to the HTML-element to toggle the class. 
Angular provides the `template reference variable` mechanism for this, that you use by adding `#variableName` in the template to the element.
Remember the `ngIf/else`, where we put a `template reference variable` on the element we want to show in the else-case.

We can use the `template reference variable` to pass in the HtmlElement into our directive using another `@Input` decorated property.

1. Add a new `@Input` decorated property to `BookReservedDirective` that will hold the HTML element. the type is HTMLElement.
2. In the template of `ShelveComponent`, add a `template reference variable` to the `button`-element.
3. Pass the `template reference variable` into `BookReservedDirective` using the `[]`-syntax.

To finish this task, we need to add the border to the element. The `HTMLElement` that we get from the `template reference variable` has an API to do this.
We'll use the property `style.border` to set the border, by assigning a CSS value to it.
The example below will add a 2 pixel wide, solid blue border to the element:
```
element.style.border = '2px solid #0000FF'
```
1. Add a border to the element based on the value of the `reserved` property.

### Reusing the `BookReserved` directive.
We can reuse the `BookReserved` directive on the book detail to add an extra visual cue to show that the book is reserved.

1. Add the `BookReserved` directive to the template of `BooksComponent`. 
  Make sure you put the directive on an `HTMLElement`, and not on a `Component`. 
  This means we might need to make some changes to the HTML structure.

What happens when we click a reserved book first and then a different book?
Why isn't the UI updated with the new value?
This is because we only set the border during the `OnInit` lifecycle phase, which is called only once. 
To have the directive respond new values being passed in, we need to implement the `OnChanges` lifecycle.

2. Implement the `OnChanges` interface, and add the required method.
3. Move method call that adds the border from `OnInit` to `OnChanges`. 
In the lifecycle hook `ngOnChanges`, all the properties decorated with `@Input()` are updated with the new value.

### Refactoring the `BookReserved` directive.
We have created an `@Input` called reserved to pass in the property from the book to the directive.
It's possible to combine one `@Input` with the directive itself:
```html
<!-- before -->
<button
 ibsBookReserved [reserved]="book.reserved" [element]="el" #el>
</button>
 
<!-- after -->
<button
 [ibsBookReserved]="book.reserved" [element]="el" #el>
</button>
```
1. Rename the `@Input() reserved` to the name of the directive.
2. Remove the extra code from the templates.


### @ViewChild/@ViewChildren
Sometimes you want to get notified when HTML elements or child components become present in the DOM, and perform some action.
Since actions are defined in the TypeScript class, we need to get a reference from the template into the component class.
Angular provides the decorators `@ViewChild()`  / `@ViewChildren()` to do this.

We are going to make a counter in the `shelve` component of how many books there are by counting the buttons in the template.
This assignment is to introduce these decorators and the  `AfterViewInit` lifecycle hook.

1. Create a template reference variable on the `<button>` element in the template of `ShelveComponent`.

2. Add a property to `shelve.component` to hold the button elements, and decorate it with `@ViewChildren()`
  ```javascript
  @ViewChildren('templateReferenceVariable')
  elementQueryList: QueryList<ElementRef>
  ```

The properties decorated by `ViewChild()`/`@ViewChildren()` are filled by Angular in the `viewInit` lifecycle phase.
When this phase has completed and the properties are filled with a reference, Angular calls the lifecycle hook `ngAfterViewInit` on the component.

1. Implement the interface `AfterViewInit` and add the required method.

In this method you can safely call properties decorated with `ViewChild()`/`@ViewChildren()` and be assured they are not undefined.

2. In this method, call `forEach()` on the property, which requires an arrow function as a parameter.
    ```javascript
    .forEach((element) => {
    });
    ```
3. print the property `nativeElement` to the console. What else could you do with this property?
