import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/DayTwo.getContacts';

export default class DayFourComponent extends LightningElement {

    @track contacts = []; // to make variable to behave as Array, just add [].
    @track error;

    @wire(getContacts)
    wiredContacts({ error, data }) {
        
        if (data) {

            /*
            data.forEach((contObj) => {
                var tempContObj = JSON.parse(JSON.stringify(contObj)); //To break the dependency of the Loop variable.
                tempContObj.href = '/' + contObj.Id;
                console.log(tempContObj);
                this.contacts.push(tempContObj); //push is used to add element in the Array.
            });
            */
            for (var i = 0; i < data.length; i++) { 
                var tempContObj = JSON.parse(JSON.stringify(data[i])); //To break the dependency of the Loop variable.
                tempContObj.href = '/' + data[i].Id;
                console.log(tempContObj);
                this.contacts.push(tempContObj);
            }


            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }
}