import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothesDemoComponent } from './clothes-demo/clothes-demo.component';
import { RouterModule } from '@angular/router';
// import { KidsComponent } from './clothes-demo/kids/kids.component';
// import { MenComponent } from './clothes-demo/men/men.component';
// import { WomenComponent } from './clothes-demo/women/women.component';
// import { TrendingComponent } from './clothes-demo/trending/trending.component';
import { ClothesDetalilsComponent } from './clothes-demo/clothes-detalils/clothes-detalils.component';
import { SubcateoryComponent } from './clothes-demo/clothes-detalils/subcateory/subcateory.component';
// import { CustomDirectiveDirective } from '../custom-directive.directive';
import { CustomDirective1Directive } from './custom-directive1.directive';
import { SubcategoryDetailsComponent } from './clothes-demo/clothes-detalils/subcateory/subcategory-details/subcategory-details.component';
import { SubcategoryDetails1Component } from './clothes-demo/clothes-detalils/subcateory/subcategory-details1/subcategory-details1.component';
import { SubcategoryDetails2Component } from './clothes-demo/clothes-detalils/subcateory/subcategory-details2/subcategory-details2.component';
import { SubcategoryDetails3Component } from './clothes-demo/clothes-detalils/subcateory/subcategory-details3/subcategory-details3.component';


// KidsComponent, MenComponent, WomenComponent, TrendingComponent, 

@NgModule({
  declarations: [ClothesDemoComponent, ClothesDetalilsComponent, SubcateoryComponent,  CustomDirective1Directive, SubcategoryDetailsComponent, SubcategoryDetails1Component, SubcategoryDetails2Component, SubcategoryDetails3Component],
  imports: [
    CommonModule, RouterModule
  ]
})
export class FashionModule { }
