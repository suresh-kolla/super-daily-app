import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import{FormGroup,FormControl,Validators} from '@angular/forms'
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(public as:Router,public data:DataService) { }

  ngOnInit() {
  }
  

  loginform=new FormGroup({
    mobile:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    password:new FormControl( "",Validators.required),
  })
  dd;
 
 login(){

 this.data.checking(this.loginform.value).subscribe((res)=>{
   console.log(res)
    this.dd=res[0];
       if(this.dd != undefined){
        window.localStorage.setItem("firstname",this.dd.firstname)
        
        this.as.navigate(["mainpage/"])
       }
        else{
          alert("data not exits")
          this.loginform.reset();
          this.loginform.setValue({
            mobile:"9949773099",
            password:"ks123"
          })
         
          console.log(this.loginform)
          
        }
  })
 }
 cancel(){
   this.as.navigate(["/"])
 }
 
}
