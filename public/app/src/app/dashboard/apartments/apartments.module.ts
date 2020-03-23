import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { ApartmentsRoutingModule } from './apartments-routing.module';

import { SharedModule } from '@app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ApartmentsComponent } from './containers/apartments/apartments.component';
import { ApartmentComponent } from './containers/apartment/apartment.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { TrasactionFormComponent } from './components/transaction-form/transaction-form.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ApartmentsRoutingModule,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [
    ApartmentsComponent,
    ApartmentComponent,
    TableListComponent,
    TrasactionFormComponent
  ]
})
export class ApartmentsModule {}
