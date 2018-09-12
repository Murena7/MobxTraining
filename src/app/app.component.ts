import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CarsStore } from './stores/cars.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  constructor(public carsStore: CarsStore) {

  }

  ngOnInit() {

  }
}
