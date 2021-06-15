import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseGoals = [
  { title : 'Title 1', isActiveGoal : true },
  { title : 'Title 2 ', isActiveGoal : false },
  { title : 'Title 3 ', isActiveGoal : false }
  ]
}
