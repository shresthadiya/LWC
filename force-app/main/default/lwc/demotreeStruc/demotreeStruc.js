import { LightningElement, track } from 'lwc';
import getAccountDetails from '@salesforce/apex/TreeDemo.getAccountDetails';

export default class DemotreeStruc extends LightningElement {
    @track columns = [
        {label: 'Account Name', fieldName: 'Name'},
        {label: 'First Name', fieldName: 'FirstName'},
        {label: 'Last Name', fieldName: 'LastName'}
    ];

    @track gridData;
    result;
    error;
    
    connectedCallback(){
        getAccountDetails()
        .then(result=>{
            const temp = JSON.parse(JSON.stringify(result));

            for(var i=0; i<temp.length; i++){
                var relatedContacts = temp[i]['Contacts'];
                if(relatedContacts){
                    temp[i]._children = relatedContacts;
                    delete temp[i].Contacts;
                }
            }

            this.gridData = temp;

        })
        .catch(error=>{
            console.error(error);
        })
    }

    handlerowselection(event){
        const selectedData = event.detail.selectedRows;
        console.log('selectedData: '+JSON.stringify(selectedData));

        for(var i=0; i<selectedData.length; i++){
            console.log('First Name: '+JSON.stringify(selectedData[i].FirstName));
            console.log('Last Name: '+JSON.stringify(selectedData[i].LastName));
        }
    }
}