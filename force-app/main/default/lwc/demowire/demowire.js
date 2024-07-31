import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/demowireclass.getAccounts';

export default class Demowire extends LightningElement {

    @track columns = [
        {label:'Account Id', fieldName: 'Id'},
        {label: 'Account Name', fieldName: 'Name'}
    ]

    @track accountlist;
    @track error;

    @wire(getAccounts)
    wiredAccount({error, data}){
        if(data){
            this.accountlist = data;
        }
        else if(error){
            this.error = error;
        }
    }
}