import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
     path: '',
     loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) 
  },
  { path: 'mainpage', 
  loadChildren: () => import('./mainpage/mainpage.module').then(m => m.MainpageModule)
  },
  { path: 'adminpath',
   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  { path: 'mainpage/addproduct',
   loadChildren: () => import('./mainpage/addproduct/addproduct.module').then(m => m.AddproductModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
