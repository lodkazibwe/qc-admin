import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(                      
    private authenticationService: AuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
    this.authenticationService.logout();
  }
  submit(value){
    this.authenticationService.login(value.user,value.password)
  //.pipe(first())
  .subscribe(
    user => {
          window.location.pathname="loanz/home";

      //this.router.navigate([this.returnUrl]);
  },
  error => {
    //window.alert(error); h
     // this.error = error;
      //this.loading = false;
  });
  
}

}
