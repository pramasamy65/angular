import { Component }from '@angular/core';


@Component({
selector : 'app-server',
templateUrl : './server.component.html',
styleUrls: []
})


export class ServerComponent { 

    serverId : number = 100;
    serverStatus : string = "Offline";

    getServerStatus(){
        return this.serverStatus;   
    }

}