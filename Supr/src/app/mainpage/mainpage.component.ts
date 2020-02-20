import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor( public aa:Router) { };

   bb=window.localStorage.getItem('firstname');
  
  ngOnInit(){}
  logout():void{
    window.localStorage.clear()
    this.aa.navigate(['/'])
  }
}
