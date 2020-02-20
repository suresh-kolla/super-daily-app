import { Component, OnInit } from '@angular/core';
import { milkserviceService } from '../addproduct/milkservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  

  ngOnInit() {
  }

  cp;
  hai=[]
  constructor( public ps:milkserviceService) { 

    this.ps.pevent.subscribe((e)=>{
      this.cp=e;
      console.log(this.cp)
    })
     this.ps.getdata().subscribe((res)=>{
       this.hai.push(this.cp)
       
     
    })
  }
  add(){
    console.log("hai")
  }
  
}
