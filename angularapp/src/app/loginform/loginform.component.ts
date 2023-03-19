import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  msg;
  // DI 
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  login(username, password) {
   var result = this.authService.checkuser(username, password);
   if(result == true) {
    this.route.navigate(['/product']);
   } else {
    this.msg = 'Invalid user name or password'
   }

  }
}
