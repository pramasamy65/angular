
import { Component, Input, ViewChild } from '@angular/core';
import { CommunityUpdateService } from './service/community-update.service';
import { CommentsComponent } from './comments/comments.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Community Comments Post App';
  websiteContent: string;

  showTxtArea: boolean = false;
  myTextareaComments: string = "";

  @ViewChild(CommentsComponent) childcmp: CommentsComponent;

  constructor(private communityUpdateService: CommunityUpdateService) {
  }

  showTextArea() {
    this.showTxtArea = true;
  }

  onCancel() {
    this.showTxtArea = false;
  }

  onSubmitComments() {

    this.childcmp.onAddComments();
    console.log("Comments Submitted");
  }

  ngOnInit() {
    this.communityUpdateService.loginMintCommunity().subscribe(response => {
      //console.log(response);
      this.websiteContent = response;
    });

  }

}