import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg';
import { DatePipe } from '@angular/common';
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

    <button (click) = "toggleShowNewKeg()">New Keg</button>

    <label>Happy Hour</label>
    <input type = "checkbox" (click) = "toggleHappyHour()">

    <div *ngFor="let keg of childKegList | pintsRemaining:filterByPintsRemaining | kegStyle:filterByStyle" [class] = "priceColor(keg)">
      <h2>{{keg.brand}} - {{keg.name}} <button class = 'editBtn' (click)="editButtonHasBeenClicked(keg)">Edit</button> <button class = "btn btn-danger deleteBtn" (click)="deleteButtonClicked(keg)">X</button> </h2>




      <h4>{{keg.style}}</h4>





      <div class = "kegIcon">
        <div class="progress vertical">
            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">
            </div>
        </div>
      </div>

      <h3 *ngIf="!keg.price" class = 'bg-danger'>Not a valid price!</h3>
        <span>ABV</span>
      <div class="progress">

        <div class="progress-bar progress-bar-striped active" role="progressbar"
        aria-valuemin="0" aria-valuemax="20" [style.width]="keg.alcoholContent*5+'%'">
          <p>{{keg.alcoholContent.toFixed(2)}}%</p>
        </div>
      </div>

      <h4>{{keg.pintsRemaining}}</h4>

      <h3 *ngIf="keg.price">
        <div *ngIf="isHappyHour">

        <button (click)="pour(keg)">Pour \${{(keg.price -1).toFixed(2)}}</button>
        <button (click)="growler(keg)">Growler \${{((keg.price-1 )*growlerDiscount ).toFixed(2)}}</button>
        <button (click)="largeGrowler(keg)">Lg. Growler \${{((keg.price -1)*lgGrowlerDiscount).toFixed(2)}}</button>

        </div>
        <div *ngIf="!isHappyHour">
        <button (click)="pour(keg)">Pour \${{(keg.price).toFixed(2)}}</button>
        <button (click)="growler(keg)">Growler \${{(keg.price*growlerDiscount).toFixed(2)}}</button>
        <button (click)="largeGrowler(keg)">Lg. Growler \${{(keg.price*lgGrowlerDiscount).toFixed(2)}}</button>
        </div>
      </h3>

    </div>
  `
})

export class KegListComponent {

  @Input() childKegList: Keg[];
  @Input() isHappyHour : boolean;
  @Input() growlerDiscount : number;
  @Input() lgGrowlerDiscount : number;
  @Output() clickSender = new EventEmitter();
  @Output() pourSender = new EventEmitter();
  @Output() growlerSender = new EventEmitter();
  @Output() largeGrowlerSender = new EventEmitter();
  @Output() toggleHappyHourSender = new EventEmitter();
  @Output() deleteButtonClickedSender = new EventEmitter();
  @Output() toggleShowNewKegSender = new EventEmitter();

  filterByPintsRemaining: string = "allKegs";
  filterByStyle: string = "allStyles";

  toggleShowNewKeg(){
    this.toggleShowNewKegSender.emit();
  }

  editButtonHasBeenClicked(keg: Keg) {
    this.clickSender.emit(keg);
  }

  deleteButtonClicked(keg : Keg){
    this.deleteButtonClickedSender.emit(keg);
  }

  toggleHappyHour(){
    this.toggleHappyHourSender.emit();
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
