import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectiveDirective } from '../custom-directive.directive';



@NgModule({
  declarations: [
    CustomDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomDirectiveDirective
  ]
})
export class UtilitymoduleModule { }
