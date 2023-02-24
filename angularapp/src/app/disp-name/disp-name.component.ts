import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disp-name',
  templateUrl: './disp-name.component.html',
  styleUrls: ['./disp-name.component.css']
})
export class DispNameComponent implements OnInit {

  displayTxt:string = ""
  showTxt = false

  constructor() { }

  ngOnInit() {
  }

  onButtonClickDisp(){
    this.showTxt=true
  }
  

}
