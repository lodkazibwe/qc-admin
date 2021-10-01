import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './clients/add/add.component';
import { ViewComponent } from './clients/view/view.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
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


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'loanz', redirectTo: 'loanz/home', pathMatch: 'full'},
  { path: 'loanz',  component: HeaderComponent,
  children:[
    { path: 'home', component: HomeComponent},
    { path: 'clients/add', component: AddComponent},
    { path: 'clients/view', component: ViewComponent},//
    { path: 'clients/pending', component: ClientsPendingComponent},
    { path: 'clients/verified', component: ClientsVerifiedComponent},
    { path: 'clients/:id', component: ClientDetailsComponent},
    { path: 'product/add', component: AddProductComponent},
    { path: 'product/all', component: ViewAllComponent},
    { path: 'product/:id', component: ProductDetailComponent},
    {path: 'loan/pending', component: PendingComponent},
    {path: 'loan/add', component: AddLoanComponent},
    {path: 'loan/appraisal/:id', component: LoanAppraisalComponent},
    {path: 'loan/approved', component: ApprovedComponent},
    {path: 'loan/verified', component: VerifiedLoansComponent},
    {path: 'loan/outstanding', component: OutstandingComponent},
    {path: 'loan/due', component: LoansdueComponent},
    {path: 'loan/repay/:id', component:LoanRepayComponent},
    {path: 'user/add', component:AddUserComponent},
    {path: 'user/view', component:ViewUserComponent},
    {path: 'user/userTransactions', component:UserTransactionsComponent},
    {path: 'user/dateTransactions', component:DateTransactionsComponent},
    {path: 'user/myTransactions', component:MyTransactionsComponent},
    {path: 'account/all', component:AllAccountsComponent}
  ]
 },
 { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
