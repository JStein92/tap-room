import { Component, Output, EventEmitter } from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'date-pipe',
  template: `<div>
    <h2>{{n | date:'shortTime' }}</h2>
  </div>`
})

export class DatePipeComponent {
@Output() checkHappyHourSender = new EventEmitter();

  n: number = Date.now();
   constructor() {
     IntervalObservable.create(1000).subscribe(n => this.n =Date.now());
     IntervalObservable.create(1000).subscribe(x => this.checkHappyHour());
     IntervalObservable.create(1000).subscribe(y => this.time = new Date(this.n));
     IntervalObservable.create(1000).subscribe(z => this.checkHappyHourSender.emit(this.checkHappyHour()));
   }


   time = new Date(this.n);
   checkHappyHour(){
     if (this.time.getMinutes()%2===0){
      return true;
       //alert(this.time.getMinutes() + 'Even Minute');
     }
     else{
       return false;
      //  alert(this.time.getMinutes() + 'Odd Minute');
     }
   }
}
