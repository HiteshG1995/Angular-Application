import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
// import { RouterModule, Routes } from '@angular/router';
import { CustomerRouterRoutingModule } from './customer-router-routing.module';




@NgModule({
  declarations: [ CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRouterRoutingModule
  ]
})
export class CustomerModule { 
  constructor(){
    console.log('CustomerModule called');
  }
}
