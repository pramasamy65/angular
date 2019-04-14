

# npm install --save bootstrap@3
    To install Bootstrap & update styles path "node_modules/bootstrap/dist/css/bootstrap.min.css" in angular.json

# ng serve --port 4401  - Run the app using specific ports

#Concepts
    #. String Interpolation - {{}}
        - print/output some values in the html then use String Interpolation
    #. Selector variation like class, attribute and element
    #. Property Binding using []
        - Use to change html attributes or components/pipes/directives
    #. Property Binding - From TS to Html 
    #. Event Binding - From HTML to events using ()
    #. Data Binding
        - $event - Data emitted along with event
    #. Two-way-dataBinding
        - Property Binding + Event Binding

#Directives
     #. Directives are instructions in the DOM
        *ngIf - * indicating structural directive which change the structure of the DOM
        *ngIf - 
    # <  *ngIf ="condition; else localreference">
    # <ng-template #localreference> - ng-template is a directive, component & is a marker in the DOM
    # ng-style - Attribute directives
        Expects javascript objects in key, value format
        keys are style names & Values are values for Styles
    # ngClass - Dynamaically add/remove class
        Syntax : <ngClass ={ classname : ConditionValue}>
    # *ngFor - Structural Change Directive
        *ngFor = "{let devil of devild}"
        devil is local var