import { LightningElement, api, track, wire } from 'lwc';
import getContacts from '@salesforce/apex/LWCController2022.getContacts';
//import getContactsq from '@salesforce/apex/LWCController2022.getContactsq';
export default class Spring2022LWCtest extends LightningElement {

    @api recordId;

    contacts = [];

    show = true;

    columns = [{
        label: 'First Name',
        fieldName: 'FirstName2',
        type: 'url',
        typeAttributes: { label: { fieldName: 'FirstName' } }
    },
    {
        label: 'Last Name',
        fieldName: 'LastName'
    },
    {
        label: 'Email',
        fieldName: 'Email',
        type: 'email'
    }]
    
    
    //@wire(getContacts, {idd:'$recordId'}) contacts;
    /*@wire(getContacts2, { accId: '$recordId' })
    wiredRecordsMethod({ error, data }) {
      console.log('Hello' + data);
      if (data) {
        this.data = data;
        this.error = undefined;
      } else if (error) {
        this.error = error;
        this.data = undefined;
      }
    }*/
    get data() {
        console.log(this.contacts);
        return this.contacts.map(cont => {
            return {
                ...cont,
                FirstName2:  `/lightning/r/Contact/${cont.Id}/view`
            }
        });
    }

    async connectedCallback() {
        //this.contacts = await getContactsq();
        await getContacts({
            idd: this.recordId
        })
            .then(contacts => {
                this.contacts = contacts;
                // code to execute if the promise is resolved
            })
            .catch(error => {
                this.errors = reduceErrors(error); // code to execute if the promise is rejected
            });
    }
}