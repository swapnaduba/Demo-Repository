import { LightningElement,track } from 'lwc';
import getAccountFields from '@salesforce/apex/AccountClass.getAccountFields';

export default class AvailableAccFields extends LightningElement {
    @track listOfSelectedFields = new Set();
    @track sendingFields = [];
    @track Fields;
    @track errors;
    @track mySet = [];

    connectedCallback(){
        getAccountFields()
        .then(result=>{
            this.Fields = result;

        })
        .catch(error=>{

            this.errors = error;

        })
    }

    addSelect(event){
        console.log(event.target.value);
        this.listOfSelectedFields.add(event.target.value);
        console.log(this.listOfSelectedFields.size);
        this.mySet = [];
    }

    sendSelectedItems(){
      
        for(const i of this.listOfSelectedFields){
            this.mySet.push(i);
            console.log(this.mySet);
        }
        
    }
}