import { LightningElement } from 'lwc';
import {ShowToastEvent} from "lightning/platformShowToastEvent"

export default class ToastExample extends LightningElement {

        onClickSuccessHandler()  {
            console.log('Success button is clicked')
            const event = new ShowToastEvent({
                title: 'Success',
                message:'Successfully clicked',
                variant: 'Success',
                mode: 'pester',
            })
            this.dispatchEvent(event)
        }
        onClickErrorHandler()  {
            console.log('Error button is clicked')
            const event = new ShowToastEvent({
                title: 'Error',
                message:'Error Message',
                variant: 'Error',
                mode: 'pester',
            })
            this.dispatchEvent(event)
        }
        onClickInfoHandler()  {
            console.log('Info button is clicked')
            const event = new ShowToastEvent({
                title: 'Info',
                message:'Info Message',
                variant: 'Info',
                mode: 'pester',
            })
            this.dispatchEvent(event)
        }
        onClickWarningHandler()  {
            console.log('Warning button is clicked')
            const event = new ShowToastEvent({
                title: 'Warning',
                message:'Warning Message',
                variant: 'Warning',
                mode: 'pester',
            })
            this.dispatchEvent(event)
        }
    }
