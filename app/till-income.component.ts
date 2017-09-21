import { Component, Input } from '@angular/core';

@Component({
  selector: 'till-income',
  template: `
    <h3 id="moneh">Till - \${{runningTotal.toFixed(2)}}</h3>
  `
})

export class TillIncomeComponent {
  @Input() runningTotal: number;
}
