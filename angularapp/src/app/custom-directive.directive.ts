import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private ele: ElementRef) { 
    this.ele.nativeElement.style.backgroundColor = 'aqua'
  }

}
