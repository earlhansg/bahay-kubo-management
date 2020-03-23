import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@app/shared/services';

import { HttpMethodEnum } from '@app/shared/enums';

import { Observable } from 'rxjs';

import { Store } from '@app/store';

import { Transaction } from '../models';

@Injectable({ providedIn: 'root' })
export class TransactionService extends RestService {
 url = '/transaction';

 constructor(private store: Store,
             http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getTransactionById(id): Observable<Transaction> {
    return this.request(`${this.url}?apartmentId=${id}`, HttpMethodEnum.GET);
 }

}
