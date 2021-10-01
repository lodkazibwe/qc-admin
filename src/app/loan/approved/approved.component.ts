import { Component, OnInit } from '@angular/core';
import { Loan} from '../loan';
import {LoanService} from '../loan.service'

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {
  loans: Loan[];

  constructor(
    private loanService: LoanService
  ) { }

  ngOnInit(): void {
    this.getLoans();
    
  }

  getLoans(): void{
    this.loanService.getApprovedLoans()
    .subscribe(loans =>this.loans = loans);
  }

}
