import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userData;
  constructor(private _UtilityService:UtilityService) { 
    this._UtilityService.userData.subscribe(res => {
      console.log('data comming from subject(comp2)', res)
      this.userData = res;
    }, err => {
      console.log('error occured', err);
    })
  }

  ngOnInit() {
  }

  updateUserDetails(uname, comp, addrs){
    this.userData={
      userName:uname.value,
      companyName:comp.value,
      Address:addrs.value
    };
    console.log(this.userData);
    this._UtilityService.userData.next(this.userData);

  }

}
