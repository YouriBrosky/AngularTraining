## Optional

### Dependency Injection
It's possible to set the title of the window in the browser from an Angular application with the [Title](https://angular.io/guide/set-document-title)-service.

1. Change the title of the window to the selected book. Which component should be responsible for this?

### BookHighlighterDirective 2.0
If you have not yet finished the assignment [@Directive](../2.template-syntax/optional.md#@Directive), do that first. It is the basis for this assignment.
This directive is not according to the StyleGuide, because it interacts with a DOM element directly. 
Angular provides a service that adds the possibility to interact with DOM elements, even when you are not in the browser. Angular made it a *Best Practice* to always use this service, so migration to server side rendering can be done without issues.

1. Inject the service `Renderer2` into the `BookHighlighterDirective`.
2. The renderer service has 2 methods: `addClass`/`removeClass`. Rewrite the code to apply the classes using this method.
  Unfortunately, this is a bit more code then we previously had. However, the directive is now portable to a server environment, which makes the extra code worth it.

Now that we know how to use injection, we don't need the separate `@Input` to get a reference to the element the directive is on. Angular can inject this element for us.

1. Add `private bookElement: ElementRef` to the constructor of `BookHighlighterDirective`.
2. The `ElementRef` has a property `nativeElement`, which is the same HTML Element as we got from the template. The `nativeElement` is what the `renderer` needs to set the class.
3. Remove the `template reference variable` and the `[]`-syntax from the template of `ShelveComponent`.
  This makes the `BookHighlighterDirective` easier to use, because the API surface has become tinier.

### Observables

#### Error handling
You should always handle errors when working with Observable or Promises, at least with a message to the user to inform them what went wrong.
Fot http-calls, this is twice as important, because the user does not see any errors if they are note handled. For them, the application just breaks.

1. Show an error message to the user when a http call fails. You can simulate this, by changing something in the url in the GET call.

#### multiple `subscribe`s
It can happen that there are multiple components listening for the same http-call, or that a new component is rendered in the DOM which makes the entire Observable run again.
We'll have a look at how this is done.

1. Copy the `ibs-shelve` tag in the template of `BooksComponent`, so that there are 2 instances listening for events from 1 Observable.
    If it doesn't work, make sure the `async`-pipe appears twice in the template.

2. In the Developer tools in the browser, open the tab `Network` and filter on `XHR` to only see AJAX calls. When you refresh, how many calls are made to the backend for the exact same data?

3. Try to get only 1 http call performed, when there are more components listening. Have a look at the [share()](http://blog.novanet.no/angular-pitfall-multiple-http-requests-with-rxjs-and-observable-async/)-operator.

#### Transforming Observables.
In the multiple `subscribes`s assignment we've made 2 components that show the exact same data.
Make one of the components only show the  **reserved** books. Do you make a custom component that filters the data itself, or do you let `BooksComponent` handle it?

You can make use of the `map()`-operator to transform the content of the data that goes trough the sequence, in this case `Book[]`.
The `filter()` function on Array can be used to only get the books we want.

    > ** Best practice: Why not filter()? **
    > 
    > with filter() you can exclude certain events in the sequence from propogating. Since our even is the `Book[]`, and we always want this value for the sequence.
