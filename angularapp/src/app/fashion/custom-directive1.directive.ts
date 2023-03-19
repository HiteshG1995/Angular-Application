import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective1]'
})
export class CustomDirective1Directive {

  constructor(private ele:ElementRef) { 
    this.ele.nativeElement.style.backgroundColor = 'aqua'
  }

}
