import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { HomeRoutingModule } from '@app/auth/home/home-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';


import { HomeComponent } from './container/home.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    FlexLayoutModule
  ],
  declarations: [ HomeComponent, LoginSignupComponent ]
})
export class HomeModule {}
