import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { HomeRoutingModule } from '@app/auth/home/home-routing.module';

import { HomeComponent } from './container/home.component';
import { LoginSignUpComponent } from './components/login-signup/login-signup.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [ HomeComponent, LoginSignUpComponent ]
})
export class HomeModule {}
