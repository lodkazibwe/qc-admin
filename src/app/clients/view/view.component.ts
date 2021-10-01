import { Component, OnInit } from '@angular/core';
  import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  clients : Client[];
  //selectedClient: Client;

  constructor(private clientService: ClientService){};

  ngOnInit():void {
    this.getClients();
  }


  getClients(){
    this.clientService.getClients()
    .subscribe(clients=>this.clients=clients);
  }

  
}


