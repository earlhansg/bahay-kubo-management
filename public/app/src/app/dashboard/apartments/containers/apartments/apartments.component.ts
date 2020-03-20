import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ApartmentsService } from '@app/dashboard/shared/services/apartments.service';

import { Store } from '@app/store';

import { Apartments } from '@app/dashboard/shared/models';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit, OnDestroy {

  apartments$: Observable<Apartments[]>;
  private subscription: Subscription;

  constructor(
    private apartmentsService: ApartmentsService,
    private store: Store,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.apartments$ = this.store.select<Apartments[]>('apartments');

    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.store.set('condoId', params.id);
        this.apartmentsService.getApartments(params.id).subscribe();
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
