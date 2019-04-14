Youtube Link From Muni  : https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ
https://angular-presentation.firebaseapp.com/create-first-app/decorator
 
Angular Interactive video for basics - https://school.hirez.io/courses/take/angular-basics
 
JavaScript
 
    JS is single threaded application – JS engine execute one line at a time & this is achived using Callstack
    Call Stack
    Java script engins like V8 uses call stack to execute the script line by line(Sequential way)
    Call Stack uses LIFO data structure for execution
    JS runtine will do only one thing at a time
    Asynchronous achived by call back fucntions like SetTimeout, setInterval etc…
    Event Loop/Event Queue
    SetTimeout(callAnotherFunction(), 4000) – callAnotherFunction() (is Call back function)will be called after 4 seconds
    setInterval -> will trigger the function in the certain interval again and again
    clearTimeout -> will stop the execution of setTimeout and clear timeout
    When JS runtime encounters this line then adds into callstack and executes that line
    Removes from call stack and add/register into the event table(Continously monitor for any of the events trigger)
    Once time elapses then event triggered & it will be moved to message/callstack Queue
    Once call stack is empty then items in the message queue will be moved to call stack and executed
 
Javascript Hoisting:
    Before Java script execution all variable and function declarations are moved to top of the scope
    Var keyword values are hoisted and not let and const
    Let Keyword :
    Let will be used to redeclare the variable which is used outside of the block
    LET variables will not be eligible for Hoisting
    Const Keyword : Used together as  declare + initialize constants and it can’t be changed further
    JS scope :
    Global Scope
    Block scope
    Local/function scope
 
 
 =====

Node JS
    Server side language
    Provide runtime environment for java script to run
    Node JS intern have v8 engine and having node modules/api’s to run java script
    Node JS uses non-blocking(Asynch) i/o model which is lightweight and efficient
    I/O model means reading, writing local files or http request to an API call
    NPM
    Node Package manager – Java script package manager to manage dependencies
    Developers can share the code or reuse the exising packages/modules - Reusable components
    So devlopers can focus on business logic
    Used to install all dependencies and libs for Projects
    
    npm consists of three distinct components:
    the website – To view the available packages
    the Command Line Interface (CLI) – to Publish/reuse packages
    the registry – Need to register in this registry for other developer access
 
NPM Scripts
    npm run say-hello
    npm run - - silent say-hello – execution logs would be muted.
    npm run build – To Build the Angular Project which intern calls > ng build
 
 
Installation
    node -v (which intern has npm)
    npm -v
    npm install -g angular-cli
    ng -v(Angular CLI installation) and Visual Studio Code editor
 
    HelloWorld Program
        Create new Angualr Project command-> ng new hello-world
        Go to hello-world Project -> ng serve to run the application
        localhost:4200
       
Angular Arhitecture
    Used to create reactive SPA
        
Modules
    Apps are collection of modules(like Packages) in nature
    Like User module, Admin module
    Apps will have atleast one root module called AppModule
    Each module is composed of one or more Components and Services
       
@NgModule
    Puspose of @NgModule is used to declare each thing u create in angular and group them together
    https://angular.io/guide/ngmodule-faq
 
 
Components (HTML + Class)
    Page contains more componets like one is used for navigation and another one is for sidebar etc...
    Apps will have atlest one root Components called AppComponent
    Each component will have Html template to represent the view and class that controls the logic for view
       
Services
    Servicecs will have business logic of the applications
               
Project Structure
    package.json
    Have dependencies, dev dependencies and Libraries for the Project
    Dependencies/Packages gets installed when run command -> ng new hello-world
    Packages installed under node_modules
               
        Src Folder
                main.ts -> Entry point for our applications
       
        App Folder
            app.module.ts -> Root module for our applicaiton
            app.component.ts -> Root Component for our applicaiton
 
    Execution command -> ng serve
        Execution comes to main.ts file
        main.ts kick start(Bootstrap) appmodule which intern bootstrap appComponent
               
Component (Template + Class + Metadata)
       
        Template - represents View build using Html
        
        Class - Code that supports view build using typescript
                Class will have methods & Data
        
         Metadata - information. Angualr decides whether this is Angular component or just class
                Metadata is defined usnig Decorator which is feature in Typescript
                Metadata is attached in the form of decorator to the class like @Component({})
       
        Component decorator (@Component)
                Is function which is attaches to the class
                TemplateURL - > Which represents a view
               
Create Component command -> ng g c test -> g - Generate, c - Component
 
Interpolation -> will work for Strings and it will not work with Boolean properties so Property Binding is required
 
Property Binding : -> Allows to set element attribute values from component class 
            Attributes Vs Property
            Attributes EX: <input type="text" value="Test">
                    Defined by HTML. These attributes values cannot be changed once its initialized. 
             Property
                    Defined by DOM and it can change
            
        Syntax : <input type='Text' [disabled]="true">
                     <input type='Text' bind-disabled="true">
 
Creating dynamic styles in web applications can be a real pain
change a <div> color property in pure JavaScript
<div id = “myDivId”> Hello Message </div>
let myDiv = document.getElementById(“myDivId”);
myDiv.style.color = “red”; // updating the div via its properties
 
Angular way of updating stlyes
        <div [style.color]=”orange”> -  directly access the style property of our div element.
 
Directive : Custom HTML attributes provided by angular
 
if you want to apply multiple styles to the same element:
 
<div [style.color]="hasError ? 'red' : 'black' " [style.font]="font"       [style.background-color]="hasError ? 'tomato' : 'white' ">
   The phone number you entered does not match the expected format
</div>
 
Using a CSS class is a much better option as you can refactor those CSS properties in one place and possibly reuse them on other HTML elements
 
<div [ngStyle]="currentStyles">
   The phone number you entered does not match the expected format 
</div>
 
component code:
 
this.currentStyles = {    
       'font-style':  this.canSave  ? 'italic' : 'normal', 
       'color':       this.hasError ? 'red'   : 'black',    
       'font-size':   this.hasError ? '24px'   : '12px'  
};
 
Class Binding:  
 
class and ngClass, where the former is meant to be used for single bindings, and the latter can be used to bind to a decision object similar to the one showed above for ngStyle
 
        <h2 class="text-Success"> Welcome Test Match</h2>
       
<h2 [class]=" textColor"> Welcome Test Match</h2>
 
<h2 [class. text-Success]=" true"> Welcome Test Match</h2>
 
        Class Definition -> public textColor =  "text-Success";
       
        Style : ‘
.text-Success{
        Color : red;
        Font-Style : italic
}
’
If both class attribute and class binding is present then class binding will be in effect and class attribute will be dummy
       
        NgClass - Adds and removes CSS classes on an HTML element and will be able to add multiple classes.
 
Style Binding : Used to apply inline styles for HTML
       <h2 [style.color]="orange">
        Conditional Style Binding ->    <h2 [style.color]=" hasError ? 'red' : 'green' ">
   
        Multiple Styles with  ngstyle - Update an HTML element styles.
            public moreStyles = {
                    color : "red",
                    fontStyle : "italic"    
                }
             <h2 [ngstyle]="moreStyles">
 
Event Binding
Data flow from Tempalte to Class like mouse events and keyboard events
<button (click)=”onClikc()”/>
Onclick(){ ….}
info about the event <button (click)=”onClikc($event)”/>
Onclick(event){ …. event.type}
 
Template reference variables
Passing values from template to class
<input #myinput type=”text”> <button (click)=”logValue(myinput.value)” />
logValue(value){…… }
 
 
Angular Material
Pre-Build Angular components made up of Styling (CSS) + Logic (Some angular Components)
Ang Material uses CDK (Component Development Kit)
CDK contains Utility functionalities & Base components
Install Ang Mat
npm install --save @angular/material @angular/animations @angular/cdk
ng add @angular/material
Now Package.json, appModule.ts, index.html & angular.json files will up updated automatically
Angular.json – How the application should be compiled and having styles
 
In order to use Ang components, need to unlock the components by adding/importing the components into app.module.ts file
Unlock will help to avoid unnecessary module loading
Ex : <button mat-button color=”primary”>Click me</button>
 
Generate side navigation component which is based on Ang material responsive design
ng generate @angular/material:material-nav --name=main-nav
 
ng generate @angular/material:material-nav --name=main-nav
 
 
BootStrap
BootStrap Framework(CSS Framework) – contains bunch of CSS classes to style HTML
Having Java script package which gives some compoenets
