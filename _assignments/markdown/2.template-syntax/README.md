# Template Syntax

The [Template Syntax](https://angular.io/docs/ts/latest/guide/template-syntax.html) is used to render the data from 
the component in the template, react to events from the user and to modify the DOM structure. 

In this assignment we will show the book titles in a list of buttons which will get the data from the Business Component `BooksComponent`. 
When a user clicks one of the buttons, this selected book will be shown next to the list of book titles.

We will make use of `Presentation components` to show the data and handle the user input.
This way of thinking allows us a lot of freedom within the component itself like layout and styling, calculations or passing the data to new components. 
For the parent (usually a business) component, it does not matter what happens to the data as long as the API stays the same: 
An input for the list of books, and an output for the chosen book.

## [Techniques](https://angular.io/docs/ts/latest/guide/template-syntax.html)
* property binding
* event binding
* structural directives
* component communication

## Tree diagram
![Components](/images/3.png)
