import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegestrationFormComponent } from './regestration-form/regestration-form.component';


const routes: Routes = [

  {path:'registrationForm', component:RegestrationFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaviCompRoutingModule { }
