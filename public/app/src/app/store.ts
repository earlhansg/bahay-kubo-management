import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { pluck, distinctUntilChanged } from 'rxjs/operators';

export interface State {
  apartments: any;
  condoId: number;
  tenants: any;
  transactionType: any;
  paymentType: any;
  [key: string]: any;
}

const state: State = {
  apartments: undefined,
  condoId: undefined,
  tenants: undefined,
  transactionType: undefined,
  paymentType: undefined
};

@Injectable({ providedIn: 'root' })
export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  // tslint:disable-next-line:no-shadowed-variable
  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}
