import { Component, OnInit, OnDestroy } from '@angular/core';

/* Data */
import { Nav } from './dashboard.data';

import { faUser, faBuilding } from '@fortawesome/free-solid-svg-icons';

/* Services */
import { BreakPointsService } from '@app/shared/services';

import { Store } from '@app/store';

import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  navs: Nav[];
  breakpointsSubcription$: Subscription;
  isSmallScreen: boolean;
  condoId: number;
  subcription: Subscription;

  constructor(
    private breakPointsService: BreakPointsService,
    private store: Store,
    private route: ActivatedRoute) {
      // console.log(route.snapshot.url[1]);
      // console.log(route.snapshot.pathFromRoot.map(o => o.url[0]).join('/'));
    }

  ngOnInit() {
    this.condoId = this.fetchCondoType();
    // this.store.select<number>('condoId')
    //   .subscribe((id) => {
    //     this.navs = [
    //       { url: `apartments/${id}`, icon: faBuilding, content: 'Apartment' },
    //       { url: 'tenants', icon: faUser, content: 'Tenants' }];
    //   });

    this.navs = [
      { url: `apartments/${this.condoId}`, icon: faBuilding, content: 'Apartment' },
      { url: 'tenants', icon: faUser, content: 'Tenants' }];

    this.breakpointsSubcription$ = this.breakPointsService
      .checkBreakPoints(`(max-width: 901px)`)
      .subscribe((match: boolean) => this.isSmallScreen = match);

  }

  ngOnDestroy() {
    this.breakpointsSubcription$.unsubscribe();
    this.subcription.unsubscribe();
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }

  fetchCondoType(): number {
    const { path } = this.route.snapshot.url[1];
    const id = path === 'sinkamas-legends' ? 1 : path === 'talong-high' ? 2 : 3;
    return id;
  }

}
