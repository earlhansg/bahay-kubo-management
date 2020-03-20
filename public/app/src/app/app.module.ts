import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AuthModule } from '@app/auth/auth.module';
import { CondominiumModule } from '@app/condominium/condominium.module';
import { DashboardModule } from '@app/dashboard/dashboard.module';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/root/container/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    CondominiumModule,
    DashboardModule
  ],
  providers: [
    { provide: 'API_URL', useValue: 'http://localhost:3000' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
