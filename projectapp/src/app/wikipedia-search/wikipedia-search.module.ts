import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikipediaSearchRoutingModule } from './wikipedia-search-routing.module';
import { WikiDisplayDataComponent } from './wiki-display-data/wiki-display-data.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [WikiDisplayDataComponent],
  imports: [
    CommonModule,
    WikipediaSearchRoutingModule,
    FormsModule
  ],
  exports:[
    WikiDisplayDataComponent
  ]
})
export class WikipediaSearchModule { }
