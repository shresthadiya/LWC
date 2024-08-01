import { LightningElement, wire } from 'lwc';
import getaccts from '@salesforce/apex/Foreachdemo.getAccountDetails';

export default class Foreachdemo extends LightningElement {

    @wire(getaccts)
    accountdetails
}