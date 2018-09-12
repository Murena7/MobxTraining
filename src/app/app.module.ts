import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarComponent } from './car/car.component';
import { CarsStore } from './stores/cars.store';
import { CarsService } from './cars.service';

@NgModule({
  declarations: [AppComponent, CarsFormComponent, CarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MobxAngularModule,
  ],
  providers: [CarsStore, CarsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
