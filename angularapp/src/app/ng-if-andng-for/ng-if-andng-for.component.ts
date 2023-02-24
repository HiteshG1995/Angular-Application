import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-andng-for',
  templateUrl: './ng-if-andng-for.component.html',
  styleUrls: ['./ng-if-andng-for.component.css']
})
export class NgIfAndngForComponent implements OnInit {

  colorVal = 'blue'
  colorVal2 = 'black'
  counterClothes: any[] = [
    {
      id: 1,
      desc: 'Explore the greet',
      iconURL: 'https://www.citypng.com/public/uploads/preview/hd-black-gold-gift-card-voucher-coupon-template-png-31634841563r6euooavv6.png',
      category: 'Gift cards',
      price: '$299',
      discount: '$199'
    },
    {
      id: 2,
      desc: 'Get all categories of clothes with best deals',
      iconURL: 'https://royalanarkali.com/wp-content/uploads/2021/08/maisha-womens-wear-cream-color-heavy-net-embroidered-stone-work-sharara-suit.jpg',
      category: 'Women ware',
      price: '$199',
      discount: '$99'
    },
    {
      id: 3,
      desc: 'Get more discounts on formal & informal cloths',
      iconURL: 'https://www.patanjaliparidhan.com/pub/media/catalog/product/cache/2d10fdd5f2c9e29bc0fb816e3f3e598c/p/m/pmfwshpfso1841011navy_1_3.jpg',
      category: 'Men ware',
      price: '$199',
      discount: '$99'
    }
    ,
    {
      id: 4,
      desc: 'Make your kids day special',
      iconURL: 'https://img2.exportersindia.com/product_images/bc-full/dir_114/3419746/kids-wear-dress-1485021850-2696283.jpeg',
      category: 'Kids ware',
      price: '$129',
      discount:'$69'
    },
    {
      id: 5,
      desc: 'Size no matters!!',
      iconURL: 'https://thumbs.dreamstime.com/b/set-people-overweight-people-cheerful-plus-size-men-women-body-positive-concept-cartoon-vector-illustration-set-220428601.jpg',
      category: 'Plus Size',
      price: '$299',
      discount: '$129'
    },
    {
    id: 6,
    desc: 'Best category for wedding and occation',
    iconURL: 'https://www.brides.com/thmb/y2dwcFufqoRaW5RpaO7UOsxeSYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sabyasachia-998984251b434f3a9c350c5694ef7f32.jpeg',
    category: 'Traditional Ware',
    discount: 'Get upto 60-80% discount'  
  },
  {
      id: 7,
      desc: 'Invetation Jewellry, perfume and much more',
      iconURL: 'https://media.istockphoto.com/id/598821968/photo/mens-accessories-organized-on-table-in-knolling-arrangement.jpg?b=1&s=170667a&w=0&k=20&c=og_EiQSKusYdOJFyfWSLAeQjcD5VYAucBElF6MwijSA=',
      category: 'Accessories',
      discount: 'Get upto 60-80% discount'

    },
    {
      id: 8,
      desc: 'Get all kinds of beauty products',
      iconURL: 'https://sc04.alicdn.com/kf/Haa98409f10774d39aaac882f63aaad47R.jpg',
      category: 'Beauty and Groomong',
      discount: 'Get upto 60-80% discount'
    },
    {
      id: 8,
      desc: 'Pet is our family member',
      category: 'Pet Care',
      discount: 'Get upto 60-80% discount'
    }


  ]

  constructor() { }

  ngOnInit() {
  }

}
