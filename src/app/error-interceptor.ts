import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private router:Router,
        private authenticationService: AuthenticationService) { }
    messege:string;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
             
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                //this.authenticationService.logout();
                //location.reload(true);
                this.messege = "invalid user details";
                this.authenticationService.logout();
                this.router.navigate(['/login']);
                
            }else if(err.status === 400){
                this.authenticationService.logout();
                //location.reload(true);
                this.messege = "bad request or user not authorised";
            }else if(err.status === 403){
                this.authenticationService.logout();
                this.router.navigate(['/login']);
            }
            else{this.messege = err.error.message}
            
            
            //const error = this.messege || err.statusText;
            const error = this.messege+" -("+ err.status+")";
            window.alert(error);
            return throwError(error);
        }))
    }
}