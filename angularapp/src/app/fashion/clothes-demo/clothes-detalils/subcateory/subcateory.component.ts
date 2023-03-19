import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilitySerService } from 'src/app/fashion/utility-ser.service';

@Component({
  selector: 'app-subcateory',
  templateUrl: './subcateory.component.html',
  styleUrls: ['./subcateory.component.css']
})
export class SubcateoryComponent implements OnInit {

  displayMsg = false
  successMsg = 'Successfully added to cart !!!'
  subCatogeryDetails 
  constructor(private route:ActivatedRoute, private service:UtilitySerService) { }

  ngOnInit() {
    let catogaryData = this.route.snapshot.paramMap.get('category');
    this.subCatogeryDetails = this.service.counterClothes.find(x=>x.category == catogaryData);
  }

  onSuccess(){
    this.displayMsg=true
    this.successMsg = this.successMsg
  }

}
