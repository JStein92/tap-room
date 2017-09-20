import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg';

@Component({
  selector: 'keg-list',
  template: `
    <select (change)="onPintsRemainingChange($event.target.value)">
      <option value="allKegs" selected="selected">All Kegs</option>
      <option value="lowKegs">Low Kegs</option>
    </select>

    <select (change)="onStyleChange($event.target.value)">
      <option value="allStyles" selected="selected">All Styles</option>
      <option value="IPA">IPAs</option>
      <option value="Red">Reds</option>
      <option value="Stout">Stouts</option>
      <option value="Lager">Lagers</option>
    </select>

    <div *ngFor="let keg of childKegList | pintsRemaining:filterByPintsRemaining | kegStyle:filterByStyle" [class] = "priceColor(keg)">
      <h2>{{keg.name}}</h2>
      <h3> {{keg.brand}}</h3>
      <h3> {{keg.style}}</h3>
      <h3 *ngIf="keg.price">\${{keg.price.toFixed(2)}}</h3>
      <h3 *ngIf="!keg.price" class = 'bg-danger'>Not a valid price!</h3>
        <span>ABV</span>
      <div class="progress">

        <div class="progress-bar progress-bar-striped active" role="progressbar"
        aria-valuemin="0" aria-valuemax="20" [style.width]="keg.alcoholContent*5+'%'">
          <p>{{keg.alcoholContent.toFixed(2)}}%</p>
        </div>

      </div>

      <h4>{{keg.pintsRemaining}}</h4>
      <button (click)="editButtonHasBeenClicked(keg)">Edit</button>
      <button (click)="pour(keg)">Pour</button>
      <button (click)="growler(keg)">Growler</button>
      <button (click)="largeGrowler(keg)">Lg. Growler</button>

    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() pourSender = new EventEmitter();
  @Output() growlerSender = new EventEmitter();
  @Output() largeGrowlerSender = new EventEmitter();

  filterByPintsRemaining: string = "allKegs";
  filterByStyle: string = "allStyles";
  editButtonHasBeenClicked(keg: Keg) {
    this.clickSender.emit(keg);
  }

  pour(keg: Keg) {
    this.pourSender.emit(keg);
  }

  growler(keg: Keg) {
    this.growlerSender.emit(keg);
  }

  largeGrowler(keg: Keg) {
    this.largeGrowlerSender.emit(keg);
  }

  onPintsRemainingChange(optionFromMenu) {
    this.filterByPintsRemaining = optionFromMenu;
  }
  onStyleChange(optionFromMenu) {
    this.filterByStyle = optionFromMenu;
  }

  priceColor(keg){
    if (keg.price < 3){
      return "well cheap";
    } else if (keg.price >=3 && keg.price < 6){
      return "well medium";
    } else {
      return "well expensive";
    }
  }
}
