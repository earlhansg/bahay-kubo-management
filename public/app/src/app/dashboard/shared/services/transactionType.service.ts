import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@app/shared/services';

import { HttpMethodEnum } from '@app/shared/enums';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store } from '@app/store';

@Injectable({ providedIn: 'root' })
export class TransactionTypeService extends RestService {
 url = '/transactionType';

 constructor(private store: Store,
             http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getTransactionType(): Observable<any[]> {
    return this.request(this.url, HttpMethodEnum.GET)
            .pipe(
                tap(next => this.store.set('transactionType', next)));
 }

}
