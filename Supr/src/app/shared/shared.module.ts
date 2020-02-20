import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [HeaderComponent, LoginComponent, SignupComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,FormsModule, ReactiveFormsModule,
  ]
})
export class SharedModule { }
