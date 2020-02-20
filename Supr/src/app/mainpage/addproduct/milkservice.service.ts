import { Injectable,EventEmitter } from '@angular/core';
import {Subject, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class milkserviceService {
  [x: string]: any;

  constructor() { }
  pevent= new Subject();
  sub= new Subject();
  currentproduct={}
  updatecurrentproduct(product){

   this.currentproduct= product;
   
   this.pevent.next(this.currentproduct)
  }
  done(){
    this.sub.next(this.currentproduct)
  }
  getdata(): Observable<any>{
    return this.sub.asObservable();
  }

}