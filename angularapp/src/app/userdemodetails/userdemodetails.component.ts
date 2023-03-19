import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-userdemodetails',
  templateUrl: './userdemodetails.component.html',
  styleUrls: ['./userdemodetails.component.css']
})
export class UserdemodetailsComponent implements OnInit {

  // users;
  particularUser:any = {};

  constructor(private route: ActivatedRoute, private demoService: DemoService) {

   }


  ngOnInit() {

    // this.demoService.getUsers().subscribe(res=>{
    //   this.users = res;
    //   console.log('Data coming from routing parameter component', res );
      
    // })
    let dataID = this.route.snapshot.params['id'];

    this.demoService.getUserid(dataID).subscribe( res => {
      this.particularUser = res;
      console.log('get post by ID', res);
    })
  }

}
