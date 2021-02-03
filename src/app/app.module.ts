import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {CarsComponent} from './components/cars/cars.component';
import {HomeComponent} from './components/home/home.component';
import {CarComponent} from './components/car/car.component';
import { FullCarComponent } from './components/full-car/full-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    HomeComponent,
    CarComponent,
    FullCarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'cars', component: CarsComponent, children: [
          {path: ':id', component: FullCarComponent}
        ]
      },
      {
        path: '', component: HomeComponent
      },
      {
        path: 'home', component: HomeComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
