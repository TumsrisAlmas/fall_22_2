import { LightningElement, api, wire, track } from 'lwc';
import getAddress from '@salesforce/apex/AddressController.getAddress';


export default class AddressComponent extends LightningElement {

    //c/helloWorld
    @api zipCode; //Receiver.
    @track contactAddresses;
    @track error; //Decorator
    @track selectedContact;
    @track selectedIndex;

    @wire(getAddress, { zipCode: '$zipCode' }) //Parameterized wire method, meaning its sending data or info to the Apex controller.
    wiredContacts({ error, data }) {
        if (data) {
            console.log('DATA', data);
            this.contactAddresses = data;
            this.error = undefined;
        } else if (error) {
            console.log('DATA', error);
            this.error = error;
            this.contactAddresses = undefined;
        }
    }

    handleButtonClick(event) {
        console.log('INDEX', event.target.dataset.index);
        this.selectedIndex = event.target.dataset.index;

        this.selectHandler(event);
    }


    selectHandler(event) {
        // Prevents the anchor element from navigating to a URL.
        event.preventDefault();

        // Creates the event with the contact ID data.
        const selectedEvent = new CustomEvent(
            'contactselcted', {
                detail: this.contactAddresses[this.selectedIndex]
            });

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}