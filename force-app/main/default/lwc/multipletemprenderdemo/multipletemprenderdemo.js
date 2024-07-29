import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import defaulttemplate from './multipletemprenderdemo.html'

export default class Multipletemprenderdemo extends LightningElement {
    selected = false;
     
    render(){
        return this.selected === 'Sign In' ? signinTemplate:
        this.selected === 'Sign Up' ? signupTemplate:
        defaulttemplate
    }

    handleclick(event){
        this.selected = event.target.label;
    }

    submitHandler(event){
        if(event.target.label === 'Sign In'){
            console.log('Sign In Successful!');
        }
        else if(event.target.label === 'Sign Up'){
            console.log('Sign Up Successful');
        }
        else{}

    }
}
