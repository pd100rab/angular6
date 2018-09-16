import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  //template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isButtonEnabled = false;
  isServerCreated = "No server is created yet!";
  serverName = "TestServer";
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.isButtonEnabled = true;
    }, 2000)
   }

  ngOnInit() {
  }

  onServerChange(){
    this.serverCreated = true;
    this.isServerCreated = "Hey! Server is created. " + this.serverName;
  }
  onUpdateServer(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
