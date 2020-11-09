import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  findTypesOfOrbit (type: string) {
    let orbitTypeArray = [];
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === type.toLowerCase()) {
        orbitTypeArray.push(this.satellites[i]);
      }
    }
    return orbitTypeArray.length;
  }
}
