import { LightningElement, track } from 'lwc';
import getaccnts from '@salesforce/apex/ImperativeDemoHelper.getAccounts';

export default class Imperativedemo extends LightningElement {
    
    @track columns = [
        {label: 'Account Record Id', fieldName: 'Id'},
        {label: 'Account Name', fieldName: 'Name'}
    ]

    @track accountlist;
    @track error;

    connectedCallback(){
        getaccnts()
        .then(result =>{
            this.accountlist = result;
        })
        .catch(error =>{
            this.error = error;
        })
    }
}