import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Car } from '../car.model';
import { CarsStore } from '../stores/cars.store';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarComponent implements OnInit {
  @Input()
  car: Car;

  constructor(private service: CarsStore) {}

  ngOnInit() {}

  onDelete() {
    this.service.deleteCar(this.car);
  }

  onBuy() {
    this.car.isSold = true;
    this.service.updateCar(this.car);
  }
}
