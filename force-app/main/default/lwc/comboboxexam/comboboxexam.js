import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/Combobox.getAccountList';

export default class Comboboxexam extends LightningElement {
    value = '';
    accOptions=[];

    get options(){
        return this.accOptions;
    }

    connectedCallback(){
        getAccountList() 
        .then(result=>{

            let arr=[];
            for(var i=0;i<result.length;i++){
                arr.push({label:result[i].Name, value:result[i].Id}) 
            }
            this.accOptions = arr;
        })
        
    }

    handleonchange(event){
        this.value=event.detail.value;
    }
}