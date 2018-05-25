## Optionals

### Lazy loading
The size of the application has gotten bigger by adding functionality and imported that into the `RootModule`. 
By splitting the application by URL and lazily load the modules, you can improve the initial load time by many factors.

. Add lazy loading for the books and backoffice modules. Follow the [documentation](https://angular.io/guide/lazy-loading-ngmodules#configure-the-routes)
 > *things to note*
 > Injecting bookservice works at the moment without providing it on the backoffice module. Why is this?

When you've added lazy loading to both books and backoffice modules, what happens now when you check it in the browser?

See [limited provider scope](https://angular.io/guide/providers#limiting-provider-scope-by-lazy-loading-modules) for an explanation.
more info:
* [Prevent reimport of the CoreModule](https://angular.io/guide/singleton-services#prevent-reimport-of-the-coremodule)
* [Bad practices](https://angular.io/guide/ngmodule-faq#q-why-bad)

. Restructure the application with a `CoreModule`. What other module that is imported into `BooksModule` can be moved to the `CoreModule`?
