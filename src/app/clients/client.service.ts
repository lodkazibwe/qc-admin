import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ClientForm } from './clientForm';
import { catchError, map, tap } from 'rxjs/operators';
import {AppSettings} from '../appSettings';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  //c//lient= new Client("err","eee","rrr",);
  client:Client;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
  ) { }
  private clientsUrl = AppSettings.API_ENDPOINT+'profile/user/admin/getAll';
  private clientUrl = AppSettings.API_ENDPOINT+'profile/user/admin/get/';
  private getByNamerl = AppSettings.API_ENDPOINT+'profile/user/admin/getByName/';
  private clientAddUrl = AppSettings.API_ENDPOINT+'profile/user/register';///
  private pendingClientsUrl = AppSettings.API_ENDPOINT+'profile/user/admin/getPendingUsers';
  private vrifiedClientsUrl = AppSettings.API_ENDPOINT+'profile/user/admin/getOpenUsers';
  private vrifyUserUrl = AppSettings.API_ENDPOINT+'profile/user/admin/verify/';
///{userId}

  getClients(): Observable <Client[]> {
    return this.http.get<Client[]>(this.clientsUrl)
    .pipe(
      catchError(this.handleError<Client[]>('getClients', []))
    );
    
  }

  pendingClients(): Observable <Client[]> {
    return this.http.get<Client[]>(this.pendingClientsUrl)
    .pipe(
      catchError(this.handleError<Client[]>('getClients', []))
    );
    
  }

  openClients(): Observable <Client[]> {
    return this.http.get<Client[]>(this.vrifiedClientsUrl)
    .pipe(
      catchError(this.handleError<Client[]>('getClients', []))
    );
    
  }
  
  getClient(id: number): Observable<Client> {
    //return of(CLIENTS.find(client => client.userId === id));
    return this.http.get<Client>(this.clientUrl+id)
    .pipe(
      catchError(this.handleError<Client>('getClient'))
    );
  }

  getClientByName(userName: string): Observable<Client>{
    return this.http.get<Client>(this.getByNamerl+userName)
    .pipe(
      catchError(this.handleError<Client>('getClientByName'))
    );

  }

  addClient(clientForm: ClientForm):  Observable<Client>{
    this.client=this.clientConverter(clientForm);
    console.log(this.client);
    return this.http.post<Client>(this.clientAddUrl, this.client, this.httpOptions)
    .pipe(
      catchError(this.handleError<Client>('addClient'))
    );
  }

  verifyUser(id: number): Observable<Client>{
    return this.http.put<Client>(this.vrifyUserUrl+id, "", this.httpOptions)
    .pipe(
      catchError(this.handleError<Client>('addClient'))
    );

  }


  clientConverter(clientForm: ClientForm){
   this.client ={
     userId:1, userName:clientForm.mobile, status: "OPEN", 
     accountDto:{id:1, memberNo:"M001", pendingFee:20000, position:"MEMBER", totalSavings:0, totalShares:0, walletAmount:0}, 
     bankDto:null, 
     workDto:{basicSalary:clientForm.salary, companyName:clientForm.company, employeeId:"E01", job:clientForm.job,     
              id:1, payrollSaving:0, payrollShares:0, toe:"PERMANENT", workStation:clientForm.workStation},
     personDto:{dob:clientForm.dob, email:clientForm.email, firstName:clientForm.firstName, gender:clientForm.gender,
                lastName:clientForm.lastName, id:1, mobile:clientForm.mobile, nin:clientForm.nin, residence:clientForm.residence},
     nextOfKinDto: {contact: null, name: null, relationship:null }
   }
   return this.client;
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      if (error.error instanceof ErrorEvent){
        this.log(`${operation} Error, Not Found: ${error.error.message}`);
    } else {

      switch (error.status) {
        case 404: {
            this.log(`${operation} failed, Not Found: ${error.message}`);
        }
        case 403: {
          this.log(`${operation} Access Denied: ${error.message}`);
        }
        case 500: {
          this.log(`${operation} Internal Server Error: ${error.message}`);
        }
        default: {
          this.log(`${operation} Unknown Server Error: ${error.message}`);
        }}
      }


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

 
 

  private log(message: string) {
    console.log(`ClientService: ${message}`);
  }


}
