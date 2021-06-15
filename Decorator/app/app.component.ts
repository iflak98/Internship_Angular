import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  PackageName : string = 'GoaTrip';
  outputCost:number = 0;


  doClick(PackageName :string)
  {
    this.PackageName = PackageName ;
    console.log(" do click called , change the name "+this.PackageName);
  }


  getCostFromChild(eventEmitterValue:number)
  {
    this.outputCost = eventEmitterValue;
  }
}