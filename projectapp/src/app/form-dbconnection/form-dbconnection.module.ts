import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviCompRoutingModule } from './navi-comp-routing.module';
import { RegestrationFormComponent } from './regestration-form/regestration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule, MatSliderModule, MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatTabsModule, MatSidenavModule, MatListModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatDialogModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatCheckboxModule, MatStepperModule, MatProgressBarModule } from '@angular/material';


@NgModule({
  declarations: [
    RegestrationFormComponent 
  ],
  imports: [
    CommonModule,
    NaviCompRoutingModule,
    FormsModule,
    //BrowserAnimationsModule,
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
  ]
})
export class FormDBconnectionModule { }
