import { Component, OnInit, Input} from '@angular/core';
import { CommentsService } from '../service/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: []
})
export class CommentsComponent implements OnInit {

  public comments : string[];

  @Input('newComments') newEnteredComments : string ;

  constructor(private commentsService : CommentsService) { }

  ngOnInit() {
    this.comments = this.commentsService.getAllComments();
  }

  onAddComments(){
    console.log("new Comment : " + this.newEnteredComments);
    this.comments.push(this.newEnteredComments);
  }
 

}
