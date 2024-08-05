import { LightningElement, track, wire } from 'lwc';
import lstAccountContact from '@salesforce/apex/WrapperDemo.fetchAccountContactWrapperClass';

const columns = [
    {
        label:'Account Name',
        fieldName:'AccountLink',
        type:'url',
        typeAttributes:{
            label:{
                fieldName:'AccountName'
            },
            target: '_blank'
    }},
    {
        label:'Type',
        fieldName:'type'
    },
    {
        label:'Total Contacts',
        fieldName:'totalContacts'
    },
    {
        label:'Address',
        fieldName:'billingAddrress'
    }
];

export default class Wrapperclassdemo extends LightningElement {
    @track columns = columns;
    @track data;
    @track error;

    @wire(lstAccountContact)
    wiredAccountContact({error, data}){
        if(data){
            this.data = data;
        }
        else{
            this.error = error;
        }
    }

}