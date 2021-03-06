import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@app/shared/services';

import { HttpMethodEnum } from '@app/shared/enums';

import { Apartment } from '@app/dashboard/shared/models';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store } from '@app/store';

@Injectable({ providedIn: 'root' })
export class ApartmentsService extends RestService {
 url = '/apartments';

 constructor(private store: Store,
             http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getApartments(id): Observable<Apartment[]> {
    return this.request(`${this.url}?condoId=${id}`, HttpMethodEnum.GET)
            .pipe(
                tap(next => this.store.set('apartments', next)));
 }

 getApartmentById(id): Observable<Apartment> {
    return this.request(`${this.url}?apartmentId=${id}`, HttpMethodEnum.GET);
 }

}
