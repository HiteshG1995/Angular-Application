import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  users;
  namesearchh: string = ''

  constructor(private demoService: DemoService) { }

  ngOnInit() {
      this.demoService.getUsers().subscribe(res => {
      this.users = res
      console.log('user api results', res);
    }, err => {
      console.log(err);
    })  
  }

  // searchName(){
  //     if(this.namesearch){

  //     }
  // }


}
