import { Component, OnInit } from '@angular/core';
import {DueLoan} from '../due-loan';
import {LoanService} from '../loan.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-loansdue',
  templateUrl: './loansdue.component.html',
  styleUrls: ['./loansdue.component.css'],
  providers: [DatePipe]
})
export class LoansdueComponent implements OnInit {
  loans: DueLoan[];
  dueDate: string = "";
  myDate: string;
  curDate=new Date();

  constructor(
    private loanService: LoanService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.myDate = this.datePipe.transform(this.curDate, 'yyyy-MM-dd');
    this.getDueLoans(this.myDate);
    
  }


  onDateChanged(): void {
    if(!(this.dueDate==="")){
        this.getDueLoans(this.dueDate);    
    }
  }

  getDueLoans(date:string){

    this.loanService.getDueLoans(date)
      .subscribe(loans =>this.loans = loans);

  }

}
