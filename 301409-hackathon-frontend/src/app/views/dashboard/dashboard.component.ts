import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  headCountDisplay : boolean = false;

  onChange(event) {
    console.log(event.target.value);
    this.headCountDisplay = false;
    if(event.target.value==1){
      this.headCountDisplay = true;
    }
   
}
  
}