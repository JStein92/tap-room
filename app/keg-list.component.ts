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

    <button (click) = "toggleShowNewKeg()" class = 'btn' id ='newKeg'>New Keg</button>

    <div *ngFor="let keg of childKegList | pintsRemaining:filterByPintsRemaining | kegStyle:filterByStyle" [class] = "priceColor(keg)">
      <h2>{{keg.brand}} - {{keg.name}} <button class = 'editBtn' (click)="editButtonHasBeenClicked(keg)">Edit</button> <button class = "btn btn-danger deleteBtn" (click)="deleteButtonClicked(keg)">X</button> </h2>

      <h4>{{keg.style}} - {{keg.pintsRemaining}}/124</h4>

    <div class = "kegBars">
      <div class = 'row'>
        <div class ='col-md-1 kegContainer'>
            <div class = "kegIcon">
              <div class = "vertical-container">
                <div class="progress vertical">
                    <div [class]="progressBarColor(keg)" role="progressbar"  aria-valuemin="0" aria-valuemax="100" [style.width]="keg.pintsRemaining/1.24">
                    </div>
                </div>
              </div>
            </div>
          </div>



          <div class ='col-md-8'>
          <p class ="ABV">ABV <span class="abvbolded">{{keg.alcoholContent.toFixed(2)}}%</span></p>
            <div class="progress progress-abv">
              <div class="progress-bar progress-bar-striped active" role="progressbar"
              aria-valuemin="0" aria-valuemax="20" [style.width]="keg.alcoholContent*5+'%'">
              </div>
            </div>
            <div class="row pourButtons">
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

          </div>
        </div>

      </div>

      <h3 *ngIf="!keg.price" class = 'bg-danger'>Not a valid price!</h3>







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

  progressBarColor(keg){
    if(keg.pintsRemaining < 40)
    {
        return "progress-bar progress-bar-danger";
    }else if (keg.pintsRemaining >=40 && keg.pintsRemaining <=80){
        return "progress-bar progress-bar-warning";
    } else {
        return "progress-bar progress-bar-success";
    }

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
