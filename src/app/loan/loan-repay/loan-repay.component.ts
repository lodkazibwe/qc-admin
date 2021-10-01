import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LoanPay} from '../loan-pay';
import { Location } from '@angular/common';
import { LoanService } from '../loan.service';
import { Loan } from '../loan';
import { Client } from 'src/app/clients/client';
import { Repayment } from '../repayment';
import { ClientService } from 'src/app/clients/client.service';
import { LoanTransaction } from 'src/app/loan-transaction';
import { ReportService } from 'src/app/reports/report.service';
import { Transaction } from 'src/app/reports/transaction';//TransactionList
import { TransactionList } from 'src/app/reports/transactionList';

@Component({
  selector: 'app-loan-repay',
  templateUrl: './loan-repay.component.html',
  styleUrls: ['./loan-repay.component.css']
})
export class LoanRepayComponent implements OnInit {
  loan: Loan;
  client: Client;
  transaction: LoanTransaction;
  transactions:Transaction[];
  repayments: Repayment[];
  amount: number;

  constructor(
    private loanService: LoanService,
    private clientService: ClientService,
    private reportService: ReportService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLoan();
    this.getRepayments();
    
  }

  getLoan(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.loanService.getLoan(id)
    .subscribe(loan => {
      this.loan=loan;
      this.getClient(loan);
      this.getLoanTransactions(loan.loanNumber);
    });
    
  }
  getClient(loan:Loan){
    this.clientService.getClientByName(loan.borrower)
    .subscribe(client => this.client =client);

  }

  getRepayments(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.loanService.getRepayments(id)
    .subscribe(repayments => this.repayments =repayments);
  }

  getLoanTransactions(loanNumber:string){
    this.reportService.loanTransactions(loanNumber)
    .subscribe(transactionList => this.transactions =transactionList.loanTransactions);

  }

  repay(){
    if(this.amount<<1000){
    this.transaction={
      acctFrom:this.client.userName, acctTo:"company", amount: this.amount, date: "2020-10-10",
      id:0, loanId:this.loan.id, status: "PENDING", transactionType: "CASH", userName: "admin"
    }   
    this.loanService.repayLoan(this.transaction)
    .subscribe(transaction => {
      this.getRepayments();
      //this.getLoanTransactions();
      this.getLoan();
    });
    this.amount=0;
    //console.log(this.transaction);

  }else{
    console.log("less");
  }
    

  }
}
