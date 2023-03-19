import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list/admin-list.component';
import { CustomerListComponent } from '../customer/customer-list/customer-list.component';
import { RouterModule, Routes } from '@angular/router';

const adminRoutes:Routes = [
  {path:'', component:AdminListComponent}
]

@NgModule({
  declarations: [AdminListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { 
  constructor(){
    console.log('AdminModule called');
    
  }
}
