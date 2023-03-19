import { Component, OnInit } from '@angular/core';
import { WikiDBServiceService } from '../wiki-dbservice.service';

@Component({
  selector: 'app-wiki-display-data',
  templateUrl: './wiki-display-data.component.html',
  styleUrls: ['./wiki-display-data.component.css']
})
export class WikiDisplayDataComponent implements OnInit {

  searchByContent;
  wikiData:any = [];

  constructor(private _HTTPWIKI:WikiDBServiceService) { }

  ngOnInit() {
  }

getSearch(){
  this._HTTPWIKI.getWikiData(this.searchByContent).subscribe((res:any)=>{
    this.wikiData = res.query.search;
    console.log('This is wiki data', res);
  });
}
}
