import { Component, OnInit, OnDestroy } from '@angular/core';

import { TenantsService } from '@app/dashboard/shared/services/tenants.service';

import { Store } from '@app/store';

import { Tenant } from '@app/dashboard/shared/models';

import { Subscription, Observable } from 'rxjs';

import { faUsers, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})
export class TenantsComponent implements OnInit, OnDestroy {

  faUsers = faUsers;
  faPlus = faPlus;
  tenants$: Observable<Tenant[]>;
  subscription: Subscription = new Subscription();

  constructor(
    private tenantsService: TenantsService,
    private store: Store) {}

  ngOnInit() {
    this.tenants$ = this.store.select<Tenant[]>('tenants');
    this.subscription = this.tenantsService.getTenants().subscribe();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
