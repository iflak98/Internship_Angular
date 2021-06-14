import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.component.html',
  styleUrls: ['./all-packages.component.css']
})
export class AllPackagesComponent implements OnInit {
  cart:any =[];
  packages: any;
  constructor() { 
    this.packages = [{
      name: 'Goa Package', cost:6000, rating:4, imagePath: 'assets/Image/Goa.jpg'}
      ,
     { name: 'Assam Package', cost:15000, rating:3, imagePath: 'assets/Image/Assam.jpg'
    },{name: 'Kerala Package', cost:20000, rating:4, imagePath: 'assets/Image/Kerala.jpg'
   },{ name: 'Kolkata Package', cost:12000, rating:3, imagePath: 'assets/Image/Kolkata-City-Profile.jpg'
   }]
    
  }

  ngOnInit(): void {
  }
  addToCart(packages:any){
    this.cart.push(packages);
    console.log(this.cart);
  }
  share(name:string){
    console.log(name+"shared");
  }

}
