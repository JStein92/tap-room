import { Component } from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'date-pipe',
  template: `<div>
    <h3>{{n | date:'shortTime' }}</h3>
  </div>`
})

export class DatePipeComponent {
  n: number = Date.now();
   constructor() {
     IntervalObservable.create(1000).subscribe(n => this.n = Date.now());
   }
}
