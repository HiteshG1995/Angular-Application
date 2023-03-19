import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { PasswordComponent } from './password/password.component';
import { OutputComponent } from './output/output.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgIfAndngForComponent } from './ng-if-andng-for/ng-if-andng-for.component';
import { NgSwitch } from '@angular/common';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { DirectivesComponent } from './directives/directives.component';
import { DispNameComponent } from './disp-name/disp-name.component';
//import { CustomDirectiveDirective } from './custom-directive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TemplateformComponent } from './templateform/templateform.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NetBankingComponent } from './net-banking/net-banking.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RegestrationFormComponent } from './regestration-form/regestration-form.component';
import { TemplateformAssignmentComponent } from './templateform-assignment/templateform-assignment.component';
import { Reactiveform2Component } from './reactiveform2/reactiveform2.component';
import { FormsComponent } from './forms/forms.component';
import { HttpClientModule } from '@angular/common/http';
import { MyserviceService } from './services/myservice.service';
import { HttpClientComponent } from './http-client/http-client.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
// import { ProductFilterComponent } from './product-filter/product-filter.component';
import { SearchPipe } from './search.pipe';
import { ProdcutFilterComponent } from './prodcut-filter/prodcut-filter.component';
import { TestPipePipe } from './test-pipe.pipe';
import { CustomPipe } from './custom.pipe';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp1Component } from './comp1/comp1.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { UsersdemoComponent } from './usersdemo/usersdemo.component';
import { UserdemodetailsComponent } from './userdemodetails/userdemodetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProductModule } from './product.module';
import { OrdermoduleModule } from './ordermodule/ordermodule.module';
import { FashionModule } from './fashion/fashion.module';
import { GetapiCRUDComponent } from './getapi-crud/getapi-crud.component';
import { TodoComponent } from './todo/todo.component';
// import { CustomerModule } from './customer/customer.module'; 
// import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    CardComponent,
    PasswordComponent,
    OutputComponent,
    NgforComponent,
    NgIfComponent,
    NgIfAndngForComponent,
    NgswitchComponent,
    NgStyleComponent,
    NgClassComponent,
    DirectivesComponent,
    DispNameComponent,
    //CustomDirectiveDirective,
    TemplateformComponent,
    NetBankingComponent,
    ReactiveformComponent,
    RegestrationFormComponent,
    TemplateformAssignmentComponent,
    Reactiveform2Component,
    FormsComponent,
    HttpClientComponent,
    PipeexampleComponent,
    ProdcutFilterComponent,
    SearchPipe,
    TestPipePipe,
    CustomPipe,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PagenotfoundComponent,
    DemopostComponent,
    DemopostdetailsComponent,
    UsersdemoComponent,
    UserdemodetailsComponent,
    UserdetailsComponent,
    GetapiCRUDComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    OrdermoduleModule,
    FashionModule,
    // CustomerModule,  //Lazy loading
    // AdminModule      //Lazy loading
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
  

})
export class AppModule {
  constructor(){
    console.log('AppModule called');
    
  }
 }
