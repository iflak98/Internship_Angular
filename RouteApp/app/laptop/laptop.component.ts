import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  cart:any =[];
laptops: any;
  constructor() { 
    this.laptops = [{
      name: 'Apple', cost:6000, rating:4}
      ,
     { name: 'Lenovo', cost:15000, rating:3
    },{name: 'HP', cost:20000, rating:4
   },{ name: 'Dell', cost:12000, rating:3
   }]
  }

  ngOnInit(): void {
  }

}
