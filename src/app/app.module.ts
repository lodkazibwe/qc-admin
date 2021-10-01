import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from './error-interceptor';
import { JwtInterceptor } from './jwt-interceptor';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './clients/add/add.component';
import { ViewComponent } from './clients/view/view.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ViewAllComponent } from './product/view-all/view-all.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { AddLoanComponent } from './loan/add-loan/add-loan.component';
import { PendingComponent } from './loan/pending/pending.component';
import { LoanAppraisalComponent } from './loan/loan-appraisal/loan-appraisal.component';
import { ApprovedComponent } from './loan/approved/approved.component';
import { OutstandingComponent } from './loan/outstanding/outstanding.component';
import { LoansdueComponent } from './loan/loansdue/loansdue.component';
import { LoanRepayComponent } from './loan/loan-repay/loan-repay.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { UserTransactionsComponent } from './reports/user-transactions/user-transactions.component';
import { DateTransactionsComponent } from './reports/date-transactions/date-transactions.component';
import { MyTransactionsComponent } from './reports/my-transactions/my-transactions.component';
import { ClientsPendingComponent } from './clients/clients-pending/clients-pending.component';
import { ClientsVerifiedComponent } from './clients/clients-verified/clients-verified.component';
import { VerifiedLoansComponent } from './loan/verified-loans/verified-loans.component';
import { AllAccountsComponent } from './account/all-accounts/all-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    AddComponent,
    ViewComponent,
    ClientDetailsComponent,
    AddProductComponent,
    ViewAllComponent,
    ProductDetailComponent,
    AddLoanComponent,
    PendingComponent,
    LoanAppraisalComponent,
    ApprovedComponent,
    OutstandingComponent,
    LoansdueComponent,
    LoanRepayComponent,
    AddUserComponent,
    ViewUserComponent,
    UserTransactionsComponent,
    DateTransactionsComponent,
    MyTransactionsComponent,
    ClientsPendingComponent,
    ClientsVerifiedComponent,
    VerifiedLoansComponent,
    AllAccountsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

