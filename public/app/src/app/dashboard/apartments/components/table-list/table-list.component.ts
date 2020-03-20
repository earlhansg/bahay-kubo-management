import { Component, ChangeDetectionStrategy, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';


import { Apartments } from '@app/dashboard/shared/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {


  displayedColumns = ['apartmentId', 'condoId', 'apartmentUnitPrice', 'apartmentNumberRooms',
  'apartmentSquareMeters', 'apartmentAvailable' ];

  @Input()
  apartments: Apartments[];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private router: Router ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Apartments>(this.apartments);
    this.dataSource.paginator = this.paginator;
  }

  viewList({ apartmentId }) {
    return `../${apartmentId}`;
  }

}
