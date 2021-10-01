import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients-pending',
  templateUrl: './clients-pending.component.html',
  styleUrls: ['./clients-pending.component.css']
})
export class ClientsPendingComponent implements OnInit {
  clients : Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.clientService.pendingClients()
    .subscribe(clients=>this.clients=clients);
  }

}
