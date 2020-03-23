import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@app/shared/services';

import { HttpMethodEnum } from '@app/shared/enums';

import { Tenant } from '../models';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store } from '@app/store';

@Injectable({ providedIn: 'root' })
export class TenantsService extends RestService {
 url = '/tenants';

 constructor(private store: Store,
             http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getTenantsById(id): Observable<any[]> {
    return this.request(`${this.url}?tenantId=${id}`, HttpMethodEnum.GET);
 }

 getTenants(): Observable<any[]> {
    return this.request(this.url, HttpMethodEnum.GET)
            .pipe(
                tap(next => this.store.set('tenants', next)));
 }

 addTenant(body: Tenant): Observable<Tenant> {
    return this.request(this.url, HttpMethodEnum.POST, body);
 }

}
