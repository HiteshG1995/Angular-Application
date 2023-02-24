import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  selectedProduct: string;

  courses: any[] = [
    {
      id: 1,
      desc: 'Angular core Deep Dive',
      iconURL: 'https://www.citypng.com/public/uploads/preview/hd-black-gold-gift-card-voucher-coupon-template-png-31634841563r6euooavv6.png',
      category: 'INTERMEDIATE'
    },
    {
      id: 2,
      desc: 'Javascript zero to hero',
      iconURL: 'https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png',
      category: 'BEGINNER'
    },
    {
      id: 3,
      desc: 'Typescript',
      iconURL: 'https://2.bp.blogspot.com/-ObmtX8jdtGU/WGHJ19Vp6MI/AAAAAAAALk8/MS_KEEa80wszbUSp9bmHVbEY9YZ3u2bAACLcB/s1600/typescript-21.jpg',
      category: 'ADVANCED'
    }
    ,
    {
      id: 4,
      desc: 'HTML',
      iconURL: 'https://2.bp.blogspot.com/-ObmtX8jdtGU/WGHJ19Vp6MI/AAAAAAAALk8/MS_KEEa80wszbUSp9bmHVbEY9YZ3u2bAACLcB/s1600/typescript-21.jpg',
     
    }

  ]
  constructor() { }

  ngOnInit() {
  }

  getProductValue(val) {
    console.log('seleced value from dropdown', val.target.value);
    let selectedValue = val.target.value;
    this.selectedProduct = selectedValue;
  }

}
