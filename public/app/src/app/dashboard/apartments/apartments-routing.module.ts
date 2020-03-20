import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApartmentsComponent } from './containers/apartments/apartments.component';
import { ApartmentComponent } from './containers/apartment/apartment.component';


export const ROUTES: Routes = [
  { path: '', component:  ApartmentsComponent },
  { path: 'new', component:  ApartmentComponent },
  { path: ':id', component: ApartmentComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class ApartmentsRoutingModule {}
