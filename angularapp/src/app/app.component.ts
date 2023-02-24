import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  parentToChild: String = 'I am coming from parent'
  posts = [
    {
      title: 'Pam Tree',
      content: 'I love this tree'
    },
    {
      title: 'Mango Tree',
      content: 'I love this tree'
    }
  ]
  title = 'angularapp';
  name = 'Hitesh'
  empCount:number
  data = {
    name1:"Hitesh",
    Dept:"IT"
  }
  imageUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';

  constructor(){
    this.getServerData()
  }
  getServerData(){
    this.empCount = 100000
  }

  onParent(val: any) {
    console.log('from child to parent', val);
  }

  
  onParentPassObj(value: any){
    console.log('Passing data from object', value);
  }
  bgColor(){
    return "url('https://i.pinimg.com/originals/5e/76/0c/5e760cba5e9ca01ed6249f1ea49cb104.png')"
  }
  

}
