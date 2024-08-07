import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationServiceDemo extends NavigationMixin(LightningElement) {
    handlebuttonclick1(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId: '001dM00000MVlj5QAD',
                objectApiName:'Account',
                actionName:'view'
            }
        })
    }

    handlebuttonclick2(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'list'
            },
            state:{
                filterName:'AllAccounts'
            }
        })
    }

    handlebuttonclick3(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'https://www.google.com/'
            }
        })
    }

}
