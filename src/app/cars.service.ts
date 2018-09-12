import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Car } from './car.model';
import { Observable } from 'rxjs';

@Injectable()
export class CarsService {

  static BASE_URL = 'http://localhost:3000/';

  constructor(private http: Http) {}

  loadCarsMobx(): Observable<Car[]> {
    return this.http.get(CarsService.BASE_URL + 'cars').pipe(
    map((res: Response) => res.json()));
  }

  addCarMobx(car: Car): Observable<Car> {
    return this.http.post(CarsService.BASE_URL + 'cars', car).pipe(
      map((res: Response) => res.json()));
  }

  deleteCarMobx(car: Car): Observable<Car> {
    return this.http.delete(CarsService.BASE_URL + 'cars/' + car.id).pipe(
      map((res: Response) => res.json()));
  }

  updateCarMobx(car: Car): Observable<Car> {
    return this.http.put(CarsService.BASE_URL + 'cars/' + car.id, car).pipe(
      map((res: Response) => res.json())
    );
  }
}
