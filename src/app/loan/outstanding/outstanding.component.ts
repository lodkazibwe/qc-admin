import { Component, OnInit } from '@angular/core';
import {DueLoan} from '../due-loan';
import {LoanService} from '../loan.service';

@Component({
  selector: 'app-outstanding',
  templateUrl: './outstanding.component.html',
  styleUrls: ['./outstanding.component.css']
})
export class OutstandingComponent implements OnInit {
  loans: DueLoan[];

  constructor(
    private loanService: LoanService
  ) { }

  ngOnInit(): void {
    this.getDueLoans();
  }

  getDueLoans(): void{
    this.loanService.outstandingLoans()
    .subscribe(loans =>console.log(this.loans = loans));
  }
  
}
