import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoanService } from 'src/app/loan/loan.service';
import { DueLoan } from 'src/app/loan/due-loan';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  
  verifyBtn:boolean=false;

  client : Client;
  loans: DueLoan[];

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private location: Location,
    private loanService: LoanService
  ) {}

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(id)
      .subscribe(client => {
        this.client = client;
        this.getLoans(client.userName);
        this.showButton(client.status);
      });
  }

  getLoans(borrower: string): void {  
    this.loanService.userLoans(borrower)
      .subscribe(loans => this.loans = loans);
  }

  goBack(): void {
    this.location.back();
  }

  showButton(status: string){
    if(status==="PENDING"){
      this.verifyBtn =true
    }else{this.verifyBtn=false}
  }

  verify(){
    this.verifyBtn=false
    this.clientService.verifyUser(this.client.userId)
    .subscribe(client => {
      this.client = client;
      this.showButton(client.status);
    });
    console.log("verified");
  }

}
