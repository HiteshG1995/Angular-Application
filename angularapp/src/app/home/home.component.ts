import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {filter, map} from 'rxjs/operators';
import {of, from} from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = [];
  getData2 = [];
  getFire = [];
  showTable: boolean = false;



  constructor(private firebaseService:FirebaseService) { }


  ngOnInit() {

    //1 2 3 o/p 2, 3, 4
    const obs = of(1,2,3).pipe(
      map(x => x + 1)
     ).subscribe(res => {
      console.log('obs of', res);
     })

  //emit (1,2,3,4,5)
    const source = from([1,2,3,4,5]);

    // filter out non-even numbers 
    
    const example = source.pipe(filter(num => num % 2 === 0));
    example.subscribe(res => {
      console.log(`Even number: ${res}`);
    })
   }

  

  CreatePost(){
      this.firebaseService.createPost().subscribe(data=>{
        for (const key in data) {
          console.log(key, data[key]);
         let newObj = Object.assign({},{id:key}, data[key]);
         this.getData2.push(newObj)
        //  this.getDatefromFireBase()
        }
        console.log('Firebase post', data);
      })
  }


  
  // getDatefromFireBase(){
  //   this.showTable = true;

  //   this.firebaseService.getPostDataFirebase().subscribe(data1=>{
  //     for (const key in data1) {
  //       console.log(key, data1[key]);
  //      let newObj = Object.assign({},{id:key}, data1[key]);
  //      this.data.push(newObj)
  //     }
  //     console.log('get firebase data', data1);
  //   })
  // }

  getDatefromFireBase() {
    // this.firebaseService.getPostDataFirebase().subscribe(res => {
    //   console.log('Firebase get', res);
    // })

    this.firebaseService.getPostDataFirebase().pipe(
      map(responseData => {
        console.log('before manipulate', responseData)
        // empty array 
        const postArray = [];
        // for in loop 
        for(const key in responseData) {
          // check the key 
          if(responseData.hasOwnProperty(key)) {
            // push new value into array 
            postArray.push({...responseData[key], id:key})
          }
        }
        return postArray;
      })
    ).subscribe(res => {
      console.log('after manipulate data', res);
      this.getFire = res
      this.CreatePost()
    })
  }

 
  }
