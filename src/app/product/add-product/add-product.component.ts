import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private currentTab:string ="tab4";
  prevBtn:boolean=false;
  nextBtn:boolean=false;
  submitBtn:boolean=false;


  constructor(
    private productService: ProductService
    
  ) { }

  ngOnInit(): void {
    this.nextBtn=true; 
    this.showTab();
    document.getElementById("step1").className+=" active";
    
    
  }

  showTab(){
    document.getElementById(this.currentTab).className+="active";
  }

  submit(form: Product){
    this.productService.addProduct(form).subscribe(product => this.nextTab());
  }

  nextTab(){
    document.getElementById("tab4").className="tab";
    document.getElementById("tab5").className="tab";
    document.getElementById("tab6").className="tab";
      this.prevBtn=false;
      this.nextBtn=false;
      this.submitBtn=false;
      document.getElementById("step1").className="step";
      document.getElementById("step2").className="step";
      document.getElementById("step3").className="step";
    if (this.currentTab === "tab4") {
      document.getElementById("nextBtn").innerHTML="Next";
      document.getElementById("formTitle").innerHTML="... loan product info";
      document.getElementById("step1").className+=" finish";
      document.getElementById("step2").className+=" active";
      this.prevBtn=true;
      this.nextBtn=true;
      this.currentTab="tab5";
      this.showTab();
    } else if(this.currentTab === "tab5"){
      document.getElementById("formTitle").innerHTML="... loan product info";
      document.getElementById("step1").className+=" finish";
      document.getElementById("step2").className+=" finish";
      document.getElementById("step3").className+=" active";
      this.prevBtn=true;
      this.nextBtn=false;
      this.submitBtn=true;
      this.currentTab="tab6";
      this.showTab();
      
    }else if(this.currentTab === "tab6"){
      this.nextBtn=true; 
      this.currentTab="tab4";
    this.showTab();
    document.getElementById("step1").className+=" active";
    document.getElementById("formTitle").innerHTML="Loan Product info";

    }else{
      this.prevBtn=true;
      this.nextBtn=true;
      this.showTab();
    }

  }

  prevTab(){
    document.getElementById("tab4").className="tab";
    document.getElementById("tab5").className="tab";
    document.getElementById("tab6").className="tab";
    this.prevBtn=false;
    this.nextBtn=false;
    this.submitBtn=false;
      document.getElementById("step1").className="step";
      document.getElementById("step2").className="step";
      document.getElementById("step3").className="step";
    if (this.currentTab === "tab5") {
      document.getElementById("formTitle").innerHTML="Loan Product info";
      document.getElementById("nextBtn").innerHTML="Next";
      document.getElementById("step1").className+=" active";
      this.nextBtn=true;
      this.currentTab="tab4";
      this.showTab();
    } else if(this.currentTab==="tab6"){
      document.getElementById("formTitle").innerHTML="... loan product info";
      document.getElementById("step1").className+=" finish";
      document.getElementById("step2").className+=" active";
      this.nextBtn=true;
      this.prevBtn=true;
      this.currentTab="tab5";
      this.showTab();
    }else{
      this.showTab();
    }

  }


}
