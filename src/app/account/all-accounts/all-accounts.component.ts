import { Component, OnInit } from '@angular/core';
import {Account} from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent implements OnInit {
  accounts:Account[];

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(){
    this.accountService.allAccounts()
    .subscribe(accounts=>this.accounts=accounts);

  }

}
