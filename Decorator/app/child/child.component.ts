import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input()  childName:string = '';

  @Output() cost = new EventEmitter<number>(); // actual property to be passed to parent-component
  

  constructor() { }

  ngOnInit(): void {
  }


  changeCost(inputCost:string)
  {
     let newCost:number  = parseInt(inputCost);
     console.log(" Inside child component :- "+newCost);
     
     this.cost.emit(newCost);

  }

}