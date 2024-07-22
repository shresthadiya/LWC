import { LightningElement, track } from 'lwc';

export default class Twowaydatabindingdemo extends LightningElement {
    
    @track fullname; 

    handlechange(event){
        this.fullname = event.target.value;
    }
}