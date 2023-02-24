import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})



export class OutputComponent implements OnInit {

  @Output() fromChild : EventEmitter<string> = new EventEmitter<string>(); // (fromChild)
  @Output() fromChildObject : EventEmitter<any> = new EventEmitter<any>();

  passData = 'I am from Child variable'
  passData2:any = {
    Name:"Hitesh",
    age:26,
    address:"Pune",
    pincode:412101
  }
    
  showDetails = false;

  constructor() { }

  ngOnInit() {
  }
  sendToParent() {
    this.showDetails = false;
    this.fromChild.emit(this.passData);
    console.log('Variable coming from child');
    
  }

  sendObjtoPar(){
    this.showDetails=true;
    this.fromChildObject.emit(this.passData2.Name);
    this.fromChildObject.emit(this.passData2.age);
    this.fromChildObject.emit(this.passData2.address);
    this.fromChildObject.emit(this.passData2.pincode);
    console.log('Object coming from child');

  }

}
