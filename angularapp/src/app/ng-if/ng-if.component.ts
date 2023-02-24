import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {


  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content: 'I swa this tree'
    },
    {
      title: 'Bambu Tree',
      imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content: 'I swa this tree'
    },
    {
      title: 'Mangio Tree',
      imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content: 'I swa this tree'
    },
    {
      title: 'Pam Tree',
      content: 'I swa this tree'
    }
  ]

  showme: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
