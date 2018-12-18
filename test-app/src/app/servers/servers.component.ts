import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector : '.app-servers',
  //selector : '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowedNewServer = false;
  serverName = "Test Server";
  serverCreationStatus = "No Server Created";
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() { 

    setTimeout(()=>{
      this.allowedNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this. serverCreationStatus = " Server Created with name : "  + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event : Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    
  }

}