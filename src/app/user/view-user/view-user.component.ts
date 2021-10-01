import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  users:Person[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(){
    this.userService.getUsers("ADMIN")
    .subscribe(users=>this.users=users);
  }

}
