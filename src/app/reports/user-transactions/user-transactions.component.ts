import { Component, OnInit } from '@angular/core';
import {Transaction} from '../transaction';
import {ReportService} from '../report.service';
import { Person } from 'src/app/user/person';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-user-transactions',
  templateUrl: './user-transactions.component.html',
  styleUrls: ['./user-transactions.component.css']
})
export class UserTransactionsComponent implements OnInit {

  transactions: Transaction[];
  users: Person[];
  currentUser: string = "";

  constructor(
    private reportService: ReportService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  onUserChanged(user: string): void {
    console.log(user);
    this.reportService.userTransactions(user)
    .subscribe(transactions=>this.transactions=transactions);
    
  }

  getUsers(): void {
    //this.reportService.userTransactions(2)
    this.userService.getUsers("ADMIN")
    .subscribe(users=>this.users=users);
  }


}
