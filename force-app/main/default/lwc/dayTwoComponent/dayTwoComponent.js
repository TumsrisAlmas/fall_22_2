import { LightningElement, track } from 'lwc';

export default class DayTwoComponent extends LightningElement {
    //DOM - Document Object Model, is backBone of LWC.
    //variable with type is Object.
    //Object is a pair of key and value.
    @track contact = {
        firstName: 'John',
        lastName: 'Walker',
        phone: '9090312345',//(909)-031 2345
        email: 'test001@gmail.com',
        age: 34,
        isSalaried: true,
        salary: 3123.50
    };

    @track contact2 = {
        firstName: 'Brick',
        lastName: 'Walker',
        phone: '9090399945',//(909)-031 2345
        email: 'test002@gmail.com',
        age: 35,
        isSalaried: true,
        salary: 3453.50
    };


    //Array --> it is collection type variable, that holds more than one values.
    contactlist = [
        {
            firstName: 'John',
            lastName: 'Walker',
            phone: '9090312345',//(909)-031 2345
            email: 'test001@gmail.com',
            age: 34,
            isSalaried: true,
            salary: 3123.50
        },

        {
            firstName: 'Brick',
            lastName: 'Walker',
            phone: '9090399945',//(909)-031 2345
            email: 'test002@gmail.com',
            age: 35,
            isSalaried: true,
            salary: 3453.50
        },

        {
            firstName: 'sanjay',
            lastName: 'Rathod',
            phone: '9023351245',//(909)-031 2345
            email: 'test002@gmail.com',
            age: 35,
            isSalaried: true,
            salary: 3453.50
        }
        
    ];

    //Method or Functions --> it is a small piece of code that is 
    // designed to perform some specific activity or task.
    
    connectedCallback() { //It executes automatically when component loads.
        //When we are using the variable in any method or functiona,
        //then we need to take help of this operator.
        console.log('Contact', this.contact);
        console.log('Contact', JSON.stringify(this.contact));// JSON.stringify is used to convert Object into String.
    }
}