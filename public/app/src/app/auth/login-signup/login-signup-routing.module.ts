import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginSignUpComponent } from './container/login-signup.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: LoginSignUpComponent
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class LoginSignUpRoutingModule {}
