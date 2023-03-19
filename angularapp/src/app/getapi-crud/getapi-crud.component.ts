import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-getapi-crud',
  templateUrl: './getapi-crud.component.html',
  styleUrls: ['./getapi-crud.component.css']
})
export class GetapiCRUDComponent implements OnInit {

  resObj = {}

  constructor(private rapidapiService:RapidapiService) { }

  ngOnInit() {
    this.rapidapiService.getFinance().subscribe(res =>{
        console.log('rapid res' ,res);
        this.resObj = res

        
    })
  }

}
