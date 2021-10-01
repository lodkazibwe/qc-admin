import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LoanPay} from '../loan-pay';//
import {LoanVerify} from '../loan-verify';
import { Location } from '@angular/common';
import { LoanService } from '../loan.service';
import {AppraisalSheet} from '../appraisal-sheet';

@Component({
  selector: 'app-loan-appraisal',
  templateUrl: './loan-appraisal.component.html',
  styleUrls: ['./loan-appraisal.component.css']
})
export class LoanAppraisalComponent implements OnInit {
  appraisalSheet: AppraisalSheet;
  verifyBtn:boolean=false;
  approveBtn:boolean=false;
  releaseBtn:boolean=false;
  loanPay: LoanPay;
  loanVerify:LoanVerify;

  constructor(
    private loanService: LoanService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAppraisal();   
  }

  showButton(status:String){
    if(status==="APPROVED"){
      this.releaseBtn=true;
    }else if(status==="CHECKED"){
      this.approveBtn=true;
    }else if(status==="PENDING"){
      this.verifyBtn=true;
    }else{

    }
  }

  getAppraisal(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.loanService.getAppraisal(id)
    .subscribe(appraisalSheet => {
      this.appraisalSheet=appraisalSheet;
      this.showButton(appraisalSheet.loanRequest.status);

    });
    
  }

  approve(){
    this.approveBtn=false;
    this.loanService.approveLoan(this.appraisalSheet.loanRequest.id)
    .subscribe(loan => {
      this.appraisalSheet.loanRequest=loan;
      this.showButton(loan.status);

    });
      
  }

  release(){
    this.releaseBtn=false;
    this.loanPay={amount: 0, loanId: this.appraisalSheet.loanRequest.id}
    this.loanService.releaseLoan(this.loanPay)
      .subscribe(transaction => this.location.back);

  }

  verify(rDate: string){
    this.verifyBtn=false;
    this.loanVerify={id: this.appraisalSheet.loanRequest.id, firstRepayDate: rDate, remarks: "verified"}
    this.loanService.verifyLoan(this.loanVerify)
    .subscribe(loan => {
      this.appraisalSheet.loanRequest=loan;
      this.showButton(loan.status);

    });

  }

}
