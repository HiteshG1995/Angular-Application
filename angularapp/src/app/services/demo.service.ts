import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userData } from '../models/usersdetails';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) { }

  getUsers (): Observable<any>{
    return this.httpClient.get<userData>(this.apiUrl);
   }  
   getUserid(id:number){
    return this.httpClient.get(this.apiUrl+'/'+id);
 }
}
