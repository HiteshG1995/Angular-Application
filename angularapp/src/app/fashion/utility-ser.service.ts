import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilitySerService {

  counterClothes: any[] = [
    {
      id: 1,
      desc: 'Explore the greet',
      desc1:'Checkout new way to greet',
      iconURL: 'https://www.citypng.com/public/uploads/preview/hd-black-gold-gift-card-voucher-coupon-template-png-31634841563r6euooavv6.png',
      category1:'https://www.ebridgeconnections.com/getattachment/6bdce4ce-b9e1-4692-927f-988083f03dc4/pros-cons-eCommerce-giftcards.aspx',
      category2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX3US1JYhKSMbg6_CDta6xb8Dsz7bKUVQNcw&usqp=CAU',
      category3:'https://images.vans.com/is/image/VansEU/EGIFTCARD-HERO1?wid=720',
      category4:'https://res.cloudinary.com/linkisin/image/upload/v1667883527/zingoy/corporate-gc/gc-set-2.png',
      category5:'https://thumbs.dreamstime.com/b/gift-cards-10089016.jpg',
      category: 'Gift cards',
      price: '$299',
      discount: '$199',
      details:{
        detail1:"Creative",
        detail2:"Fancy",
        detail3:"Custom",
        detail4:"Occational",
        detail5:"Professional"
      }
        
    },
    {
      id: 2,
      desc: 'Get all categories of clothes with best deals',
      desc1:'!!Offer ending soon!!',
      iconURL: 'https://royalanarkali.com/wp-content/uploads/2021/08/maisha-womens-wear-cream-color-heavy-net-embroidered-stone-work-sharara-suit.jpg',
      category1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04S-zZZ6qKvyspPLRQKd0tvnsXVIYa4obFA&usqp=CAU',
      category2:'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/6833352/2022/5/18/151dc710-7ad6-4dc6-8bc9-5de3e3489dbb1652865488782-HRX-by-Hrithik-Roshan-Women-Black-Active-Essential-Track-Pan-1.jpg',
      category3:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2A9rW2b51d4E6zza9uPh_qq5LlYKvNaIakw&usqp=CAU',
      category4:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1gEpTbK9LVgOuQVlVSEsq1K35px664b86uYrbYdBp4udzGaoVwAyGX96Z0Y14wWcguI&usqp=CAU',
      category5:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxRoZxN_rtZRQDHH0tjpsfLEvM8sv-fgZJGvUI4n7xeG5J23XEwxrQVta8rIvOW42BYw&usqp=CAU',
      category: 'Women ware',
      price: '$199',
      discount: '$99',
      details:{
        detail1:"Formal",
        detail2:"Sports",
        detail3:"Casual",
        detail4:"Summer",
        detail5:"Winter"
      }
    },
    {
      id: 3,
      desc: 'Get more discounts on formal & informal cloths',
      desc1:'Men will be men',
      iconURL: 'https://www.patanjaliparidhan.com/pub/media/catalog/product/cache/2d10fdd5f2c9e29bc0fb816e3f3e598c/p/m/pmfwshpfso1841011navy_1_3.jpg',
      category1:'data:image/jpeg;base64,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',
      category2:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61zWqc50rvL._AC_SX425_.jpg',
      category3:'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg',
      category4:'https://www.liveenhanced.com/wp-content/uploads/2020/05/mens-summer-fashion-1.jpg',
      category5:'https://i.pinimg.com/236x/14/f1/d2/14f1d20ced53568b808e5e73dd818cf1.jpg',
      category: 'Men ware',
      price: '$199',
      discount: '$99',
      details:{
        detail1:"Formal",
        detail2:"Sports",
        detail3:"Casual",
        detail4:"Summer",
        detail5:"Winter"
      }
    }
    ,
    {
      id: 4,
      desc: 'Make your kids day special',
      desc1: 'Special offer available for new family members',
      iconURL: 'https://img2.exportersindia.com/product_images/bc-full/dir_114/3419746/kids-wear-dress-1485021850-2696283.jpeg',
      category1:'https://i0.wp.com/thechampatree.in/wp-content/uploads/2015/05/social-development-in-children-03.jpg?ssl=1',
      category2:'https://achieversearlylearning.com.au/wp-content/uploads/2020/10/kids-playing-x600.png',
      category3:'https://cf.shopee.com.my/file/c8e233d91a6903136a72464b6d0aecc3_tn',
      category4:'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Spring_Merch_Default_02.jpg',
      category5:'https://blogtrib.com/wp-content/uploads/2022/04/71f374a5ab5a258ddc7ffacd120cc761.jpg',
      category: 'Kids ware',
      price: '$129',
      discount:'$69',
      details:{
        detail1:"Age 1-3",
        detail2:"Age 4-6",
        detail3:"Age 7-9",
        detail4:"Age 10-12",
        detail5:"Age 12-16"
      }
    },
    {
      id: 5,
      desc: 'Size no matters!!',
      desc1: 'Any Body can dance',
      iconURL: 'https://thumbs.dreamstime.com/b/set-people-overweight-people-cheerful-plus-size-men-women-body-positive-concept-cartoon-vector-illustration-set-220428601.jpg',
      category1:'https://i0.wp.com/thechampatree.in/wp-content/uploads/2015/05/social-development-in-children-03.jpg?ssl=1',
      category2:'https://achieversearlylearning.com.au/wp-content/uploads/2020/10/kids-playing-x600.png',
      category3:'https://cf.shopee.com.my/file/c8e233d91a6903136a72464b6d0aecc3_tn',
      category4:'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Spring_Merch_Default_02.jpg',
      category5:'https://blogtrib.com/wp-content/uploads/2022/04/71f374a5ab5a258ddc7ffacd120cc761.jpg',
      category: 'Plus Size',
      price: '$299',
      discount: '$129',
      details:{
        detail1:"Age 1-3",
        detail2:"Age 4-6",
        detail3:"Age 7-9",
        detail4:"Age 10-12",
        detail5:"Age 12-16"
      }
    },
    {
    id: 6,
    desc: 'Best category for wedding and occation',
    iconURL: 'https://www.brides.com/thmb/y2dwcFufqoRaW5RpaO7UOsxeSYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sabyasachia-998984251b434f3a9c350c5694ef7f32.jpeg',
    category1:'https://i0.wp.com/thechampatree.in/wp-content/uploads/2015/05/social-development-in-children-03.jpg?ssl=1',
    category2:'https://achieversearlylearning.com.au/wp-content/uploads/2020/10/kids-playing-x600.png',
    category3:'https://cf.shopee.com.my/file/c8e233d91a6903136a72464b6d0aecc3_tn',
    category4:'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Spring_Merch_Default_02.jpg',
    category5:'https://blogtrib.com/wp-content/uploads/2022/04/71f374a5ab5a258ddc7ffacd120cc761.jpg',
    category: 'Traditional Ware',
    discount: 'Get upto 60-80% discount',
    details:{
      detail1:"Age 1-3",
      detail2:"Age 4-6",
      detail3:"Age 7-9",
      detail4:"Age 10-12",
      detail5:"Age 12-16"
    }
  },
  {
      id: 7,
      desc: 'Invetation Jewellry, perfume and much more',
      iconURL: 'https://media.istockphoto.com/id/598821968/photo/mens-accessories-organized-on-table-in-knolling-arrangement.jpg?b=1&s=170667a&w=0&k=20&c=og_EiQSKusYdOJFyfWSLAeQjcD5VYAucBElF6MwijSA=',
      category1:'https://i0.wp.com/thechampatree.in/wp-content/uploads/2015/05/social-development-in-children-03.jpg?ssl=1',
      category2:'https://achieversearlylearning.com.au/wp-content/uploads/2020/10/kids-playing-x600.png',
      category3:'https://cf.shopee.com.my/file/c8e233d91a6903136a72464b6d0aecc3_tn',
      category4:'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Spring_Merch_Default_02.jpg',
      category5:'https://blogtrib.com/wp-content/uploads/2022/04/71f374a5ab5a258ddc7ffacd120cc761.jpg',
      category: 'Accessories',
      discount: 'Get upto 60-80% discount',
      details:{
        detail1:"Age 1-3",
        detail2:"Age 4-6",
        detail3:"Age 7-9",
        detail4:"Age 10-12",
        detail5:"Age 12-16"
      }

    },
    {
      id: 8,
      desc: 'Get all kinds of beauty products',
      iconURL: 'https://sc04.alicdn.com/kf/Haa98409f10774d39aaac882f63aaad47R.jpg',
      category1:'https://i0.wp.com/thechampatree.in/wp-content/uploads/2015/05/social-development-in-children-03.jpg?ssl=1',
      category2:'https://achieversearlylearning.com.au/wp-content/uploads/2020/10/kids-playing-x600.png',
      category3:'https://cf.shopee.com.my/file/c8e233d91a6903136a72464b6d0aecc3_tn',
      category4:'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Spring_Merch_Default_02.jpg',
      category5:'https://blogtrib.com/wp-content/uploads/2022/04/71f374a5ab5a258ddc7ffacd120cc761.jpg',
      category: 'Beauty and Groomong',
      discount: 'Get upto 60-80% discount',
      details:{
        detail1:"Age 1-3",
        detail2:"Age 4-6",
        detail3:"Age 7-9",
        detail4:"Age 10-12",
        detail5:"Age 12-16"
      }
    },
    {
      id: 9,
      desc: 'Pet is our family member',
      category: 'Pet Care',
      category1:'https://i0.wp.com/thechampatree.in/wp-content/uploads/2015/05/social-development-in-children-03.jpg?ssl=1',
      category2:'https://achieversearlylearning.com.au/wp-content/uploads/2020/10/kids-playing-x600.png',
      category3:'https://cf.shopee.com.my/file/c8e233d91a6903136a72464b6d0aecc3_tn',
      category4:'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Spring_Merch_Default_02.jpg',
      category5:'https://blogtrib.com/wp-content/uploads/2022/04/71f374a5ab5a258ddc7ffacd120cc761.jpg',
      discount: 'Get upto 60-80% discount',
      details:{
        detail1:"Age 1-3",
        detail2:"Age 4-6",
        detail3:"Age 7-9",
        detail4:"Age 10-12",
        detail5:"Age 12-16"
      }
    }

  ]

  constructor(private router: Router) { }

  getDetailsByClothes(Clothcategory) {
    this.router.navigate(['/clothesdetails',Clothcategory.category])
   }
}
