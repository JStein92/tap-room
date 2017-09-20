import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg';

@Component({
  selector:'edit-keg',
  template: `
  <div *ngIf="childSelectedKeg">

    <h3>Edit Keg</h3>

     <label for = 'name'>Name:</label>
     <input type = 'text' class = 'form-control' [(ngModel)]="childSelectedKeg.name">

     <label for = 'brand'>Brand:</label>
     <input type = 'text' class = 'form-control' [(ngModel)]="childSelectedKeg.brand">

     <label for = 'price'>Price:</label>
     <input type = 'number' class = 'form-control' min="1" [(ngModel)]="childSelectedKeg.price">

     <label for = 'alcoholContent'>Alcohol Content:</label>
     <input type = 'number' class = 'form-control' min="0" [(ngModel)]="childSelectedKeg.alcoholContent">

     <button type = 'button' class = 'btn btn-success' (click) = "doneButtonClicked()">Done</button>

  </div>


  `

})

export class EditKegComponent{
  @Input() childSelectedKeg : Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }
}
