import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { TenantsRoutingModule } from './tenants-routing.module';

import { SharedModule } from '@app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TenantsComponent } from './containers/tenants/tenants.component';
import { TenantComponent } from './containers/tenant/tenant.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { TenantFormComponent } from './components/tenant-form/tenant-form.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TenantsRoutingModule,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [
    TenantsComponent,
    TenantComponent,
    TableListComponent,
    TenantFormComponent
  ]
})
export class TenantsModule {}
