import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TenantsService } from '@app/dashboard/shared/services/tenants.service';
import { ApartmentsService } from '@app/dashboard/shared/services/apartments.service';
import { TransactionTypeService } from '@app/dashboard/shared/services/transactionType.service';
import { PaymentTypeService } from '@app/dashboard/shared/services/payment.service';

import { Store } from '@app/store';

import { Apartment, Tenant, TransactionType, Payment, Transaction } from '@app/dashboard/shared/models';

import { faHandshake } from '@fortawesome/free-solid-svg-icons';


import { Observable, Subscription, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss']
})
export class ApartmentComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  aparmentID: number;
  condoID: number;
  apartmentsList: Apartment[];
  tenantsList: Tenant[];
  transactionTypeList: TransactionType[];
  paymentTypeList: Payment[];
  faHandshake = faHandshake;
  apartment: Apartment;


  constructor(
    private apartmentsService: ApartmentsService,
    private tenantsService: TenantsService,
    private transactionType: TransactionTypeService,
    private paymentType: PaymentTypeService,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription.add(this.store.select<number>('condoId').subscribe(id => this.condoID = id));
    this.subscription.add(
      this.getData()
        .subscribe(res => {
          this.apartmentsList = res[0];
          this.tenantsList = res[1];
          this.transactionTypeList = res[2];
          this.paymentTypeList = res[3];
        })
    );

    this.subscription.add(this.route.params
        .pipe(switchMap((param) => {
          return this.apartmentsService.getApartmentById(param.id);
        }))
        .subscribe((apartment) => {
          this.apartment = apartment[0];
          this.checkCondoID();
    }));
  }

  getData(): Observable<any> {
    const response1 = this.apartmentsService.getApartments(this.condoID);
    const response2 = this.tenantsService.getTenants();
    const response3 = this.transactionType.getTransactionType();
    const response4 = this.paymentType.getPaymentType();
    return forkJoin([response1, response2, response3, response4]);
  }

  addTransaction(event) {
    console.log('add', event);
  }
  updateTransaction(event: Transaction) {
    console.log(event);
    this.backToApartment();
  }

  removeTransaction(event) {
    console.log('remove', event);
  }

  checkCondoID() {
    if (!this.condoID) {
      this.backToApartment();
    }
  }

  backToApartment() {
    const condo = this.apartment.condoId === 1 ? 'sinkamas-legends'
    : this.apartment.condoId === 2 ? 'talong-high'
    : 'sigarilyas-square';
    this.router.navigate([`./dashboard/${condo}/apartments/${this.apartment.condoId}`]);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
