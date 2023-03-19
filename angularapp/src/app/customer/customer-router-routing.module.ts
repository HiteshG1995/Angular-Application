import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';


const CustomerRoutes:Routes = [
  {path:'', component:CustomerListComponent}
]
@NgModule({
  imports: [RouterModule.forChild(CustomerRoutes)],
  exports: [RouterModule]
})
export class CustomerRouterRoutingModule { }
