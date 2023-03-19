import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilitySerService } from 'src/app/fashion/utility-ser.service';

@Component({
  selector: 'app-subcategory-details1',
  templateUrl: './subcategory-details1.component.html',
  styleUrls: ['./subcategory-details1.component.css']
})
export class SubcategoryDetails1Component implements OnInit {

  finalDetails;
  orderPlacesAlert = false;
  placeOrderMsg = "Your order placed successfully... Thank you for shopping with us"

  constructor(private route:ActivatedRoute, private service:UtilitySerService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.finalDetails = this.service.counterClothes.find(x=>x.id == id);
  }

  onOrderPlace(){
    this.orderPlacesAlert = true
    this.placeOrderMsg = this.placeOrderMsg
  }

}
