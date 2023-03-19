import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentCommModule } from './component-comm/component-comm.module';
import { FormDBconnectionModule } from './form-dbconnection/form-dbconnection.module';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WikipediaSearchModule } from './wikipedia-search/wikipedia-search.module';
import { WikiDisplayDataComponent } from './wikipedia-search/wiki-display-data/wiki-display-data.component';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MatSlideToggleModule, MatSliderModule, MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatTabsModule, MatSidenavModule, MatListModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatDialogModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatCheckboxModule, MatStepperModule, MatProgressBarModule } from '@angular/material';
//Angular mat need to import in submodule if Lazy Loading has applied

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentCommModule,
    BrowserAnimationsModule,
    WikipediaSearchModule
    //FormDBconnectionModule //Lazy Loading...
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
