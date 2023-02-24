import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { format } from 'url';
import { userform } from '../model/templateform';

@Component({
  selector: 'app-templateform-assignment',
  templateUrl: './templateform-assignment.component.html',
  styleUrls: ['./templateform-assignment.component.css']
})
export class TemplateformAssignmentComponent implements OnInit {

  cities = ['Mumbai','Kolkata','Delhi'];
  user = new userform('','','' ,'','', true ,'','');
  userAge = true;
  password = true;
  isEmailValid = false;
 

  constructor() { }

  ngOnInit() {
  }
  validAge(value){
    if(value>=17 && value<=20){
      this.userAge = true;
      console.log(this.userAge);
    }
    else{
      this.userAge = false;
      console.log(this.userAge);
    }
  }
  checkPasswords(pw,cpw){
    if(pw===cpw){
      this.password =true;
      console.log(pw);
      
    }
    else{
      this.password = false;
    }

  }
  checkEmail(email){
    console.log(email);
      if(email.includes('@') && email.includes('.com')){
        this.isEmailValid = false;
        
      }
      else{
        this.isEmailValid = true;
      }

    
  }
  submitForm(form){
    alert('Form submitted successfully');
    form.reset();
  }

}
