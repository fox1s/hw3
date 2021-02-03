import { Component, OnInit } from '@angular/core';
import {teslaCars} from '../../../DB/carsDB';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars = teslaCars;
  constructor() { }

  ngOnInit(): void {
  }

}
