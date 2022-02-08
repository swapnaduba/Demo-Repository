import { LightningElement,api} from 'lwc';

export default class SelectedFields extends LightningElement {
    @api retrievedFields=[];

    removeSelect(event){
        
        console.log("1");
        console.log(event.target.value);        
    }
    removeFields(){
        console.log("Hiii");
    }
} 