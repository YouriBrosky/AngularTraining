# Dependency Injection

At the moment `BooksComponent` shows the books in the template from hardcoded data. 
In reality this data is likely to be stored on some server, which will be fetched by the application when necessary.

To get or send data, transform it or store is the responsibility of a **Service**.
To be even more precise: if the operation has nothing to do with the template, it should be in a service.

Angular gives [Dependency Injection](https://angular.io/guide/dependency-injection) out of the box te manage the creation of instances.

To add this functionality, we are going to need the following 2 steps:
* Create and provide a Service
* Make use of Angular's HttpClient to get the Books from the server

## [Techniques](https://angular.io/guide/dependency-injection)
* Provide services
* constructor injection
* `private` keyword
* Observables
* Observable operators

## Tree diagram
![Components](/images/4.png)
