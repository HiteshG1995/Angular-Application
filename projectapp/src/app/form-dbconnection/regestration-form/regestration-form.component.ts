import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regestration-form',
  templateUrl: './regestration-form.component.html',
  styleUrls: ['./regestration-form.component.css']
})
export class RegestrationFormComponent implements OnInit {

  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control';
  isEmailValid:boolean = false;
  myRegestration:FormGroup;
  cities:string[] = ['Mumbai', 'Kolkata', 'Delhi'];
  
  constructor() {
    this.createFormNew();
   }

  ngOnInit() {
  }

  createFormNew(){
    this.myRegestration = new FormGroup({
      'Firstname': new FormControl(null, [Validators.required, Validators.minLength(5),Validators.maxLength(15)]),
      'Lastname': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'Age': new FormControl(null, [Validators.required, Validators.min(17), Validators.max(20)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'Phone': new FormControl(null,[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'City': new FormControl('Mumbai'),
      'Gender': new FormControl('Female'),
      'Password': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]),
      'Confirm_password': new FormControl(null, Validators.required)

    },
    {
        // validator:this.mustMatch('Password','Confirm_password')
    });
  }

      
  
  checkPasswords(pw: string, cpw: string) {
    this.isConfirmPasswordDirty = true;
    if (pw == cpw) {
      this.passwordsMatching = true;
      this.confirmPasswordClass = 'form-control is-valid';
    } else {
      this.passwordsMatching = false;
      this.confirmPasswordClass = 'form-control is-invalid';
    }
  }
  // get firstName() {
  //   return this.myRegestration.get('Firstname');
  // } 

  // get lastName() {
  //   return this.myRegestration.get('Lastname');
  // } 

  checkMail(email){
    console.log(email.value);
    
    const domain = email.value.substring(email.value.lastIndexOf('@') + 1); // gmail.com
    
    if(domain.toLowerCase() === 'codemindtechnology.com') 
    { 
      this.isEmailValid = false;
    } else {
      this.isEmailValid = true;
    }
  }

  setEmailValidator(){
    this.myRegestration.get('email').setValidators(Validators.email);  
}

  bgColor(){
    return "url('https://i.pinimg.com/originals/5e/76/0c/5e760cba5e9ca01ed6249f1ea49cb104.png')"
  }

  formColor(){
    return "url('https://static.vecteezy.com/system/resources/previews/001/984/861/original/abstract-blue-geometric-circles-overlapping-background-with-light-blue-free-vector.jpg')"
  }
  onSubmit(buttonType){
    if(buttonType=="submit" ){
      confirm('Are you sure you want to submit');
      console.log('My myRegestration form Values',this.myRegestration.controls);
    }
    
  }



}
