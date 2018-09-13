import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent }      from './signup/signup.component';
import { LoginComponent }      from './login/login.component';

const routes: Routes = [
  { 
    path: 'signup', 
    component: SignupComponent
  },
  { 
    path: 'login', 
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    [ 
      RouterModule.forRoot(routes) 
    ],
  ],
  exports: [ RouterModule ]  
})
//test for commit revert
export class AppRoutingModule { }
