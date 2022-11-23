import { LightningElement, track } from 'lwc';

export default class ZipcodeComponent extends LightningElement {
    @track zipCodeFromInput;
    @track selectedContact = {};

    handleZipCode(event) { 
        this.zipCodeFromInput = event.target.value;
    }

    handleContactSelected(event) { 
        this.selectedContact = event.detail;
        console.log('ZIP CMP','SELECTED', this.selectedContact);
    }
}