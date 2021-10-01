import { Component, OnInit } from '@angular/core';
import { ClientForm } from 'src/app/clients/clientForm';
import {UserService} from '../user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  private currentTab:string ="utab1";
  prevBtn:boolean=false;
  nextBtn:boolean=false;
  submitBtn:boolean=false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.nextBtn=true;
    this.showTab();
    document.getElementById("step1").className+=" active";
  }

  showTab() {
    document.getElementById(this.currentTab).className+="active";
  }

  submit(form: ClientForm){
    this.userService.addUser(form).subscribe(user => this.nextTab());
}

  nextTab(){
    document.getElementById("utab1").className="tab";
    document.getElementById("utab2").className="tab";
    document.getElementById("utab3").className="tab";
      this.prevBtn=false;
      this.nextBtn=false;
      this.submitBtn=false;
      document.getElementById("step1").className="step";
      document.getElementById("step2").className="step";
      document.getElementById("step3").className="step";
    if (this.currentTab === "utab1") {
      document.getElementById("nextBtn").innerHTML="Next";
      document.getElementById("formTitle").innerHTML="... personal info";
      document.getElementById("step1").className+=" finish";
      document.getElementById("step2").className+=" active";
      this.prevBtn=true;
      this.nextBtn=true;
      this.currentTab="utab2";
      this.showTab();
    } else if(this.currentTab === "utab2"){
      document.getElementById("formTitle").innerHTML="Work info";
      //document.getElementById("nextBtn").innerHTML="Submit";
      document.getElementById("step1").className+=" finish";
      document.getElementById("step2").className+=" finish";
      document.getElementById("step3").className+=" active";
      this.prevBtn=true;
      this.nextBtn=false;
      this.submitBtn=true;
      this.currentTab="utab3";
      this.showTab();
      
    }else if(this.currentTab === "utab3"){
      this.nextBtn=true; 
      this.currentTab="utab1";
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
    document.getElementById("utab1").className="tab";
    document.getElementById("utab2").className="tab";
    document.getElementById("utab3").className="tab";
    this.prevBtn=false;
    this.nextBtn=false;
    this.submitBtn=false;
      document.getElementById("step1").className="step";
      document.getElementById("step2").className="step";
      document.getElementById("step3").className="step";
    if (this.currentTab === "utab2") {
      document.getElementById("formTitle").innerHTML="Personal info";
      document.getElementById("nextBtn").innerHTML="Next";
      document.getElementById("step1").className+=" active";
      this.nextBtn=true;
      this.currentTab="utab1";
      this.showTab();
    } else if(this.currentTab==="utab3"){
      document.getElementById("formTitle").innerHTML="... personal info";
      //document.getElementById("nextBtn").innerHTML="Next";
      document.getElementById("step1").className+=" finish";
      document.getElementById("step2").className+=" active";
      this.nextBtn=true;
      this.prevBtn=true;
      this.currentTab="utab2";
      this.showTab();
    }else{
      this.showTab();
      //this.nextBtn=true;
      //this.submitBtn=true;
    }

  }


}
