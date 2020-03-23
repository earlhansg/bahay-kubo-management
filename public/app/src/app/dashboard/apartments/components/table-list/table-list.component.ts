import { Component, ChangeDetectionStrategy, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';


import { Apartment } from '@app/dashboard/shared/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnChanges {


  displayedColumns = ['apartmentId', 'condoId', 'apartmentUnitPrice', 'apartmentNumberRooms',
  'apartmentSquareMeters', 'apartmentAvailable' ];

  @Input()
  apartments: Apartment[];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private router: Router ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<Apartment>(this.apartments);
    this.dataSource.paginator = this.paginator;
  }

  viewList({ apartmentId }) {
    return `../${apartmentId}`;
  }

}
