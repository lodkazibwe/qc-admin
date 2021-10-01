import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/clients/client';
import { LoanForm } from '../loan-form';
import { LoanDto } from '../loan-dto';
import { ClientService } from 'src/app/clients/client.service';
import {Product} from 'src/app/product/product'
import { ProductService } from 'src/app/product/product.service';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {
  private currentTab:string ="ltab1";
  prevBtn:boolean=false;
  nextBtn:boolean=false;
  submitBtn:boolean=false;
  products: Product[];
  borrowers: Client[];
  currentBorrower: string = "";
  currentGuarantor: string = "";
  selectedBorrower: Client;
  private loanDto: LoanDto;

  constructor(
    private productService: ProductService,
    private clientService: ClientService,
    private loanService: LoanService
  ) { }

  ngOnInit(): void {
    this.nextBtn=true; 
    this.getProducts();
    this.getBorrowers();
    this.showTab();
    document.getElementById("step1").className+=" active";
  }

  getProducts(){
    this.productService.getProducts()
    .subscribe(products=>this.products=products);
  }
  showTab(){
    document.getElementById(this.currentTab).className+="active";
  }

  
    submit(form: LoanForm){
      //console.log(this.toLoanDto(form));
      this.loanService.addLoan(this.toLoanDto(form)).subscribe(loan => this.nextTab()); 
  }
  toLoanDto(form: LoanForm){
    /*this.loanDto={borrower: form.borrower, disbursedBy: "CASH", duration: form.duration, durationWeeks: form.durationWeeks, 
    firstRepaymentDate: form.firstRepaymentDate, handlingMode: "NORMAL", principal: form.principal, 
    productId: +form.productId, remarks: form.remarks, repaymentCycle: form.repaymentCycle, repaymentMode: "SYSTEM"
    ,topUpMode: "NORMAL", transferCharge: 0, 
    securityDto:{ description: form.description, file: form.file, guarantor: form.guarantor, id: 0 }
    }*/
   return null;
  }
  

  getBorrowers(){
    this.clientService.getClients()
    .subscribe(borrowers=>this.borrowers=borrowers);
  }

  onBorrowerChanged(borrowerName: string) {
    //console.log(borrowerName);
    this.selectedBorrower = this.getSelectedBorrowerByName(borrowerName);
}

getSelectedBorrowerByName(selectedName: string): Client {
    return this.borrowers.find(borrower => borrower.userName === selectedName);
}


  nextTab(){
    document.getElementById("ltab1").className="tab";
    document.getElementById("ltab2").className="tab";
    document.getElementById("ltab3").className="tab";
      this.prevBtn=false;
      this.nextBtn=false;
      this.submitBtn=false;
      document.getElementById("step1").className="step";
      document.getElementById("step2").className="step";
      document.getElementById("step3").className="step";
    if (this.currentTab === "ltab1") {
      document.getElementById("nextBtn").innerHTML="Next";
      document.getElementById("formTitle").innerHTML="Repayment and Remarks";
      document.getElementById("step1").className+=" finish";
      document.getElementById("step2").className+=" active";
      this.prevBtn=true;
      this.nextBtn=true;
      this.currentTab="ltab2";
      this.showTab();
    } else if(this.currentTab === "ltab2"){
      document.getElementById("formTitle").innerHTML="Security";
      document.getElementById("step1").className+=" finish";
      document.getElementById("step2").className+=" finish";
      document.getElementById("step3").className+=" active";
      this.prevBtn=true;
      this.nextBtn=false;
      this.submitBtn=true;
      this.currentTab="ltab3";
      this.showTab();
      
    }else if(this.currentTab === "ltab3"){
      this.nextBtn=true; 
      this.currentTab="ltab1";
    this.showTab();
    document.getElementById("step1").className+=" active";
    document.getElementById("formTitle").innerHTML="Loan details";

    }else{
      this.prevBtn=true;
      this.nextBtn=true;
      this.showTab();
    }
  }

  prevTab(){
    document.getElementById("ltab1").className="tab";
    document.getElementById("ltab2").className="tab";
    document.getElementById("ltab3").className="tab";
    this.prevBtn=false;
    this.nextBtn=false;
    this.submitBtn=false;
      document.getElementById("step1").className="step";
      document.getElementById("step2").className="step";
      document.getElementById("step3").className="step";
    if (this.currentTab === "ltab2") {
      document.getElementById("formTitle").innerHTML="Loan details";
      document.getElementById("nextBtn").innerHTML="Next";
      document.getElementById("step1").className+=" active";
      this.nextBtn=true;
      this.currentTab="ltab1";
      this.showTab();
    } else if(this.currentTab==="ltab3"){
      document.getElementById("formTitle").innerHTML="Repayment and Remarks";
      //document.getElementById("nextBtn").innerHTML="Next";
      document.getElementById("step1").className+=" finish";
      document.getElementById("step2").className+=" active";
      this.nextBtn=true;
      this.prevBtn=true;
      this.currentTab="ltab2";
      this.showTab();
    }else{
      this.showTab();
    }}
  
}
