import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentRole:string;
  userName: string;
  user:boolean=true;
  constructor(
    private router:Router,
    private location:Location,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
    let user = this.authenticationService.currentUserValue;
    if(user){
      this.currentRole=user.role;
      this.userName=user.name;
    this.userViews();
    }else{this.logout();}
    
    
    
  }

  redirectToAbout(){
    this.router.navigateByUrl("dashboard/about");
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
  userViews(){
    if(this.currentRole==="ADMIN"){
        this.user=false;
    }
  }

}
