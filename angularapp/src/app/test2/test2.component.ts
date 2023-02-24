import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  
  @Input() child : string; // []
  count = 0;
  userName: string = ''
  lastname:string = 'Bhai'
  constructor() { }
  
  ngOnInit() {
    console.log(this.child);
    
  }

  onButtonClick(){
    this.count++
    console.log('count');
  }


onButtonClickSubmit(){
      this.userName = this.userName
      console.log("Data is submitted");
    }

onButtonClickClear(){
      this.userName = ''
      console.log("Data is Cleared");
    }
  
  
 onKeyUp(value) {
    console.log('$event', value.target.value)
  }
 

}
