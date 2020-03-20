import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './container/dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard/:name', component: DashboardComponent,
    children: [
      {
        path: 'apartments/:id',
        loadChildren: './apartments/apartments.module#ApartmentsModule'
      },
      {
        path: '',
        redirectTo: 'apartments/:id',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
