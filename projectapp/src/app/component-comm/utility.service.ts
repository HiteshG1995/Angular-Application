import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

   userDetails = {
    userName:'Hitesh',
    companyName:'Infy',
    Address:'Pune'
   }

  userData = new BehaviorSubject<any>(this.userDetails);

  constructor() { }
}
