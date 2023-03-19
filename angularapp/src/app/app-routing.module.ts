import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { UserdemodetailsComponent } from './userdemodetails/userdemodetails.component';
import { UsersdemoComponent } from './usersdemo/usersdemo.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { OrderlistComponent } from './ordermodule/orderlist/orderlist.component';
import { ClothesDemoComponent } from './fashion/clothes-demo/clothes-demo.component';
// import { MenComponent } from './fashion/clothes-demo/men/men.component';
// import { WomenComponent } from './fashion/clothes-demo/women/women.component';
// import { KidsComponent } from './fashion/clothes-demo/kids/kids.component';
// import { TrendingComponent } from './fashion/clothes-demo/trending/trending.component';
import { ClothesDetalilsComponent } from './fashion/clothes-demo/clothes-detalils/clothes-detalils.component';
import { SubcateoryComponent } from './fashion/clothes-demo/clothes-detalils/subcateory/subcateory.component';
import { CustomerModule } from './customer/customer.module';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { SubcategoryDetailsComponent } from './fashion/clothes-demo/clothes-detalils/subcateory/subcategory-details/subcategory-details.component';
import { SubcategoryDetails1Component } from './fashion/clothes-demo/clothes-detalils/subcateory/subcategory-details1/subcategory-details1.component';
import { SubcategoryDetails2Component } from './fashion/clothes-demo/clothes-detalils/subcateory/subcategory-details2/subcategory-details2.component';
import { SubcategoryDetails3Component } from './fashion/clothes-demo/clothes-detalils/subcateory/subcategory-details3/subcategory-details3.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent }, // http://localhost:4200/aboutus
  { path: 'contactus', component: ContactusComponent },
  { path: 'product', component:ProductComponent,
  children: [
    {path:'product', component: ProductComponent},
    {path:'laptop', component:LaptopComponent},   
    {path:'mobile', component:MobileComponent},
    {path:'camera', component:CameraComponent},
    {path:'watch', component:WatchComponent}
    ] 
  },
  { path: 'post', component: DemopostComponent },
  { path: 'postdetails/:id', component: DemopostdetailsComponent},
  {path: 'userdemo', component: UsersdemoComponent},
  {path: 'userdemodetails/:id', component:UserdemodetailsComponent},
  { path: 'userdetails', component: UserdemodetailsComponent},
  { path: 'order', component: OrderlistComponent},
  { path: 'loginform', component:TemplateformComponent },
  { path: 'fashionClothes', component:ClothesDemoComponent},
  { path: 'clothesdetails/:category', component:ClothesDetalilsComponent,
  // children: [
  //   {path:'men/:category', component: MenComponent},
  //   {path:'women', component:WomenComponent},   
  //   {path:'kids', component:KidsComponent},
  //   {path:'trending', component:TrendingComponent},
  //   ] 
},
  {path:'subCategory/:category', component: SubcateoryComponent},   //check 'clothesdetails/ubCategory/:category'
  {path:'finalDet/:id',component:SubcategoryDetailsComponent},
  {path:'finalDet1/:id',component:SubcategoryDetails1Component},
  {path:'finalDet2/:id',component:SubcategoryDetails2Component},
  {path:'finalDet3/:id',component:SubcategoryDetails3Component},

  // {path:'customer', component:CustomerListComponent },             //'subCategory/:category'
  // {path: 'admin', component:AdminListComponent},
  { path: 'customer', loadChildren:'./customer/customer.module#CustomerModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: 'todoJson', component:TodoComponent},
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
