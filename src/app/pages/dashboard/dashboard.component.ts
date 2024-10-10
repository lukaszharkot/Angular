import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  customers = [];

  revenue = this.getRandomNumber(1000.00, 40000.00).toFixed(2); //is this a string?
  subscriptions =  Math.floor(this.getRandomNumber(100, 2000));
  sales =  Math.floor(this.getRandomNumber(1000, 10000));
  active =  Math.floor(this.getRandomNumber(100, 600));

  //function?? that generates random numbers i
  getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
