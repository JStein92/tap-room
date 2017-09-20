import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg';

@Component({
  selector: 'keg-list',
  template: `
    <div *ngFor="let keg of childKegList" class = 'well'>
     <h2>{{keg.name}}</h2>
     <h3> {{keg.brand}}</h3>
     <h3>\${{keg.price.toFixed(2)}}</h3>
     <h3>{{keg.alcoholContent.toFixed(2)}}%</h3>
     <button (click)="editButtonHasBeenClicked(keg)">Edit</button>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(keg: Keg) {
    this.clickSender.emit(keg);
  }
}
