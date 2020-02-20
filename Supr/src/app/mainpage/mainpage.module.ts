import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { MainpageComponent } from './mainpage.component';
import { CalenderComponent } from './calender/calender.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [MainpageComponent, CalenderComponent,CartComponent],
  imports: [
    CommonModule,
    MainpageRoutingModule
  ]
})
export class MainpageModule { }
