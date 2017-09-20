import { Component } from '@angular/core';
import { Keg } from './keg';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>Tap Room</h1>
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender) = "finishedEditing()"></edit-keg>
      <new-keg (newKegSender)="addKeg($event)"></new-keg>

    </div>
  `
})

export class AppComponent {

  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg("Coors Lite", "Coors", 25.00, 4),
    new Keg("Mack's Hoppy Stuff", "Mack&Jacks", 40.00, 7),
    new Keg("Busch Zero", "Busch", 13.50, 1.5)
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
}
