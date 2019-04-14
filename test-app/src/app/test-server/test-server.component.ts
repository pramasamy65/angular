import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-server',
  templateUrl: './test-server.component.html',
  styleUrls: ['./test-server.component.css']
})
export class TestServerComponent implements OnInit {

  serverElements = [{type: 'server', name : '1 Test Server', content : 'Test Conent 1'}];

  constructor() { }

  ngOnInit() {
  }

  onServerCreated(serverData : {name : string, content : string}){
    this.serverElements.push({
      type : 'server',
      name : serverData.name,
      content : serverData.content
    });
  }

  onbpCreated(serverData : {name : string, content : string}){
    this.serverElements.push({
      type : 'blueprint',
      name : serverData.name,
      content : serverData.content
    });
  }
}
