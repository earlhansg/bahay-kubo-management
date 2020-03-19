import { Component } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-condominium',
  templateUrl: './condominium.component.html',
  styleUrls: ['./condominium.component.scss']
})
export class CondominiumComponent {
  condos = [
    { content: 'Sinkamas Legends', url: 'dashboard/1', backgroundImage: 'sinkamas'},
    { content: 'Talong High', url: 'dashboard/2', backgroundImage: 'talong'},
    { content: 'Sigarilyas Square', url: 'dashboard/3', backgroundImage: 'sigarilyas'}
  ];

  constructor(private sanitizer: DomSanitizer) {}

  backgroundImage(name) {
    return this.sanitizer
      .bypassSecurityTrustStyle(`linear-gradient(rgba(53, 64, 82, 0.75),
      rgba(53, 64, 82, 0.85)), url('/assets/images/backgrounds/${name}.jpg')`);
  }
}
