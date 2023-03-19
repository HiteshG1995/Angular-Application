import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  isEmailValid:boolean = false;
  isSubmitted: boolean = false;
  formData  = {
    email: '',
    password: '',
    course: '',
    gender: ''
  }
  defaultValue = 'Angular';
  defaultGender = 'Male';
  courses: string[] = ['Angular', 'Javascript', 'Typescript'];
  genders = [ 
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  age;
  showAge;
  showDetails: number;
  // emails='';
  constructor(private Objservice: MyserviceService, private route: Router) { }

  ngOnInit() {
    //  let Objmyprint = new MyserviceService();
     this.Objservice.print();                
  }

  login(form: NgForm) {
    this.route.navigate(['/userdetails']);
    this.isSubmitted = true;
    console.log(form);

 this.formData.email = form.value.email;
 this.formData.password = form.value.password;
 this.formData.course = form.value.course;
 this.formData.gender = form.value.gender;
// form.reset();

form.controls['course'].setValue('Angular');
form.controls['gender'].patchValue('Male');

// POST api/ Saveuser(formData);

// let Objmydisp = new MyserviceService();
this.Objservice.display();

  }
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
  // ageCalculator()
  // {
  //   if (this.age){
  //     const convertAge = new Date(this.age);
  //     const timeDiff = Math.abs(Date.now() - convertAge.getTime());
  //     this.showAge = Math.floor(timeDiff / (1000*3600*24)/365)
  //   }
  // }

  ageCalculator(){
    this.showAge =  this.Objservice.ageCalculator(this.age);

  }
}
