import { Component, OnInit } from '@angular/core';
import { Loan} from '../loan';
import {LoanService} from '../loan.service'

@Component({
  selector: 'app-verified-loans',
  templateUrl: './verified-loans.component.html',
  styleUrls: ['./verified-loans.component.css']
})
export class VerifiedLoansComponent implements OnInit {
  loans: Loan[];

  constructor( private loanService: LoanService ) { }

  ngOnInit(): void {
    this.getLoans();
  }

  getLoans(): void{
    this.loanService.verifiedLoans()
    .subscribe(loans =>this.loans = loans);
  }

}
