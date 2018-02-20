## import syntax
Import anything that is exported from a TypeScript file.
### 
```javascript 
import { Book } from '../path/to/component'
```

## Component
A TypeScript class and a template that controls a part of the screen.

## @Component
`@Component` is a Decorator, but works like a function, from `@angular/core` and has a configuration object as a parameter `{ }`.
### 
The most commonly used are below, and a complete list can be found [here]().
```javascript
@Component({
    selector                    // string; The name of the component used in the template
    template | templateUrl      // string; The template itself using backticks ``, or the url to the template. If the moduleId is set, a relative path will suffice
    styles | stylesUrl          // array | string; The location for component specific CSS, or a reference to a css file
})
```

## Lifecycle hooks
[Lifecycle hooks](https://angular.io/guide/lifecycle-hooks) are called by Angular during different sections of the application cycle
### 
Angular calls the following hooks in this order:
```javascript
    * ngOnChanges - called when any input or output binding changes
    * ngOnInit - after the first ngOnChanges
    * ngDoCheck - hook for custom Change Detection.
    * ngAfterContentInit - After the component has been initialised
    * ngAfterContentChecked - After every component content check.
    * ngAfterViewInit - After component view(s) have been initialised.
    * ngAfterViewChecked - After each component view(s) check.
    * ngOnDestroy - Right before a @Directive is being destroyed.
```

## interpolation
Showing a property in the template with Angular's template syntax.
### 
{% raw %}
```html
{{ componentProperty }}
```
{% endraw %}

## Pipe
Change how the interpolated property is outputted in the template.
### 
{% raw %}
```html
{{ | pipeName }}
```
{% endraw %}

## event
Call a method from the template on the TypeScript class
### 
```html
<button (click)="handleClick($event)">Click!</button>
```

## Structural directive
These directives changes the DOM structure and can be recognized by the `*`.

## ngFor
Loop over an iterable and repeat the element that the directive is put upon.
### 
[Angular documentation](https://angular.io/guide/template-syntax#ngfor)
```html
<div *ngFor="let item of items"></div>
```

## ngIf
Conditionally show an element based on the truthy/falsy.
### 
```html
<div *ngIf="evalToBoolean"></div>
```

## ngIf / else
Show a different element when the resolved property is false.
### 
```html
<div *ngIf="evalToBoolean; else #loading"></div>
<ng-template #loading><span>Loading</span></ng-template>
```

## Elvis
The Elvis operator is a falsy-check which can be used in templates.
### 
```html
<span> {{ undefinedProperty.name }} </span>     // will give an error
<span> {{ undefinedProperty?.name }} </span>    // Do a falsy check, which will remove the error from the console.
                                                // The <span> element is rendered in the DOM
```

## template reference variable
A reference to an element in the template. Can be given to the component.
### 
```html
<!-- #localVariable = HTML element -->
<div #localVariable (click)="clicked(localVariable)"></div>
 
<!-- #localVariable = NgControl element -->
<input ngControl="" #localVariable="ngForm">   
```

## $event
Pseudo variable that contains the value from the event.
### 
All methodes which are connected like `(click)="doAction($event)"` will authomatically get the parameter `$event` filled by Angular
This helps with encapsulation, because you don't need to know the name of the parameter from the event.

## @ViewChild()
Decorator to get an element from the template into a template class. The decorated property is callable in ngAfterViewInit.

## @ViewChildren()
Decorator to get a List of elements from the template into a template class. The decorated property is callable in ngAfterViewInit.
 
## Service
A service in the Angular context is an injectable class which is responsible for doing the work. It has no UserInterface dependencies.

## providers
With this you can provide an instance of a Service to the entire application. 
Make sure you only have the service defined in 1 array, to ensure they are Singleton's.
```javascript
providers: [ MyService ]
```

## AsyncPipe
With the `async`-pipe from Angular it's easier to manage simple Observables. This pipe also ensures that components are deregistered from the sequence when the component is destroyed.

## operators
Observable operators must be imported from 'rxjs/operators' to use them.
### 
Thanks to the Angular CLI this duplication will be removed when making a production build, so the payload will be as small as possible.
Because of the size of number of operators which cover many use cases, it's better to import the ones you need for the application you are building.

## Route
Couples an url to a component, or aggregate components under a single path.
### 
```javascript
Route:  {
   path?: string;
   component?: Type | string;
   redirectTo?: string;
   children?: Route[];
   pathMatch?: string;
     
   outlet?: string;
   canActivate?: any[];
   canActivateChild?: any[];
   canDeactivate?: any[];
   canLoad?: any[];
   data?: Data;
   resolve?: ResolveData;
   
   loadChildren?: string;
 }
```
