import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients-verified',
  templateUrl: './clients-verified.component.html',
  styleUrls: ['./clients-verified.component.css']
})
export class ClientsVerifiedComponent implements OnInit {
  clients : Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.clientService.openClients()
    .subscribe(clients=>this.clients=clients);
  }

}
