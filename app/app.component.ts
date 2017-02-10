import { Component, Input, OnInit, Output } from '@angular/core';

import { AvengersService } from './app.avengers.service';
import ArrayBindingPattern = ts.ArrayBindingPattern;

@Component({
    selector: 'my-app',
    template: `
      <h1>Avengers</h1>
      <div *ngFor="let avenger of avangers" class="avengers">
        <app-avenger class="module hero" [avenger]="avenger"></app-avenger>
      </div>`
})

export class AppComponent implements OnInit {
  avangers: [any];

  constructor (
    private avengersService: AvengersService) {
  }

  ngOnInit():void {
    this.avangers = this.avengersService.getAvengers();
  }
}
