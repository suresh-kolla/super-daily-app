import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { milkserviceService } from './milkservice.service';
import {Subject} from 'rxjs'
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
 cp;
  constructor( public ps:milkserviceService) { 
    this.ps.pevent.subscribe((e)=>{
      this.cp=e;
    })
  }

  ngOnInit() {
  }

  products=[
    {
    'name':'Heritage toned',
    'price':'23',
    'image':'/assets/download1.jpeg',
    'categeory':'Milk',
    'rating':'3.5'
  },
    {
      'name':' Heritage Double Toned',
      'price':'25',
      'image':'/assets/download2.jpeg',
      'categeory':'Milk',
      'rating':'3.7'
     },
     {
      'name':' Heritage Slim',
      'price':'27',
      'image':'/assets/download4.jpeg',
      'categeory':'Milk',
      'rating':'3.9'
     },
     {
      'name':' Heritage Longlife',
      'price':'30',
      'image':'/assets/download5.jpeg',
      'categeory':'Milk',
      'rating':'4.0'
     },
     {
      'name':' Heritage Fullcream',
      'price':'35',
      'image':'/assets/download.jpeg',
      'categeory':'Milk',
      'rating':'4.1'
     },
     {
      'name':' Heritage Goldencow',
      'price':'40',
      'image':'/assets/download3.jpeg',
      'categeory':'Milk',
      'rating':'4.0'
     },
     {
      'name':' Heritage Diarylife',
      'price':'30',
      'image':'/assets/images.jpeg',
      'categeory':'Milk',
      'rating':'4.0'
     }




]
;
update(i){
  this.ps.updatecurrentproduct(i)
  
}

addcart(){
  this.ps.done()
 

}

}
