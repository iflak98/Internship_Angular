import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  cart:any =[];
cameras: any;
  constructor() { 
    this.cameras = [{
      name: 'nikon', cost:6000, rating:4}
      ,
     { name: 'canon', cost:15000, rating:3
    },{name: 'kotak', cost:20000, rating:4
   }]
  }

  ngOnInit(): void {
  }
  addToCart(cameras:any){
    this.cart.push(cameras);
    console.log(this.cart);
  }
}
