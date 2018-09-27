# RxJS
RxJS is a Javascript library that implements the [Reactive Extensions](http://reactivex.io/) pattern.
Other languages like Java, C#, Python and others also have libraries that implement this pattern, that are more or less similar to RxJS. 
A key difference is in the naming of some of the operators, but the underlying principle is the sam.e

When you get a grip with RxJS, the other implementations are easy to pick up.

### Install packages from npm
Angular requires RxJS, because it is used to communicate internally and a lot of public API parts use RxJS as the facade to which you can connect.
No further installation is needed.

### Best practices
[RxJS best practices](https://blog.strongbrew.io/rxjs-best-practices-in-angular/)

### Operators & .pipe()
One of the strengths of RxJS are the 120+ operators, which take away a lot of boilerplate to handle the common tasks.
A few of the most common are:
* map()
* filter()
* tap()

## Techniques
* [Operators](https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md)
* [Combining operators](https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511)

## Information
### Operators
Operators are methods that do 1 thing to the Observable, or the value that is going through the sequence.
These operators can be split into 2 types:
 * Creation operators
 * Pipeable operators

#### Creation operators
Creation operators create a new Observable from non-observable values.
* of
* ErrorObservable.create
* fromPromise
* fromEvent

#### Pipeable operators
Pipeable operators are passed into the `pipe()` function, and can change the value or direct the observable sequence.
* map
* filter
* concatmap / mergeMap / forkJoin
* share

#### concatmap / mergeMap / forkJoin
https://medium.com/@tomastrajan/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293

#### share
https://medium.com/@_achou/rxswift-share-vs-replay-vs-sharereplay-bea99ac42168
