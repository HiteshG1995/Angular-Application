import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikiDBServiceService {

  wikiUrl = 'https://en.wikipedia.org/w/api.php'

  constructor(private httpWiki:HttpClient) { }

  getWikiData(data:any){
    return this.httpWiki.get(this.wikiUrl,{
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: data,
        origin: '*'
        }
        
    });
  }
}
