import { Component, ChangeDetectionStrategy, Input, Output,
    EventEmitter, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { TransactionService } from '@app/dashboard/shared/services/transaction.service';

import { Apartment, Tenant, TransactionType, Payment } from '@app/dashboard/shared/models';

import { Subscription, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-transaction-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TrasactionFormComponent implements OnInit, OnDestroy, OnChanges {

  exist = false;
  toggled = false;
  id: number;

  @Input()
  apartments: Apartment[];

  @Input()
  tenants: Tenant[];

  @Input()
  transactionType: TransactionType;

  @Input()
  paymentType: Payment;

  @Input()
  apartment: Apartment;

  @Output()
  create = new EventEmitter();

  @Output()
  update = new EventEmitter();

  @Output()
  remove = new EventEmitter();

  subcription: Subscription = new Subscription();

  isRent = new BehaviorSubject(false);

  form = this.fb.group({
    transactionAmount: ['', Validators.required],
    transactionDate: '',
    transactionStart: '',
    transactionEnd: '',
    transactionTypeId: ['', Validators.required],
    paymentTypeId:  ['', Validators.required],
    tenantId:  ['', Validators.required],
    apartmentId: '',
    condoId: '',
    id: ''
  });


  constructor(
    private fb: FormBuilder,
    private transaction: TransactionService) {}

  ngOnInit() {
    if (!this.apartment.apartmentAvailable) {
      this.exist = true;
      this.subcription.add(
        this.transaction
          .getTransactionById(this.apartment.apartmentId)
          .subscribe(value =>  this.form.patchValue(value[0]))
      );
    } else {
      const transactionDate = new Date();
      const id = Math.round(Math.random() * 10);
      const { apartmentId, condoId } = this.apartment;
      this.form.patchValue({ transactionDate, apartmentId, condoId, id });
    }

    this.ngOnChanges();
  }

  ngOnChanges() {
    this.subcription.add(
      this.form.valueChanges
        .subscribe(({ transactionTypeId, id }) => {
          const type: boolean = transactionTypeId === 1 ? true : false;
          this.isRent.next(type);
          this.id = id;
    }));
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  submitForm() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  UpdateTransaction() {
    if (this.form.value) {
      this.update.emit(this.form.value);
    }
  }

  removeTrasaction() {
    this.remove.emit(this.form.value);
  }

  toggle() {
    this.toggled = !this.toggled;
  }

}
