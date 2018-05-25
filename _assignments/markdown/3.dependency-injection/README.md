# Dependency Injection

At the moment `BooksComponent` shows the books in the template from hardcoded data. In reality this data is likely to be stored on some server, which will be fetched by the application when necessary.

To get or send data, transform it or store is the responsibility of a **Service**.
Angular gives [Dependency Injection](https://angular.io/guide/dependency-injection) out of the box te manage the creation of instances.

## [Techniques](https://angular.io/guide/dependency-injection)
* Provide services
* constructor injection
* `private` keyword
* Observables
* Observable operators

## Tree diagram
![Components](/images/4.png)
