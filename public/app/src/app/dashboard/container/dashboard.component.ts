import { Component, OnInit, OnDestroy } from '@angular/core';

/* Data */
import { navs, Nav } from './dashboard.data';
import { Subscription } from 'rxjs';

/* Services */
import { BreakPointsService } from '@app/shared/services';
import { ApartmentsService } from '../shared/services/apartments.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  navs: Nav[] = navs;
  private breakpointsSubcription$: Subscription;
  isSmallScreen: boolean;

  constructor(
    private breakPointsService: BreakPointsService,
    private apartmentsService: ApartmentsService ) { }

  ngOnInit() {

    this.breakpointsSubcription$ = this.breakPointsService
        .checkBreakPoints(`(max-width: 901px)`)
        .subscribe((match: boolean) => this.isSmallScreen = match);

  }

  ngOnDestroy() {
    this.breakpointsSubcription$.unsubscribe();
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }

}
