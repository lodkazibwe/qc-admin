import { Component, OnInit } from '@angular/core';
import { ClientForm } from '../clientForm';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})



export class AddComponent implements OnInit {

  private currentTab:string ="tab1";
  prevBtn:boolean=false;
  nextBtn:boolean=false;
  submitBtn:boolean=false;

  constructor(private clientService: ClientService) { }


  ngOnInit(): void {
    this.nextBtn=true; 
    this.showTab();
    document.getElementById("step1").className+=" active";
    
  }

  submit(form: ClientForm){
      this.clientService.addClient(form).subscribe(client => this.nextTab());
       
      // routerLink='/loanz/clients/view'
      //location.pathname="/loanz/clients/view";
  }

  showTab() {
    document.getElementById(this.currentTab).className+="active";
  }

  nextTab(){
    document.getElementById("tab1").className="tab";
    document.getElementById("tab2").className="tab";
    document.getElementById("tab3").className="tab";
      this.prevBtn=false;
      this.nextBtn=false;
      this.submitBtn=false;
      document.getElementById("step1").className="step";
      document.getElementById("step2").className="step";
      document.getElementById("step3").className="step";
    if (this.currentTab === "tab1") {
      document.getElementById("nextBtn").innerHTML="Next";
      document.getElementById("formTitle").innerHTML="... personal info";
      document.getElementById("step1").className+=" finish";
      document.getElementById("step2").className+=" active";
      this.prevBtn=true;
      this.nextBtn=true;
      this.currentTab="tab2";
      this.showTab();
    } else if(this.currentTab === "tab2"){
      document.getElementById("formTitle").innerHTML="Work info";
      //document.getElementById("nextBtn").innerHTML="Submit";
      document.getElementById("step1").className+=" finish";
      document.getElementById("step2").className+=" finish";
      document.getElementById("step3").className+=" active";
      this.prevBtn=true;
      this.nextBtn=false;
      this.submitBtn=true;
      this.currentTab="tab3";
      this.showTab();
      
    }else if(this.currentTab === "tab3"){
      this.nextBtn=true; 
      this.currentTab="tab1";
    this.showTab();
    document.getElementById("step1").className+=" active";
    document.getElementById("formTitle").innerHTML="Personal info";

    }else{
      this.prevBtn=true;
      this.nextBtn=true;
      this.showTab();
    }

  }
  prevTab(){
    document.getElementById("tab1").className="tab";
    document.getElementById("tab2").className="tab";
    document.getElementById("tab3").className="tab";
    this.prevBtn=false;
    this.nextBtn=false;
    this.submitBtn=false;
      document.getElementById("step1").className="step";
      document.getElementById("step2").className="step";
      document.getElementById("step3").className="step";
    if (this.currentTab === "tab2") {
      document.getElementById("formTitle").innerHTML="Personal info";
      document.getElementById("nextBtn").innerHTML="Next";
      document.getElementById("step1").className+=" active";
      this.nextBtn=true;
      this.currentTab="tab1";
      this.showTab();
    } else if(this.currentTab==="tab3"){
      document.getElementById("formTitle").innerHTML="... personal info";
      //document.getElementById("nextBtn").innerHTML="Next";
      document.getElementById("step1").className+=" finish";
      document.getElementById("step2").className+=" active";
      this.nextBtn=true;
      this.prevBtn=true;
      this.currentTab="tab2";
      this.showTab();
    }else{
      this.showTab();
      //this.nextBtn=true;
      //this.submitBtn=true;
    }

  }



}
