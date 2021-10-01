import { Injectable } from '@angular/core';
import { ClientForm } from 'src/app/clients/clientForm';
import { Client } from 'src/app/clients/client';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Person} from './person';
import {AppSettings} from '../appSettings';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  client:Client;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  private userAddUrl = AppSettings.API_ENDPOINT+'profile/user/root/addAdmin';
  private getUsersUrl = AppSettings.API_ENDPOINT+"profile/user/admin/getAdmins";


  addUser(clientForm: ClientForm):  Observable<Client>{
    this.client=this.clientConverter(clientForm);
    return this.http.post<Client>(this.userAddUrl, this.client, this.httpOptions);
    
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

getUsers(role: string): Observable<Person[]> {
  //return of(CLIENTS.find(client => client.userId === id));
  return this.http.get<Person[]>(this.getUsersUrl);

}


}
