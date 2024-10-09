import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { fromEvent, map, scan, startWith } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'id-navbar',
  standalone: true,
  imports: [NgClass],
  template: `<id-navbar [site]="'dashboard'"></id-navbar>`,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements  AfterViewInit, OnInit {
  displayValue = 'ŁH';  // initial display value
  @ViewChild('clickButton') clickButton!: ElementRef<HTMLButtonElement>; // reference to the button in the html file
  @Input() site?: string; // ? means its optional

  ngOnInit() {
    // OnInit is a lifecycle hook. It exists to perform any necessary initialization logic for the component. This can include fetching data, setting up initial values,
    // and subscribing to services. Its usefull When you need to initialize properties or make API calls to set up data that your component will use.
    // So it works when I am initializing an element.
  }

  ngAfterViewInit() {
    // AfterViewInit is a lifecycle hook that is called after Angular has fully initialized a component's view. Used to perform actions that depend on the component’s view 
    // being fully initialized. Needed when you need to perform operations that require the view to be fully rendered (e.g., manipulating DOM elements)
    // So it helps rerender the element when it neeeds to change after initializing.

    const buttonClick = fromEvent(this.clickButton.nativeElement, 'click'); // listen for clicks of the button that we are refrencing in line 13

    // RxJS - start
    //A pipe is a function that takes an observable as input and returns a new observable. You can think of it as a way to transform or filter the data flowing through the observable stream.
    const counter = buttonClick.pipe(
      startWith(null), // function that tells the pipe to start on null - initial value
      scan((acc: number | null) => (acc === null ? 0 : (acc < 9 ? acc + 1 : 0)), null), // acc can be a number or a null. If its a null (or in this case "ŁH") it is a 0. If its lower then nine on click add 1 till after 9 - then it goes back to 0;
      map(value => (value === 0 ? 'ŁH' : value?.toString())) // If the value of the number is 0 change it back to a string - "ŁH"
    );

    //An observable is a data structure provided by RxJS that represents a stream of data over time. It can emit multiple values (or events) and allows you to react to those changes.
    //To receive notifications from an observable, you need to subscribe to it. Subscribing is how you tell the observable to start sending you data, and it allows you to define how to handle the data it emits
    // Subscribe to the counter observable
    //The subscribe() method is called on the observable. This starts the flow of data and allows you to react to new values emitted by the observable.
    //Inside the subscribe() method, you provide a function that will be executed each time the observable emits a new value.
    counter.subscribe(value => {
      this.displayValue = value!; // Update display value, using non-null assertion
    });
  }
}
