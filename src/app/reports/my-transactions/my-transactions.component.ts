import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.css']
})
export class MyTransactionsComponent implements OnInit {
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

      this.reportService.myTransactions(this.dateFrom, this.dateTo)
      .subscribe(transactions=>this.transactions=transactions);

    }
    
 
  }

}
