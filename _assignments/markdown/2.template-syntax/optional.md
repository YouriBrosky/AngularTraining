## Optional

### [ngIf;else](https://medium.com/aviabird/ngif-else-lands-in-angular-2-0-a242940e54ff)

1. Show a message for the user when there is not yet a book selected.

### Deselect
Add the feature to deselect a selected book. Where do you handle the user interaction? Remember the responsibilities of `Business Components` and `Presentation components`

You can use the following template to show a cross.
```html
<p class="right deselect">X</p>
```

## @Directive
When you need to add functionality to a Component or an HTML-element, but do not need to add anything to the DOM, a Directive is what you need.
Directives are TypeScript classes annotated with `@Directive` instead of `@Component`, and do not have a template.

In this assignment we are going to make a directive that highlights the button element that has been selected.

1. Create a new file called `book-highlight.directive.ts` in the `books` folder.
2. Export a class called `BookHighlightDirective` and decorate it with the `@Directive` annotation.
3. The `@Directive` decorator requires the property `selector`, which is how we reference it in the template. Give it a value that complies with the [StyleGuide](https://angular.io/guide/styleguide)
4. Declare the directive with the `BooksModule` so we can use the directive in the template.

The `BookHighlightDirective` needs an input to know what book is selected, and based on that input it should change the class `bg--carrot` to `bg--cyan`.
For this we need a property decorated with `@Input`, and the `ngOnChanges` lifecycle hook so we can react to any changes to the input.

1. add a property called `selected` and decorate it with the `@Input()` decorator.
2. Implement the `OnChanges` lifecycle hook, and add the required method.
3. `ngOnChanges` gets a parameter of the type `SimpleChanges`. We need to get the `currentValue` from this parameter. Check the [docs](https://angular.io/guide/lifecycle-hooks#onchanges) to see how to do this.
4. create a method that will set the classes, called `toggleSelectedClass`, and give it the currentValue of selected.
 Always try and keep the lifecycle methods clean from any logic.
5. Use the `[]`-syntax to set the selected property from the template of `ShelveComponent`. How do you determine the value of the property?

To interact with the DOM from a Directive, we need a reference to the HTML-element to toggle the class. 
Angular provides the `template reference variable` mechanism for this, that you use by adding `#variableName` in the template to the element.
This variable we can pass into our directive using another `@Input` decorated property.

1. Add a new `@Input` decorated property to `BookHighlighterDirective` that will hold the HTML element.
2. In the template of `ShelveComponent`, add a `template reference variable` to the `button`-element.
3. Pass the `template reference variable` into `BookHighlighterDirective` using the `[]`-syntax.

To finish this task, we need to actually toggle the class to change tha background color. We need to remove the class 'bg--carrot' if the book *is not* selected,
 and add the class `bg--cyan` if the book *is* selected.
 The standard HTML-element provided by the browser has a property called `classlist`, that has a method called `toggleClass`. This fits our needs exactly.
 *NOTE* `classlist` is not implemented in older browsers. Make sure the polyfill is uncommented in the file `polyfills.ts` and the `classlist` npm package is installed.
 
 1. Toggle the classes using `toggleClass` on the property `classlist` from `bookElement`.

 *NOTE*
 This is not the Best Practice. Angular provides a service that you need to use when interacting with DOM Elements. 
 This requires injecting a service and an element into the class, which we are going to talk about in the section `Dependency Injection`.
 There is an optional assignment in that section where you will rewrite this directive to be compliant with the Style Guide.

### @ViewChild/@ViewChildren
Sometimes you want to get notified when HTML elements or child components become present in the DOM, and perform some action.
Since actions are defined in the TypeScript class, we need to get a reference from the template into the component class.
Angular provides the decorators @ViewChild()  / @ViewChildren() to do this.

We are going to make a counter in the `shelve` component of how many books there are by counting the buttons in the template.

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
