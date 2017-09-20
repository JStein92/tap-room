import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg';

@Pipe({
  name: "pintsRemaining",
  pure: false
})

export class PintsRemainingPipe implements PipeTransform {
  transform(input: Keg[], desiredFullness) {
    let output: Keg[] = [];
    if(desiredFullness === "lowKegs") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].isLow()) {
          output.push(input[i]);
        }
      }
      return output;
    } else { // all kegs
      return input;
    }


  }
}
