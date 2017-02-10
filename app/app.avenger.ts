import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avenger',
  template: `
    <div class="row">
      <div class="col-xs-3"><img width="100" src="{{avenger.photo}}" alt="Photo of {{avenger.name}}"></div>
      <div class="col-xs-7" align="left"><h3>{{avenger.name}}</h3></div>
    </div>
    `
})
export class AppAvenger {
  @Input() avenger;
}
