# Routing

At the moment the book form and the book list/detail are on the same page, which makes it more complex than necessary.
In practice, these components would have their own pages, their own urls on which they can be reached.
Angular has a powerful Routing mechanism which makes this possible.

In this assignment we will add Routing to the application, and give `NewBookComponent` and `BooksComponent` their own urls.
We will do this in 4 steps:
* Define the Routes for the BooksModules
* Define the Root Routes for the application
* Add links to get to the new URL
* Add a fallback route to catch unknown URL's

## [Techniques](https://angular.io/guide/router)
* RouterModule
* `.forRoot`
* `.forChild`
* [Route](https://angular.io/api/router/Route)
* routerLink
* [https://angular.io/tutorial/toh-pt5](https://angular.io/tutorial/toh-pt5)

## Tree diagram
![Components](/images/6.png)
