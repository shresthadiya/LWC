import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import COUNTER_FILE from '@salesforce/messageChannel/updatecounter__c';

export default class Demosub extends LightningElement {

    counter = 0;
    subscription = null;

    @wire(MessageContext) 
    MessageContext;

    connectedCallback(){
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel(){
        this.subscription = subscribe (
            this.MessageContext,
            COUNTER_FILE,
            (message) => this.handleMessage(message)     
        );
    }
    handleMessage(message){
        if(message.operator == 'add'){
            this.counter += message.constant;
        }
        else if(message.operator == 'subtract'){
            this.counter -= message.constant;
        }
        else if(message.operator == 'multiply'){
            this.counter *= message.constant;
        }
    }
}