import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg';

@Pipe({
  name: "kegStyle",
  pure:false
})
export class KegStylePipe implements PipeTransform{
  transform(input: Keg[], desiredStyle){
    let output: Keg[] = [];
    if (desiredStyle ==="Lager"){
      for (let i = 0; i < input.length; i++) {
        if (input[i].style==="Lager") {
          output.push(input[i]);
        }

      }
      return output;
    }  else if (desiredStyle ==="IPA") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].style==="IPA") {
          output.push(input[i]);
        }
      }
        return output;
    } else if (desiredStyle ==="Red") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].style==="Red") {
          output.push(input[i]);
        }
      }
          return output;
    } else if (desiredStyle ==="Stout"){
      for (let i = 0; i < input.length; i++) {
        if (input[i].style==="Stout") {
          output.push(input[i]);
        }

      }
        return output;
    } else {
      return input;
    }

  }

}
