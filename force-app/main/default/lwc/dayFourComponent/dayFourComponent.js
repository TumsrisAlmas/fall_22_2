import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/DayTwo.getContacts';

export default class DayFourComponent extends LightningElement {

    @track contacts = [];
    @track error;

    @wire(getContacts)
    wiredContacts({ error, data }) {
        
        if (data) {

            
            data.forEach((contObj) => {
                var tempContObj = JSON.parse(JSON.stringify(contObj));
                tempContObj.href = '/' + contObj.Id;
                console.log(tempContObj);
                this.contacts.push(tempContObj);
            });
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }
}