import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    //variables, are help to meke data travell from one place to another.
    //Basically we have 3 types of variable. and those are:
    //String: All letter or Symbols.
    //Number: Only Numeric Number.
    //Boolean: True or False.

    @track contact_firstName = 'John'; //Here contact_firstName is a variable, that have string type value in it.	
    @track contact_lastName = 'Walker';
    @track contact_age = 34;
    @track contact_isSalaried = true;
    @track contact_salary = 2341.50;

    //Previously salesforce made the @track required to display variable value on the HTML Page,
    //Now it becomes optional to use unless and untill variable is collection type means array.

}