import { Component } from '@angular/core';
import { Keg } from './keg';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>Tap Room</h1>
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (pourSender)="pour($event)" (growlerSender)="growler($event)" (largeGrowlerSender)="largeGrowler($event)">
      </keg-list>
      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender) = "finishedEditing()"></edit-keg>
      <new-keg (newKegSender)="addKeg($event)"></new-keg>

    </div>
  `
})

export class AppComponent {

  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg("Coors Lite", "Coors", "Lager", 2.00, 6),
    new Keg("Mack's Hoppy Stuff", "Mack&Jacks", "IPA", 4.00, 9),
    new Keg("Busch Zero", "Busch", "Lager", 10, 3.5),
    new Keg("Red's Ale", "Red's", "Red", 6.00, 6),
    new Keg("Cream Stout", "Ninkasi", "Stout", 5.50, 6.5)
  ]

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
    keg.pour();
  }

  growler(keg) {
    keg.growler();
  }

  largeGrowler(keg) {
    keg.largeGrowler();
  }


}
