import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './container/dashboard.component';
import { UserProfileComponent } from './shared/components/user-profile/user-profile.component';
import { TopNavigationComponent } from './shared/components/top-navigation/top-navigation.component';

import { SharedModule } from '@app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    BrowserModule,
    DashboardRoutingModule,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TopNavigationComponent
  ]
})
export class DashboardModule { }
