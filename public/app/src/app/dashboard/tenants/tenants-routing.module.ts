import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TenantsComponent } from './containers/tenants/tenants.component';
import { TenantComponent } from './containers/tenant/tenant.component';


export const ROUTES: Routes = [
  { path: '', component:  TenantsComponent },
  { path: 'new', component:  TenantComponent },
  { path: ':id', component: TenantComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class TenantsRoutingModule {}
