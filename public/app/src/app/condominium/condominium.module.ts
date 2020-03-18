import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CondominiumRoutingModule } from './condominium-routing.module';

import { CondominiumComponent } from './container/condominium.component';

@NgModule({
  imports: [
    BrowserModule,
    CondominiumRoutingModule
  ],
  declarations: [CondominiumComponent]
})
export class CondominiumModule { }
