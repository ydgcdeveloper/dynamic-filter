import { Injectable } from '@angular/core';
import { PRODUCTS_DATA } from '../data/data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProducts() {
    return of(PRODUCTS_DATA);
  }
}
