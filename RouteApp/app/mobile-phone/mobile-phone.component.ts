import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-phone',
  templateUrl: './mobile-phone.component.html',
  styleUrls: ['./mobile-phone.component.css']
})
export class MobilePhoneComponent implements OnInit {
  cart:any =[];
  mobiles: any;
    constructor() { 
      this.mobiles = [{
        name: 'Apple', cost:6000, rating:4}
        ,
       { name: 'Samsung', cost:15000, rating:3
      },{name: 'OnePLus', cost:20000, rating:4
     },{ name: 'Redmi', cost:12000, rating:3
     }]
    }

  ngOnInit(): void {
  }

}
