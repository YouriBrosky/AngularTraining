## Optional

#### Children
There are now 2 paths defined in the book routes, that both start with `/books`. 
This can be reduced so it reduces the noise and makes it easier to maintain.

##### Child routes
1. In `books-routing.module.ts`, create a new Route with just the properties `path` and `children`. It's not required to always route to a `component`.

2. Set the `path` property to `books`. This is the path which will be prefixed for all `child`-routes.

3. Move the `Route`s of `BooksComponent` and `NewBookComponent` to the `children`-array of the new `Route`.

4. Remove `books/` from the `path`'s of `BooksComponent` and `NewBookComponent`.
  
6. Check the browser to see if everything still works with the new configuration.

### [routerLinkActive](https://angular.io/guide/router#routerlinkactive-binding)

The `routerLinkActive` directive adds classes to elements based on the active route. They need to be defined on the same element as `routerLink`, or a parent element.

1. Add `routerLinkActive` to the divs surrounding the links in the navigation bar. The class `bg--river` can be used to style the link, when the router is active.

2. Check the browser to see what happens when you navigate to both components. Can you explain why both links are 'active' when the `NewBooksComponent` is on screen?
 You can make use of `routerLinkActiveOptions` to keep this from happening. Have a look at the [documentation](https://angular.io/guide/router#routerlinkactive-binding) for a detailed guide.

### Parameters
It's also possible to define routes with parameters. For practice we'll make a page that will show the details of 1 book.
There is an endpoint available on `localhost:3004/book/:id` where you can get a book by their ID.

1. In `BooksService`, create a method to get a book by id. Use `getBooks` as an example on how to do a GET call.

2. If you have not yet made a separate component for a single book `book.component.ts`, do this now.

In order to reuse the Presentation Component `BookComponent`, we need a new Business Component that will read the URL for the book id, 
fetches the book from the `BookService` and pass it into `BookComponent`.

3. Create a new Component that will read the URL and fetches the book via the service. Try to think of a good name.

4. Inject `ActivatedRoute` and `BooksService` in the constructor of your new Component.

5. See presentation `5.Routing`, slide 18 to see the possible ways to interact with `ActivatedRoute`. Which one do you choose?

8. Use the id from the URL to call the method in `BooksService`.

9. Use the `async`-pipe to pass the book into `BookComponent`.

#### books-routing.module.ts

1. Create a new `Route` with a path parameter `/:id` and connect it to the newly made Component.

#### Navigate with Router
When someone clicks a book in the list, we are going to redirect them to the new detail page.

1. Remove `ibs-book` from the template `BooksComponent`, it will now be shown in it's own page.

2. Inject the `Router`-service in `BooksComponent`.

3. When the user selects a book, `selectBook` is called via the `(event)` binding. 
