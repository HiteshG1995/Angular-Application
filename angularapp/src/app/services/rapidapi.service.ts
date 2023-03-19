import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url = 'https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US';

  constructor(private httpClient: HttpClient) { }

 

  getFinance() {

    let headers = new HttpHeaders({

      'X-RapidAPI-Key': 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177',

      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'

    });

    return this.httpClient.get(this.url, { headers: headers});

 
  }
}
