import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';
import { Car } from '../car.model';
import { CarsStore } from '../stores/cars.store';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsFormComponent implements OnInit {
  carName = '';
  carModel = '';

  constructor(private carsStore: CarsStore) {}

  ngOnInit() {}

  onAdd() {
    if (this.carModel === '' || this.carName === '') {
      return;
    }
    const date = moment().format('DD.MM.YYYY');
    const car = new Car(
      this.carName,
      date,
      this.carModel
    );

    this.carsStore.addCar(car);
    this.carName = '';
    this.carModel = '';
  }

  onLoad() {
    this.carsStore.loadCars();
  }
}
