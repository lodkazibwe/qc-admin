import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { environment } from '@environments/environment';
import { User } from './user';
import {AppSettings} from './appSettings';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private authUrl= AppSettings.API_ENDPOINT+'authenticate/get/authToken';

    constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    //if(this.currentUserSubject.value.role==="USER"){window.alert("no")}
    return this.currentUserSubject.value;
}

login(username: string, password: string) {
  return this.http.post<any>(this.authUrl, { "userName":username, "password":password })
  .pipe(map(user => {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return user;
}));
}

logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
}




}
