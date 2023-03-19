import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { UtilitymoduleModule } from '../utilitymodule/utilitymodule.module';



@NgModule({
  declarations: [OrderlistComponent],
  imports: [
    CommonModule,
    RouterModule,
    UtilitymoduleModule
  ]
})
export class OrdermoduleModule {
  constructor(){
    console.log('OrdermoduleModule called');
  }
 }
