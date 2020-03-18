import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CondominiumComponent } from './container/condominium.component';


const routes: Routes = [
  { path: 'condominium', component: CondominiumComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondominiumRoutingModule { }
