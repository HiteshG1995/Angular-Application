import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  peoples: any[] = [
    {
      'name': 'Jack',
      'country': 'UK'
    },
    {
      'name': 'Sumit',
      'country': 'USA'
    },
    {
      'name': 'Anup',
      'country': 'HK'
    },
    {
      'name': 'Harmany',
      'country': 'UK'
    },
    {
      'name': 'Surya',
      'country': 'USA'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
