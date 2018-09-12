import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';

@Injectable()
export class CarsStore {
  @observable carStore: Car[];

  constructor(private carsService: CarsService) {}

  @action
  loadCars() {
    this.carsService.loadCarsMobx().subscribe(
      (cars: Car[]) => {
        this.carStore = cars;
      }
    );
  }

  @action
  addCar(car: Car) {
    this.carsService.addCarMobx(car).subscribe(
      (resCar: Car) => {
        this.loadCars();
        this.carStore.push(resCar);
      }
    );
  }

  @action
  deleteCar(car: Car) {
    this.carsService.deleteCarMobx(car).subscribe(
      () => {
        this.carStore = this.carStore.filter(c => c.id !== car.id);
      }
    );
  }

  @action
  updateCar(car: Car) {
    this.carsService.updateCarMobx(car).subscribe(
      () => {
        this.loadCars();
      }
    );
  }

 }
