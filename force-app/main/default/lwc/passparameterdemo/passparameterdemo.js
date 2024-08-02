import { LightningElement, wire } from 'lwc';
import searchacc from '@salesforce/apex/AccountSearClass.searchAccounts';

const columns = [
    {label : 'Account Name', fieldName : 'Name'},
    {label : 'Phone', fieldName : 'Phone'},
    {label : 'Type', fieldName : 'Type'},
    {label : 'Total Opportunity Amount', fieldName : 'Total_Opportunity_Amount__c'}
]

export default class Passparameterdemo extends LightningElement {
    columns = columns;
    accounts;
    error;
    searchkey ='';

    handleonChange(event){
        this.searchkey = event.target.value;
    }

    @wire(searchacc, {searchkey :'$searchKey'})
    searchaccount({data, error}){
        if(data){
            this.accounts = data;
        }
        else{
            this.error = error;
        }
    };
}
