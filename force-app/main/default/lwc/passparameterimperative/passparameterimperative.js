import { LightningElement } from 'lwc';
import lstAccount from '@salesforce/apex/AccountSearClass.searchAcc';

const columns = [

    {label : 'Account Name', fieldName : 'Name'},
    {label : 'Phone', fieldName : 'Phone'},
    {label : 'Type', fieldName : 'Type'},
    {label : 'Total Opportunity Amount', fieldName : 'Total_Opportunity_Amount__c'},
];

export default class PassparamImperative extends LightningElement {
    columns = columns;
    searchKey = '';
    accounts;
    error;
    handleonChange(event){
        this.searchKey = event.target.value;
    }
    handleButtonClick(){
        lstAccount({search : this.searchKey})
        .then(result =>{
            this.accounts = result;
        })
        .catch(error =>{
            this.error = error;
        });
    }
}