import { LightningElement, track } from 'lwc';

export default class DayThreeComponent extends LightningElement {

    @track fullName = '';

    @track firstName;
    @track lastName;

    handleFirstName(event) { 
        this.firstName = event.target.value;
        console.log('event' + event.target.value);
        this.calculateFullName();
    }

    handleLastName(event) { 
        this.lastName = event.target.value;
        console.log('event' + event.target.value);
        this.calculateFullName();
    }

    calculateFullName() { 
        this.fullName = this.firstName + ' ' + this.lastName;
    }
}