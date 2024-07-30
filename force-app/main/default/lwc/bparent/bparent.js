import { LightningElement, track } from 'lwc';

export default class Bparent extends LightningElement {

    @track searchvalue;

    searchValue(event){
        this.searchvalue = event.detail;
    }
}
