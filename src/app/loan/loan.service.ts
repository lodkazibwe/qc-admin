import { Injectable } from '@angular/core';
import { Loan} from './loan';
import {LoanDto} from './loan-dto';
import {DueLoan} from './due-loan';
import {LoanCount} from 'src/app/home/loancount';
import {AppraisalSheet} from './appraisal-sheet';
import { Repayment } from './repayment';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {LoanVerify} from './loan-verify';
import {LoanPay} from './loan-pay';
import {LoanTransaction} from '../loan-transaction'
import {AppSettings} from '../appSettings';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
  ) { }

  private loansUrl = AppSettings.API_ENDPOINT+'loan/admin/loanRequests';
  private verifyUrl = AppSettings.API_ENDPOINT+'loan/admin/checkedLoans';
  private loanUrl = AppSettings.API_ENDPOINT+'loan/admin/getLoan/';
  private addLoanUrl = AppSettings.API_ENDPOINT+'loan/add';
  private appraisalUrl =AppSettings.API_ENDPOINT+'loan/admin/getLoanAppraisal/';
  private approveUrl =AppSettings.API_ENDPOINT+'loan/admin/approve/';
  private approvedUrl = AppSettings.API_ENDPOINT+'loan/admin/approvedLoans';
  private releaseLoanUrl = AppSettings.API_ENDPOINT+'transaction/loan/admin/release';
  private outstandingLoansUrl = AppSettings.API_ENDPOINT+'loan/admin/outstandingLoans';
  private userLoansUrl = AppSettings.API_ENDPOINT+'loan/admin/outstandingLoans/';
  private dueLoansUrl = AppSettings.API_ENDPOINT+'loan/admin/dueLoans/';
  private repaymentUrl=AppSettings.API_ENDPOINT+'loan/admin/loanRepayments/';
  private repayLoanUrl= AppSettings.API_ENDPOINT+'transaction/loan/Repay';
  private loanCountUrl= AppSettings.API_ENDPOINT+'loan/admin/loansCount';
  private verifyLoanvUrl =AppSettings.API_ENDPOINT+'loan/admin/verify';


  getLoan(loanId:number): Observable<Loan>{
    return this.http.get<Loan>(this.loanUrl+loanId)
    .pipe(
      catchError(this.handleError<Loan>('getLoan'))
    );
    
  }
  
  getRepayments(loanId:number): Observable<Repayment[]>{
    return this.http.get<Repayment[]>(this.repaymentUrl+loanId)
    .pipe(
      catchError(this.handleError<Repayment[]>('getRepayments'))
    );
    
  }

  repayLoan(transaction:LoanTransaction):Observable<LoanTransaction>{
    return this.http.post<LoanTransaction>(this.repayLoanUrl, transaction, this.httpOptions )
    .pipe(
      catchError(this.handleError<LoanTransaction>("repayLoan"))
    );

  }


  getPendingLoans(): Observable<Loan[]>{
    return this.http.get<Loan[]>(this.loansUrl)
    .pipe(
      catchError(this.handleError<Loan[]>('getPendingLoans', []))
    );
    
  } 
  verifiedLoans(): Observable<Loan[]>{
    return this.http.get<Loan[]>(this.verifyUrl)
    .pipe(
      catchError(this.handleError<Loan[]>('getPendingLoans', []))
    );
    
  } 

  addLoan(loanDto: LoanDto): Observable<Loan>{
    return this.http.post<Loan>(this.addLoanUrl, loanDto, this.httpOptions )
    .pipe(
      catchError(this.handleError<Loan>("addLoan"))
    );

  }
  getAppraisal(id: number): Observable<AppraisalSheet>{
    return this.http.get<AppraisalSheet>(this.appraisalUrl+id)
    .pipe(
      catchError(this.handleError<AppraisalSheet>('getAppraisal'))
    );

  }

 verifyLoan(verifyLoan: LoanVerify): Observable<Loan>{
  return this.http.put<Loan>(this.verifyLoanvUrl, verifyLoan, this.httpOptions)
 .pipe(
   catchError(this.handleError<Loan>('verify'))
 );

}

  approveLoan(id: number): Observable<Loan>{
     return this.http.put<Loan>(this.approveUrl+id, "",this.httpOptions)
    .pipe(
      catchError(this.handleError<Loan>('approveLoan'))
    );

  }

  getApprovedLoans(): Observable<Loan[]>{
    return this.http.get<Loan[]>(this.approvedUrl)
    .pipe(
      catchError(this.handleError<Loan[]>('getApprovedLoans', []))
    );
  } 

  releaseLoan(loanPay: LoanPay): Observable<LoanTransaction>{
    return this.http.put<LoanTransaction>(this.releaseLoanUrl, loanPay,this.httpOptions)
   .pipe(
     catchError(this.handleError<LoanTransaction>('releaseLoan'))
   );

 }

 outstandingLoans(): Observable<DueLoan[]>{
  return this.http.get<DueLoan[]>(this.outstandingLoansUrl)
  .pipe(
    catchError(this.handleError<DueLoan[]>('outstandingLoans', []))
  );
} 

userLoans(borrower: string): Observable<DueLoan[]>{
  return this.http.get<DueLoan[]>(this.userLoansUrl+borrower)
  .pipe(
    catchError(this.handleError<DueLoan[]>('userLoans', []))
  );
} 

getDueLoans(dat:string): Observable<DueLoan[]>{
  return this.http.get<DueLoan[]>(this.dueLoansUrl+dat)
  .pipe(
    catchError(this.handleError<DueLoan[]>('dueLoans', []))
  );
} 

getLoanCount(): Observable<LoanCount>{
  return this.http.get<LoanCount>(this.loanCountUrl)
} 


  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      if (error.error instanceof ErrorEvent){
        this.log(`${operation} Error, Not Found: ${error.error.message}`);
    } else {

      switch (error.status) {
        case 404: {
            this.log(`${operation} failed, Not Found: ${error.error.message}`);
        }
        case 403: {
          this.log(`${operation} Access Denied: ${error.error.message}`);
        }
        case 500: {
          this.log(`${operation} Internal Server Error`);
        }
        case 401: {
          this.log(`${operation} Unauthorized`);
        }
        default: {
          this.log(`${operation} Unknown Server Error: ${error.error.message}`);
        }}
      } // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`LoanService: ${message}`);
  }

}
