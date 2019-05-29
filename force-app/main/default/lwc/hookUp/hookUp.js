import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import mixin from 'c/mixin';
export default class HookUp extends NavigationMixin(mixin(LightningElement)) {
    
    connectedCallback(){
    }
    handleClick(evt) {
        // Stop the event's default behavior.
        // Stop the event from bubbling up in the DOM.
        evt.preventDefault();
        evt.stopPropagation();
        this[NavigationMixin.GenerateUrl](this.generateHomePageReference('Account')).then((result) => {
            alert(result);

        });
        // Navigate to the Account Home page.
        //this[NavigationMixin.Navigate](this.accountHomePageRef);
    }
}