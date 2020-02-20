import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import{ FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public ab:Router) { }

  ngOnInit() {
  }
  adminform=new FormGroup({
    name:new FormControl("",Validators.required),
    email:new FormControl("",[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3}$')]),
    mobilenumber:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    password:new FormControl( "",[Validators.required,Validators.minLength(6)]),

  })

}




