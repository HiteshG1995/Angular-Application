import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { userData } from '../models/usersdetails';


@Component({
  selector: 'app-usersdemo',
  templateUrl: './usersdemo.component.html',
  styleUrls: ['./usersdemo.component.css']
})
export class UsersdemoComponent implements OnInit {

  usersArr:userData[]=[];
  namesearch:string = '';

  constructor(private userInfo:DemoService) { 

  }

  ngOnInit() {
    this.userInfo.getUsers().subscribe(res =>{
      this.usersArr = res;
      console.log('User Array data', res);
      
    })
  }

}
