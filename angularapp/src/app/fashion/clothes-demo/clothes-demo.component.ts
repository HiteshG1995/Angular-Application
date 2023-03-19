import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UtilitySerService } from '../utility-ser.service';

@Component({
  selector: 'app-clothes-demo',
  templateUrl: './clothes-demo.component.html',
  styleUrls: ['./clothes-demo.component.css']
})
export class ClothesDemoComponent implements OnInit {
  counterClothes = {};
  

  constructor(private utilitySer:UtilitySerService, private router:Router) { }

  ngOnInit():void {
    this.counterClothes = this.utilitySer.counterClothes;
  }

  // onSelect(department){
  //   this.router.navigate(['/category']);
  // }

}
