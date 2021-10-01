import { Component, OnInit } from '@angular/core';
import { Loan} from '../loan';
import {LoanService} from '../loan.service'

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  loans: Loan[];

  constructor(
    private loanService: LoanService
  ) { }

  ngOnInit(): void {
    this.getLoans();
  }

  getLoans(): void{
    this.loanService.getPendingLoans()
    .subscribe(loans =>this.loans = loans);
  }
  
}
