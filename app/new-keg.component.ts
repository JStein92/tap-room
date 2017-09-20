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
      <label>Style:</label>
      <input #style class="form-control">
      <label>Price:</label>
      <input type='number' #price class="form-control" min="1">
      <label>Alcohol Content:</label>
      <input type='number' #alcoholContent class="form-control" min="0">
      <button class = 'btn btn-success'(click)="submitForm(name.value, brand.value, style.value, price.value, alcoholContent.value); name.value=''; brand.value=''; style.value=''; price.value=''; alcoholContent.value='';">Add Keg</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, style: string, price: number, alcoholContent: number) {
    let numPrice =+price;
    let numAC = +alcoholContent;

    let newKegToAdd : Keg = new Keg(name, brand, style, numPrice, numAC);
    this.newKegSender.emit(newKegToAdd);
  }
}
