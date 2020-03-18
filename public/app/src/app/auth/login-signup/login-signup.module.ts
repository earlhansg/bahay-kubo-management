import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { LoginSignUpRoutingModule } from '@app/auth/login-signup/login-signup-routing.module';

import { LoginSignUpComponent } from './container/login-signup.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LoginSignUpRoutingModule
  ],
  declarations: [ LoginSignUpComponent ]
})
export class LoginSignUpModule {}
