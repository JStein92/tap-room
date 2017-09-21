import { Component } from '@angular/core';
import { Keg } from './keg';
import { DatePipeComponent } from './date-time.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>Tap Room</h1>
      <till-income [runningTotal]="runningTotal"></till-income>
      <date-pipe></date-pipe>
      <keg-list [childKegList]="masterKegList" [growlerDiscount] = "growlerDiscount" [lgGrowlerDiscount] = "lgGrowlerDiscount"
      [isHappyHour] = "isHappyHour" (clickSender)="editKeg($event)" (pourSender)="pour($event)" (growlerSender)="growler($event)" (largeGrowlerSender)="largeGrowler($event)"
      (toggleHappyHourSender) = "toggleHappyHour()"
      (deleteButtonClickedSender) = "deleteButtonClicked($event)"
      (toggleShowNewKegSender) = "toggleShowNewKeg()">
      </keg-list>
    </div>

    <new-keg (newKegSender)="addKeg($event)" [showNewKegForm] = "showNewKegForm" (closeNewKegFormSender) = "closeNewKegForm()"></new-keg>

    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender) = "finishedEditing()"></edit-keg>
  `
})

export class AppComponent {

  showNewKegForm : boolean = false;

  selectedKeg = null;
  isHappyHour : boolean = false;

  growlerDiscount = 1.8;
  lgGrowlerDiscount = 3.4;

  runningTotal: number = 0;

  newDate : number = Date.now();

  masterKegList: Keg[] = [
    new Keg("Coors Lite", "Coors", "Lager", 2.00, 6),
    new Keg("Mack's Hoppy Stuff", "Mack&Jacks", "IPA", 4.00, 9),
    new Keg("Busch Zero", "Busch", "Lager", 10, 3.5),
    new Keg("Red's Ale", "Red's", "Red", 6.00, 6),
    new Keg("Cream Stout", "Ninkasi", "Stout", 5.50, 6.5)
  ]

  closeNewKegForm(){
    this.showNewKegForm = false;
  }

  toggleShowNewKeg(){
    if (this.showNewKegForm === false){
      this.showNewKegForm = true;
    } else {
            this.showNewKegForm = false;
    }

  }

  toggleHappyHour(){
    if(this.isHappyHour){
      this.isHappyHour=false;
    } else {
      this.isHappyHour=true;
    }
  }

  deleteButtonClicked(keg){
    this.masterKegList.splice(keg.id, 1);
    for(let i = 0; i <this.masterKegList.length; i++){
      this.masterKegList[i].id = i;
    }
  }

  editKeg(keg) {
    this.selectedKeg = keg;
    console.log(keg.name);
  }
  finishedEditing(){
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  pour(keg) {

    if(keg.pintsRemaining >= 1) {
      keg.pour();
      if(this.isHappyHour) {
        this.runningTotal += keg.price -1;
      } else {
        this.runningTotal += keg.price;
      }
    } else {
      alert("Insufficient volume");
    }
  }

  growler(keg) {
    if(keg.pintsRemaining >= 2) {
      keg.growler();
      if(this.isHappyHour) {
        this.runningTotal += (keg.price -1) * this.growlerDiscount;
      } else {
        this.runningTotal += keg.price * this.growlerDiscount;
      }
    } else {
      alert("Insufficient volume");
    }
  }

  largeGrowler(keg) {
    if(keg.pintsRemaining >= 4) {
      keg.largeGrowler();
      if(this.isHappyHour) {
        this.runningTotal += (keg.price -1) * this.lgGrowlerDiscount;
      } else {
        this.runningTotal += keg.price * this.lgGrowlerDiscount;
      }
    } else {
      alert("Insufficient volume");
    }
  }


}
