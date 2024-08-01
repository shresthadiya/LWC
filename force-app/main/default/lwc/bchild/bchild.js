import { LightningElement } from 'lwc';

export default class Bchild extends LightningElement {

    searchkey;

    handleChange(event){
        this.searchkey = event.target.value;

        const searchEvent = new CustomEvent("getsearchvalue", {
            detail: this.searchkey
        });

        this.dispatchEvent(searchEvent);
    }
}