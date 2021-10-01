import { Injectable } from '@angular/core';
import {Account} from './account';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../appSettings';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }
  private allAccountsUrl = AppSettings.API_ENDPOINT+'data/allSaccoAccounts';

  
  allAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>(this.allAccountsUrl);

  }

}
