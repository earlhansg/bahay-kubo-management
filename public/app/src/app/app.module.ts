import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModule } from '@app/auth/auth.module';
import { CondominiumModule } from '@app/condominium/condominium.module';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    CondominiumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
