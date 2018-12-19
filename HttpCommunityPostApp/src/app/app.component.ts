import { Component } from '@angular/core';
import {CommunityUpdateService} from './community-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpCommunityPostApp';

  constructor(private communityUpdateService : CommunityUpdateService){

  }

  ngOnInit(){
    this.communityUpdateService.loginMintCommunity();
  }
}


