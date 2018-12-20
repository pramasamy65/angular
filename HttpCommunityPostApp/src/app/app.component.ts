
import { CommunityUpdateService } from './community-update.service';
import { Observable } from 'rxjs';
import { Component, Renderer2, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'HttpCommunityPostApp';

  viewContent: string;

  constructor(private communityUpdateService: CommunityUpdateService, private renderer: Renderer2, private elRef: ElementRef) {

  }

  ngOnInit() {
    this.communityUpdateService.loginMintCommunity().subscribe(response => {
      console.log(response);

      this.viewContent = response;

 
    });

  }
                                                               
}