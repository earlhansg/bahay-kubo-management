import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TenantsService } from '@app/dashboard/shared/services/tenants.service';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit, OnDestroy {

  faUser = faUser;
  tenant$: Observable<any>;

  constructor(
    private tenantsService: TenantsService,
    private router: ActivatedRoute) {}

  ngOnInit() {
    this.tenant$ = this.router.params
      .pipe(switchMap(param => this.tenantsService.getTenantsById(param.id)));
  }


  ngOnDestroy() {}


}
