import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactiveform2',
  templateUrl: './reactiveform2.component.html',
  styleUrls: ['./reactiveform2.component.css']
})
export class Reactiveform2Component implements OnInit {
  reactiveFormAssign: FormGroup;
  subscriptions:string[]=["Basic", "Advanced", "Pro"];
  bgColor = 'bisque';
  isSubmited:boolean = false
  dispData = "";
  formData = {
      mailAddress: "",
      dropDown: "",
      password: "",
      date: "",
      submit: ""
  }
  minDate = ""
       

  constructor() {
    this.newFormData()   
  }

  ngOnInit() {
    this.getDate();
  }

  newFormData(){
    this.reactiveFormAssign = new FormGroup({
      mailAddress: new FormControl(null),
      dropDown: new FormControl('Advanced'),
      password: new FormControl(null),
      date: new FormControl(),
      submit: new FormControl(null)
    })
  }

  submitForm(btnSub){
    if(btnSub=='submit' && this.reactiveFormAssign.valid){
        
        this.isSubmited = true
        alert('Are you sure you want to submit the form')
        console.log(this.reactiveFormAssign.value)
        // console.log();
        
    }
    
  }

  getDate(){
    var date:any = new Date(); 
    var todayDate:any = date.getDate();
    if(todayDate < 10){
      todayDate = "0" + todayDate
    }
    console.log(todayDate);

    var month = date.getMonth() + 1;
    if(month < 10){
      month = "0" + month
    }
    console.log(month);
    
    var year = date.getFullYear();
    console.log(year);

    this.minDate = year + "-" + month + "-" + todayDate;
    console.log(this.minDate);
    
    
    var maxDate = new Date(2024, 1 , 27);
    console.log(maxDate);
  }

}
