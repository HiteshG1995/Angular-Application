import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  notAllowedNames = ['Rocky', 'Jack'];
  isSubmitted:boolean = false;
  myReactiveForm: FormGroup;
  age;
  showAge;
  constructor(private _fb: FormBuilder, private Objservice: MyserviceService) { 
    this.createForm();
  }
  courses =['Angular','HTML','CSS']

  ngOnInit() {
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDeatils' : {
    //       'username': 'Codemind123',
    //       'email': 'codemind@gamil.com'
    //     },
    //     'course': 'HTML',
    //     'skills': ['angular']
    //   })
    // })
    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDeatils' : {
                 'username': 'Codemind123',
                'email': 'codemind@gmail.com'
               }
      })
    }, 5000)
  }


  createForm()
  {
    // this.myReactiveForm = new FormGroup({
    //   'userDeatils': new FormGroup({
    //     'username' : new FormControl(null, [Validators.required,this.NaNames.bind(this) ]),
    //   'email': new FormControl(null, [Validators.required, Validators.email],this.NaEmails)
    //   }),
    //   'course': new FormControl('Angular'),
    //   'skills': new FormArray([
    //     new FormControl(null, Validators.required)
    //   ])
    // });

    this.myReactiveForm = this._fb.group({
      userDeatils: this._fb.group({
        username: ['', [Validators.required,this.NaNames.bind(this)]],
        email: ['',[Validators.required, Validators.email],this.NaEmails]
      }),
      course:['Angular'],
      skills: this._fb.array([])
    })
  }

  OnSubmit() {
    this.isSubmitted=true;
    alert('method called');
    console.log('My ReactiveForm', this.myReactiveForm.value)
  }
   
  OnAddSkills() {
    (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  
  NaNames(control: FormControl) {
    if(this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'namesNotAllowed': true}
    } else {
      return null;
    }
 }


 NaEmails(control: FormControl) : Promise<any> | Observable<any> 
  {
    const myResponse = new Promise<any> ((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'codemindtechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      })
    })
    return myResponse;
  }

  ageCalculator(){

    
    // let objMyserviceService = new MyserviceService();       //here we can create instance of myservice class
    // var result = objMyserviceService.ageCalculator(this.age);  
    // this.showAge = objMyserviceService.ageCalculator(this.age);
    this.showAge = this.Objservice.ageCalculator(this.age)   //instead of creating multiple instance angular called one DI to call each methods or function/s from service.



  }
  // ageCalculator()
  // {
  //   if (this.age){
  //     const convertAge = new Date(this.age);
  //     const timeDiff = Math.abs(Date.now() - convertAge.getTime());
  //     this.showAge = Math.floor(timeDiff / (1000*3600*24)/365)
  //   }
  // }
}


