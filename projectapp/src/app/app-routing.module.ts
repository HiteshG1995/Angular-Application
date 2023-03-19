import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { WikiDisplayDataComponent } from './wikipedia-search/wiki-display-data/wiki-display-data.component';




const routes: Routes = [
  
  {path:'templateForm', loadChildren:()=>import('./form-dbconnection/form-dbconnection.module').then(mod=>mod.FormDBconnectionModule)},
  {path:'wikipedia', component:WikiDisplayDataComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





