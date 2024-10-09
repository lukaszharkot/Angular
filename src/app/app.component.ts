import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
