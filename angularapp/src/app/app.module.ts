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
import { CustomDirectiveDirective } from './custom-directive.directive';
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
    CustomDirectiveDirective,
    TemplateformComponent,
    NetBankingComponent,
    ReactiveformComponent,
    RegestrationFormComponent,
    TemplateformAssignmentComponent,
    Reactiveform2Component,
    FormsComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
  

})
export class AppModule { }
