import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-table-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent {

  constructor() {}

}
