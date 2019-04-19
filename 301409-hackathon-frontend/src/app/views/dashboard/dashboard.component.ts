import { Component, OnInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  headCountDisplay: boolean = false;
  uniqueVolunteeringDetails: boolean = false;
  uniqueVolunteeringDetailsBu: boolean = false;
  selectedParticiaptionMetric : string;

  onChange(event) {
    console.log(event.target.value);
    this.headCountDisplay = false;
    this.uniqueVolunteeringDetails = false;
    this.uniqueVolunteeringDetailsBu = false;
    if (event.target.value == 1) {
      this.headCountDisplay = true;
    } else if (event.target.value == 2) {
      this.selectedParticiaptionMetric = 'location';
      this.uniqueVolunteeringDetails = true;
    } else if (event.target.value == 3) {
      this.selectedParticiaptionMetric = 'businessUnit';
      this.uniqueVolunteeringDetailsBu = true;
    }
  }
}