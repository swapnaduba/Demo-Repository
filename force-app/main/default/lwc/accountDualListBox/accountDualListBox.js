import { LightningElement,track } from 'lwc';
import getAccountFields from '@salesforce/apex/AccountClass.getAccountFields';

export default class AccountDualListBox extends LightningElement {
    @track options = [];
    @track selectedOptions = [];
    connectedCallback(){
       getAccountFields()
       .then(result=>{
           result.forEach(item => {
               this.options.push({ label:item, value:item});
           });          
           console.log(this.options);
       })
       .catch(error=>{
           this.errors = error;
       })

   }

   handleChange(e){
       this.selectedOptions = e.detail.value;
   }

}