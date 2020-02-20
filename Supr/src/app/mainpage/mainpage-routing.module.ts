import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './mainpage.component';
import { CalenderComponent } from './calender/calender.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '',
 component: MainpageComponent,
 },
 
  {
  path:'calender',
  component:CalenderComponent
},
{
  path:'cart',
  component:CartComponent
},
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
