import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@app/shared/services';

import { HttpMethodEnum } from '@app/shared/enums';

import { Apartments } from '@app/dashboard/shared/models';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store } from '@app/store';

@Injectable({ providedIn: 'root' })
export class ApartmentsService extends RestService {
 url = '/apartments';

 constructor(private store: Store,
             http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getApartments(id): Observable<Apartments[]> {
    return this.request(`${this.url}?condoId=${id}`, HttpMethodEnum.GET)
            .pipe(tap(next => this.store.set('apartments', next)));
 }

}
