import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan/loan.service';
import {LoanCount} from './loancount';
import {DueLoan} from 'src/app/loan/due-loan';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {
 loanCount: LoanCount;
 loans: DueLoan[];
 myDate: string="";
 curDate=new Date();

 

  constructor(
    private loanService: LoanService,
    private datePipe: DatePipe
  ) { 
    
  }

  ngOnInit(): void {
    this.myDate = this.datePipe.transform(this.curDate, 'yyyy-MM-dd');
    this.dueToday();
  }

  getLoanCount(){
    this.loanService.getLoanCount()
    .subscribe(loanCount=>this.loanCount=loanCount);
  }

  dueToday(){
    this.myDate = this.datePipe.transform(this.curDate, 'yyyy-MM-dd');
    this.loanService.getDueLoans(this.myDate)
      .subscribe(loans =>this.loans = loans);
      console.log(this.myDate);
      
  }


}
