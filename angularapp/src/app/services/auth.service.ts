import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkuser(username, password) {
    if(username == 'codemind' && password == 'codemind123')
    {
      localStorage.setItem('username', 'codemind');
      return true;
    } else {
      return false;
    }
     
  }
}
