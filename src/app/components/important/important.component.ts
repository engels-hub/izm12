import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {EmailSenderService} from 'src/app/services/email-sender.service';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.scss']
})
export class ImportantComponent{

  constructor(private _sender:EmailSenderService) { }

  isDisabled=true;
  err:string|undefined;
  email = new FormControl('', [Validators.required, Validators.email]);
  nameControl = new FormControl('');
  
  getErrorMessage() {


    if (this.email.hasError('required')) {
      return 'Ievadiet Jūsu e-pastu';
    }
    if(!this.email.invalid){
      this.isDisabled=false;
    }else{
      this.isDisabled=true;
    }
    if(this.email.hasError('exists')){
      return 'E-pasts jau ir aizņemts!'
    }
    return this.email.hasError('email') ? 'Ievadiet derīgu e-pastu' : ''; 
  }

  async sendMessage(){
    if(!(this.email.hasError('required')||this.email.hasError('email'))){
      
      this._sender.putEmail(this.email.value,this.email)
      console.log(this.email.value);
      
      
    }
  }

  public isIOSDevice(){
    return !!navigator.platform && /iPad|iPhone|iPod|Mac/.test(navigator.platform);
 }
}
