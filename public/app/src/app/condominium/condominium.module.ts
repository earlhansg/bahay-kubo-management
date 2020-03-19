import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CondominiumRoutingModule } from './condominium-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/shared/shared.module';

import { CondominiumComponent } from './container/condominium.component';

@NgModule({
  imports: [
    BrowserModule,
    CondominiumRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  declarations: [CondominiumComponent]
})
export class CondominiumModule { }
