import { api, LightningElement,track,wire} from 'lwc';
import lstAccount from '@salesforce/apex/AccountSearClass.searchAcc';

const columns = [

    {label : 'Account Name', fieldName : 'Name'},
    {label : 'Phone', fieldName : 'Phone'},
    {label : 'Type', fieldName : 'Type'},
    {label : 'Total Opportunity Amount', fieldName : 'Total_Opportunity_Amount__c'},
];


export default class Testacademy extends LightningElement {
    searchKey = '';
    columns = columns;
    accounts;
    error;
    handleonChange(event){
        this.searchKey = event.target.value;
    }
    @wire(lstAccount,{searchKey : '$searchKey'})
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
        } else {
            this.error = error;
        }
    }
}