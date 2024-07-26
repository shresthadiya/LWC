 import { LightningElement, track } from 'lwc';

export default class Conditionalrenderdemo extends LightningElement {

    @track showText = false;

    showHandler(){
        this.showText = true;
    }
}