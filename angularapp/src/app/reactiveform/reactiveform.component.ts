import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myReactiveForm: FormGroup;
  isSubmitted:boolean = false;
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }


  createForm()
  {
    this.myReactiveForm = new FormGroup({
      'userDeatils': new FormGroup({
        'username' : new FormControl(null),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
    });
  }

  OnSubmit() {
    this.isSubmitted = true;
    alert('method called');
    console.log('My ReactiveForm', this.myReactiveForm.value)
  }
}
