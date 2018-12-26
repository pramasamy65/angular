
import { Component, Input } from '@angular/core';
import {CommunityUpdateService} from './service/community-update.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'HttpCommunityPostApp';
  websiteContent : string ;

  openTxtArea : boolean = false;

  newComments : string = "";

  myTextareaComments : string = ""; 
  

  viewContent: string;

  constructor(private communityUpdateService: CommunityUpdateService) {

    this.communityUpdateService.loginMintCommunity().subscribe(
      response => {
        this.websiteContent = response;
      }
    );
  }

  openTextArea(){
    this.openTxtArea = true; 
  }

  onCancel(){
    this.openTxtArea = false; 
  }

  onSubmitComments(){


    console.log("Comments Submitted");
  }
  
  ngOnInit() {
    this.communityUpdateService.loginMintCommunity().subscribe(response => {
      console.log(response);

      this.viewContent = response;

 
    });

  }
                                                               
}