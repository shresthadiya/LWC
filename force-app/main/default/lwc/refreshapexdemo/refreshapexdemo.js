import { LightningElement, wire } from 'lwc';
import acc from '@salesforce/apex/GetAccountDetails.getAccount';
import { deleteRecord } from 'lightning/uiRecordApi';
import refreshApex from '@salesforce/apex';

const cols = [
    {label:'Account Name', fieldName:'Name'},
    {label:'Phone', fieldName:'Phone'},
    {label:'Type', fieldName: 'Type'},
    {label : 'Total Opportunity Amount', fieldName : 'Total_Opportunity_Amount__c'}
];

export default class Refreshapexdemo extends LightningElement {
    columns = cols;
    accounts;
    error;
    selectedRecord;
    wiredAccountList;

    @wire(acc) wiredAccounts(result){
        this.wiredAccountList = result;

        if(result.data){
            this.accounts = result.data;
        }
        else if(result.error){
            this.error = result.error;
        }
    }

    handleSelection(event){
        if(event.detail.selectedRows.length > 0){
            this.selectedRecord = event.detail.selectedRows[0].Id;
        }
    }

    handleDelete(){
        deleteRecord(this.selectedRecord)
        .then(() =>{
            refreshApex(this.wiredAccountList);
        })
        .catch(error =>{

        })
    }
}