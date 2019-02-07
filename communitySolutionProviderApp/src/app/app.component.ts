import { Component, ViewEncapsulation } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'communitySolutionProviderApp';


  getAnswer(f: NgForm){
    console.log("Called " );
    console.log( f.controls['question'].value);
  }
}
