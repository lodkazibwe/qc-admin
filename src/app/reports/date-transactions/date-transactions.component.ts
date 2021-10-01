import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Transaction } from '../transaction';//
import { AllTransactions } from '../allTransactions';

@Component({
  selector: 'app-date-transactions',
  templateUrl: './date-transactions.component.html',
  styleUrls: ['./date-transactions.component.css']
})
export class DateTransactionsComponent implements OnInit {
  dateFrom: string = "";
  dateTo: string = "";
  transactions: Transaction[];

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit(): void {
  }


  onUserChanged(): void {

    if(!(this.dateFrom==="") && !(this.dateTo==="") ){

      this.reportService.dateTransactions(this.dateFrom, this.dateTo)
      .subscribe(allTransactions=>this.transactions=allTransactions.transactions);

    }
    
 
  }
}
