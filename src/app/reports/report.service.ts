import { Injectable } from '@angular/core';
import {Transaction} from './transaction';
import {TransactionList} from './transactionList';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../appSettings';
import { AllTransactions } from './allTransactions';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  private transactionsUrl = AppSettings.API_ENDPOINT+'transaction/userTransactions/';
  private transDatesUrl = AppSettings.API_ENDPOINT+'transaction/admin/all/';
  private loanTUrl = AppSettings.API_ENDPOINT+'transaction/loan/admin/all/';
  private myTransUrl = AppSettings.API_ENDPOINT+'transaction/myTransactions/';///

  userTransactions(user: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsUrl+user);      
  }

  dateTransactions(dateFrom: string, dateTo: string): Observable<AllTransactions> {
    return this.http.get<AllTransactions>(this.transDatesUrl+dateFrom+"/"+dateTo);      
  }

  myTransactions(dateFrom: string, dateTo: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.myTransUrl+dateFrom+"/"+dateTo);      
  }

  loanTransactions(loanNumber: string): Observable<TransactionList>{
    return this.http.get<TransactionList>(this.loanTUrl+loanNumber);
  }

}
