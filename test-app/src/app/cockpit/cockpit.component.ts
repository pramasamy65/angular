import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName: string;
  newServerContent: string;

  @Output() serverCreated = new EventEmitter<{name: string, content : string}>();
  @Output('bpCreated') bluePrintCeated = new EventEmitter<{name: string, content : string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    
    this.serverCreated.emit({
      name : this.newServerName,
      content : this.newServerContent
    });
    
    console.log("Elements Added");
  }

  onAddBluePrint() {

    this.bluePrintCeated.emit({
      name : this.newServerName,
      content : this.newServerContent
    });
    
  }

}
