# Intro

In this short intro you will create a very small Angular app with some basic features. This way, you will get a feeling
what Angular is all about. All features will be explained in more detail in later parts of the training.

#### Generating and running an app

1. In a new folder, type `ng new myFirstAngularApp`. This command generates a skeleton for your new angular app. This 
   skeleton gives you a very good starting point for your app.
   
2. Change your directory to `cd myFirstAngularApp` where the skeleton was created and run `ng serve`. This command runs
   a simple http server that serves your newly created app.
   
3. Browse to `localhost:4200`. Congratulations. You've just created your first Angular app and now you see it running.

#### Implementing your own component

1. Open the folder `myFirstAngularApp` in your favourite IDE or text editor. Go to `src\app` and open 
   `app.component.html`. This file contains the html that is currently displayed on the screen. Replace the contents of 
   the file with this:
   
    ```html
    <button>Click me</button>
    
    You clicked me 0 times.
    ```

2. Return to the browser. You will see that changes are immediately picked up, without you having to restart the 
   application or refresh the browser. If you click the button, nothing happens yet. Let's add some interactivity!
   
3. Open `app.component.ts`. This TypeScript class defines the behaviour for the html you just saw. Add a property
   `clicked` and a function `onClick`:
   
    ```typescript
    export class AppComponent {
      
      clicked = 0;
      
      onClick() {
        this.clicked++;
        console.log(`You clicked ${this.clicked} times`);
      }   
    }
    ```

4. The next step is to tell Angular that `onClick` should be called when the button is clicked. We use a so called
   event handler for this:
   
    ```html
    <button (click)='onClick()'>
    ```   
   
5. Open the browser console and click the button. The message `You clicked ... times` will be displayed.

6. To show the number in the template, we will use a so called interpolation. In the html, replace the number 0 with
   {% raw %}`{{ clicked }}`{% endraw %}. This will show the value of the clicked property in the TypeScript class on 
   the screen. Check that it works.
