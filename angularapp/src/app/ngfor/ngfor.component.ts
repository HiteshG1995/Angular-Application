import { Component, OnInit } from '@angular/core';
// import { Countries } from '../models/countries';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title: string = "Top 3 movies of the Bollywoods"

  movies: Movies[] = [
    {title:'3 idots', director:'Rajkumar', cast:'Amir', releaseDate:'2009'},
    {title:'Tumbbad', director:'Rahil', cast:'Rahi', releaseDate:'2020'},
    {title:'Kantara', director:'Rishab', cast:'Rishab', releaseDate:'2022'}

  ]

  Songs:string[] = ['Ved', 'kan', 'popo', 'raven']

  
  Countries: Array<any> = [
      {name:'India', states:['Maharastra', 'Gujrat', 'Karnataka', 'Kerala', 'Tamilnadu', 'UP', 'MP', 'Punjab', 'Harayana', 'Andra Pradesh']},
      {name:'USA', states:['California', 'Nevada', 'New Jersy', 'Texas', 'Orlando', 'New Maxico', 'New york', 'North Carolina', 'South Carolina']},
      {name:'Canada', states:['Ontario', 'Alberta', 'Ontario', 'British Colambia', 'Manitoba', 'Quebec', 'Labrador', 'Nova Soctia', 'Newfoundland']},
      {name:'United Kingdom', states:['England', 'Walse', 'Scotland', 'North Ireland']},
      {name:'Australia', states:['Victoria', 'Queensland', 'Tasmania', 'New South Wales', 'South Australia', 'Western Australia']},
  ]

states: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  
  changeCountry(country){
      this.states = this.Countries.find(cntry=>cntry.name==country).states
  }
  changeState(){

  }
  
}


