import { Component, ChangeDetectionStrategy, Input, Output,
    EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Tenant } from '@app/dashboard/shared/models';

import { Subscription, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-tenant-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tenant-form.component.html',
  styleUrls: ['./tenant-form.component.scss']
})
export class TenantFormComponent implements OnInit, OnDestroy, OnChanges {

  exist = false;
  toggled = false;

  @Input()
  tenant: Tenant;

  @Output()
  create = new EventEmitter();

  @Output()
  update = new EventEmitter();

  @Output()
  remove = new EventEmitter();

  subcription: Subscription = new Subscription();

  isRent = new BehaviorSubject(false);

  form = this.fb.group({
    tenantId: [''],
    tenantName: ['', Validators.required],
    tenantContactNumber: ['', Validators.required],
    tenantSex: ['', Validators.required],
    tenantBirthdate: ['', Validators.required],
    tenantAddress: ['', Validators.required]
  });


  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
      console.log(this.tenant);
      if (this.tenant && this.tenant.tenantName) {
          this.exist = true;
          const value = this.tenant;
          this.form.patchValue(value);
      } else {
        const tenantId = Math.round(Math.random() * 10);
        this.form.patchValue({ tenantId });
      }
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  submitForm() {
    console.log(this.form.value);
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
