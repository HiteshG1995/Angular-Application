import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
//import { CustomDirectiveDirective } from './custom-directive.directive';
import { WatchComponent } from './product/watch/watch.component';
import { UtilitymoduleModule } from './utilitymodule/utilitymodule.module';



@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    MobileComponent,
    CameraComponent,
    WatchComponent,
    // CustomDirectiveDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilitymoduleModule
  ]
})
export class ProductModule {
  constructor(){
    console.log('ProductModule called');
  }
 }
