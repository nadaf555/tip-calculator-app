import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-output-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './output-page.component.html',
  styleUrl: './output-page.component.css'
})
export class OutputPageComponent {
  costOfService!: number;
  tipPercentage!: number;
  roundUpTip!: boolean;

  calculatedTip: number = 0;
  calculatedBillTotal: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const state = navigation.extras.state as {
        costOfService: number,
        tipPercentage: number,
        roundUpTip: boolean
      };
      this.costOfService = state.costOfService;
      this.tipPercentage = state.tipPercentage;
      this.roundUpTip = state.roundUpTip;

      this.calculateTip();
    } else {
      this.router.navigate(['/input']);
    }
  }

  calculateTip() {
    let tipAmount = this.costOfService * this.tipPercentage;
    if (this.roundUpTip) {
      tipAmount = Math.ceil(tipAmount);
    } else {
      tipAmount = Math.ceil(tipAmount * 100) / 100; // Round to nearest cent
    }
    this.calculatedTip = tipAmount;
    this.calculatedBillTotal = this.costOfService + this.calculatedTip;
  }
}
