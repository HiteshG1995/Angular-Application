import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-net-banking',
  templateUrl: './net-banking.component.html',
  styleUrls: ['./net-banking.component.css']
})
export class NetBankingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginForm(form:NgForm){
    console.log(form);
    
  }

}
