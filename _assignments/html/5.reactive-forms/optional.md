### Optional

* [Form POST](#form-post)
* [Template trigger](#template-trigger)
* [Bi-directional service](#bi-directional-service)
* [price](#price)
* [ngClass](#ngclass)
* [delete](#delete)
* [FormBuilder](#formbuilder)
* [Nested FormGroup](#nested-formgroup)
* [FormArray](#formarray)
* [listeners](#listeners)
* [Edit existing books](#edit-existing-books)
* [custom validator](#custom-validator)

#### Form POST
To save the book on the server, we have to make an HTTP POST call to the backend with the new book.
The book is validated on the server side for the presence of an author and a title, the other fields are optional. 
If the book is stored successfully, you will get the stored books with an ID as a response.
Since communicating with the backend is the job for a service, we are going to add the POST to the `BookService`, and use that from `NewBookComponent`.

1. Create a `store` method on the `BooksService`. Implement this method yourself, or use the [template](#save) below.
   Give it the correct return type.

2. Inject the `BooksService` in the constructor of `NewBookComponent`.

3. In your method which handles the submit, check if the form is `valid` and emit the book to the parent if this check passes.

5. `subscribe` to the `Observable` from the `BookService`, to execute the sequence and do the POST call.

6. In the success-handler, reset the `bookForm` so all values are cleared and the state is reset if the response is successful.

##### Error handling
The book server checks if the book has already been stored, by checking the title & author. If the book is already in the shop, 
it will return an error with code `422` and a message.

1. Show the message from the server in the UI when a book is added with the same title and author.
   Try to keep the `HttpErrorResponse` class scoped in the service, this means that the component won't have knowledge of this class. 
   To rethrow the error from the service so it will end up in the error handler of the component, you need the `catchError` & `throwError` operators.
   ```javascript
   import {catchError} from 'rxjs/operators';
   import {throwError} from 'rxjs';
   
   http.post()
     .pipe(
       catchError(error: HttpErrorResponse) => {
         // do some checking on the type of error.
         const customError = ...
         return throwError(customError);
       }
     )
   ```

##### Updating the shelve
There are several ways to update the list of books when a book is added or deleted in the backend.

##### Trigger the AsyncPipe
If you have used the AsyncPipe, you can reassign the variable used in the template with a new call to `getBooks`. 
The AsyncPipe will pick up the change, and execute the observable.

##### Bi directional service
With a [Bi-directional service](https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service) you manage the observable yourself, instead of directly listening for the http calls. 
This is a very powerful mechanism, but requires you to unsubscribe from the observable yourself. This requires some rebuilding and rethinking of the application.

#### price

1. Add an input field for `price`.

```javascript
<div class="g--12">
  <div class="container">

    <label for="price" class="g--4 no-margin"> Price </label>
    <input type="text" class="g--8 no-margin" id="price">
  </div>
  <!-- error message -->
</div>
```

2. The price has to conform to the format ###(.##), and no book is more expensive then 999.99.
    Validate the input for these cases and show an error message for the user.
    You can use the following regular expression if necessary.
   ```^\d{1,3}([\.]\d{2})?$```

#### ngClass
Give the input fields a visual indication when they are invalid. The class `field-invalid` can be put on `<input>` to achieve this.

```javascript
[ngClass]="{'className': boolVal}"
or
[class.CLASSNAME]="boolVal"
```

#### delete
Now that we can add books, it would also be nice to be able to remove a book.
There is an endpoint available on `/book/:id` which handles http `DELETE` calls to delete a book from the server. The placeholder `:id` is meant for the ID of the book.
This endpoint gives you an empty response with status code 204 when the deletion was successful.

When the book, with id 100004 for example, is not found, you will get the a 404 response with the following body
```javascript
{ detail: `Book: 100004 could not be found`, deleted: false }
```

1. Create a method in `BooksService` that will execute the delete.

2. Add a button to the application which will eventually call the delete method in `BooksService`. Remember the responsibilities of the different components, and put the code in the right places.
```javascript
<button class="g--12 btn--red color--white">Delete</button>
```

3. For now, you have to refresh to see the deleted book be removed from the screen. In a following optional assignment we will try to update the view automatically.

4. Show a message on screen if something went wrong with deleting the book. Try to delete the same book twice, to get the error message from the backend.

#### FormBuilder
Angular provides a [FormBuilder](https://angular.io/guide/reactive-forms#introduction-to-formbuilder) service to remove some of the boilerplate code required with `FormGroup`/`FormControl` classes.

1. Rebuild the form in `NewBookComponent` to use the `FormBuilder` service.

#### Nested FormGroup
It's also possible to [nest FormGroups](https://angular.io/guide/reactive-forms#nested-formgroups) inside other `FormGroup`s. In our book example, you might want to store some meta information about a book, like the date it was added to the store or the ISBN identifier.
With a nested `FormGroup`, you can combine the date and ISBN under a group.
Currently, when you get the `.value` of the `bookForm`, you'll get a response like:
```javascript
{
  "title": "Application Design",
  "author": "O'rly",
  ...
}
```
With nested `FormGroup`s, the `.value` of `bookForm` could look like this:
```javascript
{
  "title": "Application Design",
  "author": "O'rly",
  "meta": {
    "date": "1970-01-01",
    "ISBN": "1234"
  }
}
```

1. Add two new fields to the form in a [nested `FormGroup`](https://angular.io/guide/reactive-forms#nested-formgroups).

#### FormArray
The [FormArray](https://angular.io/guide/reactive-forms#use-formarray-to-present-an-array-of-formgroups) class makes is possible to create dynamic forms, where you can add or remove fields or `FormGroups` from the form.
This is useful when you want to have a domain object with a property that can have multiple values. In our book-example, this could be the `genre`-field.
There are many books that do not fit into one genre, but need te be categorized multiple.

1. Use [FormArray](https://angular.io/guide/reactive-forms#use-formarray-to-present-an-array-of-formgroups) to dynamically add multiple genres to a new book.

#### listeners
With `.valueChanges` and `.statusChanges`, which are properties of `FormGroup` and `FormControl`, you can listen for any new value or when the validation status of the field changes.
By reacting to input changes it's easier te make something like an autocomplete field.

1. Listen for changes on the `title`-field using `.valueChanges`, and make a GET request on `http://localhost:3004/book/exists/:title` to see if the title already exists.
  The endpoint responds with an empty list when there are no matches, or a filled list with all book where the start of the title matches exactly as entered.

#### Edit existing books
The `NewBookComponent` could be reused to also support editing of existing books. 
What changes would you need to make to get `NewBookComponent` reusable for existing data?

1. Add support to edit existing books to `NewBookComponent`

#### custom validator
The `Validator`s that are added to the `FormControl`s are just functions that return `null` when valid, or an error object when the field is invalid.

1. Write a [custom validator](https://angular.io/guide/form-validation#custom-validators) for `author`, that checks if each word in the input is capitalized. Show an error to the user, telling them which word needs to be capitalized.

##### save template BooksService**
```javascript
save(book:Book): Observable<boolean> {
    return this.http
      .post('http://localhost:3004/store', book);
  }
```
