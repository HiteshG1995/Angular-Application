import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilitySerService } from '../../utility-ser.service';

@Component({
  selector: 'app-clothes-detalils',
  templateUrl: './clothes-detalils.component.html',
  styleUrls: ['./clothes-detalils.component.css']
})
export class ClothesDetalilsComponent implements OnInit {

 public particularClothesDetails;
  

  constructor(private route:ActivatedRoute, private service:UtilitySerService) { }

  ngOnInit() {
    let catogaryData = this.route.snapshot.paramMap.get('category');
    this.particularClothesDetails = this.service.counterClothes.find(x=>x.category == catogaryData);
  }


  // getDetailsByClothes(){
  //   this.particularClothesDetails = this.clothDet.counterClothes
  // }
  



}
