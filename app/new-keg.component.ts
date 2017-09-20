import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <label>Keg Name:</label>
      <input #name class="form-control">
      <label>Brand:</label>
      <input #brand class="form-control">
      <label>Price:</label>
      <input type='number' #price class="form-control">
      <label>Alcohol Content:</label>
      <input type='number' #alcoholContent class="form-control">
      <button class = 'btn btn-success'(click)="submitForm(name.value, brand.value, price.value, alcoholContent.value); name.value=''; brand.value=''; price.value=''; alcoholContent.value='';">Add Keg</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number) {
    let numPrice = +price;
    let numAC = +alcoholContent;

    let newKegToAdd : Keg = new Keg(name, brand, numPrice, numAC);
    this.newKegSender.emit(newKegToAdd);
  }
}
