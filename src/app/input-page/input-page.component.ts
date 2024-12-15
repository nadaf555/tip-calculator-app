import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './input-page.component.html',
  styleUrl: './input-page.component.css'
})
export class InputPageComponent {
  costOfService!: number;
  tipPercentage!: number;
  roundUpTip: boolean = false;

  constructor(private router: Router) {}

  calculateTip() {
    this.router.navigate(['/output'], {
      state: {
        costOfService: this.costOfService,
        tipPercentage: this.tipPercentage,
        roundUpTip: this.roundUpTip
      }
    });
  }
}
